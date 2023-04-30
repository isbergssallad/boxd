var html = '<div class="header-container">' +
'<div class="logo">' +
'<a href="index.html"><img src="./images/cozygc white.svg" alt=""></a>' +
'</div>' +
'<div class="navigations-container gap-20 nav">' +
'<div class="navigations gap-25">' +
'<a href="films.html">FILMS</a>' +
'<a href="">FAVORITES</a>' +
'<a href="">WATCHLIST</a>' +
'</div>' +
'<div class="searchbar gap-10">' +
'<div class="search-icon">' +
'<i class="fa fa-search"></i>' +
'</div>' +
'<div class="search-result">' +
'<input type="text" placeholder="SEARCH.." class="mini-searchbar" id="searchBar" onkeyup="searchMovies()">' +
'<ul class="result" id="movieList">' +
'</ul>' +
'</div>' +
'</div>' +
'</div>';

document.getElementById('nav').innerHTML = html;