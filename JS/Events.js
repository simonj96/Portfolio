import * as THREE from 'three';

import { animations } from './Animations.js';
import { loader } from './Loader.js';
import { camera, cameraHandler } from './CameraHandler.js';
import { renderer } from './ThreeJS.js';
import { display } from './Display.js';

class Events {

    mouse = new THREE.Vector2();

    constructor() {

        loader.onLoad = function () {
            animations.OnLoaded();
            this.status = true;
        };

        this.SetListeners();
    }

    SetListeners() {
        document.body.addEventListener('pointermove', e => { this.OnDocumentMouseMove(e) });

        document.getElementById("master").addEventListener('click', e => { animations.OpenProject(e.target.id); });
        document.getElementById("portfolio").addEventListener('click', e => { animations.OpenProject(e.target.id); });
        document.getElementById("party").addEventListener('click', e => { animations.OpenProject(e.target.id); });
        document.getElementById("workshift").addEventListener('click', e => { animations.OpenProject(e.target.id); });

        window.addEventListener('resize', () => {
            this.OnWindowResize();
        }, false);

        //html.projectReturnButton.element.addEventListener("click", e => { }, false);

        window.onscroll = this.ScrollListener;

        document.getElementById("return-to-top").onclick = this.ToTop;

        //document.getElementById("disableButton").onclick = this.Toggle3D;

        //Project nav and stuff
        document.getElementById("interactable").addEventListener('mouseenter', e => { animations.OpenSideNav() });
        document.getElementsByClassName("closebtn")[0].addEventListener('click', e => { animations.CloseSideNav() });
        document.getElementsByClassName("container")[0].addEventListener('mousemove', e => { animations.CloseSideNav() });
        document.getElementsByClassName("master")[0].addEventListener('click', e => { animations.SwitchProject(e.target.className); });
        document.getElementsByClassName("portfolio")[0].addEventListener('click', e => { animations.SwitchProject(e.target.className); });
        document.getElementsByClassName("party")[0].addEventListener('click', e => { animations.SwitchProject(e.target.className); });
        document.getElementsByClassName("workshift")[0].addEventListener('click', e => { animations.SwitchProject(e.target.className); });

    }

    ToTop() {
        if (document.getElementById("return-to-top").style.opacity != 1) {
            return;
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    ScrollListener() {

        console.log("ScrollY: " + window.scrollY);

        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {

            console.log("Not at top.");


        } else {
            console.log("At top.")

        }
        if (document.body.scrollTop > window.innerHeight - window.scrollY || document.documentElement.scrollTop > window.innerHeight - window.scrollY) {

        }
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            console.log("At Bottom.")


        } else {

        }
    }

    OnWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);

    }

    OnDocumentMouseMove(event) {

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