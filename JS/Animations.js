import { HTMLComponent } from "./HTMLComponent.js";

class Animations {

    boolean = true;
    currentP;

    constructor() {
        this.init();
    }

    init() {

        this.main = document.getElementsByClassName("a")[0];
        this.ring = document.getElementsByClassName("lds-ring")[0];
        this.scroller = document.getElementById("scroller");
        this.navbar = document.getElementsByClassName("Menu")[0];
        this.footer = document.getElementsByClassName("Footer")[0];

        this.overlay = document.getElementsByClassName("overlay")[0];
        this.project = document.getElementsByClassName("container")[0];
        this.button = document.getElementsByClassName("btns")[0];
        this.navbutton = document.getElementsByClassName("bar")[0];
        this.sidenav = document.getElementsByClassName("sidenav")[0];

    }

    OnLoaded() {

        this.FadeOut(this.ring);
        this.FadeIn(this.main);
        setTimeout(() => { this.ToggleUI() }, 1000);
        setTimeout(() => { this.AllowScroll() }, 1000);

    }

    AllowScroll() {
        console.log("TESTING");
        document.body.classList.remove("stop-scrolling");
    }

    OpenProject(string) {

        this.FadeOut(this.main);

        this.project.style.position = "fixed";
        this.FadeIn(this.project);

        setTimeout(() => {
            this.project.style.position = "relative";
            this.FadeIn(this.button);
            this.FadeIn(this.navbutton);
        }, 1000);

        this.currentP = document.getElementById(string + "Project");
        this.currentP.style.position = "relative";
        this.currentP.classList.remove('hide');
        this.FadeIn(this.currentP);

        this.button.addEventListener('click', () => { this.CloseProject() });
    }

    CloseProject() {

        this.FadeOut(this.button);
        this.FadeOut(this.navbutton);
        this.FadeOut(this.project);
        setTimeout(() => { this.currentP.classList.add('hide') }, 1000);

        this.FadeIn(this.main);

    }
    OpenSideNav() {
        console.log("click");
        this.sidenav.style.minWidth = screen.width > 370 ? 700 : "100%";
        this.sidenav.style.transform = "skewX(15deg) translateX(0)";
        this.project.style.paddingLeft = "120px";
        this.project.style.filter = "blur(5px)";
        this.button.style.filter = "blur(5px)";
    }

    CloseSideNav() {
        this.sidenav.style.transform = "skewX(15deg) translateX(-100%)";
        this.project.style.paddingLeft = "0px";
        this.project.style.filter = "blur(0px)";
        this.button.style.filter = "blur(0px)";
    }

    SwitchProject(string) {
        console.log(string);
        this.CloseSideNav();
        this.currentP.style.position = "fixed";
        this.FadeOut(this.currentP);
        this.currentP = document.getElementById(string + "Project");

        this.currentP.style.position = "relative";
        this.FadeIn(this.currentP);
    }

    FadeOut(element) {
        element.style.opacity = 0;
        setTimeout(() => element.classList.add('hide'), 1000);
    }

    FadeIn(element) {
        element.classList.remove('hide');
        setTimeout(() => { element.style.opacity = 1 }, 10);
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
