import { projectContainer } from "./HTMLHandler.js";

//Import CustomAnimations?
class ProjectInformation {

    elements = [];
    project1 = [];
    project2;


    constructor() {

        
        project1.push(this.Title("Test title."));
        project1.push(this.Image("../Projects/Images/test.jpg"));
        project1.push(this.Text("This is a testing text."));
        //this.ReturnButton();
        


       /* for (let i = 0; i < this.elements.length; i++) {
            component.element.appendChild(this.elements[i]);
        }*/



    }

    Title(string) {
        const text = document.createElement("h1");
        text.classList.add("readingTitle");
        text.innerHTML = string;
        return text;
    }
    Text(string) {
        const text = document.createElement("p");
        text.classList.add("mainText");
        text.innerHTML = string;
        return text;
    }

    Image(src) {
        const img = document.createElement("IMG");
        img.classList.add("container_img");
        img.src = src;
        return img;
    }

    ReturnButton() {
        const container = document.createElement("div");
        container.classList.add("btns");
        const btn = document.createElement("button");
        btn.id = "return";
        btn.className = "btns_return";
        btn.innerHTML = "RETURN";
        container.appendChild(btn);
        return container;
    }
}

export let info = new ProjectInformation();
export let project1 = info.project1;