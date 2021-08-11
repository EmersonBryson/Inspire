export default class Weather {
    constructor(data) {
        console.log('[RAW WEATHER API DATA]', data);
        this.city = data.name
        this.kelvin = data.main.temp
        this.icon = data.weather[0].icon
        this.description = data.weather[0].description
        this.farenheit = Math.floor(data.main.temp * 9 / 5 - 459.67)
        this.celcius = Math.floor(data.main.temp - 273.15)
    }

    get Template() {
        return `
    <div class="col text-center">
    <h2 class="text-strong fancyfont">${this.city}</h2>
    <h2><span id="temptype">${this.farenheit}</span>&#176 <span id="templetter">F</span></h2>
    <h5 class= "text-strong fancyfont"style="text-transform: uppercase">${this.description}</h5>
    <p class= "text-strong" style="cursor: pointer;text-transform: uppercase"onclick="app.weatherController.tempToggle('F')">Farenheit <span>|</span></p>
    <p class="text-strong" style="cursor:pointer; text-transform: uppercase"onclick="app.weatherController.tempToggle('C')">Celcius</p> 
    </div>
    `

    }

}