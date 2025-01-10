// API: http://www.omdbapi.com/?i=tt3896198&apikey=209fb069

async function main() {
    const movies = await fetch("http://www.omdbapi.com/?s=naruto&apikey=209fb069");
    const moviesData = await movies.json();
    const resultListEl = document.querySelector(".result-list")
    console.log(moviesData.Search)
    resultListEl.innerHTML = moviesData.Search.map(
        (movie) => 
            `<div class="result-card">
                <div class="result-card__container">
                    <img class="cardimage" src="${movie.Poster}" alt="">
                    <h3>${movie.Title}</h3>
                    <p class="cardpara"><b>Year:</b> ${movie.Year}</p>
                    <p class="cardpara"><b>Type:</b> ${movie.Type}</p> 
                </div>
            </div>`
    )
    .join("")
}

main();

