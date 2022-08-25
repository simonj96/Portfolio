import * as THREE from 'three';

export class CameraHandler {

    camera;
    vector3 = new THREE.Vector3();
    lookAtTarget = new THREE.Vector3();
    clock = new THREE.Clock();
    mouse;
    radius = 10;


    constructor(camera, mouse) {

        this.mouse = mouse;
        this.camera = camera;
    }

    get camera() {
        return this.camera;
    }

    updateCamera() {
        //Update Camera        
        this.delta = this.clock.getDelta();
        this.StandardCameraBehaviour();
    }

    StandardCameraBehaviour() {

        const theta = (this.mouse.x + window.innerWidth / 2) / (window.innerWidth * 2);

        this.vector3.y = 5;

        this.vector3.x = this.radius * Math.sin(theta * Math.PI - Math.PI / 2);

        this.vector3.z = this.radius * Math.cos(theta * Math.PI - Math.PI / 2);

        this.lerpCamera();

        this.camera.lookAt(this.lookAtTarget);

    }

    lerpCamera() {
        this.camera.position.lerp(this.vector3, 0.05 * 1 + this.delta);
    }
}