import { HTMLComponent } from "./HTMLComponent.js";
import { ProjectInformation } from "./ProjectInformation.js";
import { GSAPAnimations } from "./GSAPAnimations.js";

export class HTMLHandler {

    gsapAnimations;

    //Specific components
    main;
    loadingRing;
    scroller;
    toTop;
    switch;
    navbar;
    footer;

    //Project page
    projectsMain;
    projectsNavigation;
    nextProject;
    previousProject;
    projectReturnButton;
    projectsContent;
    projectsList;

    constructor() {
        this.init();
    }

    init() {
        this.ga = new GSAPAnimations();

        //Hook up important html dom elements to custom HTMLComponents, add them to allComponents.
        this.main = new HTMLComponent(document.getElementById("a"), "flex");

        this.loadingRing = new HTMLComponent(document.getElementsByClassName("lds-ring")[0], "block");
        this.scroller = new HTMLComponent(document.getElementById("scroller"), "block");
        this.toTop = new HTMLComponent(document.getElementById("return-to-top"), "block");
        this.switch = new HTMLComponent(document.getElementById("potatoSwitch"), "block");
        this.navbar = new HTMLComponent(document.getElementsByClassName("Menu")[0], "block");
        this.footer = new HTMLComponent(document.getElementsByClassName("Footer")[0], "block");

        //"Project page" specific.
        this.projectsMain = new HTMLComponent(document.getElementsByClassName("container")[0], "flex");
        this.projectsContent = new HTMLComponent(document.getElementsByClassName("container_content_inner")[0], "block");
        this.overlay = new HTMLComponent(document.getElementsByClassName("overlay")[0], "block");
        this.projectsNavigation = new HTMLComponent(document.getElementsByClassName("projectNavigator")[0], "flex");
        this.nextProject = new HTMLComponent(document.getElementsByClassName("next")[0], "block");
        this.previousProject = new HTMLComponent(document.getElementsByClassName("previous")[0], "block");
        this.projectsList = new HTMLComponent(document.getElementsByClassName("projectsList")[0], "list");
        this.projects = new HTMLComponent(document.getElementsByClassName("Projects")[0], "block");
        this.projectReturnBuuttonContainer = new HTMLComponent(document.getElementsByClassName("btns")[0], "block");
        this.projectReturnButton = new HTMLComponent(document.getElementsByClassName("btns_return")[0], "block");
        this.AddReturnButtonListener(this.projectsMain, this.projectsContent.element);
        this.OnLoaded();
        this.EnableUI()

    }
    AddReturnButtonListener(main, container) {
        this.projectReturnButton.element.addEventListener("click", function (e) {
            const anim = new GSAPAnimations();
            anim.addToTimeline(anim.AnimateOutProject(container, 2), "0");

            anim.timeline.play();
        }, false);
    }
    //When everything has been loaded, use this.
    OnLoaded() {
        //Reminder: fromto can be used if immediateRender is set false;

        //Create exit animation timeline
        //Save it, play it.

        this.ga.addToTimeline(this.ga.FadeOut(this.loadingRing), "1");
        this.ga.addToTimeline(this.ga.FadeIn(this.scroller, this.scroller.displayType), "2");
        //Add functions to timeline, use to enable buttons.
        //this.ga.addToTimeline(function () { console.log('Woohoo!') }, "3");

        this.ga.timeline.play();

    }

    EnableUI() {
        this.ga2 = new GSAPAnimations();

        //Fade in Menu, Footer and Switch
        this.ga2.addToTimeline(this.ga2.FadeIn(this.switch, this.switch.displayType, 2), "3");
        this.ga2.addToTimeline(this.ga2.FadeIn(this.navbar, this.navbar.displayType, 2), "3");
        this.ga2.addToTimeline(this.ga2.FadeIn(this.footer, this.footer.displayType, 2), "3");

        this.ga2.timeline.play();
    }

    ShowProject(name) {

        const project = new ProjectInformation(this.projectsContent, name);
        this.projectsContent.element.removeChild(this.projectReturnBuuttonContainer.element)
        this.projectsContent.element.appendChild(this.projectReturnBuuttonContainer.element);
        //Animate out main
        this.ga3 = new GSAPAnimations();

        this.ga3.addToTimeline(this.ga3.SlideOutLeft(".slideLeft"), "0");
        this.ga3.addToTimeline(this.ga3.FadeOut(this.main), ">");
        this.ga3.addToTimeline(this.ga3.FadeOut(this.scroller), ">-1");

        //Reverse EnableUI
        this.ga3.addToTimeline(this.ga3.FadeOut(this.switch, 2), "1");
        this.ga3.addToTimeline(this.ga3.FadeOut(this.navbar, 2), "1");
        this.ga3.addToTimeline(this.ga3.FadeOut(this.footer, 2), "1");

        //Animate in projectMain
        this.ga3.addToTimeline(this.ga3.FadeIn(this.overlay, this.overlay.displayType, 0.5), ">");
        this.ga3.addToTimeline(this.ga3.FadeIn(this.projectsMain, this.projectsMain.displayType, 2), ">");

        this.ga3.timeline.play();
    }

    HideProject(element) {
        //Animate out projectMain IDEA: Create a timeline to then rewind i.e bring things back to how they were.

        for (let i = 0; i < element.children.length; i++) {

            console.log(element.children[index])
        }

    }

    setComponentDisplaType(name, displayType) {

    }


}