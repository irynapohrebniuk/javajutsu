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
      'info': `Web application to convert currencies using Rest API from European Central Bank.
      Application Features:
      - Currency conversion
      - Table of current exchange rates for the most popular currencies
      - Historical exchange rates for the last 7 days, 1 month, 1 year and 5 years
      - Line diagram for historical data
      - Cross-currencies table`,
    },
    'ru': {
      'title': 'Конвертор валют',
      'info': `Веб-приложение для конвертации валют на основе данных
      Европейского центрального банка.
      Особенности применения:
      - Обмен валюты
      - Таблица текущих обменных курсов самых популярных валют
      - Исторические обменные курсы за последние 7 дней, 1 месяц, 1 год и 5 лет
      - Линейная диаграмма для исторических данных
      - Таблица кросс-курсов`,
    },
    'tech': ['Angular', 'HTML5', 'CSS', 'SASS', 'RWD',
      'JS', 'Rest API', 'Typescript', 'NG Bootstrap 6.1.0', 'ng2-charts 2.3.2',
      'Chart.js 2.9.3'],
    'links': {
      'github': 'https://github.com/irynapohrebniuk/currency-converter',
      'firebase': 'https://currency-converter-pohrebniuk.web.app'
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
    'ru': {
      'title': 'Прогноз погоды',
      'info': `Приложение для визуального представления прогноза погоды на основе данных openweathermap.org.`,
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
    'ru': {
      'title': 'Портфолио',
      'info': `Веб-приложение с реализованными проектами`,
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
    'ru': {
      'title': 'SPA для программистов',
      'info': `Одностраничное веб-приложение для программистов.
        Функциональность:
        Бронирование комнаты и процедур
        Добавление комнаты и процедуры в корзину
        Поиск свободных номеров в выбранный период
        Вход и регистрация пользователя
        Итог заказа`,
    },
    'tech': ['Vanilla JS', 'HTML5', 'CSS', 'SASS', 'JavaScript', 'RWD', 'Bootstrap 4', ' jQuery'],
    'links': { 'github': 'https://github.com/irynapohrebniuk/spa-for-programmers' },
    'imgMobile': imgSpaMobile,
    'img': imgSpa,
    'imgPreview': imgSpaPreview
  }
]

const menuItems = {
  "en": ['Projects', 'About', 'Contact'],
  "pl": ['Projekty', 'O mnie', 'Kontakt'],
  "ru": ['Проекты', 'Обо мне', 'Контакты']
}

const subMenuItems = {
 "en": ['All', 'React', 'Angular', 'Vanilla JS'],
 "pl": ['Wszystkie','React', 'Angular', 'Vanilla JS'],
 "ru": ['Все', 'React', 'Angular', 'Vanilla JS']
}

export { projects, menuItems, subMenuItems }