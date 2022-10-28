import * as THREE from 'three';
import { RoomEnvironment } from 'RoomEnvironment';

class ThreeJS {

    renderer;
    composer;
    scene;

    constructor() {

        //Create canvas.
        const canvas = document.getElementById('three');
        canvas.width = 32;
        canvas.height = window.innerHeight;

        //Create renderer.
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, canvas: canvas })
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1;

        document.body.appendChild(this.renderer.domElement);

        //Create scene.
        this.scene = new THREE.Scene();

        //Generate evironment map.
        const pmremGenerator = new THREE.PMREMGenerator(this.renderer);
        this.scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0, 0.1, 100).texture;
    }

}
const three = new ThreeJS();
export let renderer = three.renderer;
export let scene = three.scene;
