            var t = 50; //parseFloat(document.getElementById("temperature").value);
            
             document.getElementById("currentTemperature").innerHTML=t;

            var ws = 10; //parseFloat(document.getElementById("windSpeed").value);
                    
            document.getElementById("windSpeed").innerHTML=ws;
            
           
            // Display
             var wc = windChill(t, ws);
            
            document.getElementById("windChill").innerHTML=wc.toFixed(2);
            
        
        function windChill(tempF, speed) {
            var exp = Math.pow(speed, 0.16);
            var wcf = 35.74 + 0.6215 * tempF - 35.75 * exp + 0.4275 * tempF * exp;
           return wcf;
        }