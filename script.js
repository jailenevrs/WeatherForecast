var button = document.querySelector(".search")
var inputValue = document.querySelector('.input')
console.log(inputValue.value)



function getCoordinates(cityName){ 
fetch('http://api.openweathermap.org/geo/1.0/direct?q='+cityName+'&appid=0f9b2277a81917aa8d1fdf73b2af274e')
 .then (function (response){
    return response.json();
 })
 .then(function(data){
    console.log(data) });
}


button.addEventListener('click',function(){
   console.log(inputValue.value)
   getCoordinates(inputValue.value)
});

var lat=

function getForecast(){
   fetch('api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+lon+'&appid=0f9b2277a81917aa8d1fdf73b2af274e')
   .then (function (response){
      return response.json();
   })
   .then(function(data){
   console.log(data)});
}

   
   

   
