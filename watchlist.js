const watchlistBUTTON = document.getElementById("watchlist-button")

watchlistBUTTON.onclick = () => {
    const previous_watchlist_string = localStorage.getItem("watchlist")

    let watchlist = []
    if (movieString) {
    watchlist = JSON.parse(previous_watchlist_string)
    }

    localStorage.setItem("watchlist", JSON.stringify(watchlist.concat(movieid)))

    watchlistBUTTON.textContent = "Added to Watchlist"

}

const movieString = localStorage.getItem("watchlist")

