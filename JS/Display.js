import * as THREE from 'three';
import { loader } from './Loader.js';

export class Display {

    mesh;
    background;

    bgValues = {
        WIDTH: 2.370,
        HEIGHT: 1.180,
    }

    tValues = {
        WIDTH: 2.377,
        HEIGHT: 1.185,
    }

    constructor() {
        this.init();
    }

    init() {
        this.textureLoader = new THREE.TextureLoader(loader);
        this.CreateBackground();
        const texture = this.textureLoader.load('../Projects/Images/test.jpg');
        texture.encoding = THREE.sRGBEncoding;
        //texture.magFilter = THREE.NearestFilter;
        //texture.minFilter = THREE.NearestFilter;
        //texture.anisotropy = ;
        const geometry = new THREE.PlaneGeometry(this.tValues.WIDTH, this.tValues.HEIGHT);//Need corrent aspect ratio (16:9?)
        const material = new THREE.MeshBasicMaterial({ map: texture });

        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.position.y = 3.67;
        this.mesh.position.x = -0.11;
        this.mesh.position.z = 2.85;
        this.mesh.rotation.y = -0.02;
        //Use this for animation
        /*this.mesh.onAfterRender = function () {
            const s = 0.9999;
            this.geometry.scale(s, s, s);
        }*/
    }

    CreateBackground() {
        const geometry = new THREE.PlaneGeometry(this.bgValues.WIDTH, this.bgValues.HEIGHT);

        //const material = new THREE.MeshBasicMaterial( { map: texture } );
        const material = new THREE.MeshBasicMaterial({ color: 'red' });
        this.background = new THREE.Mesh(geometry, material);
        this.background.position.y = 3.67;
        this.background.position.x = -0.11;
        this.background.position.z = 2.845;
        this.background.rotation.y = -0.02;

    }

    SetDisplay(path) {
        const texture = this.textureLoader.load(path);
        texture.encoding = THREE.sRGBEncoding;
        this.mesh.material.map = texture;
        texture.needsUpdate = true;
    }

}
export let display = new Display();


