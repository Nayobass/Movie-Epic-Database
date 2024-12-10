// API: http://www.omdbapi.com/?i=tt3896198&apikey=209fb069

async function main() {
    const movies = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=209fb069");
    const moviesData = await movies.json();
    console.log(moviesData.map())
}

main();

