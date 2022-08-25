import { OrbitControls } from 'https://unpkg.com/three@0.143.0/examples/jsm/controls/OrbitControls.js';
import { TrackballControls } from 'https://unpkg.com/three@0.143.0/examples/jsm/controls/TrackballControls.js';

export class Controls {

    orbitControls;
    trackballControls;
    cameraTarget;

    constructor(camera, renderer) {
        this.orbitControls = new OrbitControls(camera, renderer.domElement);
        this.orbitControls.enableDamping = true;
        this.orbitControls.enableZoom = false;
        this.orbitControls.minDistance = 0;

        //this.orbitControls.maxAzimuthAngle = Math.PI / 2;
        //this.orbitControls.minAzimuthAngle = -Math.PI / 2;
        //this.orbitControls.minPolarAngle = Math.PI / 5;
        //this.orbitControls.maxPolarAngle = Math.PI / 2;
        this.orbitControls.rotateSpeed = 0.5;
        //controls.enableRotate = false;
        //Orbitcontrol center

        this.orbitControls.target.set(0, 2.5, 0);

        this.orbitControls.mouseButtons = {
            LEFT: '',
            MIDDLE: '',
            RIGHT: ''
        }

        //TrackballControls for smooth scroll zoom.
        this.trackballControls = new TrackballControls(camera, renderer.domElement);
        this.trackballControls.noRotate = true;
        this.trackballControls.noPan = true;
        this.trackballControls.noZoom = true;
        //this.trackballControls.zoomSpeed = 0.13;
        this.trackballControls.dynamicDampingFactor = 0.111; // set dampening factor

        this.updateControls();
    }


    updateControls() {

        //this.cameraTarget = this.orbitControls.target;
        //this.orbitControls.update();
        //this.orbitControls.target.set(this.cameraTarget.x, this.cameraTarget.y, this.cameraTarget.z);
        //this.trackballControls.update();
    }

}
