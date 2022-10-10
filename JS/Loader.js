import * as THREE from 'three';
class Loader {

    loadingManager;
    status = false;

    constructor() {
        this.loadingManager = new THREE.LoadingManager();

        this.loadingManager.onProgress = function (item, loaded, total) {
            //console.log("Progress Update: " + item, loaded, total);
        };

        this.loadingManager.onLoad = function () {
            console.log("Default.");
        };

        return this.loadingManager;
    }
}
export let loader = new Loader();