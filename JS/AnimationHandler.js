import { gsap } from "https://cdn.skypack.dev/gsap";
import { animations } from "./GSAPAnimations.js";
import { html } from "./HTMLHandler.js";
import { ScrollTrigger } from "https://cdn.skypack.dev/gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

//To create animation timelines using GSAP from GSAPAnimations (Compose animations here.)
class AnimationHandler {

    currentProject;

    constructor() {

    }

    //Probably temporary
    Start() {
        const timeline = gsap.timeline();

        timeline = gsap.timeline().pause();
        timeline.add(animations.FadeOut(html.loadingRing, 1), "1");
        timeline.add(this.FadeInUI());
        timeline.add(animations.FadeIn(html.main, 1), ">-1");
        timeline.call(this.EnableScroll, [true]);

        timeline.play();
    }

    FadeInUI() {

        const timeline = gsap.timeline();

        timeline.add(animations.FadeIn(html.scroller, 1), "0");
        timeline.add(animations.FadeIn(html.footer, 1), ">-1");
        timeline.add(animations.FadeIn(html.navbar, 1), ">-1");

        return timeline;
    }

    SwitchProject(string) {

        const timeline = gsap.timeline();

        timeline.add(this.CloseSideNav());

        timeline.add(animations.FadeOut(document.getElementById(this.currentProject), 0.4), ">");

        timeline.add(animations.FadeIn(document.getElementById(string), 0.4), ">");

        this.currentProject = string;

        return timeline;
    }

    OpenProject(string) {

        this.currentProject = string;
        const project = document.getElementById(string);
        const timeline = gsap.timeline().pause();

        timeline.call(animations.SetDisplay, [project, "block"], "0");
        timeline.add(animations.FadeOut(html.main, 0.4), "0");
        timeline.add(animations.FadeIn(html.overlay, 0.25), ">");
        timeline.add(animations.FadeIn(html.projectsMain, 0.8), ">-0.1");
        timeline.add(animations.ExpandIn(html.projectsMain, 1), ">-0.5");
        timeline.call(animations.SetPosition, [html.projectsMain, "relative"], ">");
        timeline.add(animations.FadeIn(html.projectReturnButtonContainer, 0.35), ">+0.2");
        timeline.add(animations.FadeIn(html.interactable, 0.35), ">-0.35");

        timeline.play();

    }

    CloseProject() {
        const timeline = gsap.timeline();

        timeline.add(animations.FadeOut(html.overlay, 0), "0");
        timeline.add(animations.FadeOut(html.projectReturnButtonContainer, 0.1), "0");
        timeline.add(animations.FadeOut(html.interactable, 0.1), "0");
        timeline.add(animations.FadeOut(html.projectsMain, 0.4), "0");
        timeline.add(animations.FadeIn(html.main, 0.01), "0");
        timeline.call(animations.SetDisplay, [document.getElementById(this.currentProject), "none"], ">+1");
        timeline.call(animations.SetPosition, [html.projectsMain, "fixed"], ">");

        timeline.play();
    }

    OpenSideNav() {

        const timeline = gsap.timeline();

        timeline.call(animations.SetWidth, [document.getElementById("mySidenav"), screen.width > 370 ? "700px;" : "100%"], "0");

        timeline.add(animations.SlideIn(document.getElementById("mySidenav"), 0.3));
        timeline.call(() => { document.getElementsByClassName("container")[0].addEventListener('mousemove', animationsHandler.CloseSideNav); }, [], ">");
        timeline.add(animations.Blur(document.getElementsByClassName("container_content_inner")[0], "blur(5px)"));
        timeline.add(animations.Blur(html.projectReturnButtonContainer, "blur(5px)"));

        return timeline;
    }

    CloseSideNav() {

        document.getElementsByClassName("container")[0].removeEventListener('mousemove', animationsHandler.CloseSideNav);

        const timeline = gsap.timeline();

        timeline.add(animations.SlideOutLeft(document.getElementById("mySidenav"), 0.6))
        timeline.call(animations.SetWidth, [document.getElementById("mySidenav"), "0"], ">");
        timeline.add(animations.Blur(document.getElementsByClassName("container_content_inner")[0], "none"), "0");
        timeline.add(animations.Blur(html.projectReturnButtonContainer, "none"), "0");

        return timeline;
    }

    ScrollIntoView(element) {
        var currenttop = 0;
        if (element.offsetParent) {
            do {
                currenttop += element.offsetTop;
            } while ((element = element.offsetParent));
        }

        window.scroll(0, currenttop / 2);

    }

    //Untested.
    ReverseTimeline(func) {
        const timeline = gsap.timeline().pause();
        timeline.add(func.call());
        timeline.reverse(0);
    }

    ToggleScroller(boolean) {

        const timeline = gsap.timeline().pause();

        timeline.add(boolean ? animations.FadeIn(html.scroller, 0.1) : animations.FadeOut(html.scroller, 0.1), "0");

        timeline.play();
    }

    SetAnimationListeners() {

        //Scroller animations
        gsap.timeline({
            scrollTrigger: {
                trigger: "#a",
                onEnter: () => animations.FadeOut(html.scroller, 0.8),
                //onEnterBack: () => animations.FadeIn(html.scroller, 0.8),
                //toggleActions: "play none none reverse",
                start: "top top-=200px",
                end: "+=0",
            }
        });

        const t1 = gsap.timeline({
            // yes, we can add it to an entire timeline!
            scrollTrigger: {
                trigger: "#a",
                toggleActions: "play none none reverse",
                start: "bottom bottom+=100px", // when the top of the trigger hits the top of the viewport
                //end: "+=200", // end after scrolling 500px beyond the start
                //scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            },

        }).pause();

        t1.add(animations.FadeIn(html.toTop, 0.3), "0");
    }

    EnableScroll(boolean) {
        boolean ? document.body.classList.remove("stop-scrolling") : document.body.classList.add("stop-scrolling");
    }


}

export let animationsHandler = new AnimationHandler();