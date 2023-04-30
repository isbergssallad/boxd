const surprise = document.getElementById("surprise");



function getRandomMovie() {
    const moviesShuffled = window.movies.sort(() => Math.random() - 0.5);
    return moviesShuffled[0];
  }

//surprise.addEventListener("click", Surprise);

function Surprise() {
    surprise.innerHTML = "";
    const movie = getRandomMovie();

    const link = document.createElement("a");
    link.href = "film.html?film_id=" + movie.id;

    const image = document.createElement("img");
    image.src = movie.poster;

    link.appendChild(image)
    surprise.appendChild(link);

    const title = document.createElement("h1");
    title.textContent = movie.title + " " + movie.year;

    surprise.appendChild(title);

}



// function displayMovie() {
//   const movie = getRandomMovie();

//   movieTitle.textContent = movie.title;

//   movieLink.href = "film.html?film_id=" + movie.id;
//   moviePoster.src = movie.poster;
// }

// surpriseButton.addEventListener("click", () => {
//   displayMovie();
// });
