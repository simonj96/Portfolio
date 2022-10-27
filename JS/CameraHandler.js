import * as THREE from 'three';
import { mouse } from './Events.js';

export class CameraHandler {

    camera;
    vector3 = new THREE.Vector3();
    lookAtTarget = new THREE.Vector3(0, 3.5, 0);
    fov = 50;
    clock = new THREE.Clock();
    mouse;
    radius = 4;
    enableUpdate = true;
    curve;
    points;

    constructor() {

        this.mouse = mouse;
        this.camera = new THREE.PerspectiveCamera(this.fov, window.innerWidth / window.innerHeight, 0.01, 1000);

    }

    get camera() {
        return this.camera;
    }

    updateCamera() {
        if (!this.enableUpdate) {
            console.log("blocking");
            return;
        }
        //Update Camera        
        this.delta = this.clock.getDelta();
        this.CameraBehaviour();
    }

    CameraBehaviour() {


        const theta = (this.mouse.x + window.innerWidth / 3) / (window.innerWidth * 2);

        this.vector3.y = 4 + this.radius / 7.5;

        this.vector3.x = this.radius * Math.sin(theta * Math.PI - Math.PI / 2);

        this.vector3.z = this.radius * Math.cos(theta * Math.PI - Math.PI / 2);

        this.lerpCamera();
        this.camera.lookAt(this.lookAtTarget);

    }

    lerpCamera() {
        this.camera.position.lerp(this.vector3, 0.05 * 1 + this.delta);
    }
}

export let cameraHandler = new CameraHandler();
export let camera = cameraHandler.camera;