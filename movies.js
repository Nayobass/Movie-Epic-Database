const inputMovie = sessionStorage.getItem("searchInput")
const movieElement = document.querySelector(".result-list")

async function renderMovies(filter) {
    const movies = await fetch(`http://www.omdbapi.com/?s=${inputMovie}&apikey=209fb069`);

    const moviesData = await movies.json();
    if (filter === "OLD_TO_NEW") {
        moviesData.Search.sort((a, b) => a.Year - b.Year)
    }
    else if (filter === "NEW_TO_OLD") {
        moviesData.Search.sort((a, b) => b.Year - a.Year)
    }
    
    console.log(moviesData)
    movieElement.innerHTML = moviesData.Search.map(
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
setTimeout(() => {
    renderMovies();
}, 1000)