const container = document.getElementById("allmovies");


window.movies.forEach(movie => {
    const link = document.createElement("a");
    link.href = "movie.html?movie_id=" + movie.id


    const image = document.createElement("img");
    image.src = movie.poster;

    link.appendChild(image)

    container.appendChild(link);
});