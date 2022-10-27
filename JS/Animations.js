import { HTMLComponent } from "./HTMLComponent.js";
import { CameraHandler } from "./CameraHandler.js";

class Animations {

    boolean = true;
    boolean2 = false;
    currentProject;
    cooldown = false;
    constructor() {
        this.init();
    }

    init() {

        this.main = document.getElementsByClassName("a")[0];
        this.ring = document.getElementsByClassName("lds-ring")[0];
        this.scroller = document.getElementById("scroller");
        this.navbar = document.getElementsByClassName("Menu")[0];
        this.footer = document.getElementsByClassName("Footer")[0];
        this.top = document.getElementsByClassName("return-to-top")[0];

        this.overlay = document.getElementsByClassName("overlay")[0];
        this.project = document.getElementsByClassName("container")[0];
        this.button = document.getElementsByClassName("btns")[0];
        this.projectlist = document.getElementsByClassName("projectsContainer")[0];
    }

    OnLoaded() {

        this.FadeOut(this.ring);
        this.FadeIn(this.main);
        setTimeout(() => { this.ToggleUI() }, 1000);
        setTimeout(() => { this.AllowScroll() }, 1000);


    }

    AllowScroll() {
        document.body.classList.remove("stop-scrolling");
    }

    OpenProject(string) {
        this.FadeOut(this.main);

        this.project.style.position = "fixed";
        this.FadeIn(this.project);

        //Weird animation fix
        setTimeout(() => {
            this.project.style.position = "relative";
            this.FadeIn(this.button);

        }, 1000);

        this.currentProject = document.getElementById(string + "Project");
        this.currentProject.style.position = "relative";
        this.currentProject.classList.remove('hide');
        this.FadeIn(this.currentProject);
    }

    CloseProject() {

        this.FadeOut(this.button);

        setTimeout(() => {
            this.currentProject.classList.add('hide');
            this.project.classList.add('hide');
            this.project.style.opacity = 0;
        }, 0);

        this.FadeIn(this.main);
        var p = $('#q').position();
        window.scrollTo({
            top: p.top - window.innerHeight / 2,
            left: 0,
            behavior: 'auto',
            block: 'center',
            inline: 'center'
        });
    }

    SwitchProject(string) {
        console.log(string);
        this.CloseSideNav();
        this.currentProject.style.position = "fixed";
        this.FadeOut(this.currentProject);
        this.currentProject = document.getElementById(string + "Project");

        this.currentProject.style.position = "relative";
        this.FadeIn(this.currentProject);
    }

    ToTop() {
        if (this.top.style.opacity < 0.5) {
            return;
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    FadeOut(element) {
        element.style.opacity = 0;
        setTimeout(() => element.classList.add('hide'), 700);
    }

    FadeIn(element) {
        element.classList.remove('hide');
        setTimeout(() => { element.style.opacity = 1 }, 10);

    }

    ToggleScroller(boolean) {

        boolean ? this.scroller.style.opacity = 0.5 : this.scroller.style.opacity = 0;

    }
    ToggleToTopButton(boolean) {
        if (boolean) {
            this.top.style.opacity = 0.5;
            this.top.style.cursor = "pointer";
        } else {
            this.top.style.opacity = 0;
            this.top.style.cursor = "auto";
        }
    }

    ToggleUI() {
        if (this.boolean) {
            this.FadeIn(this.scroller);
            this.FadeIn(this.navbar);
            this.FadeIn(this.footer);
        } else {
            this.FadeOut(this.scroller);
            this.FadeOut(this.navbar);
            this.FadeOut(this.footer);

        }
        this.boolean = !this.boolean;
    }

}

export let animations = new Animations();
