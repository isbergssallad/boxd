sort.onchange = sortingValue;

function sortingValue(){
    location.href = "films.html?sort=" + sort.value;
}



// reviews.sort(function(a, b) {
//     if (a.name.toLowerCase() < b.name.toLowerCase()
//         ) return -1;
//     if (a.name.toLowerCase() > b.name.toLowerCase()
//     ) return 1;
//     return 0;
// });