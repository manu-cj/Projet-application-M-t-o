const requestURL = "https://api.openweathermap.org/data/2.5/weather?q=Chimay,be&units=metric&APPID=200f15a460f2b4b6a04aabd17164ddb0";
let xhr = new XMLHttpRequest();
xhr.open("GET", requestURL);
xhr.responseType = "json";

xhr.onload = function () {
    if (xhr.status === 200) {
        console.log('OK');
    }
    else if (xhr.status !== 200) {
        alert('Une erreur est survenue : ' +'erreur ' + xhr.status);
        return;
    }
    let response = xhr.response;
    console.log(response.main.temp_min);
    document.getElementById('ville').innerHTML = response.name + ' ' + response.sys.country;
    document.getElementById('meteo').innerHTML = response.main.temp_max;
}
xhr.send()
