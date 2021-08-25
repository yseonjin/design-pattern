import {WeatherObserver} from "../observer/weatherObserver";

export interface WeatherSubject {
    // 정보 제공자가 해야하는일은 구독자 등록, 정보 공지, 구독자 해지
    register: (observer:WeatherObserver) => void;
    notify: () => void;
    delete: (observer:WeatherObserver) => void;
}
