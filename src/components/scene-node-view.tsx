import { h, Component, Fragment } from 'preact';
import ShapeView from './shape-view';
import { ChildOperation, Light, SceneNode, SceneNodeType, SelfOperation, Shape } from '../ray-marching/scene-entities';
import VectorView from './vector-view';
import LightView from './light-view';
import { SceneTree, sceneTreeDeleteChild } from '../ray-marching/scene-tree';
import { rvec3 } from '../math';
import ChildOperationView from './child-operation-view';
import SelfOperationView from './self-operation-view';
import { store } from '../store/store';
import { setReparentModal, setSceneTree } from '../store/store-state';
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
            <SelfOperationView selfOperation={node.selfOperation} onChange={this.onChangeSelfOperation} />
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
            <div>
                <strong>Operation</strong>
                <ChildOperationView node={node} sceneTree={sceneTree} onChange={this.onChangeChildOperation} />
            </div> }

            { parent != null &&
            <div class='control-group'>
                <button onClick={this.deleteSelf}>Delete Self</button>
                <button onClick={this.reparent}>Re-parent</button>
            </div>}
        </div>
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

    private onChangeShape = (shape: Shape) =>
    {
        this.updateField(shape, 'shape');
    }

    private onChangeLight = (light: Light) =>
    {
        this.updateField(light, 'light');
    }

    private onChangeSelfOperation = (selfOperation: SelfOperation) =>
    {
        this.updateField(selfOperation, 'selfOperation');
    }

    private onChangeChildOperation = (childOperation: ChildOperation) =>
    {
        this.updateField(childOperation, 'childOperation');
    }

    private updateField = (value: any, field: keyof SceneNode) =>
    {
        console.log('Update shape node', field, value);
        const newNode = {...this.props.node, [field]: value};
        this.props.onChange(newNode, this.props.node);
    }
}