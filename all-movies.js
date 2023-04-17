const container = document.getElementById("allmovies");


window.movies.forEach(movie => {
    const link = document.createElement("a");
    link.href = "film.html?film_id=" + movie.id


    const image = document.createElement("img");
    image.src = movie.poster;

    link.appendChild(image)

    container.appendChild(link);
});