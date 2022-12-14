const submitBtn = document.querySelector("button");
const inputBox = document.querySelector(".input");
const weatherForCity = document.querySelector("#weatherFor")
const getTemp = document.querySelector("#temp") 

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(inputBox.value)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputBox.value}&units=imperial&appid=a900b9c844bb20ffaaf85e81c6058302`)
    .then((res) => res.json())
    .then((data) => {
    weatherForCity.innerText = "Current City: " + data.name 
    getTemp.innerText = "Temperature outside: " + data.main.temp + "F"
    })
    .catch((err) => console.log(err));
});



