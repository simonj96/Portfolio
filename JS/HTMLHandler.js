import { HTMLComponent } from "./HTMLComponent.js";


class HTMLHandler {

    gsapAnimations;

    constructor() {
        this.init();
    }

    init() {

        //Hook up important html dom elements to custom HTMLComponents
        this.main = new HTMLComponent(document.getElementById("a"), "flex");

        this.loadingRing = new HTMLComponent(document.getElementsByClassName("lds-ring")[0], "block");
        this.scroller = new HTMLComponent(document.getElementById("scroller"), "block");
        this.toTop = new HTMLComponent(document.getElementById("return-to-top"), "block");
        this.navbar = new HTMLComponent(document.getElementsByClassName("Menu")[0], "block");
        this.footer = new HTMLComponent(document.getElementsByClassName("Footer")[0], "block");

        //"Project page" specific.
        this.projectsMain = new HTMLComponent(document.getElementsByClassName("container")[0], "flex");
        this.projectsContent = new HTMLComponent(document.getElementsByClassName("container_content_inner")[0], "block");
        this.overlay = new HTMLComponent(document.getElementsByClassName("overlay")[0], "block");
        this.projectsNavigation = new HTMLComponent(document.getElementsByClassName("projectNavigator")[0], "flex");
        this.projectsList = new HTMLComponent(document.getElementsByClassName("projectsList")[0], "list");
        this.projectReturnButtonContainer = new HTMLComponent(document.getElementsByClassName("btns")[0], "block");
        this.interactable = new HTMLComponent(document.getElementById("bar"), "flex");

    }
}

export let html = new HTMLHandler();
export let projectContainer = html.projectsContent;