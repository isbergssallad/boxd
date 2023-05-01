sort.onchange = sortingValue;

function sortingValue(){
    location.href = "films.html?sort=" + sort.value;
}


