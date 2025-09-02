import { h, Component, Fragment } from 'preact';
import ShapeView from './shape-view';
import { Light, SceneNode, SdfOpCode, Shape } from '../ray-marching/scene-entities';
import VectorView from './vector-view';
import LightView from './light-view';
import { createSceneNode, SceneTree, sceneTreeAddChild, sceneTreeDeleteChild } from '../ray-marching/scene-tree';
import { setReparentModal, setSceneTree } from '../store/store-state';
import { store } from '../store/store';
import { quat, vec3 } from 'gl-matrix';
import { LabelledRange } from './labelled-range';
import './scene-node-view.scss';

interface Props
{
    readonly sceneTree: SceneTree;
    readonly node: SceneNode;
    readonly onChange: (newShapeNode: SceneNode, oldShapeNode: SceneNode) => void;
}

interface State
{
    readonly show: boolean;
}

export default class SceneNodeView extends Component<Props, State>
{
    constructor()
    {
        super();
        this.state = {
            show: false
        }
    }

    public render()
    {
        const { node, sceneTree } = this.props;
        if (node == undefined)
        {
            return <div class="scene-node-view">
                No node selected
            </div>
        }

        const parent = node.parentId != undefined ? sceneTree.nodes[node.parentId] : undefined;
        const selectedOpCode = node.childOpCode ?? 'none';
        const operationParams = node.operationParams;

        return <div class="scene-node-view">
            <div>
                <strong>Name</strong> <input class='input' type='text' placeholder='Name' value={node.name} onChange={this.onChangeName} />
            </div>
            <div>
                <strong>Position</strong> <VectorView vector={node.position} onChange={this.onChangePosition} />
            </div>
            <div>
                <strong>Rotation</strong> <VectorView vector={node.rotation} onChange={this.onChangeRotation} />
            </div>
            <div>
                <strong>Op Code</strong> <select value={selectedOpCode} onChange={this.onChangeOpCode}>
                    <option value='none'>None</option>
                    <option value='union'>Union</option>
                    <option value='intersection'>Intersection</option>
                    <option value='subtraction'>Subtraction</option>
                    <option value='xor'>Xor</option>
                    <option value='smoothUnion'>Smooth Union</option>
                    <option value='smoothIntersection'>Smooth Intersection</option>
                    <option value='smoothSubtraction'>Smooth Subtraction</option>
                </select>
            </div>
            <div>
                <LabelledRange label={`Operation Param ${operationParams}`} inputProps={{value: operationParams, min: 0, max: 10, step: 0.1, onInput: this.changeOperationParam}} />
            </div>
            <div>
                <strong>Shape</strong> <button onClick={this.toggleShape}>{node.hasShape ? 'Hide' : 'Show'}</button>
                { node.hasShape && <ShapeView shape={node.shape} onChange={this.onChangeShape} /> }
            </div>
            <div>
                <strong>Light</strong> <button onClick={this.toggleLight}>{node.hasLight ? 'Hide' : 'Show'}</button>
                { node.hasLight && <LightView light={node.light} onChange={this.onChangeLight} /> }
            </div>

            <div><strong>Children</strong></div>
            <div class='control-group'>
                <button onClick={this.addChild}>Add</button>
                { parent != null &&
                <Fragment>
                    <button onClick={this.deleteSelf}>Delete</button>
                    <button onClick={this.reparent}>Re-parent</button>
                </Fragment>}
            </div>
        </div>
    }

    private addChild = () =>
    {
        const newTree = sceneTreeAddChild(this.props.sceneTree, this.props.node, createSceneNode('New Child', {}));
        store.execute(setSceneTree(newTree));
    }

    private deleteSelf = () =>
    {
        const newTree = sceneTreeDeleteChild(this.props.sceneTree, this.props.node);
        store.execute(setSceneTree(newTree));
    }

    private reparent = () =>
    {
        const { node, sceneTree } = this.props;
        const parent = node.parentId != undefined ? sceneTree.nodes[node.parentId] : undefined;
        if (parent == null)
        {
            console.warn('Cannot reparent root node');
            return;
        }

        store.execute(
            setReparentModal({
                show: true,
                childNodeId: this.props.node.id
            })
        );
    }

    private changeOperationParam = (e: Event) =>
    {
        const value = parseFloat((e.target as HTMLInputElement).value);
        if (!isFinite(value))
        {
            console.warn(`Operation param parse failed`);
            return;
        }

        this.updateField(value, 'operationParams');
    }

    private toggleShape = () =>
    {
        const currentHasShape = this.props.node.hasShape;
        this.updateField(!currentHasShape, 'hasShape');
    }

    private toggleLight = () =>
    {
        const currentHasLight = this.props.node.hasLight;
        this.updateField(!currentHasLight, 'hasLight');
    }

    private onChangeName = (e: Event) =>
    {
        const value = (e.target as HTMLInputElement).value;
        this.updateField(value, 'name');
    }

    private onChangePosition = (oldVec: vec3, newVec: vec3) =>
    {
        this.updateField(newVec, 'position');
    }

    private onChangeRotation = (oldQuat: quat, newQuat: quat) =>
    {
        this.updateField(newQuat, 'rotation');
    }


    private onChangeOpCode = (e: Event) =>
    {
        const value = (e.target as HTMLSelectElement).value as SdfOpCode;
        this.updateField(value, 'childOpCode');
    }

    private onChangeShape = (shape: Shape) =>
    {
        this.updateField(shape, 'shape');
    }

    private onChangeLight = (light: Light) =>
    {
        this.updateField(light, 'light');
    }

    // private onChangeChild = (index: number, child: SceneNode) =>
    // {
    //     const children = this.props.node.children !== undefined ? [...this.props.node.children] : [];
    //     children[index] = child;

    //     this.updateField(children, 'children');
    // }

    private updateField = (value: any, field: keyof SceneNode) =>
    {
        console.log('Update shape node', field, value);
        const newNode = {...this.props.node, [field]: value};
        this.props.onChange(newNode, this.props.node);
    }
}