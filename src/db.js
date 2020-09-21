import imgConverterMobile from './img/currencyconverter-mobile-t.png'
import imgConverter from './img/currencyconverter.png'
import imgWeatherMobile from './img/weather-mobile-t.png'
import imgWeather from './img/weather.png'

const projects = [
    {
      'id': 1,
      'title': 'Currency Converter',
      'info': `The application for currency conversion and 
      exchange rates analysis. The 
      application uses 
      exchangeratesapi.io service 
      which provides data published 
      by European Central Bank. `,
      'tech': ['Angular 9', 'HTML5', 'CSS', 'SASS', 
              'JS', 'Rest API', 'Typescript', 'NG Bootstrap 6.1.0', 'ng2-charts 2.3.2',
              'Chart.js 2.9.3'],
      'links': {'github': 'https://github.com/irynapohrebniuk/currency-converter', 
                'firebase': 'https://currency-converter-pohrebniuk.web.app/'},
      'imgMobile': imgConverterMobile,
      'img': imgConverter
    },
    {
      'id': 2,
      'title': 'Weather Forecast',
      'info': `The application for visual presentation of 
      weather forecast based on data 
      from openweathermap.org. `,
      'tech': ['Angular 9', 'HTML5', 'CSS', 'SASS', 'Typescript', 'Rest API'],
      'links': {'github': 'https://github.com/irynapohrebniuk/weather-forecast', 
                'firebase': 'https://weather-forecast-5b7d8.web.app/'},
      'imgMobile': imgWeatherMobile,
      'img': imgWeather
    }
  ]

  export  { projects }