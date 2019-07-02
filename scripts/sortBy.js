
function sortList() {
  var list, b, switching, counts;
  list = document.getElementsByClassName("filterDiv");
  switching = true;
  b = list;
  counts = [];
  getCiteCount(counts, b, switching);
  /* Make a loop that will continue until
  no switching has been done:
  while (switching) {
    // Start by saying: no switching is done:
    //switching = false;
    b = list;
    counts = [];
    switching = getCiteCount(counts, b);
    // Loop through all list items:
    //switching = defer(counts, b);
    //switching = makeSwitch(counts, b);
    console.log("switching is now "+switching);
  }*/
}

function defer(counts, b) {
  if (window.jQuery) {
    console.log("hi");
    return makeSwitch(counts, b);
  }
  else {
    setTimeout(function() {defer(counts, b)}, 50);
  }
}

function makeSwitch(counts, b, switching) {
  //console.log("hey");
  var shouldSwitch, i, currCount, nextCount;
  shouldSwitch = false;
  for (i = 0; i < (b.length - 1); i++) {
    console.log("i is "+i);
    // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Check if the next item should
      switch place with the current item: */
      currCount = counts[i];
      console.log("curr count is "+currCount);
      nextCount = counts[i+1];
      console.log("next count is "+nextCount);
      if (currCount < nextCount) {
        /* If next item is alphabetically lower than current item,
        mark as a switch and break the loop: */
        shouldSwitch = true;
        console.log("should switch");
        break;
      }
  }
  if (shouldSwitch) {
    console.log("should switch entered");
    /* If a switch has been marked, make the switch
    and mark the switch as done: */
    b[i].parentNode.insertBefore(b[i + 1], b[i]);
    switching = true;
  }
  return switching;
}

function getCiteCount(counts, b, switching) {
  var myvar, words, i, citeCount, j;
  jQuery.get('../scholar_data.txt', function(data) {
    alert("finished!");
    while (switching) {
      switching = false;
      for (i=0; i< (b.length); i++) {
        doi = b[i].className.split(" ")[1];
        //console.log("doi is "+doi+"and i is "+i);
        myvar = data;
        words = myvar.split("\n");
        j=0;
        var citedby;
        while (j<words.length) {
          if (words[j] == "  doi: "+doi) {
            citedby = words[j+1];
            break;
          }
          j++;
        }
        citeCount = parseInt(citedby.substring(11, citedby.length));
        //console.log("citeCount "+citeCount);
        counts[i] = citeCount;
        //counts.push(citeCount);
        //console.log(counts);
      }
      //switching = makeSwitch(counts, b, switching);
      console.log("counts is "+counts);
      switching = makeSwitch(counts, b, switching);
    }
    alert("done!");
  });
}
//
// function loadFile(filePath) {
//   var result = null;
//   var xmlhttp = new XMLHttpRequest();
//   xmlhttp.open("GET", filePath, false);
//   xmlhttp.send();
//   if (xmlhttp.status==200) {
//     result = xmlhttp.responseText;
//   }
//   return result;
// }

// function readSingleFile(e) {
//   var file = e.target.files[0];
//   var reader = new FileReader();
//   reader.onload = function(e) {
//     var contents = e.target.result;
//     console.log("contents are "+contents);
//   }
//   reader.readAsText(file);
// }
//
// document.getElementById("file-input").addEventListener("change", readSingleFile, false);
