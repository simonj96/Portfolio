//For hooking up html stuff

//Import CustomAnimations?
export class HTMLComponent {

    element;
    name;
    display;
    //For reverting.
    displayType;

    constructor(element, displayType) {
        this.element = element;
        this.displayType = displayType

    }

    get display() {
        return this.display;
    }

    set display(value) {
        this.display = value;
        this.element.style.display = value;
    }
    get element() {
        return this.element;
    }
    set element(value) {
        this.element = value;
    }
}
