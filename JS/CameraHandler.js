import * as THREE from 'three';
import { mouse } from './Events.js';
import { display } from './Display.js';
export class CameraHandler {

    camera;
    targetPosition = new THREE.Vector3();
    startingPosition = new THREE.Vector3();
    clock = new THREE.Clock();

    fov = 40;
    radius = 0;
    enable = true;
    curve;
    points;

    constructor() {
        this.mouse = mouse;

        if (window.innerWidth < 440 || screen.width < 440) {
            console.log("this happened")
            this.fov = 120;
        }
        this.camera = new THREE.PerspectiveCamera(this.fov, window.innerWidth / window.innerHeight, 0.01, 1000);

        this.targetPosition.copy(display.mesh.position);
        this.startingPosition.copy(display.mesh.position);
        //starting offsets
        this.startingPosition.x -= 0.26;
        this.startingPosition.y -= 0;
        this.startingPosition.z += 1.3;

    }

    get camera() {
        return this.camera;
    }

    updateCamera() {

        //Update Camera        
        this.delta = this.clock.getDelta();
        this.CameraBehaviour();
    }

    CameraBehaviour() {

        const offset = Math.PI * 1.8;

        const theta = (this.mouse.x) / (window.innerWidth) * Math.PI / 5 + offset;


        if (this.enable) {
            this.targetPosition.y = this.radius / 7.5 + this.startingPosition.y;

            this.targetPosition.x = this.radius * Math.sin(theta) + this.startingPosition.x;

            this.targetPosition.z = this.radius * Math.cos(theta) + this.startingPosition.z;
        }

        this.lerpCamera();
        this.camera.lookAt(display.mesh.position);

        this.camera.fov = this.fov + this.radius * 3;

    }

    lerpCamera() {
        this.camera.position.lerp(this.targetPosition, 0.05 * 1 + this.delta);
    }
}

export let cameraHandler = new CameraHandler();
export let camera = cameraHandler.camera;