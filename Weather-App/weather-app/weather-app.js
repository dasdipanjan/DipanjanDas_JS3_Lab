import { WeatherAPI } from "./weather-api.js";
import { WeatherUtils } from "./weather-utils.js";

/**
 * This class is add listeners to different UI element and it also capture
 * user given city name from input element and makes call to backend to 
 * get weather report of given city and after that it shows data on UI.
 * 
 * Author: Dipanjan Das.
 */
class WeatherApp {

    /**
     * This method is reponsible to initialize the application.
     */
    init() {
        this.addListener()
    }

    /**
     * This method is reponsible to add key pressed listener to search box.
     * After user input when user press enter key then it makes call to backend 
     * and populate data from backend and shows data on UI.
     */
    addListener() {

        const searchTextField = document.querySelector(".search-box");

        searchTextField.addEventListener("keypress", (event) => {

            const keyCode = event.keyCode;

            if (keyCode == 13) {
                // ENTER
                const userInput = event.target.value;
                const weatherAPIObj = new WeatherAPI();
                weatherAPIObj.constructURL(userInput);
                weatherAPIObj.invokeURL()
                    .then((responseJSON) => {
                        const responseObj = WeatherUtils.convertResponse(responseJSON);
                        // Location Element
                        const locationElement = document.querySelector(".location .city")
                        locationElement.innerText = responseObj.LOCATION_PLACE;
                        // Date Element
                        const dateElement = document.querySelector(".location .date")
                        dateElement.innerText = responseObj.DATE;
                        // Temperature Element
                        const temperatureElement = document.querySelector(".current .temp")
                        temperatureElement.innerText = responseObj.TEMPERATURE;
                        // TemperatureType Element
                        const temperatureTypeElement = document.querySelector(".current .weather")
                        temperatureTypeElement.innerText = responseObj.TEMPERATURE_TYPE;
                        // TemperatureType Element
                        const lowHighTempElement = document.querySelector(".current .hi-low")
                        lowHighTempElement.innerText = `${responseObj.LOW_TEMPERATURE} / ${responseObj.HIGH_TEMPERATURE}`
                    });
            }
        })
    }
}

export { WeatherApp }