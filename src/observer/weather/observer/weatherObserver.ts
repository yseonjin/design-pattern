export interface WeatherObserver {
    // 구독서비스가 제공해야하는 기능
    update: (temperature: number, humid: number, pressure: number) => void;
}