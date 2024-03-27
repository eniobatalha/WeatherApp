export interface WeatherData {
    temp: string;
    description: string;
    condition_slug: string;
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
    time: string;
    city_name: string;
    sunrise: string;
    sunset: string;
}
