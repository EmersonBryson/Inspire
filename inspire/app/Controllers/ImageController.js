import { ProxyState } from "../AppState.js";
import imageService from "../Services/ImageService.js";



function drawImage() {
    console.log("Drawing Background", ProxyState.images);
    let template = ProxyState.images.url
    console.log(template)
    document.getElementById("backgroundImage").style.background = "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0,0,0,0.5)), url("
        + template + ")";
    document.getElementById("backgroundImage").style.backgroundSize = "cover"
}

export default class ImageController {
    constructor() {
        ProxyState.on("images", drawImage);
        this.getImage()
    }

    getImage() {
        try {
            imageService.getImage()
        }
        catch (error) {
            console.error(error)
        }
    }
}