import * as THREE from 'three';
import { animationsHandler } from './AnimationHandler.js';
import { html } from './HTMLHandler.js';
import { loader } from './Loader.js';
import { camera } from './CameraHandler.js';
import { renderer } from './ThreeJS.js';

class Events {

    mouse = new THREE.Vector2();

    constructor() {
        
        this.SetOnLoad(animationsHandler);
        //
        this.SetListeners();

    }

    SetOnLoad(animations){

        loader.onLoad = function ( ) {
            console.log( 'LOADING COMPLETE FROM EVENTS!');
            //Use animationhandler
            animations.Start();
            this.status = true;
            //this.ga.addToTimeline(function () { console.log('Woohoo!') }, "3");

            //this.ga.timeline.play();

        
        };
    }

    SetListeners(){
        document.body.addEventListener('pointermove', e => { this.onDocumentMouseMove(e) });
        document.getElementById("Project1").addEventListener('click', e => { this.OpenProject(e, "Project 1") });
        document.getElementById("Project2").addEventListener('click', e => { this.OpenProject(e, "Project 2") });
        window.addEventListener('resize', () => {
            this.OnWindowResize();
        }, false);

        html.projectReturnButton.element.addEventListener("click", function (e) {
            console.log("Clicked return button!");
        }, false);
    }

    OpenProject(event, name) {
        
        //Use animationhandler!!
        animationsHandler.OpenProjectExpand();
    }


    OnWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    onDocumentMouseMove(event) {
        event.preventDefault();
        const canvasBounds = renderer.domElement.getBoundingClientRect();
        this.mouse.x = event.clientX;
        this.mouse.y = - ((event.clientY - canvasBounds.top) / (canvasBounds.bottom - canvasBounds.top)) * 2 + 1;
    }

    get mouse() {
        return this.mouse;
    }
}

export let events = new Events();
export let mouse = events.mouse;