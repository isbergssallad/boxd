const container = document.getElementById("favorites")

const recent_movies = window.movies.filter(movie => movie.favorites !== undefined) //ta bara movies med favorites property


favoriteSort = () => { //sorteringssätt
    favorites = (a, b) => (a.recents > b.recents ? 1 : -1);
}





recent_movies.sort(favoriteSort).forEach(movie => {

    
    const link = document.createElement("a");
    link.href = "film.html?film_id=" + movie.id


    const image = document.createElement("img");
    image.src = movie.poster;

    link.appendChild(image)

   container.appendChild(link);
});