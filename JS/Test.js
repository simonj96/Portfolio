import * as THREE from 'three';

class Test {

    testVariable;

    constructor() {
        console.log("Created new Test class.")
    }

    TestFunction() {
        console.log(this.testVariable);
    }

    set testVariable(set) {
        this.testVarible = set;
    }

    get testVariable() {
        return this.testVarible;

    }
}

var test = new Test();

export default test;

