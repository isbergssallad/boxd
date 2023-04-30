const container = document.getElementById("allmovies");

const params = new URLSearchParams(window.location.search)
const sortid = params.get("sort") || "default";
sort.value = sortid;

let sorting_function = (a, b) => 0;
if (sortid === "a-z") {
    sorting_function = (a, b) => (a.title > b.title ? 1 : -1);
}

else if (sortid === "high-to-low") {
    sorting_function = (a, b) => (a.rated < b.rated ? 1 : -1);
}

else if (sortid === "low-to-high") {
    sorting_function = (a, b) => (a.rated > b.rated ? 1 : -1);
}


window.movies.sort(sorting_function).forEach(movie => {

    
    const link = document.createElement("a");
    link.href = "film.html?film_id=" + movie.id


    const image = document.createElement("img");
    image.src = movie.poster;

    link.appendChild(image)

    container.appendChild(link);
});


