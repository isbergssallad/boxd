const container = document.getElementById("allmovies"); //hämtar allmovies id från html

const params = new URLSearchParams(window.location.search) //hämtar url
const sortid = params.get("sort") || "default"; //hämtar sortid från url
sort.value = sortid; //hämtar value från sortid

let sorting_function = (a, b) => 0;     //sorteringssätt
if (sortid === "a-z") {
    sorting_function = (a, b) => (a.title > b.title ? 1 : -1);
}

else if (sortid === "high-to-low") {
    sorting_function = (a, b) => (a.rated < b.rated ? 1 : -1);
}

else if (sortid === "low-to-high") {
    sorting_function = (a, b) => (a.rated > b.rated ? 1 : -1);
}


window.movies.sort(sorting_function).forEach(movie => { //loopar igenom alla filmer

    
    const link = document.createElement("a");
    link.href = "film.html?film_id=" + movie.id


    const image = document.createElement("img");
    image.src = movie.poster;

    link.appendChild(image)

    container.appendChild(link);
});


