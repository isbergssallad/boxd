function hamburger() { // hamburger menu
    var x = document.getElementById("navigations");
    if (x.style.display === "block") {
      x.style.display = "";
    } else {
      x.style.display = "block";
    }
  }