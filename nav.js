var html = '<div class="header-container">' +
'<div class="logo">' +
'<a href="index.html"><img src="./images/cozygc white.svg" alt=""></a>' +
'</div>' +
'<div class="navigations-container gap-20 nav">' +
'<div class="navigations gap-25">' +
'<a href="films.html">Films</a>' +
'<a href="">Favorites</a>' +
'<a href="">Watchlist</a>' +
'</div>' +
'<div class="searchbar gap-10">' +
'<i class="fa fa-search"></i>' +
'<div class="search-result">' +
'<input type="text" placeholder="Search.." class="mini-searchbar" id="searchBar" onkeyup="searchMovies()">' +
'<ul id="movieList">' +
'</ul>' +
'</div>' +
'</div>' +
'</div>';

document.getElementById('nav').innerHTML = html;