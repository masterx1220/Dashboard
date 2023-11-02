const search = document.getElementById("backgroundSearch")
const searchBtnEl = document.getElementById("searchBtn")

window.onload = getPhoto()

searchBtnEl.addEventListener("click", function(e){
    e.preventDefault()
    let searchValue = search.value
    getRandomPhoto(searchValue)
    
})

function getPhoto(){
    fetch(`https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=random`)
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
        document.getElementById("author").innerHTML = `
            <p class="bottom-left">Photographer: ${data.user.username}</p>
        `
    })
}

function getRandomPhoto(search){
    fetch(`https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=${search}`)
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
        document.getElementById("author").innerHTML = `
            <p class="bottom-left">Photographer: ${data.user.username}</p>
        `
    })
}

function getCurrentTime(){
    const now = new Date()
    let current_Time = now.toLocaleTimeString("en-US", { timeStyle: "short" })
    const day = now.getDay()
    const daysOfTheWeek = {
        1 : "Monday",
        2 : "Tuesday",
        3 : "Wednesday",
        4 : "Thurday",
        5 : "Friday",
        6 : "Saturday",
        7 : "Sunday"
    }
    let current_day = daysOfTheWeek[day]
    document.getElementById("time-container").innerHTML = `
    <h1 id="time">${current_Time}</h1>
    <h2 id="day">Today is ${current_day}</h2>
    `
}
setInterval(getCurrentTime,1000)

navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
        .then(res => {
            if(!res.ok){
                throw Error("Weather data not available")
            }
            return res.json()
        })
        .then(data => {
            console.log(data)
            const temp = Math.floor(data.main.temp)
            document.getElementById("weather").innerHTML = `
            <div class="weatherAndTemperatureContainer">
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png">
                <p class="temperature">${temp}°</p>
            </div>
            <div class="city">
                <p class="city">${data.name}</p>
            </div>
        `
        })
        .catch(err => {
            document.getElementById("weather").innerHTML = `
            <div class="weatherAndTemperatureContainer">
                <p class="temperature">Temperature information not avilable at this time.</p>
            </div>
            `
        })
})

// fetch(`https://api.quotable.io/random?minLength=100&maxLength=140`)
//     .then(res => {
//         if(!res.ok){
//             throw Error("Sorry this quote is available")
//         }
//         return res.json()
//     })
//     .then(data => {
//         console.log(data)
//         document.getElementById("quote-container").innerHTML = `
//             <div id="quote">
//                 <p>-  ${data.content}</p>
//             </div>
        
//         `
//     })