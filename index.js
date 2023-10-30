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
        // console.log(data.urls)
        console.log(searchValue)
    })
}