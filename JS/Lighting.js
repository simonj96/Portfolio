import * as THREE from 'three';

export class Lighting {

    ambientLight;

    constructor() {
        const light = new THREE.AmbientLight(0x404040); // soft white light 
        return light;
    }
}