import {WeatherSubject} from "../subject/weatherSubject";

export interface Display {
    display: (weatherData: WeatherSubject) => void;
}