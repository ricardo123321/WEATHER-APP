import { genHtml, modiHtml } from './location';

const whData = {
  url: 'http://api.openweathermap.org/data/2.5/weather?q=',
  key: '&APPID=493beaa4e75aec53f0fe7d1a1314c5a4',
};

const button1 = document.querySelector('.button1');

button1.addEventListener('click', () => {
  const locat = document.querySelector('.local').value;
  const { url, key } = whData;
  const apiUrl = `${url}${locat}${key}`;
  fetch(apiUrl)
    .then((data) => (data.json()))
    .then((place) => {
      genHtml(place);
      const button2 = document.querySelector('.button2');
      button2.addEventListener('click', () => {
        const button2 = document.querySelector('.button2');
        if (button2.textContent === 'Fahrenheit') {
          const result = (place.main.temp - 32) / 1.8;
          modiHtml(`${result}`);
        } else {
          modiHtml(`${place.main.temp}`);
        }
      });
    });
});