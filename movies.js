const moviesResult = document.querySelector(".result-list")
const resultContainer = document.querySelector(".container")

function userSearchInput(event) {
    const resultCard = document.querySelector(".result-card")
    const loading = document.querySelector(".loading-state")
    resultCard.classList += (' no-display')
    setTimeout(() => {
        loading.classList += (' no-loading')
        renderMovies(event.target.value)
    }, 2000)
}

async function renderMovies(filter) {
    const userInput = document.getElementById("search-bar").value;

    const movies = await fetch(`https://www.omdbapi.com/?s=${userInput || ""})}&apikey=209fb069`);

    const moviesData = await movies.json();
    
    if (filter === "OLD_TO_NEW") {
        moviesData.Search.sort((a, b) => a.Year - b.Year)
    }
    else if (filter === "NEW_TO_OLD") {
        moviesData.Search.sort((a, b) => b.Year - a.Year)
    }
    
    console.log(moviesData)
    moviesResult.innerHTML = moviesData.Search.map(
        (movie) => `<div class="result-card">
                         <div class="result-card__container">
                            <img class="cardimage" src="${movie.Poster}" alt="">
                            <h3>${movie.Title}</h3>
                            <p class="cardpara"><b>Year:</b> ${movie.Year}</p>
                            <p class="cardpara"><b>Type:</b> ${movie.Type}</p> 
                        </div>
                    </div>`
        ).join("")
}
    
function filterMovies(event) {
    renderMovies(event.target.value)
}