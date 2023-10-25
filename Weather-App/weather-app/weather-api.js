// Define a constant BASE_URL

const API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const APP_ID = "4d4868265a9bc89f0be1f92c0f698c6c";
const UNITS = "metric"

// Define a constant API_ID

// Define a constant for UNITS

/**
 * This class is responsible to provide method to construct web url and invoke 
 * backend server to get weather report for given city.
 * 
 * Author: Dipanjan Das
 */
class WeatherAPI {

    /**
     * This method is reponsible to construct URL with base URL, user given city name
     * appid and unit using query param.
     * 
     * @param {*} userInput (User given City Name)
     */
    constructURL(userInput) {
        this.apiURL = new URL(API_BASE_URL);
        this.apiURL.searchParams.append("q", userInput);
        this.apiURL.searchParams.append("appid", APP_ID);
        this.apiURL.searchParams.append("units", UNITS);
        console.log(this.apiURL.toString());
    }

    /**
     * This method is responsible to make backend call to get weather report 
     * for given city.
     * 
     * @returns Response message.
     */
    async invokeURL() {
        const responseObj = await fetch(this.apiURL.toString());
        const responseJSON = await responseObj.json();
        return responseJSON;
    }
}

export { WeatherAPI }