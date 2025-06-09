import { h, Component, Fragment } from "preact";
import { AppState, setNodes, setRootNode } from "../store/store-state";
import { WebGLViewport } from "./webgl-viewport";
import "./webgl-app.scss"
import { makeShapeNodeId, SdfOpCode, SdfScene, Shape, ShapeNode, ShapeNodes } from "../ray-marching/sdf-scene";
import { quatIdentity, vec3Zero } from "../gl-matrix-ts";
import SceneGraph from "./scene-graph";
import { store } from "../store/store";

interface Props
{
    readonly state: AppState;
}

const sdfScene = new SdfScene();
store.subscribe(state => state.nodes, updateFromStoreChange);
store.subscribe(state => state.rootNodeId, updateFromStoreChange);

function updateFromStoreChange(state: AppState)
{
    sdfScene.updateShapesFromRootNode(state.rootNodeId, state.nodes);
}

export class WebGLApp extends Component<Props>
{
    public render()
    {
        const { viewports, rootNodeId, selectedNodeId, nodes } = this.props.state;
        console.log('App render', this.props.state);

        return <Fragment>
            {/* <nav class="navbar outer-panel">
                <button>File</button>
            </nav> */}

            <div class="main-view">
                <div class="viewports">
                    <WebGLViewport viewportIndex={0} options={viewports[0].options} sdfScene={sdfScene} />
                </div>
                <SceneGraph sdfScene={sdfScene} rootNodeId={rootNodeId} selectedNodeId={selectedNodeId} nodes={nodes} />
            </div>
        </Fragment>
    }
}

function createNewShape(shape: Partial<Shape>): Shape
{
    return {
        position: vec3Zero(),
        rotation: quatIdentity(),
        maxSize: 0,
        type: "none",
        shapeParams: vec3Zero(),
        diffuseColour: { x: 0.7, y: 0.3, z: 0.2, w: 1.0 },
        specularColour: { x: 1.0, y: 0.8, z: 0.9, w: 1.0 },

        ...shape
    };
}

function createNewShapeNode(name: string, shape?: Partial<Shape>, childOpCode?: SdfOpCode): ShapeNode
{
    return {
        name,
        id: makeShapeNodeId(),
        shape: shape != undefined ? createNewShape(shape) : undefined,
        childOpCode
    }
}

function addChild(parent: ShapeNode, child: ShapeNode)
{
    if (parent.childrenIds == undefined)
    {
        parent.childrenIds = [];
    }
    parent.childrenIds.push(child.id);
}

function makeNodeMap(...nodes: ShapeNode[])
{
    const result: ShapeNodes = {};
    for (const node of nodes)
    {
        result[node.id] = node;
    }
    return result;
}

function loadDefaultSdfScene()
{
    // const defaultRootNode: ShapeNode = {
    //     name: 'Root',
    //     children: [
    //         {
    //             name: 'Root',
    //             childOpCode: "subtraction",
    //             children: [
    //                 {
    //                     name: 'Hex Prism',
    //                     shape: SdfScene.createNewShape({
    //                         type: 'hexPrism',
    //                         shapeParams: {x: 0.75, y: 2, z: 0},
    //                         maxSize: 1.5
    //                     })
    //                 },
    //                 {
    //                     name: 'Box & Sphere',
    //                     childOpCode: "union",
    //                     children: [
    //                         {
    //                             name: 'Sphere',
    //                             shape: createNewShape({
    //                                 type: "sphere",
    //                                 shapeParams: { x: 1, y: 2, z: 1 },
    //                                 maxSize: 2.0,
    //                                 diffuseColour: { x: 0.1, y: 0.9, z: 0.2, w: 1.0, },
    //                             }),
    //                         },
    //                         {
    //                             name: 'Box',
    //                             shape: createNewShape({
    //                                 type: "box",
    //                                 shapeParams: { x: 6, y: 1, z: 6 },
    //                                 position: { x: 0, y: -1.5, z: 0 },
    //                                 diffuseColour: { x: 0.2, y: 0.25, z: 0.3, w: 1.0, },
    //                             }),
    //                         },
    //                     ],
    //                 },
    //             ],
    //         },
    //     ]
    // }
    const rootNode = createNewShapeNode('Root', null, 'subtraction');
    const hexPrism = createNewShapeNode('Hex Prism', {
        type: 'hexPrism',
        shapeParams: {x: 0.75, y: 2, z: 0},
        maxSize: 1.5
    });
    const boxAndSphere = createNewShapeNode('Box & Sphere', null, 'union');

    addChild(rootNode, hexPrism);
    addChild(rootNode, boxAndSphere);

    const box = createNewShapeNode('Box', {
        type: "box",
        shapeParams: { x: 6, y: 1, z: 6 },
        position: { x: 0, y: -1.5, z: 0 },
        diffuseColour: { x: 0.2, y: 0.25, z: 0.3, w: 1.0, },
    });
    const sphere = createNewShapeNode('Sphere', {
        type: "sphere",
        shapeParams: { x: 1, y: 2, z: 1 },
        maxSize: 2.0,
        diffuseColour: { x: 0.1, y: 0.9, z: 0.2, w: 1.0, },
    })
    addChild(boxAndSphere, box);
    addChild(boxAndSphere, sphere);

    const nodes = makeNodeMap(rootNode, hexPrism, boxAndSphere, box, sphere);

    store.execute(setRootNode(rootNode.id));
    store.execute(setNodes(nodes));

    sdfScene.setLight(0, {
        position: {x: 4, y: 2, z: 3},
        colour: {x: 1.0, y: 0.8, z: 0.6, w: 1}
    });
    sdfScene.setLight(1, {
        position: {x: -4, y: 2, z: 3},
        colour: {x: 0.2, y: 1.0, z: 0.6, w: 1}
    });
}

loadDefaultSdfScene();