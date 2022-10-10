import * as THREE from 'three';
import { renderer, scene } from './ThreeJS.js';
import { camera, cameraHandler } from './CameraHandler.js';

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
        this.animate()
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