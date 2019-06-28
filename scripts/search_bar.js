function search() {
  var input, filter, x, a;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  x = document.getElementsByClassName("filterDiv");
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < x.length; i++) {
    a = x[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      x[i].style.display = "";
    } else {
      x[i].style.display = "none";
    }
  }
}
