import { WeatherAPI } from "./weather-api.js";

/**
 * This method tests constructURL() method.
 */
function testConstructURL() {

    const weatherAPIObj = new WeatherAPI();
    weatherAPIObj.constructURL("Mumbai");

}

/**
 * This method tests invokeURL() method.
 */
async function testInvokeURL() {

    const weatherAPIObj = new WeatherAPI();

    weatherAPIObj.constructURL("Mumbai");

    const responseJSON = await weatherAPIObj.invokeURL();
    // weather-object create
    // responseJSON invokeURL()

    console.log(responseJSON);
}

// testConstructURL();

testInvokeURL();