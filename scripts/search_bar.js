function search() {
  var input, filter, x, a;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  x = document.getElementsByClassName("filterDiv");
  for (i = 0; i < x.length; i++) {
    a = x[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      x[i].style.display = "";
    } else {
      x[i].style.display = "none";
    }
  }
}
