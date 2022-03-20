export interface IWeather {
    id: number;
    main: number;
    description: string;
    icon: string;
}

export interface IMain {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
}

export class CityWeatherModel {

    id: number | any;
    name: string | any;
    weather: IWeather | any;
    main: IMain | any;

}
