checkbox_filter([]);

function checkbox_filter(tags) {
  var tools, i, j, or;
  tools = document.getElementsByClassName("filterDiv");
  var num = tools.length;
  for (i = 0; i < tools.length; i++) {
    var tagList = tools[i].className.split(" ");
    // console.log("tool is "+tagList[1]);
    j=0;
    addClass(tools[i], "show");
    while (j<tags.length) {
      // console.log("curr category tags are "+tags[j]);
      // console.log("length of tags["+j+"] is "+tags[j].length);
      or = false;
      if (tags[j].length == 0) {
        or = true;
      }
      k=0;
      while (k < tags[j].length) {
        // console.log("curr tag is "+tags[j][k]);
        if (tools[i].className.indexOf(tags[j][k]) != -1 || tags[j].length == 0) {
          //if tool contains at least one of the tags
          // console.log("found match: tool is "+tagList[1]+" tag is"+tags[j][k]);
          or = true;
        }
        k++;
      }
      if (or == false) {
        // console.log("did not find any matches: tool is "+tagList[1]+" category "+tags[j]);
        removeClass(tools[i], "show");
        num--;
        break;
      }
      j++;
    }
  }
  document.getElementById("results").innerHTML = num + " tool" + (num != 1 ? "s" : "");
  console.log(tags.flat());
  updateBadges(tags.flat())
}

// Show filtered elements
function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
  //console.log(element.className);
}

// Hide elements that are not selected
function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}


function updateBadges(filterList) {
// console.log("Badges", filterList);
let filterpara = document.getElementById("filterTags");
let filters = "";
for(let n = 0; n < filterList.length; n++) {
    let filterTagHTML = "<span onclick='unclick(\"" + filterList[n] + "\")'>"+ filterList[n] +"</span>";
    filters += filterTagHTML;
  }
  filterpara.innerHTML = filters;
}

function unclick(id) {
  document.getElementById(id).click();
}