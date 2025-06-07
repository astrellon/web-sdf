import { h, Component } from 'preact';
import { ShapeNode } from '../ray-marching/sdf-scene';
import { setSelectedNode } from '../store/store-state';
import { store } from '../store/store';
import './shape-node-tree.scss';

interface Props
{
    readonly node: ShapeNode;
    readonly selectedNode?: ShapeNode;
    readonly depth: number;
}

export default class ShapeNodeTree extends Component<Props>
{
    public render()
    {
        const { node, depth, selectedNode } = this.props;
        const children = node.children || [];
        let className = 'shape-node-tree__label';
        if (selectedNode === node)
        {
            className += ' shape-node-tree__label--selected';
        }

        return <div class='shape-node-tree' style={{'paddingLeft': depth * 0.5 + 'rem'}}>
            <strong class={className} onClick={this.selectNode}>{(depth > 0 ? '- ' : '') + node.name}</strong>
            <div>
                { children.map((child, index) => <ShapeNodeTree key={index} node={child} depth={depth + 1} selectedNode={selectedNode} />) }
            </div>
        </div>
    }

    private selectNode = () =>
    {
        store.execute(setSelectedNode(this.props.node));
    }
}