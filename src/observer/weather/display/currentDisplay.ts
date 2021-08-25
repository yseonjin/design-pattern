import {Display} from "./display";
import {WeatherObserver} from "../observer/weatherObserver";
import {WeatherSubject} from "../subject/weatherSubject";

export class currentDisplay implements Display, WeatherObserver {
    // display 하기위해 필요한 정보 : weatherData
    display(weatherData: WeatherSubject): void {

    }

    update(temperature: number, humid: number, pressure: number): void {
    }

}