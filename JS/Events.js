import * as THREE from 'three';

import { animations } from './Animations.js';
import { loader } from './Loader.js';
import { camera, cameraHandler } from './CameraHandler.js';
import { renderer } from './ThreeJS.js';
import { Display, display } from './Display.js';

class Events {

    mouse = new THREE.Vector2();
    scrollenable = true;

    constructor() {

        loader.onLoad = function () {

            animations.OnLoaded();
            display.SetDisplay(Display.TEXTURE.DEFAULT);
            this.status = true;
        };

        this.mouse.x = window.innerWidth / 2;

        this.SetListeners();
    }

    SetListeners() {

        window.addEventListener('resize', () => {
            this.OnWindowResize();
        }, false);

        document.body.addEventListener('pointermove', e => { this.OnDocumentMouseMove(e) });
        document.body.addEventListener('touchmove', e => { this.OnDocumentMouseMove(e) });

        //Main project list
        document.getElementById("master").addEventListener('click', e => { this.Open(e.target.id); });
        document.getElementById("portfolio").addEventListener('click', e => { this.Open(e.target.id); });
        document.getElementById("party").addEventListener('click', e => { this.Open(e.target.id); });



        const def = '../Projects/Images/test.jpg';

        //On hover main project list
        document.getElementById("master").addEventListener('mouseover', e => { display.SetDisplay(Display.TEXTURE.MASTER); });
        document.getElementById("portfolio").addEventListener('mouseover', e => { display.SetDisplay(Display.TEXTURE.PORT); });
        document.getElementById("party").addEventListener('mouseover', e => { display.SetDisplay(Display.TEXTURE.PARTY); });



        //Reset
        document.getElementById("master").addEventListener('mouseout', e => { display.SetDisplay(Display.TEXTURE.DEFAULT); });
        document.getElementById("portfolio").addEventListener('mouseout', e => { display.SetDisplay(Display.TEXTURE.DEFAULT); });
        document.getElementById("party").addEventListener('mouseout', e => { display.SetDisplay(Display.TEXTURE.DEFAULT); });

        this.toTopButton = document.getElementsByClassName("return-to-top")[0];

        //Project navigation
        document.getElementsByClassName("btns")[0].addEventListener('click', () => { animations.CloseProject(); this.scrollenable = true; });

        window.addEventListener("scroll", e => { this.ScrollListener(); });
    }

    Open(id) {
        animations.OpenProject(id);
        this.scrollenable = false;
    }

    ScrollListener() {
        if (!this.scrollenable) {
            return;
        }
        cameraHandler.radius = window.scrollY / (document.body.offsetHeight - window.innerHeight) * 12;

        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {

            animations.ToggleScroller(false);
            animations.ShowUI(true);
        } else {
            //at top
            animations.ToggleScroller(true);
            animations.ShowUI(false);
        }

        //At bottom
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {

            this.toTopButton.addEventListener('click', e => { animations.ToTop();; });
            animations.ToggleToTopButton(true);


        } else {

            this.toTopButton.removeEventListener('click', e => { animations.ToTop(); });

            animations.ToggleToTopButton(false);

        }

    }

    OnWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        cameraHandler.radius = window.scrollY / (document.body.offsetHeight - window.innerHeight) * 12;
    }

    OnDocumentMouseMove(event) {
        event.type == 'touchmove' ? this.mouse.x = event.touches[0].clientX : this.mouse.x = event.clientX;

        //const canvasBounds = renderer.domElement.getBoundingClientRect();
        //this.mouse.y = - ((event.clientY - canvasBounds.top) / (canvasBounds.bottom - canvasBounds.top)) * 2 + 1;
    }

    get mouse() {
        return this.mouse;
    }
}

export let events = new Events();
export let mouse = events.mouse;