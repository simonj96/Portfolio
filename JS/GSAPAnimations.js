import { gsap } from "https://cdn.skypack.dev/gsap";
import { CSSPlugin } from "https://cdn.skypack.dev/gsap/CSSPlugin.js"
import { HTMLComponent } from "./HTMLComponent.js";

gsap.registerPlugin(CSSPlugin);
//OBS!! not currently in use due to gsap cdn servers going down lol.
//Custom GSAP animations.
export class GSAPAnimations {

    constructor() { }

    SlideOutLeft(component, duration) {
        const animation = gsap.fromTo(component, { x: 0 }, {

            x: "-100vw",
            immediateRender: false,
            duration: duration,

            stagger: {
                each: 0.1,
                from: "edges",
                grid: "auto",
                ease: "Power1.easeOut"
            },
            //onComplete: function () { this.time(0).kill(); }
        });
        return animation;
    }

    SlideIn(component, duration) {

        const use = component instanceof HTMLComponent ? component.element : component;

        const animation = gsap.fromTo(use, {
            x: () => - window.innerWidth
        }, {
            x: 0,
            immediateRender: true,

            duration: duration,
            ease: "Power1.easeOut",
        });

        return animation;
    }

    ExpandIn(component, duration) {
        const animation = gsap.fromTo(component.element, { x: "100vw" }, {
            x: 0,
            duration: duration,
            ease: "Power1.easeOut",

        });

        return animation;
    }

    SetDisplay(component, string) {
        const use = component instanceof HTMLComponent ? component.element : component;
        gsap.set(use, { display: string === undefined ? "block" : string });
    }

    SetWidth(component, width) {
        const use = component instanceof HTMLComponent ? component.element : component;
        gsap.set(use, { width: width, minWidth: width });
    }

    SetPosition(component, position) {
        const use = component instanceof HTMLComponent ? component.element : component;
        gsap.set(use, { position: position, immediateRender: false, });
    }

    Blur(component, blur) {
        const use = component instanceof HTMLComponent ? component.element : component;
        gsap.set(use, { filter: blur, duration: 1 });
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

        const use = component instanceof HTMLComponent ? component.element : component;

        const animation = gsap.to(use, {
            opacity: 1,
            duration: duration,
            immediateRender: false,
            onStart: this.SetDisplay,
            onStartParams: [component, component.displayType],
        });
        return animation;
    }

    FadeOut(component, duration) {

        const use = component instanceof HTMLComponent ? component.element : component;

        const animation = gsap.to(use, {
            opacity: 0,
            duration: duration,
            immediateRender: false,
            ease: "Power1.easeOut",
            onComplete: this.SetDisplay,
            onCompleteParams: [component, "none"],
        });
        return animation;
    }

    onReverse(func, onlyAfterComplete) {
        let time = 0,
            reversed;
        return function () {
            let t = this.time(),
                r = t < time;
            r && !reversed && (!onlyAfterComplete || time === this.duration()) && func.call(this);
            time = t;
            reversed = r;
        };
    }

}

export let animations = new GSAPAnimations();
