var button = document.querySelector(".search")
var inputValue = document.querySelector('.input')
var savedCities= document.querySelector('.history')


function get5DaysForecast(apiResponse) {
   return apiResponse.list.reduce(function(days,current) {
       var currentDate=current.dt_txt.split(" ")[0];
       if(!days.find(function(day) {
           return day.dt_txt.includes(currentDate);
       })) {
           return [...days,current];
       }
       return days;
   },[])
}

function getCoordinates(cityName){ 
fetch('https://api.openweathermap.org/geo/1.0/direct?q='+cityName+'&appid=0f9b2277a81917aa8d1fdf73b2af274e')
 .then (function (response){
    return response.json();
 })
 .then(function(data){
    console.log("results" ,data) 
   //getForecast(data)
   var lat= data[0].lat
   var lon = data[0].lon
   getForecast(lat,lon)
   });


}


button.addEventListener('click',function(){
   console.log(inputValue.value)
   getCoordinates(inputValue.value)
});



function getForecast(lat,lon){
   
   console.log(lat)
   fetch('https://api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+lon+'&appid=0f9b2277a81917aa8d1fdf73b2af274e&units=imperial')
   .then (function (response){
      return response.json();
   })
   .then(function(data){
     var forecast=get5DaysForecast(data)
      console.log(forecast) 
      console.log(forecast[0].main.temp);

      var day1wind = forecast[0].wind.speed
      var day1hum = forecast[0].main.humidity
      var day1temp =forecast[0].main.temp
      document.getElementById("day1").innerHTML="Temperature: " + day1temp  + "  Wind Speed: " + day1wind + " Mph"
      + " Humidity: " + day1hum + "%" 

      var day2wind = forecast[1].wind.speed
      var day2hum = forecast[1].main.humidity
      var day2temp=forecast[1].main.temp
      document.getElementById("day2").innerHTML= "Temperature: " + day2temp + "  Wind Speed: " + day2wind + " Mph"
      + " Humidity: " + day2hum + "%"

      var day3wind = forecast[2].wind.speed
      var day3hum = forecast[2].main.humidity
      var day3temp=forecast[2].main.temp
      document.getElementById("day3").innerHTML= "Temperature: " + day3temp + "  Wind Speed: " + day3wind + " Mph"
      + " Humidity: " + day3hum + "%"

      var day4wind = forecast[3].wind.speed
      var day4hum = forecast[3].main.humidity
      var day4temp=forecast[3].main.temp
      document.getElementById("day4").innerHTML= "Temperature: " + day4temp+ "  Wind Speed: " + day4wind + " Mph"
      + " Humidity: " + day4hum + "%"

      var day5wind = forecast[4].wind.speed
      var day5hum = forecast[4].main.humidity
      var day5temp=forecast[4].main.temp
      document.getElementById("day5").innerHTML= "Temperature: " + day5temp + "  Wind Speed: " + day5wind + " Mph"
      + " Humidity: " + day5hum + "%"
   
         console.log(forecast[0].wind.speed)

   
   
   });
     // var day1data =forecast[0].main.temp
     // document.getElementById("day1").innerHTML=day1data    
   }
   

  
   
getForecast()



