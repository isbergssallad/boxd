const container = document.getElementById("recents")

const recent_movies = window.movies.filter(movie => movie.recents !== undefined) //ta bara movies med recents property


recentSort = () => { //sorteringssätt
    recents = (a, b) => (a.recents > b.recents ? 1 : -1);
}





recent_movies.sort(recentSort()).forEach(movie => {

    
    const link = document.createElement("a");
    link.href = "film.html?film_id=" + movie.id


    const image = document.createElement("img");
    image.src = movie.poster;

    link.appendChild(image)

   container.appendChild(link);
});