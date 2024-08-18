import chalk from 'chalk';
import dedent from 'dedent-js';
import {getTimestamp} from './storage.service.js";

const printError = (error) => {
  console.log(chalk.bgRed(' ERROR ') + ' ' + error);
};

const printSuccess = (message) => {
    console.log(chalk.bgGreen(' SUCCESS ') + ' ' + message);
};

const printHelp = () => {
    console.log(
        dedent`${chalk.bgBlue(' Help ')} 
        -s [CITY] Search for a city
        -h Print this help message
        -t [API_KEY] Set the API key
        `
    );
};

const printWeather = (res, icon) => {
    console.log(
        dedent`${chalk.bgBlue(' WEATHER ')} Погода в місті: ${res.name}
        ${icon} ${res.weather[0].description}
        Схід сонця: ${getTimestamp(res.sys.sunrise)} 
        Захід сонця: ${getTimestamp(res.sys.sunset)}
        Температура: ${Math.round(res.main.temp)}°C (відчувається як ${Math.round(res.main.feels_like)}°C)
        Вологість: ${res.main.humidity}%
        `
    );
}

export { printError, printSuccess, printHelp, printWeather };
