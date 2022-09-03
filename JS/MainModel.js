import { GLTFLoader } from 'https://unpkg.com/three@0.143.0/examples/jsm/loaders/GLTFLoader.js';
import { loader } from './Loader.js';

export class MainModel {

    model;

    constructor() {
       
        this.loader = loader;
        return this.loadModels();

    }

    //Load models
    async loadModels() {
        const gltfloader = new GLTFLoader(loader);
        const url = '/models/composition3.glb';
        const data = await gltfloader.loadAsync(url);
        const mesh = await this.SetupModel(data);
        return mesh;
    }

    async SetupModel(gltf) {
        const mesh = gltf.scene;
        const s = 1;
        mesh.scale.set(s, s, s);

        return mesh;
    }
}
