//import Stats from 'https://cdn.skypack.dev/three@0.133/examples/jsm/libs/stats.module.js';
import * as THREE from 'three';
import { Renderer } from './Renderer.js';
import { CameraHandler } from './CameraHandler.js';
import { Cube } from './Cube.js';
import { Lighting } from './Lighting.js';
import { Model } from './Model.js';
import { Events } from './Events.js';
import { HTMLHandler } from './HTMLHandler.js';

class Main {

    scene;
    cube;
    controls;
    camera;
    htmlHandler;

    constructor() {
        this.init();
    }

    async init() {

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 1000);

        this.renderer = new Renderer(document.getElementById('three'));
        this.htmlHandler = new HTMLHandler();

        this.events = new Events(this.renderer, this.camera, this.htmlHandler);
        this.cameraHandler = new CameraHandler(this.camera, this.events.mouse);

        //Add things to scene.
        this.scene.add(new Cube());
        this.scene.add(new Lighting());
        new Model(this.scene);

        this.renderer.compile(this.scene, this.camera);
        this.animate();
        //Play animations
    }

    animate() {
        requestAnimationFrame(() => {

            this.cameraHandler.updateCamera();
            this.renderer.render(this.scene, this.camera);
            this.animate();
        });
    }
}

let _APP = new Main();
export let scene = _APP.scene;
export let camera = _APP.camera;