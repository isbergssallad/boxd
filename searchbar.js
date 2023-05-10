function searchMovies() {
    const searchQuery = document.getElementById("searchBar").value.toLowerCase();
  
    const movieList = document.getElementById("movieList");
    movieList.innerHTML = "";
  
    let matches = 0;
  
    for (const movie of window.movies) {
      const title = movie.title.toLowerCase();
      if (title.includes(searchQuery)) {
        if (matches >= 4) break;
        const movieListItem = document.createElement("li");
        const movieLink = document.createElement("a");
        movieLink.href = "/film.html?film_id=" + movie.id;
        movieLink.textContent = movie.title + " " + movie.year;
        movieListItem.appendChild(movieLink);
        movieList.appendChild(movieListItem);
        matches++;
      }
    }
  }
  
  const searchBar = document.getElementById("searchBar");
  const movieList = document.getElementById("movieList");
  
  // Hide the movie list when the search bar is clicked
  searchBar.addEventListener("click", () => {
    movieList.style.display = "none";
  });
  
  // Show the movie list when the search bar value changes
  searchBar.addEventListener("input", () => {
    const searchString = searchBar.value.toLowerCase();
    if (searchString === "") {
      movieList.style.display = "none";
    } else {
      movieList.style.display = "block";
      searchMovies();
    }
  });
  