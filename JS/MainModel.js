import { GLTFLoader } from 'https://unpkg.com/three@0.143.0/examples/jsm/loaders/GLTFLoader.js';
import { loader } from './Loader.js';
import * as THREE from 'three';

export class MainModel {

    model;

    constructor() {

        this.loader = loader;
        return this.loadModels();

    }

    //Load models
    async loadModels() {
        const gltfloader = new GLTFLoader(loader);
        const url = '/models/alt3fix.glb';
        const data = await gltfloader.loadAsync(url);
        const mesh = await this.SetupModel(data);
        return mesh;
    }

    async SetupModel(gltf) {
        const mesh = gltf.scene;
        mesh.traverse((o) => {
            if (!o.isMesh) return;
            o.material.roughness = 1;
            o.material.metalness = 0;
            o.material.specular = 0;
            o.material.side = THREE.DoubleSide;

        });

        const s = 3;
        mesh.scale.set(s, s, s);

        mesh.position.set(0, 0, 0);
        return mesh;
    }
}
