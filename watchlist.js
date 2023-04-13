const movieString = localStorage.getItem("watchlist")

let watchlist = []
if (movieString) {
    watchlist = JSON.parse(movieString)
}