import * as THREE from 'three';
import { loader } from './Loader.js';

export class Display {

    mesh;
    background;

    //Textures
    defaultTexture;
    partyTexture;
    workshiftTexture;
    portfolioTexture;
    masterTexture;

    static TEXTURE = {
        DEFAULT: 0,
        PARTY: 1,
        WORKSHIFT: 2,
        PORT: 3,
        MASTER: 4,
        ANDROID: 5,
    }

    tValues = {
        WIDTH: 2,
        HEIGHT: 1.05,
    }

    constructor() {
        this.init();
    }

    init() {

        this.LoadDisplayTextures();

        const geometry = new THREE.PlaneGeometry(this.tValues.WIDTH, this.tValues.HEIGHT);
        const material = new THREE.MeshBasicMaterial({});

        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.position.y = 3.64;
        this.mesh.position.x = 1.02;
        this.mesh.position.z = -3.03;
        this.mesh.rotation.y = -0.24;
        this.mesh.rotation.x = -0.01;

    }

    LoadDisplayTextures() {

        this.textureLoader = new THREE.TextureLoader(loader);
        this.defaultTexture = this.textureLoader.load('../Projects/Images/default.png');
        this.partyTexture = this.textureLoader.load('../Projects/Images/party.png');
        this.workshiftTexture = this.textureLoader.load('../Projects/Images/workshift.png');
        this.portfolioTexture = this.textureLoader.load('../Projects/Images/portfolio.png');
        this.masterTexture = this.textureLoader.load('../Projects/Images/master.png');

    }

    SetDisplay(int) {

        var texture;

        switch (int) {
            case Display.TEXTURE.PARTY:
                texture = this.partyTexture;
                break;
            case Display.TEXTURE.WORKSHIFT:
                texture = this.workshiftTexture;
                break;
            case Display.TEXTURE.PORT:
                texture = this.portfolioTexture;
                break;
            case Display.TEXTURE.MASTER:
                texture = this.masterTexture;
                break;
            case Display.TEXTURE.ANDROID:
                texture = this.masterTexture;
                break;
            default:
                texture = this.defaultTexture;
        }

        texture.encoding = THREE.sRGBEncoding;

        this.mesh.material = new THREE.MeshBasicMaterial({ map: texture });
    }

}
export let display = new Display();


