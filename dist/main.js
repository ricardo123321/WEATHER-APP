(()=>{"use strict";const e={url:"http://api.openweathermap.org/data/2.5/weather?q=",key:"&APPID=493beaa4e75aec53f0fe7d1a1314c5a4"};document.querySelector(".button1").addEventListener("click",(()=>{const n=document.querySelector(".local").value,{url:t,key:a}=e;fetch(`${t}${n}${a}`).then((e=>e.json())).then((e=>(e=>{const n=document.querySelector(".location");if(void 0===e.weather){const e="<h2>City not found</h2>";n.innerHTML=e}else{const t=`\n  <div class='name col-6'>\n  <h3>${e.name}</h3>\n  <img src=http://openweathermap.org/img/w/${e.weather[0].icon}.png>\n  <h3>${e.weather[0].main}</h3>\n  </div>\n  <div class="details col-6">\n  <h4>Temp: ${e.main.temp} fahrenheit</h4>\n  <h4>Humidity: ${e.main.humidity}%</h4>\n  <h4>pressure: ${e.main.pressure}MB</h4>\n  <h4>wind: ${e.wind.speed}mph</h4>\n  </div>\n  `;n.innerHTML=t}})(e)))}))})();