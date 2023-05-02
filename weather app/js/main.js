let input = document.querySelector("input");
let searchBtn = document.querySelector("button");

window.onload = ()=>{
    if(window.localStorage.getItem("lastCity")){
        weather.fetchWeather(window.localStorage.getItem("lastCity"));
    }else{
        weather.fetchWeather("cairo");
    }
}
let errorMsg = document.querySelector(".error")
let errorShow = ()=>{
    errorMsg.style.cssText = `
        z-index:2;        
        opacity:1;
    `;
    setTimeout(() => {
        errorMsg.style.cssText = `
            z-index:-1;        
            opacity:0;
        `;  
    }, 1500);
}

let weather = {
    'apikey':"49f6bbd1b6356a63269ee5fcde5d8e13",
    fetchWeather: function(city){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apikey}`
        ).then((response)=>response.json())
        .then((data)=>{
            console.log(data)
            console.log(data.message)
            const { country } = data.sys;
            if(data.message === "city not found" || country === "IL"){
                console.log("ERROR");
                errorShow();
            }else{
                return this.displayWeahter(data);
            }
        });
    },
    displayWeahter: function(data){
        const { name } = data;
        const { timezone } = data;
        let greenwichTime = new Date().getHours() - 2;
        let timeInCity = greenwichTime + (timezone/60/60);  
        let daysArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        let dayIndex = new Date().getDay();
        console.log(timezone/60/60)
        console.log(timeInCity)
        console.log(greenwichTime)
        const { country } = data.sys;
        const { icon, description } = data.weather[0];
        const { temp, humidity, temp_max, temp_min } = data.main;
        const { speed } = data.wind;
        document.querySelector(".data-info h2").innerHTML = `${name} <span>${country}</span>`;
        document.querySelector(".data-info .date").innerHTML = `${dayIndex !== 0 ? timeInCity < 0 ? daysArray[dayIndex - 1] : timeInCity > 23 ? daysArray[dayIndex + 1] : daysArray[dayIndex] : daysArray[daysArray.length - 1]  }, ${timeInCity > 10 ? timeInCity : "0" + timeInCity}:${new Date().getMinutes() > 10 ? new Date().getMinutes() : "0" + new Date().getMinutes()}`;
        document.querySelector(".sky-description").innerHTML = description;
        document.querySelector(".temp-description .icon img").setAttribute("src",`https://openweathermap.org/img/wn/${icon}.png`);
        document.querySelector(".temp").innerHTML = `${Math.round(temp)}°`;
        document.querySelector("ul li:first-of-type .predicted-temp").innerHTML = `${Math.floor(temp_min)}°`;
        document.querySelector("ul li:nth-of-type(2) .predicted-temp").innerHTML = `${Math.ceil(temp_max)}°`;
        document.querySelector(".humidity").innerHTML = `Humidity: ${humidity}%`;
        document.querySelector(".wind").innerHTML = `Wind: ${Math.round(speed)} km/h`;
    }
}
// https://api.openweathermap.org/data/2.5/weather?q=cairo&appid=49f6bbd1b6356a63269ee5fcde5d8e13

let urlData = {"coord":{"lon":31.2497,"lat":30.0626},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"base":"stations","main":{"temp":22.42,"feels_like":22.1,"temp_min":21.9,"temp_max":22.42,"pressure":1018,"humidity":53},"visibility":10000,"wind":{"speed":4.12,"deg":340},"clouds":{"all":75},"dt":1670162448,"sys":{"type":1,"id":2514,"country":"EG","sunrise":1670128544,"sunset":1670165691},"timezone":7200,"id":360630,"name":"Cairo","cod":200};
weather.fetchWeather("cairo");

searchBtn.onclick = (e)=>{
    e.preventDefault();
    weather.fetchWeather(input.value);
    window.localStorage.setItem("lastCity",input.value);
}