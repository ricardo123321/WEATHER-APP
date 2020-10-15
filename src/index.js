const whData = {
  url: 'http://api.openweathermap.org/data/2.5/weather?q=',
  key: '&APPID=493beaa4e75aec53f0fe7d1a1314c5a4',
}

const button1 = document.querySelector('.button1')

button1.addEventListener('click', () => {
const locat = document.querySelector('.local').value
const {url, key} = whData
const apiUrl = `${url}${locat}${key}`
fetch(apiUrl)
  .then( (data) => (data.json()) )
  .then ( (place) => genHtml(place) )

const genHtml = (data) => {
  console.log(data)
  const locationdiv = document.querySelector('.location')
  if(data.weather === undefined){
    const html = `<h2>City not found</h2>`
    locationdiv.innerHTML = html
  }else{
  const html = `
  <div class='name col-6'>
  <h3>${data.name}</h3>
  <img src=http://openweathermap.org/img/w/${data.weather[0].icon}.png>
  <h3>${data.weather[0].main}</h3>
  </div>
  <div class="details col-6">
  <h4>Temp: ${data.main.temp} fahrenheit</h4>
  <h4>Humidity: ${data.main.humidity}%</h4>
  <h4>pressure: ${data.main.pressure}MB</h4>
  <h4>wind: ${data.wind.speed}mph</h4>
  </div>
  `
  locationdiv.innerHTML = html
  }
}
})

