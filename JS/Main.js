import * as THREE from 'three';
import { renderer, scene } from './ThreeJS.js';
import { camera, cameraHandler } from './CameraHandler.js';
import { MainModel } from './MainModel.js';
import { display } from './Display.js';

class Main {

    bool = true;

    constructor() {
        this.init();
    }

    async init() {

        //Will be added when loaded.
        new MainModel();

        scene.add(display.mesh);
        this.animate();
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

Array.from(document.getElementsByClassName("path")).forEach(pathElement => {
    pathElement.setAttribute('style', 'stroke-dasharray:' + pathElement.getTotalLength() + ';stroke-dashoffset:' + pathElement.getTotalLength())
})