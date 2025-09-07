import { h, Component, Fragment } from 'preact';
import ShapeView from './shape-view';
import { Light, SceneNode, SceneNodeType, SdfOpCode, SelfSdfOpCode, Shape } from '../ray-marching/scene-entities';
import VectorView from './vector-view';
import LightView from './light-view';
import { createSceneNode, SceneTree, sceneTreeAddChild, sceneTreeDeleteChild } from '../ray-marching/scene-tree';
import { setReparentModal, setSceneTree } from '../store/store-state';
import { store } from '../store/store';
import { LabelledRange } from './labelled-range';
import { rvec3 } from '../math';
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
        const selectedChildOpCode = node.childOpCode ?? 'none';
        const selectedSelfOpCode = node.selfOpCode ?? 'none';
        const operationParams = node.operationParams;

        return <div class="scene-node-view">
            <div>
                <strong>Name</strong> <input class='input' type='text' placeholder='Name' value={node.name} onChange={this.onChangeName} />
            </div>
            <div>
                <strong>Type</strong>
                <select value={node.type} onChange={this.onChangeType}>
                    <option value='none'>None</option>
                    <option value='shape'>Shape</option>
                    <option value='light'>Light</option>
                    <option value='operation'>Operation</option>
                </select>
            </div>

            { node.type === 'shape' &&
            <Fragment>
            <div>
                <strong>Position</strong> <VectorView value={node.position} onChange={this.onChangePosition} />
            </div>
            <div>
                <strong>Rotation</strong> <VectorView value={node.rotation} onChange={this.onChangeRotation} />
            </div>
            <div>
                <strong>Self Op Code</strong> <select value={selectedSelfOpCode} onChange={this.onChangeSelfOpCode}>
                    <option value='none'>None</option>
                    <option value='repeatDomain'>Repeat Domain</option>
                </select>
            </div>
            <div>
                <LabelledRange label={`Operation Param ${operationParams}`} inputProps={{value: operationParams, min: 0, max: 10, step: 0.1, onInput: this.changeOperationParam}} />
            </div>
            <div>
                <strong>Shape</strong>
                <ShapeView shape={node.shape} onChange={this.onChangeShape} />
            </div>
            </Fragment> }

            { node.type === 'light' &&
            <Fragment>
            <div>
                <strong>Position</strong> <VectorView value={node.position} onChange={this.onChangePosition} />
            </div>
            <div>
                <strong>Rotation</strong> <VectorView value={node.rotation} onChange={this.onChangeRotation} />
            </div>

            <div>
                <strong>Light</strong>
                <LightView light={node.light} onChange={this.onChangeLight} />
            </div>
            </Fragment> }

            { node.type === 'operation' &&
            <Fragment>
            <div>
                <strong>Child Op Code</strong> <select value={selectedChildOpCode} onChange={this.onChangeChildOpCode}>
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
            <div><strong>Children</strong></div>
            <div class='control-group'>
                <button onClick={this.addChild}>Add</button>
                { parent != null &&
                <Fragment>
                    <button onClick={this.deleteSelf}>Delete</button>
                    <button onClick={this.reparent}>Re-parent</button>
                </Fragment>}
            </div>
            </Fragment> }
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
        const value = (e.target as HTMLInputElement).valueAsNumber;
        if (!isFinite(value))
        {
            console.warn(`Operation param parse failed`);
            return;
        }

        this.updateField(value, 'operationParams');
    }

    private onChangeName = (e: Event) =>
    {
        const value = (e.target as HTMLInputElement).value;
        this.updateField(value, 'name');
    }

    private onChangePosition = (oldVec: rvec3, newVec: rvec3) =>
    {
        this.updateField(newVec, 'position');
    }

    private onChangeRotation = (oldVec: rvec3, newVec: rvec3) =>
    {
        this.updateField(newVec, 'rotation');
    }

    private onChangeType = (e: Event) =>
    {
        const value = (e.target as HTMLSelectElement).value as SceneNodeType;
        this.updateField(value, 'type');
    }

    private onChangeSelfOpCode = (e: Event) =>
    {
        const value = (e.target as HTMLSelectElement).value as SelfSdfOpCode;
        this.updateField(value, 'selfOpCode');
    }

    private onChangeChildOpCode = (e: Event) =>
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

    private updateField = (value: any, field: keyof SceneNode) =>
    {
        console.log('Update shape node', field, value);
        const newNode = {...this.props.node, [field]: value};
        this.props.onChange(newNode, this.props.node);
    }
}