var weatherObject = new XMLHttpRequest();
weatherObject.open('GET', '//api.openweathermap.org/data/2.5/weather?zip=62629,us&appid=b81f908618b2b4025af2f048992ec988&units=imperial', true);
weatherObject.send();

weatherObject.onload = function () {
    var weatherdata = JSON.parse(weatherObject.responseText);
    console.log(weatherdata);

  
    
    document.getElementById('description').innerHTML = weatherdata.weather[0].main;
    document.getElementById('place').innerHTML = weatherdata.name;
    document.getElementById('currentTemp').innerHTML = weatherdata.main.temp;
    document.getElementById('windspeed').innerHTML = weatherdata.wind.speed;
    
    
    var iconcode = weatherdata.weather[0].icon;
    var icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_icon').src = icon_path;

}  // end of the function


//var forecast = new XMLHttpRequest();
//forecast.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?zip=83440,us&appid=b81f908618b2b4025af2f048992ec988', true);
//forecast.send();
//
//
//forecast.onload = function () {
//    var forecastdata = JSON.parse(forecast.responseText);
//    console.log(forecastdata);
//
//        var mytbody=document.querySelector('tbody');
//        var mytr=document.createElement('tr');
//        
//        for(i=0; i<forecastdata.length; i++){
//            var mytd=document.createElement('td');
//            mytd.textContent=forecastdata[i].high.fahrenheit;
//            mytr.appendChild(mytd);
//            
//        mytbody.appendChild(mytr);  
//}
//}

