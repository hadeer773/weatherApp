// //! ----------------------- Global variable -----------------------//
let dataResponse=[];
let currentDayName=document.getElementById("currentDay");
let currentNumDay=document.getElementById("currentNumDay");
let currentMonth=document.getElementById("currentMonth");
let nextNameDay=document.getElementById("nextNameDay");
let currentTemp=document.getElementById("CurrentTemp");
let afterNextNameDay=document.getElementById("afterNextNameDay");
let search=document.getElementById("search");
let currentLocation=document.getElementById("currentLocation");
let weatherToday=document.getElementById("todayWeather");
let nextTemp=document.getElementById("nextTemp");
let minTemperature=document.getElementById("minTemp");
let nextWeather=document.getElementById("nextTextWeather");
let afterNextDay=document.getElementById("afterTomorrow");
let afterNextMinTemp=document.getElementById("afterMinTemp");
let afterNextTextTemp=document.getElementById("afterTextTemp");



// //! ----------------------- getApiData  -----------------------//

    
        async function getApiWeather(city){
            let https = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=2070ce4abcac4289a2c161128230608&q=${city}&days=3`);
            dataResponse= await https.json(https.respose);
            firstDay();
            secondDay();
            thirdDay();
        }
// //! ----------------------- Functions  -----------------------//
// //?display current day data
        function firstDay(){
            let currentDate= new Date();
            currentDayName.innerHTML=currentDate.toLocaleDateString("en-US",{weekday:"long"});
            currentNumDay.innerHTML=currentDate.getDate();
            currentMonth.innerHTML=currentDate.toLocaleDateString("en-US",{month:"long"});
            currentLocation.innerHTML=dataResponse.location.name;
            currentTemp.innerHTML=dataResponse.current.temp_c+`<span><sup>o</sup>C</span>`;
            weatherToday.innerHTML=dataResponse.current.condition.text;
        }
        
//? display next day data
        function secondDay(){
            nextTemp.innerHTML=dataResponse.forecast.forecastday[1].day.maxtemp_c+`<sup>o</sup>C`;
            minTemperature.innerHTML=dataResponse.forecast.forecastday[1].day.mintemp_c+`<sup>o</sup>`
            nextWeather.innerHTML=dataResponse.forecast.forecastday[1].day.condition.text;

        }

//?display After Next Day
        function thirdDay(){
            afterNextDay.innerHTML=dataResponse.forecast.forecastday[2].day.maxtemp_c+`<sup>o</sup>C`;
            afterNextMinTemp.innerHTML=dataResponse.forecast.forecastday[2].day.mintemp_c+`<sup>o</sup>`;
            afterNextTextTemp.innerHTML=dataResponse.forecast.forecastday[2].day.condition.text;
        }   



//?get format Date 
    function formatDate (date){
        const options={
            weekday: "long", day: "numeric", month: "long" };
            return date.toLocaleDateString("en-US", options);
}


// //! ----------------------- Events  -----------------------//
search.addEventListener('input', function(e){
    getApiWeather(search.value);
});





// //! -----------------------date  -----------------------//
//?get current Date
const today=new Date();
const currentFormat=formatDate(today);

//?get tomorrow Date 
const tomorrow=new Date(today);
tomorrow.setDate(today.getDate() + 1);
const tomorrowFormat=formatDate(tomorrow);

const afterTomorrow =new Date(tomorrow)
afterTomorrow.setDate(tomorrow.getDate() + 1);

const formatAterTomorrow=formatDate(afterTomorrow);

const todayDay=today.toLocaleDateString("en-US", { weekday: "long" });
const todayMonth=today.toLocaleDateString("en-US", { day: "numeric" });
const todayName=today.toLocaleDateString("en-us", { month: "long" });



const tomorrowDay=tomorrow.toLocaleDateString("en-US", { weekday: "long" });
nextNameDay.textContent=tomorrowDay;
nextNameDay=afterTomorrow.toLocaleDateString("en-US", {weekday: "long"});
afterNextNameDay.textContent=nextNameDay;



getApiWeather("cairo");
















