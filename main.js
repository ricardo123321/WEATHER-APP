(()=>{"use strict";const e=e=>{const t=document.querySelector(".temper"),n=document.querySelector(".button2");"Celsius"===n.textContent?(n.textContent="Fahrenheit",t.innerHTML=e):(n.textContent="Celsius",t.innerHTML=e)},t={url:"http://api.openweathermap.org/data/2.5/weather?q=",key:"&APPID=493beaa4e75aec53f0fe7d1a1314c5a4"};document.querySelector(".button1").addEventListener("click",(()=>{const n=document.querySelector(".local").value,{url:o,key:r}=t;fetch(`${o}${n}${r}`).then((e=>e.json())).then((t=>{(e=>{const t=document.querySelector(".location");if(void 0===e.weather){const e="<h2>City not found</h2>";t.innerHTML=e}else{const n=`\n  <div class='name col-6'>\n  <h3>${e.name}</h3>\n  <img src=http://openweathermap.org/img/w/${e.weather[0].icon}.png>\n  <h3>${e.weather[0].description}</h3>\n  </div>\n  <div class="details col-6">\n  <h4>Temp: <span class='temper'>${e.main.temp}</span> <button class="button2">Fahrenheit</button></h4>\n  <h4>Humidity: ${e.main.humidity}</h4>\n  <h4>pressure: ${e.main.pressure}MB</h4>\n  <h4>wind: ${e.wind.speed}mph</h4>\n  </div>\n  `;t.innerHTML=n}})(t),document.querySelector(".button2").addEventListener("click",(()=>{if("Fahrenheit"===document.querySelector(".button2").textContent){const n=(t.main.temp-32)/1.8;e(""+n)}else e(""+t.main.temp)}))}))}))})();