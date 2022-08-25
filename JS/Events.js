import * as THREE from 'three';

export class Events {

    renderer;
    camera;
    mouse = new THREE.Vector2();
    htmlHandler;

    constructor(renderer, camera, htmlHandler) {
        this.htmlHandler = htmlHandler;
        this.renderer = renderer;
        this.camera = camera;

        document.body.addEventListener('pointermove', e => { this.onDocumentMouseMove(e) });

        document.getElementById("Project1").addEventListener('click', e => { this.OpenProject(e, "Project 1") });
        document.getElementById("Project2").addEventListener('click', e => { this.OpenProject(e, "Project 2") });
        window.addEventListener('resize', () => {
            this.OnWindowResize();
        }, false);

    }

    OpenProject(event, name) {
        console.log("OPEN PROJECT: " + name);
        //Use html handler to open project.
        this.htmlHandler.ShowProject(name);

    }


    OnWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    onDocumentMouseMove(event) {
        event.preventDefault();

        const canvasBounds = this.renderer.domElement.getBoundingClientRect();

        this.mouse.x = event.clientX;
        this.mouse.y = - ((event.clientY - canvasBounds.top) / (canvasBounds.bottom - canvasBounds.top)) * 2 + 1;

    }

    get mouse() {
        return this.mouse;
    }
}