const search = document.getElementById("backgroundSearch")
const searchBtnEl = document.getElementById("searchBtn")

searchBtnEl.addEventListener("click", function(e){
    e.preventDefault()
    let searchValue = search.value
    fetch(`https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=${searchValue}`)
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
        document.getElementById("author").innerHTML = `
            <p>Photographer: ${data.user.username}</p>
        `
        // console.log(data.urls)
        console.log(searchValue)
    })
})