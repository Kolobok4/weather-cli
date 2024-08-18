import axios from 'axios';
import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js'

const getIcon = (icon) => {
    switch (icon) {
        case '01d':
            return '☀️';
        case '01n':
            return '🌙';
        case '02d':
            return '⛅';
        case '02n':
            return '⛅';
        case '03d':
        case '03n':
            return '☁️';
        case '04d':
        case '04n':
            return '☁️';
        case '09d':
        case '09n':
            return '🌧️';
        case '10d':
        case '10n':
            return '🌦️';
        case '11d':
        case '11n':
            return '🌩️';
        case '13d':
        case '13n':
            return '❄️';
        case '50d':
        case '50n':
            return '🌫️';
        default:
            return '🤷‍';
    }
};

const getWeather = async (city) => {
    const token = process.env.TOKEN ?? await getKeyValue(TOKEN_DICTIONARY.token);
    if (!token) {
        throw new Error(' No set API_KEY ')
    }
    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: token,
            lang: 'ua',
            units: 'metric'
        }
    })
    return data;
};

export { getWeather, getIcon };
