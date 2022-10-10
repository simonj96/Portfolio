import * as THREE from 'three';
import { animationsHandler } from './AnimationHandler.js';
import { html } from './HTMLHandler.js';
import { loader } from './Loader.js';
import { camera } from './CameraHandler.js';
import { renderer } from './ThreeJS.js';

class Events {

    mouse = new THREE.Vector2();

    constructor() {

        loader.onLoad = function () {
            animationsHandler.Start();
            this.status = true;
        };

        this.SetListeners();
    }

    SetListeners() {
        document.body.addEventListener('pointermove', e => { this.OnDocumentMouseMove(e) });

        document.getElementById("Project1").addEventListener('click', e => { animationsHandler.OpenProject("master") });
        document.getElementById("Project2").addEventListener('click', e => { animationsHandler.OpenProject("portfolioProject") });
        document.getElementById("Project3").addEventListener('click', e => { animationsHandler.OpenProject("party") });
        document.getElementById("Project4").addEventListener('click', e => { animationsHandler.OpenProject("workshift") });

        window.addEventListener('resize', () => {
            this.OnWindowResize();
        }, false);

        html.projectReturnButton.element.addEventListener("click", e => { animationsHandler.CloseProject() }, false);

        window.onscroll = this.ScrollListener;

        document.getElementById("return-to-top").onclick = this.ToTop;

        //document.getElementById("disableButton").onclick = this.Toggle3D;

        //Project nav and stuff
        document.getElementById("interactable").addEventListener('click', e => { animationsHandler.OpenSideNav(); });
        document.getElementsByClassName("closebtn")[0].addEventListener('click', e => { animationsHandler.CloseSideNav() });

        document.getElementById("m").addEventListener('click', e => { animationsHandler.SwitchProject("master") });
        document.getElementById("t").addEventListener('click', e => { animationsHandler.SwitchProject("portfolioProject") });
        document.getElementById("p").addEventListener('click', e => { animationsHandler.SwitchProject("party") });
        document.getElementById("w").addEventListener('click', e => { animationsHandler.SwitchProject("workshift") });


        animationsHandler.SetAnimationListeners();
    }

    ToTop() {
        if (document.getElementById("return-to-top").style.opacity != 1) {
            return;
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    ScrollListener() {

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