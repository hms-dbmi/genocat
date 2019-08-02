var arr = [];
var num_categories = 10;
for (var i=0; i < num_categories; i++) {
  arr.push([]);
}

document.getElementById("byCitation").onclick = function() {
  sortByCitation();
}

document.getElementById("byYear").onclick = function() {
  sortByRecency();
}

document.getElementById("byName").onclick = function() {
  sortByName();
}

function click_filter(id) {
  var tool = document.getElementById(id);
  var name = tool.getAttribute("name");
  var index = getNameIndex(name);
  if (tool.checked == true) {
    if (!arr.includes(id)) {
      arr[index].push(id);
    }
  } else {
    arr[index] = uncheck(id, arr[index]);
  }
  checkbox_filter(arr);
}

function getNameIndex(name) {
  if (name == "access_format") {
    return 0;
  }
  if (name == "type") {
    return 1;
  }
  if (name == "interconnection_type") {
    return 2;
  }
  if (name == "layout") {
    return 3;
  }
  if (name == "partition") {
    return 4;
  }
  if (name == "abstraction") {
    return 5;
  }
  if (name == "arrangement") {
    return 6;
  }
  if (name == "view") {
    return 7;
  }
  if (name == "scale") {
    return 8;
  }
  if (name == "focus") {
    return 9;
  }
}

//linear parallel
document.getElementById("linear parallel").onclick=function() {
  click_filter("linear parallel");
}
//linear serial
document.getElementById("linear serial").onclick=function() {
  click_filter("linear serial");
}
//noabstraction
document.getElementById("linear orthogonal").onclick=function() {
  click_filter("linear orthogonal");
}
//partial
document.getElementById("circular parallel").onclick=function() {
  click_filter("circular parallel");
}
//complete
document.getElementById("circular serial").onclick=function() {
  click_filter("circular serial");
}

//noabstraction
document.getElementById("noneab").onclick=function() {
  click_filter("noneab");
}
//partial
document.getElementById("partialab").onclick=function() {
  click_filter("partialab");
}
//complete
document.getElementById("completeab").onclick=function() {
  click_filter("completeab");
}

//contiguous
document.getElementById("contiguous").onclick=function() {
  click_filter("contiguous");
}
//segregated
document.getElementById("segregated").onclick=function() {
  click_filter("segregated");
}

//point sparse
document.getElementById("point sparse").onclick=function() {
  click_filter("point sparse");
}
//segment sparse
document.getElementById("segment sparse").onclick=function() {
  click_filter("segment sparse");
}
//point contiguous
document.getElementById("point contiguous").onclick=function() {
  click_filter("point contiguous");
}
//segment contiguous
document.getElementById("segment contiguous").onclick=function() {
  click_filter("segment contiguous");
}

//none
document.getElementById("none").onclick=function() {
  click_filter("none");
}

//within
document.getElementById("within").onclick=function() {
  click_filter("within");
}

//between
document.getElementById("between").onclick=function() {
  click_filter("between");
}

//web application
document.getElementById("web application").onclick=function() {
  click_filter("web application");
}

//standalone
document.getElementById("standalone app").onclick=function() {
  click_filter("standalone app");
}

//programming library
document.getElementById("programming library").onclick=function() {
  click_filter("programming library");
}


//linear
document.getElementById("linear").onclick=function() {
  click_filter("linear");
}

//circular
document.getElementById("circular").onclick=function() {
  click_filter("circular");
}

//spacefilling
document.getElementById("spacefilling").onclick=function() {
  click_filter("spacefilling");
}

//spatial
document.getElementById("spatial").onclick=function() {
  click_filter("spatial");
}

//single view
document.getElementById("single-view").onclick=function() {
  click_filter("single-view");
}

//multiple view
document.getElementById("multiple-view").onclick=function() {
  click_filter("multiple-view");
}

//single Scale
document.getElementById("single-scale").onclick=function() {
  click_filter("single-scale");
}

//multiple scale
document.getElementById("multiple-scale").onclick=function() {
  click_filter("multiple-scale");
}

//single focus
document.getElementById("single-focus").onclick=function() {
  click_filter("single-focus");
}

//multiple focus
document.getElementById("multiple-focus").onclick=function() {
  click_filter("multiple-focus");
}

function uncheck(other, arr) {
  for( var i = 0; i < arr.length; i++){
    if ( arr[i] === other) {
      arr.splice(i, 1);
    }
  }
  return arr;
}
