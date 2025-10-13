const apiKey = "2917b0fe07973208581e38b805248e29"; 
const cityInput = document.querySelector('#cityInput')
const searchBtn=document.querySelector('#searchBtn');
const cityName=document.querySelector('#cityName');
const weatherIcon=document.querySelector('#weatherIcon');
const temerature = document.querySelector('#temperature')
const condition = document.querySelector('#condition')
const humidity =document.querySelector('#humidity');
const wind = document.querySelector('#wind');

searchBtn.addEventListener('click',function(e){
  const city = cityInput.value.trim()
  if(city===""){
    alert("Enter the City Name")
    return;
  }
  getWeather(city)
  console.log(city);
})
cityInput.addEventListener('keydown',function(event){
  if(event.key==="Enter"){
    getWeather(city)
  }
})

async function getWeather(city){
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${apiKey}&units=metric`;
  try{
    const responce = await fetch(url);
    if(!responce){
      alert()
    return;
    }
    const jsonData = await responce.json();
    updateWeather(jsonData)
  }catch{
    alert(error.message);
  }
}

function updateWeather(jsonData){
  cityName.textContent=`${jsonData.name}`
  temerature.textContent=`🌡️${Math.round(jsonData.main.temp)}°C`
  condition.textContent=`${jsonData.weather[0].main}`
  humidity.textContent=`💧Humidity: ${jsonData.main.humidity}%`
  wind.textContent=`🌬️ Wind: ${jsonData.wind.speed} km/h`
  weatherIcon.src=` https://openweathermap.org/img/wn/${jsonData.weather[0].icon}@2x.png`

  weatherCard.style.display="block"

}