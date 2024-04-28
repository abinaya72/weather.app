


function checkWeather() {
 
    var cityName = document.getElementById("cityname").value;
    
    
    var apiKey = '97b5704e275440e5e558cfd4d4d423cc';
    

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
        
            var temperature = data.main.temp;
            var description = data.weather[0].description;
            

            document.getElementById("temperature").innerText = temperature + '°C';
            document.getElementById("cityname1").innerText =cityname.value;
            document.getElementById("description").innerText ="Weather : "+ description;
        })
        .catch(error => {
            
            document.getElementById("temperature").innerText='Error', error;
        });
}

