import { ProxyState } from "../AppState.js";
import quoteService from "../Services/QuoteService.js";



function drawQuote() {
    console.log("The Philosopher Says:", ProxyState.quotes);
    let template = ProxyState.quotes.Template
    document.getElementById('quote').innerHTML = template
}
export default class QuoteController {
    constructor() {
        ProxyState.on("quotes", drawQuote);
        this.getQuote()
    }

    getQuote() {
        try {
            quoteService.getQuote()
        }
        catch (error) {
            console.error(error)
        }
    }
}