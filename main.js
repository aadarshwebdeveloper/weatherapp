  
  
  
  
  let weather_icon = document.getElementById('weather_icon');
  
  weather_icon.classList.add("hide");
 function hi(){
   
   
   let input = document.getElementById('input').value;
   
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=4773fba74183cda39fffba0be46b29fb`).then(data=>{
  return data.json();
}).then(data1=>{
  console.log(data1);
  console.log(data1.name);
  
  
  
  let temp_div = document.getElementById('temp');
  
  let city_div = document.getElementById('city');
  
  let description_div = document.getElementById('desc');
  
  let weather_icon = document.getElementById('weather_icon');
  
  weather_icon.classList.remove("hide");
  
  let humidity = document.getElementById('humidity');
  
  
  let pressure = document.getElementById('pressure');
  
  let feel = document.getElementById('feel');
  
  
  
  let name = data1.name;
  let temp = data1.main.temp;
  let desc = data1.weather[0].description;
  let windspeed = data1.wind.speed;
  let humid = data1.main.humidity;
  let press = data1.main.pressure;
  let feels_like = data1.main.feels_like;
  let weather_id = data1.weather[0].icon;
    
  let weather_id_url = `http://openweathermap.org/img/wn/${weather_id}@2x.png`;  
  let err = data1.message;
  
    console.log(err);
    console.log(weather_id_url);
  
  weather_icon.src = weather_id_url;
 temp_div.innerHTML = temp + "°C";
 city_div.innerHTML = name + "°";
 description_div.innerHTML = "Weather : " + desc;
 humidity.innerHTML = "Humidity : " + humid + "%";
 pressure.innerHTML = "Pressure : " +  press + " hPa";
 feel.innerHTML = "feels_like " + feels_like +  " °C";
})


   



   
  
      
});





 }


// `` 4773fba74183cda39fffba0be46b29fb
 
