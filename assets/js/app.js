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
    document.getElementById('meteo').innerHTML = Math.round(response.main.temp) + '°c';
    document.getElementById('tempMin').innerHTML = Math.round(response.main.temp_min) + '°c';
    document.getElementById('tempMax').innerHTML = Math.round(response.main.temp_max) + '°c';
    document.getElementById('weather').innerHTML = response.weather[0].main;
    time();
    document.getElementById('valeurVent').innerHTML = Math.round(response.wind.speed * 3.6) + ' km/h';
    document.getElementById('valeurHumiditer').innerHTML = response.main.humidity + '%';
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
            document.getElementById('ville').innerHTML = response.name + ' ' + response.sys.country;
            document.getElementById('meteo').innerHTML = Math.round(response.main.temp) + '°c';
            document.getElementById('tempMin').innerHTML = Math.round(response.main.temp_min) + '°c';
            document.getElementById('tempMax').innerHTML = Math.round(response.main.temp_max) + '°c';
            document.getElementById('weather').innerHTML = response.weather[0].main;
            time();
            document.getElementById('valeurVent').innerHTML = Math.round(response.wind.speed * 3.6) + ' km/h';
            document.getElementById('valeurHumiditer').innerHTML = response.main.humidity + '%';
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

function animateCloud() {
    document.getElementById('nuage1').style.transform = 'translateX(50px)';
    document.getElementById('nuage2').style.transform = 'translateX(-50px)';
}

function animateCloudStop() {
    document.getElementById('nuage1').style.transform = 'translateX(0)';
    document.getElementById('nuage2').style.transform = 'translateX(0)';
}


document.getElementById('lesImages').addEventListener("mouseover", () => {
    animateCloud()
})
document.getElementById('lesImages').addEventListener("mouseleave", () => {
    animateCloudStop()
})

function time() {
    changeMeteo('Snow', 'url(/assets/img/13d@2x.png)', 'Il neige, attrape pas froid !');
    changeMeteo('Clouds', 'url(/assets/img/02d@2x.png)', 'Il y a des nuages !');
    changeMeteo('Clear', 'url(/assets/img/01d@2x.png)', 'Ciel dégagé, regarde comme il fait beau !');
    changeMeteo('Rain', 'url(/assets/img/10d@2x.png)',  'Il pleut ça mouille !');
    changeMeteo('Thunderstorm', 'url(/assets/img/11d@2x.png)', 'saperlipopette il tonne');
    changeMeteo('Mist', 'url(/assets/img/50d@2x.png)', 'ouvre les yeux y a du brouillard !');
    changeMeteo('Smoke', 'url(/assets/img/50d@2x.png)', 'Ouvre les yeux il y a du brouillard !');
    changeMeteo('Haze', 'url(/assets/img/50d@2x.png)', 'Ouvre les yeux il y a du brouillard !');
    changeMeteo('Dust', 'url(/assets/img/50d@2x.png)', 'il y a de la poussière !');
    changeMeteo('Fog', 'url(/assets/img/50d@2x.png)', 'Ouvre les yeux il y a du brouillard !');
    changeMeteo('sand', 'url(/assets/img/50d@2x.png)', 'Tempète de sable oulala !');
    changeMeteo('Ash', 'url(/assets/img/50d@2x.png)', 'te brule pas y a des cendre dans l\'air');
    changeMeteo('Squall', 'url(/assets/img/50d@2x.png)', 'Il y a des bourrasque !');
    changeMeteo('Tornado', 'url(/assets/img/50d@2x.png)', 'Cache toi, il y a une tornade !');
}



function changeMeteo(globalWeather, url, message) {
    if (weather.innerHTML === globalWeather) {
        document.getElementById('image').style.backgroundImage = url;
        document.getElementById('image').style.backgroundRepeat = 'no-repeat';
        document.getElementById('weather').innerHTML = message;
    }
}

