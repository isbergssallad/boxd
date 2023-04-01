sort.onchange = sortingValue;

function sortingValue(){
    if(this.value === "a-z")
    window.movies = window.movies.sort()
    location.reload()
}
