import imgConverterMobile from './img/converter-project-mobile.png'
import imgConverter from './img/converter-project-desktop.png'
import imgWeatherMobile from './img/weather-project-mobile.png'
import imgWeather from './img/weather-project-desktop.png'
import imgSpa from './img/spa-project-desktop.png'
import imgSpaMobile from './img/spa-project-mobile.png'
import imgSpaPreview from './img/spa-preview.png'
import imgWeatherPreview from './img/weather-preview.png'
import imgConverterPreview from './img/converter-preview.png'
import imgPortfolioPreview from './img/spa-preview.png'
import imgPortfolio from './img/portfolio-project-desktop.png'

const projects = [
  {
    'id': 1,
    'pl': {
      'title': 'Kalkulator walutowy',
      'info': `Web-aplikacja do konwertacji walut z użyciem Rest API korzystajca z danych
       European Central Bank.
       Funkcje aplikacji:
       - Konwersja walut
       - Tabela aktualnych kursów walut dla najpopularniejszych walut
       - Historyczne kursy walut za ostatnie 7 dni, 1 miesiąc, 1 rok i 5 lat
       - Diagram liniowy dla danych historycznych
       - Tabela cross-kursów
        `,
    },
    'en': {
      'title': 'Currency Convetrer',
      'info': ``,
    },
    'tech': ['Angular', 'HTML5', 'CSS', 'SASS', 'RWD',
        'JS', 'Rest API', 'Typescript', 'NG Bootstrap 6.1.0', 'ng2-charts 2.3.2',
        'Chart.js 2.9.3'],
    'links': {
      'github': 'https://github.com/irynapohrebniuk/currency-converter',
      'firebase': 'mnjkbjb'
    },
    'imgMobile': imgConverterMobile,
    'img': imgConverter,
    'imgPreview': imgConverterPreview
  },
  {
    'id': 2,
    'pl': {
      'title': 'Prognoza pogody',
      'info': `Web-aplikacja do reprezentacji prognozy pogody z użyciem Rest API pobierajáca dane z openweathermap.org. `,
      'tech': ['Angular', 'HTML5', 'CSS', 'SASS', 'Typescript', 'RWD', 'Rest API'],
    },
    'en': {
      'title': 'Weather Forecast',
      'info': `The application for visual presentation of weather forecast based on data from openweathermap.org. `,
    },
    'tech': ['Angular', 'HTML5', 'CSS', 'SASS', 'Typescript', 'RWD', 'Rest API'],
    'links': {
      'github': 'https://github.com/irynapohrebniuk/weather-forecast',
      'firebase': 'https://weather-forecast-5b7d8.web.app/'
    },
    'imgMobile': imgWeatherMobile,
    'img': imgWeather,
    'imgPreview': imgWeatherPreview
  },
  {
    'id': 3,
    'pl': {
      'title': 'Portfolio',
      'info': `Web-aplikacja z projektami`,
    },
    'en': {
      'title': 'Portfolio',
      'info': `The website with projects`,
    },
    'tech': ['React', 'HTML5', 'CSS', 'SASS', 'JavaScript', 'RWD', 'Styled Components'],
    'links': {
      'github': 'https://github.com/irynapohrebniuk/javajutsu',
      'firebase': 'https://javajutsu.org/'
    },
    'imgMobile': imgWeatherMobile,
    'img': imgPortfolio,
    'imgPreview': imgPortfolioPreview
  },
  {
    'id': 4,
    'pl': {
      'title': 'SPA',
      'info': `Aplikacja Single Page Application dla ośrodka SPA dedykowanego programistom.
      Aplikacja umożliwia:
      Wybór daty przyjazdu i wyjazdu oraz pokoju
      Dodawanie pokoju do koszyka
      Przeglądanie dostępnych zabiegów
      Dodawanie wybranych zabiegów do koszyka
      Rejestrację użytkownika
      Logowanie użytkownika
      Podsumowanie składanego zamówienia`,
      },
    'en': {
      'title': 'SPA',
      'info': `Single page application for programmers.
        Functionality: 
        Book the the room and the treatment
        Add rooms and treatments to the cart
        Looking for available rooms in the chosen period
        User's login and signup 
        View the order`,
      },
    'tech': ['Vanilla JS', 'HTML5', 'CSS', 'SASS', 'JavaScript', 'RWD', 'Bootstrap 4', ' jQuery'],
    'links': { 'github': 'https://github.com/irynapohrebniuk/spa-for-programmers' },
    'imgMobile': imgSpaMobile,
    'img': imgSpa,
    'imgPreview': imgSpaPreview
  }
]

export { projects }