const movieString = localStorage.getItem("watchlist")

const container = document.getElementById("watchlist")

let watchlist = []
if (movieString) { 
    watchlist = JSON.parse(movieString)
}

if (watchlist.length === 0) {
    const empty = document.createElement("p")
    empty.textContent = "Your watchlist is empty, explore movies and add them to your watchlist!"
    container.appendChild(empty)
    empty.className = "text-body"
}

watchlist.forEach((movieid, index) => {
    const movie = window.movies.find(m => m.id === movieid)
    const link = document.createElement("a")
    const poster = document.createElement("img")
    poster.src = movie.poster
    link.href = "film.html?film_id=" + movie.id
    link.appendChild(poster)
    const removeButton = document.createElement("button")
    removeButton.className = "remove-button"
    removeButton.textContent = "Remove"
    removeButton.onclick = () => {
        const new_watchlist = [].concat(
            watchlist.slice(0, index),
            watchlist.slice(index + 1)
        )
        localStorage.setItem("watchlist", JSON.stringify(new_watchlist))
        location.reload()
    }

    const watchlistITEM = document.createElement("div")
    watchlistITEM.className = "watchlist-item"
    watchlistITEM.appendChild(link)
    watchlistITEM.appendChild(removeButton)
    container.appendChild(watchlistITEM)

})
