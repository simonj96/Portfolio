//For hooking up html stuff

//Import CustomAnimations?
export class ProjectInformation {

    elements = [];

    constructor(component, project) {

        if (project == "Project 1") {
            this.Title("Test title.");
            this.Image("../Projects/Images/test.jpg");
            this.Text("This is a testing text.");
            //this.ReturnButton();
        }


        for (let i = 0; i < this.elements.length; i++) {
            component.element.appendChild(this.elements[i]);
        }



    }

    Title(string) {
        const text = document.createElement("h1");
        text.classList.add("readingTitle");
        text.innerHTML = string;
        this.elements.push(text);
    }
    Text(string) {
        const text = document.createElement("p");
        text.classList.add("mainText");
        text.innerHTML = string;
        this.elements.push(text);
    }

    Image(src) {
        const img = document.createElement("IMG");
        img.classList.add("container_img");
        img.src = src;
        this.elements.push(img);
    }

    ReturnButton() {
        const container = document.createElement("div");
        container.classList.add("btns");
        const btn = document.createElement("button");
        btn.id = "return";
        btn.className = "btns_return";
        btn.innerHTML = "RETURN";
        container.appendChild(btn);
        this.elements.push(container);
    }
}
