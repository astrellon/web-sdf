import { h, Component } from 'preact';
import { ShapeNode, ShapeNodeId, ShapeNodes } from '../ray-marching/sdf-scene';
import { setSelectedNode } from '../store/store-state';
import { store } from '../store/store';
import './shape-node-tree.scss';

interface Props
{
    readonly nodes: ShapeNodes;
    readonly currentNodeId: ShapeNodeId;
    readonly selectedNodeId?: ShapeNodeId;
    readonly depth: number;
}

export default class ShapeNodeTree extends Component<Props>
{
    public render()
    {
        const { nodes, depth, selectedNodeId, currentNodeId } = this.props;
        const node = nodes[currentNodeId];
        const children = node.childrenIds || [];
        let className = 'shape-node-tree__label';
        if (selectedNodeId === currentNodeId)
        {
            className += ' shape-node-tree__label--selected';
        }

        return <div class='shape-node-tree' style={{'paddingLeft': depth * 0.5 + 'rem'}}>
            <strong class={className} onClick={this.selectNode}>{(depth > 0 ? '- ' : '') + node.name}</strong>
            <div>
                { children.map((childId, index) => <ShapeNodeTree key={index} nodes={nodes} currentNodeId={childId} depth={depth + 1} selectedNodeId={selectedNodeId} />) }
            </div>
        </div>
    }

    private selectNode = () =>
    {
        store.execute(setSelectedNode(this.props.currentNodeId));
    }
}