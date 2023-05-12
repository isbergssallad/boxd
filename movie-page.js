const params = new URLSearchParams(window.location.search) //hämtar url
const movieid = params.get("film_id") //hämtar film_id från url

const movie = window.movies.find(m => m.id === movieid) //hittar filmen med rätt id

document.getElementById("page-title").textContent = movie.title + " - COZY" //ändrar titeln på sidan beroende på filmen
document.getElementById("movie-title").textContent = movie.title; //ändrar titeln på filmen
document.getElementById("movie-director").textContent = "Directed by " + movie.director //ändrar regissören på filmen
document.getElementById("movie-year").textContent = movie.year; //ändrar året på filmen
document.getElementById("movie-runtime").textContent = movie.runtime + " mins"; //ändrar längden på filmen
document.getElementById("tagline").textContent = movie.tagline; //ändrar tagline på filmen
document.getElementById("movie-description").textContent = movie.description; //ändrar beskrivningen på filmen
document.getElementById("movie-poster").src = movie.poster; //ändrar poster på filmen
document.getElementById("trailer-button").href = movie.trailer; //ändrar trailer länken på filmen
document.getElementById("movie-container").style.backgroundImage = "url('" + movie.backdrop + "')"; //ändrar bakgrundsbilden på filmen


rating = document.getElementById("star-rating"); //hämtar rating från html

const trailerButton = document.getElementById("trailer-button"); //hämtar trailer-button från html


for (let i = 0; i < movie.rated; i++) { //loopar igenom rating och lägger till stjärnor
    let stars = document.createElement("i") 
    stars.className = "fa fa-star";
    rating.append(stars);
  }


const watchlistBUTTON = document.getElementById("watchlist-button") //hämtar watchlist-button från html

  watchlistBUTTON.onclick = () => { //lägger till filmen i watchlist
      const previous_watchlist_string = localStorage.getItem("watchlist") //hämtar watchlist från localstorage
  
      let watchlist = [] //skapar en tom array
      if (movieString) { //om det finns filmer i watchlist
      watchlist = JSON.parse(previous_watchlist_string) //lägger till filmer i watchlist
      }
  
      localStorage.setItem("watchlist", JSON.stringify(watchlist.concat(movieid))) //sparar watchlist i localstorage
  
      watchlistBUTTON.textContent = "Added to Watchlist" //ändrar texten på knappen
  
}
   



