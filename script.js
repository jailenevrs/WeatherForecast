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

      var day1data =forecast[0].main.temp
      document.getElementById("day1").innerHTML="Temperature: " + day1data   

      var day2data=forecast[1].main.temp
      document.getElementById("day2").innerHTML= "Temperature: " + day2data

      var day3data=forecast[2].main.temp
      document.getElementById("day3").innerHTML= "Temperature: " + day3data

      var day4data=forecast[3].main.temp
      document.getElementById("day4").innerHTML= "Temperature: " + day4data
   
      var day5data=forecast[4].main.temp
      document.getElementById("day5").innerHTML= "Temperature: " + day5data
   

      console.log(forecast[0].)
   
   
   });
     // var day1data =forecast[0].main.temp
     // document.getElementById("day1").innerHTML=day1data    
   }
   

  
   
getForecast()



