//var weatherObject = new XMLHttpRequest();
//weatherObject.responseType = 'json';
//weatherObject.open('GET', '//api.openweathermap.org/data/2.5/weather?zip=55333,us&appid=b81f908618b2b4025af2f048992ec988&units=imperial', true);
//weatherObject.send();
//
//weatherObject.onload = function () {
//    var weatherdata = weatherObject.response;
//    console.log(weatherdata);


function setWindChill() {
    var t = parseFloat(document.getElementById("currentTemp").innerHTML);

    var ws = parseFloat(document.getElementById("windspeed").innerHTML);
    // Display
    var wc = windChill(t, ws);

    document.getElementById("windchill").innerHTML = wc.toFixed(2);


    function windChill(tempF, speed) {
        var exp = Math.pow(speed, 0.16);
        var wcf = 35.74 + 0.6215 * tempF - 35.75 * exp + 0.4275 * tempF * exp;
        return wcf;
    }
}


//            var t = ''; //parseFloat(document.getElementById("temperature").value);
//            
//             document.getElementById("currentTemp").innerHTML=t;
//
//            var ws = 10; //parseFloat(document.getElementById("windSpeed").value);
//                    
//            document.getElementById("windspeed").innerHTML=ws;
//            
//           
//            // Display
//             var wc = windChill(t, ws);
//            
//            document.getElementById("windchill").innerHTML=wc.toFixed(2);
//            
//        
//        function windChill(tempF, speed) {
//            var exp = Math.pow(speed, 0.16);
//            var wcf = 35.74 + 0.6215 * tempF - 35.75 * exp + 0.4275 * tempF * exp;
//           return wcf;
//        }
