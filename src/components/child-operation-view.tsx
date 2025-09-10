import { h, Component, JSX } from 'preact';
import { ChildOperation, SceneNode, SdfOpCode } from '../ray-marching/scene-entities';
import { createSceneNode, SceneTree, sceneTreeAddChild } from '../ray-marching/scene-tree';
import { setSceneTree } from '../store/store-state';
import { store } from '../store/store';
import { sdfChildOperations, sdfChildOperationsMap } from '../ray-marching/sdf-child-operations';
import ParameterEdit from './parameter-edit';
import { SdfParameter } from '../ray-marching/sdf-parameters';

interface Props
{
    readonly sceneTree: SceneTree;
    readonly node: SceneNode;
    readonly onChange: (newOperation: ChildOperation) => void;
}

const typeSelectOptions = sdfChildOperations.map(s =>
    <option key={s.id} value={s.id}>{s.name}</option>
);

export default class ChildOperationView extends Component<Props>
{
    public render()
    {
        const { node, sceneTree } = this.props;

        const selectedChildOpCode = node.childOperation.type ?? 'none';
        const parent = node.parentId != undefined ? sceneTree.nodes[node.parentId] : undefined;

        return <div>
            <div>
                <strong>Child Op Code</strong> <select value={selectedChildOpCode} onChange={this.onChangeChildOpCode}>
                    <option value='none'>None</option>
                    { typeSelectOptions }
                </select>
            </div>
            <div>
                { this.renderOperationParams() }
            </div>
            <div><strong>Children</strong></div>
            <div class='control-group'>
                <button onClick={this.addChild}>Add</button>
            </div>
        </div>
    }

    private renderOperationParams = () =>
    {
        const result: JSX.Element[] = [];
        const { childOperation } = this.props.node;
        const currentOperationInfo = sdfChildOperationsMap[childOperation.type];
        if (!currentOperationInfo)
        {
            return result;
        }

        for (const paramInfo of currentOperationInfo.params)
        {
            result.push(<ParameterEdit key={paramInfo.name} parameters={childOperation.params} paramInfo={paramInfo} onChange={this.updateParam} />);
        }

        return result;
    }

    private addChild = () =>
    {
        const newTree = sceneTreeAddChild(this.props.sceneTree, this.props.node, createSceneNode('New Child', {}));
        store.execute(setSceneTree(newTree));
    }

    private updateParam = (value: number, paramInfo: SdfParameter) =>
    {
        const { node, onChange } = this.props;
        const currentParams = node.childOperation.params;
        const newParams = { ...currentParams, [paramInfo.name]: value };
        onChange({ ...node.childOperation, params: newParams });
    }

    private onChangeChildOpCode = (e: Event) =>
    {
        const { node, onChange } = this.props;
        const value = (e.target as HTMLSelectElement).value as SdfOpCode;
        onChange({ ...node.childOperation, type: value });
    }
}