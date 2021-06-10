function sortByName() {
  var loader = document.getElementById("loader");
  removeClass(loader, "hide-loader");
  document.getElementById("sortOrder").innerHTML = "sorting by name";

  var list, i, switching, b, shouldSwitch;
  list = document.getElementsByClassName("filterDiv show");
  switching = true;
  while (switching) {
    switching = false;
    b = list;
    for (i = 0; i < (b.length - 1); i++) {
      shouldSwitch = false;
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
  document.getElementById("sortOrder").innerHTML = "sorted by name";
  addClass(loader, "hide-loader");
}

function sortByRecency() {
  var list, switching;
  list = document.getElementsByClassName("filterDiv show");
  switching = true;
  getPubYear(list, switching, []);
  document.getElementById("sortOrder").innerHTML = "sorting by year";
}

function getPubYear(b, switching, years) {
  var loader = document.getElementById("loader");
  var i, myvar, words, j, pub_year, year;
  jQuery.get('../scholar_data.txt', function(data) {
    removeClass(loader, "hide-loader");
    while (switching) {
      // document.getElementById("loader").style.display = "inline-block";
      switching = false;
      for (i=0; i<(b.length); i++) {
        doi = b[i].className.split(" ")[1];
        myvar = data;
        words = myvar.split("\n");
        j=0;
        while (j<words.length) {
          if (words[j] == "  doi: "+doi) {
            pub_year = words[j+1];
            break;
          }
          j++;
        }
        year = parseInt(pub_year.substring(12, pub_year.length));
        years[i] = year;
      }
      switching = makeSwitch(years, b, switching);
    }
    addClass(loader, "hide-loader");
    document.getElementById("sortOrder").innerHTML = "sorted by year";
  })
}


function makeSwitch(counts, b, switching) {
  var shouldSwitch, i, currCount, nextCount;
  shouldSwitch = false;
  for (i = 0; i < (b.length - 1); i++) {
      shouldSwitch = false;
      currCount = counts[i];
      nextCount = counts[i+1];
      if (currCount < nextCount) {
        shouldSwitch = true;
        break;
      }
  }
  if (shouldSwitch) {
    b[i].parentNode.insertBefore(b[i + 1], b[i]);
    switching = true;
  }
  return switching;
}
