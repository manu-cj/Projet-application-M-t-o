let inputCity = document.getElementById('cityChoice');
let weather = document.getElementById('weather');

let requestURL = "https://api.openweathermap.org/data/2.5/weather?q=Chimay,be&units=metric&APPID=200f15a460f2b4b6a04aabd17164ddb0&lang=fr";

let xhr = new XMLHttpRequest();
xhr.open("GET", requestURL);
xhr.responseType = "json";
xhr.onload = function () {
    if (xhr.status === 200) {
        console.log('Status : OK');
    } else if (xhr.status !== 200) {
        alert('Une erreur est survenue : ' + 'erreur ' + xhr.status);
        return;
    }
    let response = xhr.response;
    document.getElementById('ville').innerHTML = response.name + ' ' + response.sys.country;
    document.getElementById('meteo').innerHTML =Math.round(response.main.temp) + '°c';
    document.getElementById('tempMin').innerHTML = Math.round(response.main.temp_min) + '°c';
    document.getElementById('tempMax').innerHTML = Math.round(response.main.temp_max) + '°c';
    document.getElementById('weather').innerHTML = response.weather[0].main;
    time();
    document.getElementById('vent').innerHTML =  Math.round(response.wind.speed * 3.6) + ' km/h';
    document.getElementById('humiditer').innerHTML =  response.main.humidity + '%';
    console.log(response);

}
xhr.send();

/**
 *
 function to choose city and country
 */
function choiceVilleAndCountry() {
    i = 0
    if (i === 0) {
        requestURL = "https://api.openweathermap.org/data/2.5/weather?q=" + inputCity.value + ",&units=metric&APPID=200f15a460f2b4b6a04aabd17164ddb0";
        let xhr = new XMLHttpRequest();
        xhr.open("GET", requestURL);
        xhr.responseType = "json";
        xhr.onload = function () {
            if (xhr.status === 200) {
                console.log('OK');
            } else if (xhr.status !== 200) {
                alert('Une erreur est survenue : ' + 'erreur ' + xhr.status);
                return;
            }
            let response = xhr.response;
            console.log(response);
            document.getElementById('ville').innerHTML = response.name + ' ' + response.sys.country;
            document.getElementById('meteo').innerHTML =Math.round(response.main.temp) + '°c';
            document.getElementById('tempMin').innerHTML = Math.round(response.main.temp_min) + '°c';
            document.getElementById('tempMax').innerHTML = Math.round(response.main.temp_max) + '°c';
            document.getElementById('weather').innerHTML = response.weather[0].main;
            time();
            document.getElementById('vent').innerHTML =  Math.round(response.wind.speed * 3.6);
            document.getElementById('humiditer').innerHTML =  response.main.humidity + '%';



        }
        xhr.send();

        if (inputCity.value === '') {
            alert('entrez un nom de ville');
        }
    }

}

document.getElementById('send').addEventListener("click", () => {
    choiceVilleAndCountry()
    console.log(requestURL)
})


function time() {
    if (weather.innerHTML === 'Snow') {
        document.getElementById('image').style.backgroundImage = 'url(/assets/img/13d@2x.png)';
        document.getElementById('image').style.backgroundRepeat = 'no-repeat';
        document.getElementById('weather').innerHTML = 'Il neige, attrape pas froid !';
    }
    if (weather.innerHTML === 'Clouds') {
        document.getElementById('image').style.backgroundImage = 'url(/assets/img/02d@2x.png)';
        document.getElementById('image').style.backgroundRepeat = 'no-repeat';
        document.getElementById('weather').innerHTML = 'Il y a des nuages !';
    }
    if (weather.innerHTML === 'Clear') {
        document.getElementById('image').style.backgroundImage = 'url(/assets/img/01d@2x.png)';
        document.getElementById('image').style.backgroundRepeat = 'no-repeat';
        document.getElementById('weather').innerHTML = 'Ciel dégagé, regarde comme il fait beau !';
    }
    if (weather.innerHTML === 'Rain') {
        document.getElementById('image').style.backgroundImage = 'url(/assets/img/10d@2x.png)';
        document.getElementById('image').style.backgroundRepeat = 'no-repeat';
        document.getElementById('weather').innerHTML = 'Il pleut ça mouille !';
    }
    if (weather.innerHTML === 'Thunderstorm') {
        document.getElementById('image').style.backgroundImage = 'url(/assets/img/11d@2x.png)';
        document.getElementById('image').style.backgroundRepeat = 'no-repeat';
        document.getElementById('weather').innerHTML = 'saperlipopette il tonne !';
    }
    if (weather.innerHTML === 'Mist') {
        document.getElementById('image').style.backgroundImage = 'url(/assets/img/50d@2x.png)';
        document.getElementById('image').style.backgroundRepeat = 'no-repeat';
    }
    if (weather.innerHTML === 'Smoke') {
        document.getElementById('image').style.backgroundImage = 'url(/assets/img/50d@2x.png)';
        document.getElementById('image').style.backgroundRepeat = 'no-repeat';
    }
    if (weather.innerHTML === 'Haze') {
        document.getElementById('image').style.backgroundImage = 'url(/assets/img/50d@2x.png)';
        document.getElementById('image').style.backgroundRepeat = 'no-repeat';
    }
    if (weather.innerHTML === 'Dust') {
        document.getElementById('image').style.backgroundImage = 'url(/assets/img/50d@2x.png)';
        document.getElementById('image').style.backgroundRepeat = 'no-repeat';
    }
    if (weather.innerHTML === 'Fog') {
        document.getElementById('image').style.backgroundImage = 'url(/assets/img/50d@2x.png)';
        document.getElementById('image').style.backgroundRepeat = 'no-repeat';
    }
    if (weather.innerHTML === 'sand') {
        document.getElementById('image').style.backgroundImage = 'url(/assets/img/50d@2x.png)';
        document.getElementById('image').style.backgroundRepeat = 'no-repeat';
    }
    if (weather.innerHTML === 'Ash') {
        document.getElementById('image').style.backgroundImage = 'url(/assets/img/50d@2x.png)';
        document.getElementById('image').style.backgroundRepeat = 'no-repeat';
    }
    if (weather.innerHTML === 'Squall') {
        document.getElementById('image').style.backgroundImage = 'url(/assets/img/50d@2x.png)';
        document.getElementById('image').style.backgroundRepeat = 'no-repeat';
    }
    if (weather.innerHTML === 'Tornado') {
        document.getElementById('image').style.backgroundImage = 'url(/assets/img/50d@2x.png)';
        document.getElementById('image').style.backgroundRepeat = 'no-repeat';
    }
}