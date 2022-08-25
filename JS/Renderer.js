import * as THREE from 'three';
export class Renderer {

    renderer;

    constructor(canvas) {

        canvas.width = 32;
        canvas.height = window.innerHeight;
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, canvas: canvas })
        this.#renderSettings();

        document.body.appendChild(this.renderer.domElement);

        return this.renderer;
    }

    #renderSettings() {

        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    }

}