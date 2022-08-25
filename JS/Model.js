import { GLTFLoader } from 'https://unpkg.com/three@0.143.0/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from 'three';

export class Model {

    loadingManager;
    model;
    scene;

    constructor(scene) {
        this.scene = scene;
        this.loadingManager = new THREE.LoadingManager();
        this.loadingManager.onProgress = function (item, loaded, total) {
            console.log("Progress Update: " + item, loaded, total);
        };

        this.loadingManager.onLoad = function () {
            console.log("Finished loading all resources.");

        };
        this.loadModels();

    }

    //Load models
    async loadModels() {
        const loader = new GLTFLoader();
        const url = '/models/composition3.glb';
        const data = await loader.loadAsync(url);
        const mesh = await this.SetupModel(data);
        this.scene.add(mesh);
    }

    async SetupModel(gltf) {
        const mesh = gltf.scene;
        const s = 1;
        mesh.scale.set(s, s, s);

        return mesh;
    }

}

