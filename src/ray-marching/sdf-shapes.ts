import { makeMap } from "../common";
import { SdfParameter } from "./sdf-parameters";

export interface SdfShapeInfo
{
    readonly id: string;
    readonly name: string;
    readonly funcName: string;
    readonly params: SdfParameter[];
}

export const sdfShapes: ReadonlyArray<SdfShapeInfo> = [
    {
        id: 'sphere',
        name: 'Sphere',
        funcName: 'sdfSphere',
        params: [ { name: 'Radius', type: 'input' } ]
    },
    {
        id: 'box',
        name: 'Box',
        funcName: 'sdfBox',
        params: [
            { name: 'X', type: 'input' },
            { name: 'Y', type: 'input' },
            { name: 'Z', type: 'input' },
        ]
    },
    {
        id: 'hexPrism',
        name: 'Hex Prism',
        funcName: 'sdfHexPrism',
        params: [
            { name: 'Radius', type: 'input' },
            { name: 'Depth', type: 'input' },
        ]
    },
    {
        id: 'torus',
        name: 'Torus',
        funcName: 'sdfTorus',
        params: [
            { name: 'Major Radius', type: 'input' },
            { name: 'Minor Radius', type: 'input' },
        ]
    },
    {
        id: 'octahedron',
        name: 'Octahedron',
        funcName: 'sdfOctahedron',
        params: [ { name: 'Size', type: 'input' } ]
    },
    {
        id: 'cylinder',
        name: 'Cylinder',
        funcName: 'sdfCappedCylinder',
        params: [
            { name: 'Radius', type: 'input' },
            { name: 'Height', type: 'input' },
        ]
    },
    {
        id: 'icosahedron',
        name: 'Icosahedron',
        funcName: 'sdfIcosahedron',
        params: [
            { name: 'Radius', type: 'input' },
        ]
    },
    {
        id: 'mandelbulb',
        name: 'Mandelbulb',
        funcName: 'sdfMandelbulb',
        params: [
            { name: 'Iterations', type: 'input', default: 4, min: 0, max: 5, step: 1 },
            { name: 'Scale', type: 'input' },
        ]
    },
];

export const sdfShapesMap: { readonly [key: string]: SdfShapeInfo } = makeMap(sdfShapes, (i) => i.id);