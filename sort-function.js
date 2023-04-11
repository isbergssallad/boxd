sort.onchange = sortingValue;

function sortingValue(){
    if(sortingValue.value === "a-z"){
        window.movies.sort((a, b) => (a.title > b.title ? 1 : -1));
        location.reload()
    } 
}
