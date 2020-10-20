const genHtml = (data) => {
  const locationdiv = document.querySelector('.location');
  if (data.weather === undefined) {
    const html = '<h2>City not found</h2>';
    locationdiv.innerHTML = html;
  } else {
    const html = `
  <div class='name col-6'>
  <h3>${data.name}</h3>
  <img src=http://openweathermap.org/img/w/${data.weather[0].icon}.png>
  <h3>${data.weather[0].description}</h3>
  </div>
  <div class="details col-6">
  <h4>Temp: <span class='temper'>${data.main.temp}</span> <button class="button2">Fahrenheit</button></h4>
  <h4>Humidity: ${data.main.humidity}</h4>
  <h4>pressure: ${data.main.pressure}MB</h4>
  <h4>wind: ${data.wind.speed}mph</h4>
  </div>
  `;
    locationdiv.innerHTML = html;
  }
};

const modiHtml = (info) => {
  const temph4 = document.querySelector('.temper');
  const button2 = document.querySelector('.button2');
  if (button2.textContent === 'Celsius') {
    button2.textContent = 'Fahrenheit';
    temph4.innerHTML = info;
  } else {
    button2.textContent = 'Celsius';
    temph4.innerHTML = info;
  }
};

export { genHtml, modiHtml };