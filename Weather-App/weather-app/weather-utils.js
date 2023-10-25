/**
 * This class is responsible to provide method to convert full response message to
 * filtered JSON message with required fields.
 * 
 * Author: Dipanjan Das
 */
class WeatherUtils {

    /**
     * This method is responsible to convert full JSON response to filtered JSON message
     * where required fields are available.
     * 
     * @param {*} responseJSON full response from server.
     * @returns filtered JSON message for UI.
     */
    static convertResponse(responseJSON) {
        const weatherResponse = {
            LOCATION_PLACE: `${responseJSON.name}, ${responseJSON.sys.country}`,
            DATE: WeatherUtils.getDate(),
            TEMPERATURE: responseJSON.main.temp,
            TEMPERATURE_TYPE: responseJSON.weather[0].main,
            LOW_TEMPERATURE: responseJSON.main.temp_min,
            HIGH_TEMPERATURE: responseJSON.main.temp_max
        }
        return weatherResponse;
    }

    /**
     * This method is responsible to provide local data string.
     * 
     * @returns Local Date String
     */
    static getDate() {
        const today = new Date();
        return today.toLocaleDateString("us-US", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        })
    }
}

export { WeatherUtils }