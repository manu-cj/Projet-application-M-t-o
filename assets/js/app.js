const requestURL = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=200f15a460f2b4b6a04aabd17164ddb0";
let xhr = new XMLHttpRequest();
xhr.open("GET", requestURL);
xhr.responseType = "json";

xhr.onload = function () {
    if (xhr.status === 200) {
        console.log('OK');
    }
}
xhr.send()
