export interface WeatherData {
    temp: string;
    description: string;
    forecast: {
        max: string;
        min: string;
        weekday: string;
        rain_probability: string;
        condition: string;
    }[];
    currently: 'dia' | 'noite';
    humidity: string;
    wind_speedy: string;
    date: string;
    city_name: string;
    sunrise: string;
    sunset: string;
}
