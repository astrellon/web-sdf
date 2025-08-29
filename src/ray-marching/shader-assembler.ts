import { vec3 } from "gl-matrix";
import { Light, SceneNode, SceneNodeId, SdfOpCode, Shape } from "./scene-entities";
import { SceneTree } from "./scene-tree";
import { vec3ApproxEquals } from "../math";

export type SceneNode2Type = 'unknown' | 'shape' | 'operation' | 'light';
export type OperationType = 'unknown' | 'union' | 'subtraction' | 'intersection';

export function createShader(tree: SceneTree): string
{
    const rootNode = tree.nodes[tree.rootNodeId];

    const assembler = new ShaderAssembler();
    assembler.processNode(tree, rootNode);

    return assembler.getFinal();
}

function makeFloatStr(input: number)
{
    let result = input.toString();
    if (result.indexOf('.') < 0)
    {
        result += '.0';
    }
    return result;
}

const vec3Zero = vec3.create();

class ShaderAssembler
{
    public result: string = '';
    private firstItem = true;

    public startFunction(name: string)
    {
        this.writeValue(name + '(');
        this.firstItem = true;
    }
    public endFunction()
    {
        this.result += ')';
    }

    public writeValue(value: any)
    {
        if (!this.firstItem)
        {
            this.result += ', ';
        }

        if (typeof(value) === 'number')
        {
            this.result += makeFloatStr(value);
        }
        else
        {
            this.result += value;
        }
        this.firstItem = false;
    }

    public getFinal()
    {
        return `return ${this.result};`;
    }

    public processNode(tree: SceneTree, node: SceneNode)
    {
        if (node.shape != undefined && node.shape.type !== 'none')
        {
            this.startFunction('vec2');
            this.processShape(node, node.shape);
            this.writeValue(0);
            this.endFunction();
        }
        else if (node.childOpCode !== 'none')
        {
            let numChildren = 0;
            for (const childId of node.childrenIds)
            {
                const child = tree.nodes[childId];
                if (child.hasShape || child.childOpCode !== 'none')
                {
                    numChildren++;
                }
            }

            if (numChildren === 1)
            {
                this.processNode(tree, tree.nodes[node.childrenIds[0]]);
            }
            else if (numChildren > 1)
            {
                this.processOperation(tree, node.childrenIds, node.childOpCode);
            }
        }
    }

    public processOperation(tree: SceneTree, children: ReadonlyArray<SceneNodeId>, opCode: SdfOpCode)
    {
        if (opCode === 'union')
        {
            const child1 = tree.nodes[children[0]];
            const child2 = tree.nodes[children[1]];

            this.startFunction('opUnion');
            this.processNode(tree, child1);
            this.processNode(tree, child2);
            this.endFunction();
        }
        else if (opCode === 'intersection')
        {
            const child1 = tree.nodes[children[0]];
            const child2 = tree.nodes[children[1]];

            this.startFunction('opIntersection');
            this.processNode(tree, child1);
            this.processNode(tree, child2);
            this.endFunction();
        }
        else if (opCode === 'subtraction')
        {
            const child1 = tree.nodes[children[0]];
            const child2 = tree.nodes[children[1]];

            this.startFunction('opSubtraction');
            this.processNode(tree, child1);
            this.processNode(tree, child2);
            this.endFunction();
        }
        else
        {
            console.error('Unknown operation', opCode);
        }
    }

    public processShape(node: SceneNode, shape: Shape)
    {
        if (shape.type === 'box')
        {
            this.startFunction('sdfBox');
            this.writePoint(node);

            this.startFunction('vec3');
            this.writeValue(shape.shapeParams[0]);
            this.writeValue(shape.shapeParams[1]);
            this.writeValue(shape.shapeParams[2]);
            this.endFunction();

            this.endFunction();
        }
        else if (shape.type === 'sphere')
        {
            this.startFunction('sdfSphere');
            this.writePoint(node);
            this.writeValue(shape.shapeParams[0]);
            this.endFunction();
        }
        else if (shape.type === 'hexPrism')
        {
            this.startFunction('sdfHexPrism');
            this.writePoint(node);

            this.startFunction('vec2');
            this.writeValue(shape.shapeParams[0]);
            this.writeValue(shape.shapeParams[1]);
            this.endFunction();

            this.endFunction();
        }
        else
        {
            console.error('Unknown shape', shape);
        }
    }

    private writePoint(node: SceneNode)
    {
        if (vec3ApproxEquals(node.position, vec3Zero))
        {
            this.writeValue('point');
        }
        else
        {
            const p = node.position;
            this.writeValue(`vec3(${makeFloatStr(p[0])}, ${makeFloatStr(p[1])}, ${makeFloatStr(p[2])}) - point`);
        }
    }

}
