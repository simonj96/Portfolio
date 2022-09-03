import { gsap } from "https://cdn.skypack.dev/gsap";
import { CSSPlugin } from "https://cdn.skypack.dev/gsap/CSSPlugin.js"
gsap.registerPlugin(CSSPlugin);
//A place for holding gsap animations,
//Imort HTMLComponents? To get access to everything, make exiting/entering animations for all elements etc.
export class GSAPAnimations {

    constructor() {
        
    }

    addToTimeline(animation, delay) {
        if (delay == null) {
            console.log("nulled delay");
            delay = ">";
        }
        this.timeline.add(animation, delay);
    }

    SlideOutLeft(component) {
        const animation = gsap.fromTo(component, { x: 0 }, {
            x: -300,

            immediateRender: false,
            duration: 1,
            stagger: {
                each: 0.1,
                from: "edges",
                grid: "auto",
                ease: "Power1.easeOut"
            },
        });
        return animation;
    }

    ExpandIn(component, duration) {
        const animation = gsap.fromTo(component.element, { x: "100vw" }, {
            x: 0,
            duration: duration,
            ease: "Power1.easeOut"
        });
        return animation;
    }

    SlideOutRight(components) {
        //Maybe don't need
    }

    SlideUp(component) {
        const animation = gsap.to(component.element, {
            y: -300,
            duration: 1,
        });
        return animation;
    }

    SlideDown(component) {
        const animation = gsap.fromTo(component.element, { y: 0 }, {
            y: 100,
            duration: 1,
            immediateRender: false,
            onComplete: this.SetDisplay,
            onCompleteParams: [component, "none"],
        });
        return animation;
    }

    SetDisplay(component, string) {
        gsap.set(component.element, { display: string });
    }

    FadeOut(component, duration) {

        const animation = gsap.to(component.element, {
            opacity: 0,
            duration: duration,
            ease: 'none',
            onComplete: this.SetDisplay,
            onCompleteParams: [component, "none"],
        });
        return animation;
    }

    AnimateOutProject(container, duration) {
        console.log(gsap.utils.toArray(container.children));
        console.log(Array.prototype.slice.call(container.children));
        const array = Array.prototype.slice.call(container.children);
        const animation = gsap.fromTo(array, { x: 0 }, {
            x: -300,

            immediateRender: false,
            duration: duration,

            stagger: {
                each: 0.5,
                from: "edges",
                grid: "auto",
                ease: "Power1.easeOut"
            },
        });
        return animation;
    }
    FadeIn(component, duration) {

        const animation = gsap.to(component.element, {
            opacity: 1,
            duration: duration,
            immediateRender: false,
            onStart: this.SetDisplay,
            onStartParams: [component, component.displayType],
        });
        return animation;
    }
    Test(){
        console.log("Test!");
    }

}

export let animations = new GSAPAnimations();
