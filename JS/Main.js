import * as THREE from 'three';
import { renderer, scene } from './ThreeJS.js';
import { cameraHandler, camera } from './CameraHandler.js';
import { Cube } from './Cube.js';
import { Lighting } from './Lighting.js';
import { MainModel } from './MainModel.js';

class Main {

    constructor() {
        this.init();
    }

    async init() {

        //Add things to scene.
        scene.add(new Cube());
        scene.add(new Lighting());
        
        //Will be added when loaded.
        scene.add(await new MainModel());
        //
    }

    animate() {
        requestAnimationFrame(() => {

            cameraHandler.updateCamera();
            renderer.render(scene, camera);
            this.animate();
        });
    }
}

let _APP = new Main();
