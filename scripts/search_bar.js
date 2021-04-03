function search() {
  var input, filter, x, a;
  var num = 0;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  x = document.getElementsByClassName("filterDiv show");
  for (var i = 0; i < x.length; i++) {
    a = x[i].getElementsByTagName("h3")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      x[i].style.display = "";
      num++;
    } else {
      x[i].style.display = "none";
    }
  }
  document.getElementById("results").innerHTML = num + " tool" + (num != 1 ? "s" : "");
}
