const params = new URLSearchParams(window.location.search)
const movieid = params.get("movie_id")

const movie = window.movies.find(m => m.id === movieid)

document.getElementById("movie-title").textContent = movie.title;
document.getElementById("movie-director").textContent = "Directed by " + movie.director
document.getElementById("movie-year").textContent = movie.year;
document.getElementById("tagline").textContent = movie.tagline;
document.getElementById("movie-description").textContent = movie.description;
document.getElementById("movie-poster").src = movie.poster;
// document.getElementById("movie-backdrop").src = movie.backdrop;
document.getElementById("trailer-button").href = movie.trailer;
document.getElementById("movie-container").style.backgroundImage = "url('" + movie.backdrop + "')";;

rating = document.getElementById("star-rating");

const trailerButton = document.getElementById("trailer-button");


for (let i = 0; i < movie.rated; i++) {
    let stars = document.createElement("i")
    stars.className = "fa fa-star";
    rating.append(stars);
  }




