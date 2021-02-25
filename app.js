
$(document).ready(function(){
    $("#form-submit").submit(function(event){
            weatherSearch(event);
            event.preventDefault(); 
        });
    });

function weatherSearch(event) {
    var request = $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather',
        type: "GET",
        data: {
            q: $("#city").val(),
            appid: '200d16d6db3f035ace6f2d85a8d0325a',
        },
    });
    
    request.done(function(response){
        console.log(response);
        formatSearch(response);
    });
}

function formatSearch(jsonObject) {
    var city_name = jsonObject.name;
    var city_temp = jsonObject.main.temp;
    var city_min = jsonObject.main.temp_min;
    var city_max = jsonObject.main.temp_max;
    var city_weather = jsonObject.weather[0].description;
    var city_humid = jsonObject.main.humidity;
    
    // document.getElementById("#city-name").innerHTML=city_name;
    // document.getElementById("#city-temp").innerHTML=city_temp;
    // document.getElementById("#city-weather").innerHTML=city_weather;
    // document.getElementById("#city-desc").innerHTML=city_desc;
    
    $("#city-name").text(city_name);
    $("#city-temp").text('CurrentTemp: ' + (Math.round(city_temp - 273.15) * 9/5 + 32) + "F");
    $("#city-max").text('HI: ' + (Math.round(city_max - 273.15) * 9/5 + 32) + "F");
    $("#city-min").text('LOW: ' + (Math.round(city_min - 273.15) * 9/5 + 32) + "F");
    $("#city-weather").text('Description: ' + city_weather);
    $("#city-humid").text('Humidity: ' + city_humid + '%');
  

}

