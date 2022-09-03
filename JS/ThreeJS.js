import * as THREE from 'three';

class ThreeJS {

    renderer;
    scene;

    constructor() {
        //Create canvas.
        const canvas = document.getElementById('three')
        canvas.width = 32;
        canvas.height = window.innerHeight;

        //Create renderer.
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, canvas: canvas })
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;

        document.body.appendChild(this.renderer.domElement);

        //Create scene.
        this.scene = new THREE.Scene();
    }

}
const three = new ThreeJS();
export let renderer = three.renderer;
export let scene = three.scene;