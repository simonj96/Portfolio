import * as THREE from 'three';
export class Cube {

    model;

    constructor() {
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
        this.model = new THREE.Mesh(geometry, material);


        this.model.onBeforeRender = function () {
            this.rotation.x += 0.01;
        }
        return this.model
    }
}