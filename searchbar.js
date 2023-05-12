function searchMovies() { //funktion för att söka efter filmer
    const searchQuery = document.getElementById("searchBar").value.toLowerCase(); //hämtar värdet från searchbar
  
    const movieList = document.getElementById("movieList");
    movieList.innerHTML = ""; //tömmer html
  
    let matches = 0; //hur många resultat som visas
  
    for (const movie of window.movies) { //loopar igenom alla filmer
      const title = movie.title.toLowerCase(); //gör om till lowercase
      if (title.includes(searchQuery)) { //om titeln innehåller söksträngen
        if (matches >= 4) break; //om det finns 4 resultat, sluta söka
        const movieListItem = document.createElement("li"); //skapa en li tag
        const movieLink = document.createElement("a"); //skapa en a tag
        movieLink.href = "film.html?film_id=" + movie.id; //lägg till href / länken av filmen
        movieLink.textContent = movie.title + " " + movie.year; //lägg till titel av filmen samt år
        movieListItem.appendChild(movieLink); //lägg till a tag i li tag
        movieList.appendChild(movieListItem); //lägg till li tag i ul tag
        matches++; //öka antal resultat
      }
    }
  }
  
  const searchBar = document.getElementById("searchBar"); //hämtar searchbar
  const movieList = document.getElementById("movieList"); //hämtar movieList
  
  // Göm resultat när man klickar på sökfältet
  searchBar.addEventListener("click", () => { 
    movieList.style.display = "none";
  });
  
  // Visa resultat när det finns input i sökfältet
  searchBar.addEventListener("input", () => {
    const searchString = searchBar.value.toLowerCase();
    if (searchString === "") {
      movieList.style.display = "none";
    } else {
      movieList.style.display = "block";
      searchMovies();
    }
  });
  