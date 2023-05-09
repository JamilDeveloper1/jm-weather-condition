// Choose elements

const  inp =  document.querySelector("input");
const btn = document.querySelector("button");
const text1 = document.querySelector(".text1");
let container = document.querySelector(".container");
let cityName = document.querySelector(".city-name");
let countryName = document.querySelector(".country-name");
let cityCountry = document.querySelector(".city-country")
let mainCenter = document.querySelector(".main-center")
const card = document.querySelector(".card")
const showWeather = document.querySelector(".show-weather")
const span1 = document.querySelector(".span1");




// WHEN CLICK THE SEARCH BUTTON
btn.addEventListener("click",searchValue)



function searchValue(){

    // FETCH API IS HERE
    const value = inp.value;

    const apiKey = "e224e71e47f621faf374a37d85d0cda9";


fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}`)
.then((res)=>res.json())
.then(data =>{ 
    console.log(data)
    addToUI1(data.name)
    addToUI2(data.sys.country)
    addToUI3(Math.floor(data.main.temp-273) + "°" +"C")


// LOOP WITH ARRAY
    Array.from(data.weather).forEach(element =>{
        let main = element.main
        let desc = element.description
        let icon = element.icon
        addToUI4(main);
    })




    addToUI5(Math.floor(data.main.temp_min-273)+"°"+ "C" + " (min)" +  " /")
    addToUI6(Math.floor(data.main.temp_max-273)+"°"+ "C" + " (max)")
    addToUI7("Feels like " + Math.floor(data.main.feels_like-273)+"°" + "C" + " | ");
    addToUI8("Humidity "  +  data.main.humidity + "%")
})




setInterval(() => {
    card.style.display = "flex";
}, 500);



}







// CITY AND COUNTRY IS HERE


function addToUI1(text1Value){
    cityName.textContent = text1Value;
    cityCountry.appendChild(cityName);
}

function addToUI2(text2Value){
    countryName.textContent = text2Value;
    cityCountry.appendChild(countryName);
}


// DEGREE AND WEATHER IS HERE


function addToUI3(text3Value){
    text1.textContent = text3Value 
mainCenter.appendChild(text1);
}
function addToUI4(text4Value){
    showWeather.textContent = text4Value
    mainCenter.appendChild(showWeather)
}



// MAX-MIN

const minMax = document.querySelector(".max-min-temp");
const min = document.querySelector(".min");
const max = document.querySelector(".max");


function addToUI5(text5Value){
    min.textContent = text5Value;
    minMax.appendChild(min);
}



function addToUI6(text6Value){
    max.textContent = text6Value;
    minMax.appendChild(max);
}


const underMain = document.querySelector(".under-main")
const feelsLike = document.querySelector(".feels-like");
const humidity = document.querySelector(".humidity");



function addToUI7(text7Value){
    feelsLike.textContent = text7Value
    underMain.appendChild(feelsLike);
}


function addToUI8(text8Value){
    humidity.textContent = text8Value
    underMain.appendChild(humidity);
}


