//For saving DOM ref and specific attributes to use in animations
export class HTMLComponent {

    element;
    name;

    //Current display type
    display;

    //Visible display type
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
