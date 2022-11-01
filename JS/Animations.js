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

        //Projectbanners
        this.protoBanner = document.getElementById("banner1");
        this.thesisBanner = document.getElementById("banner2");
        this.portfolioBanner = document.getElementById("banner3");
    }

    OnLoaded() {

        this.FadeOut(this.ring);
        this.FadeIn(this.main);

        setTimeout(() => { this.AllowScroll() }, 1000);
        setTimeout(() => { this.overlay.style.opacity = 0; }, 1000);
        setTimeout(() => { this.FadeIn(this.scroller); }, 2000);
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
        this.ShowBanner();
        this.currentProject.classList.remove('hide');
        this.FadeIn(this.currentProject);
    }

    ShowBanner() {
        if (!this.currentProject) {
            return;
        }
        switch (this.currentProject.id) {
            case "masterProject":
                this.thesisBanner.classList.remove('hide');
                break;
            case "portfolioProject":
                this.portfolioBanner.classList.remove('hide');
                break;
            case "partyProject":
                this.protoBanner.classList.remove('hide');
                break;

            default:

                break;
        }
    }

    HideBanners() {
        this.thesisBanner.classList.add('hide');
        this.portfolioBanner.classList.add('hide');
        this.protoBanner.classList.add('hide');
    }


    CloseProject() {

        this.FadeOut(this.button);

        setTimeout(() => {
            this.currentProject.classList.add('hide');
            this.project.classList.add('hide');
            this.HideBanners();
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
            this.top.style.opacity = 0.7;
            this.top.style.cursor = "pointer";
        } else {
            this.top.style.opacity = 0;
            this.top.style.cursor = "auto";
        }
    }


    ShowUI(boolean) {
        if (boolean) {

            this.navbar.style.opacity = 0.7
            this.footer.style.opacity = 0.7

        } else {
            this.navbar.style.opacity = 0;
            this.footer.style.opacity = 0;

        }

    }

}

export let animations = new Animations();
