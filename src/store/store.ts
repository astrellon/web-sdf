import DataStore from 'simple-data-store';
import { AppState, ViewportOptions, ViewportState } from './store-state';
import { Camera } from '../ray-marching/camera';

export const defaultRenderOptions: ViewportOptions = {
    renderScale: 1.0,
    maxMarchingStep: 512,
    enableShadows: true,
    enableShowMarching: false,
    enableDepth: false,
    enableNormals: false,
    enableSoftShadows: true,
    epsilon: 0.0001,
    shadowSharpness: 128.0,
    pixelated: false,
    cameraFov: 45.0,
    cameraMove: 'orbit'
}
export const defaultViewport: ViewportState = {
    options: defaultRenderOptions,
    shader: {
        text: 'return vec2(100.0, -1.0);',
        numLights: 0,
        numMaterials: 0,
        numParameters: 0
    }
}
export const store = new DataStore<AppState>({
    viewports: [defaultViewport],
    maximiseViewport: -1,
    sceneTree: {
        nodes: {}
    },
    reparentModal: {
        show: false
    },
    rawSceneModal: {
        show: false,
    },
    exampleModal: {
        show: false
    },
    infoModal: {
        show: false
    }
});

export const cameras: Camera[] = [
    new Camera()
];