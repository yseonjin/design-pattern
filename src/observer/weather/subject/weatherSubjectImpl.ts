import {WeatherSubject} from "./weatherSubject";
import {WeatherObserver} from "../observer/weatherObserver";

export class WeatherSubjectImpl implements WeatherSubject {
    // 제공자가 가지고 있어야 하는 정보 : 구독자정보 (Observer 로 통일된 형태), 온도, 습도, 압력
    private observers: Array<WeatherObserver> = [];
    private temperature: number = 0;
    private humid: number = 0;
    private pressure: number = 0;

    delete(observer: WeatherObserver): void {
        let index: number = this.observers.indexOf(observer);
        if (index > 0) {
            this.observers.splice(index, 1);
        }
    }

    notify(): void {
        this.observers.forEach(observer => {
            observer.update(this.temperature, this.humid, this.pressure);
        });
    }

    register(observer: WeatherObserver): void {
        this.observers.push(observer);
    }

    // 측정값이 바뀌면 새로 공지
    measurementChanged(): void {
        this.notify();
    }

    // 측정값이 새로 들어오면 값을 받아서 측정값 변경 호출
    setMeasurements(temperature: number, humid: number, pressure: number) {
        this.temperature = temperature;
        this.humid = humid;
        this.pressure = pressure;
        this.measurementChanged();
    }

}