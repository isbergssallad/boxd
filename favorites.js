const container = document.getElementById("favorites") //hämtar favorites id från html

const favorite_movies = window.movies.filter(movie => movie.favorites !== undefined) //ta bara movies med favorites property


favoriteSort = () => { //sorteringssätt
    return favorites = (a, b) => (a.favorites > b.favorites ? 1 : -1);
}

    



favorite_movies.sort(favoriteSort()).forEach(movie => { //loopar igenom alla filmer

    
    const link = document.createElement("a");
    link.href = "film.html?film_id=" + movie.id


    const image = document.createElement("img");
    image.src = movie.poster;

    link.appendChild(image)

    container.appendChild(link);
});