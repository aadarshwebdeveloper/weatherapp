
 function hi(){
   
   
   let input = document.getElementById('input').value;
   
let a = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=4773fba74183cda39fffba0be46b29fb`).then(data=>{
  return data.json();
}).then(data1=>{
  console.log(data1);
  console.log(data1.name);
  
  
  
  let temp_div = document.getElementById('temp');
  
  let city_div = document.getElementById('city');
  
  let description_div = document.getElementById('desc');
  
  
  let humidity = document.getElementById('humidity');
  
  
  let pressure = document.getElementById('pressure');
  
  let name = data1.name;
  let temp = data1.main.temp;
  let desc = data1.weather[0].description;
  let windspeed = data1.wind.speed;
  let humid = data1.main.humidity;
  let press = data1.main.pressure;
  
  
 temp_div.innerHTML = temp + "°C";
 city_div.innerHTML = name + "°";
 description_div.innerHTML = "Weather : " + desc;
 humidity.innerHTML = "Humidity : " + humid + "%";
 pressure.innerHTML = "Pressure : " +  press + " atm.";
});





 }


// `` 4773fba74183cda39fffba0be46b29fb
 