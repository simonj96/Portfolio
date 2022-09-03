import { gsap } from "https://cdn.skypack.dev/gsap";
import { animations } from "./GSAPAnimations.js";
import { html } from "./HTMLHandler.js";

//To create animation timelines using GSAP from GSAPAnimations (Compose animations here.)
class AnimationHandler {

    timelines = [];
    interfaceTL;

    constructor() {
    
    }

    //Probably temporary
    Start(){
        if(!this.interfaceTL) {
            this.interfaceTL = gsap.timeline().pause();
        }


        this.interfaceTL.add(animations.FadeOut(html.loadingRing, 1), "1");
        this.interfaceTL.add(animations.FadeIn(html.scroller, 1), ">");
        this.interfaceTL.add(animations.FadeIn(html.footer, 1), ">-1");
        this.interfaceTL.add(animations.FadeIn(html.navbar, 1), ">-1");
        this.interfaceTL.add(animations.FadeIn(html.switch, 1), ">-1");
     
        this.interfaceTL.play();
    }

    OpenProjectExpand(){
  
        //Animate out main
        const timeline = gsap.timeline().pause();

        timeline.add(animations.SlideOutLeft(".slideLeft"), "0")
        timeline.add(animations.FadeOut(html.main, 1), ">");
        timeline.add(animations.FadeOut(html.scroller, 1), ">-1");
        timeline.add(animations.FadeIn(html.overlay, 0.5), ">");
        timeline.add(animations.FadeIn(html.projectsMain, 0.9), ">");
        timeline.add(animations.ExpandIn(html.projectsMain, 1), ">-0.89");
    
     

        //Reverse UI
        timeline.call(this.ReverseTimeline, [this.interfaceTL], "0");

        timeline.play();
    }

    //Untested.
    ReverseTimeline(timeline){
        timeline.reverse(0);
    }

}

export let animationsHandler = new AnimationHandler();