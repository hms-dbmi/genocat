var arr = [];

document.getElementById("sort").onclick = function() {
  console.log("sort by citation count!");
  sortList();
}

//linear
document.getElementById("linear").onclick=function() {
  if (!arr.includes("linear")) {
    arr.push("linear");
  }
  arr = uncheck("circular", arr);
  arr = uncheck("spacefilling", arr);
  arr = uncheck("spatial", arr);
  arr = uncheck("show-all-layouts", arr);
  //document.getElementById("demo").innerHTML = arr;
  filterMultSelection(arr);
}

//circular
document.getElementById("circular").onclick=function() {
  if (!arr.includes("circular")) {
    arr.push("circular");
  }
  arr = uncheck("linear", arr);
  arr = uncheck("spacefilling", arr);
  arr = uncheck("spatial", arr);
  arr = uncheck("show-all-layouts", arr);
  filterMultSelection(arr);
}

//spacefilling
document.getElementById("spacefilling").onclick=function() {
  if (!arr.includes("spacefilling")) {
    arr.push("spacefilling");
  }
  arr = uncheck("linear", arr);
  arr = uncheck("circular", arr);
  arr = uncheck("spatial", arr);
  arr = uncheck("show-all-layouts", arr);
  filterMultSelection(arr);
}

//spatial
document.getElementById("spatial").onclick=function() {
  if (!arr.includes("spatial")) {
    arr.push("spatial");
  }
  arr = uncheck("linear", arr);
  arr = uncheck("circular", arr);
  arr = uncheck("spacefilling", arr);
  arr = uncheck("show-all-layouts", arr);
  filterMultSelection(arr);
}

//single view
document.getElementById("single-view").onclick=function() {
  if (!arr.includes("single-view")) {
    arr.push("single-view");
  }
  arr = uncheck("multiple-view", arr);
  arr = uncheck("show-all-views", arr);
  filterMultSelection(arr);
}

//multiple view
document.getElementById("multiple-view").onclick=function() {
  if (!arr.includes("multiple-view")) {
    arr.push("multiple-view");
  }
  arr = uncheck("single-view", arr);
  arr = uncheck("show-all-views", arr);
  filterMultSelection(arr);
}

//single Scale
document.getElementById("single-scale").onclick=function() {
  if (!arr.includes("single-scale")) {
    arr.push("single-scale");
  }
  arr = uncheck("multiple-scale", arr);
  arr = uncheck("show-all-scales", arr);
  filterMultSelection(arr);
}

//multiple scale
document.getElementById("multiple-scale").onclick=function() {
  if (!arr.includes("multiple-scale")) {
    arr.push("multiple-scale");
  }
  arr = uncheck("single-scale", arr);
  arr = uncheck("show-all-scales", arr);
  filterMultSelection(arr);
}

//single focus
document.getElementById("single-focus").onclick=function() {
  if (!arr.includes("single-focus")) {
    arr.push("single-focus");
  }
  arr = uncheck("multiple-focus", arr);
  arr = uncheck("show-all-foci", arr);
  filterMultSelection(arr);
}

//multiple focus
document.getElementById("multiple-focus").onclick=function() {
  if (!arr.includes("multiple-focus")) {
    arr.push("multiple-focus");
  }
  arr = uncheck("single-focus", arr);
  arr = uncheck("show-all-foci", arr);
  filterMultSelection(arr);
}

//show all layouts
document.getElementById("show-all-layouts").onclick=function() {
  arr = uncheck("linear", arr);
  arr = uncheck("circular", arr);
  arr = uncheck("spacefilling", arr);
  arr = uncheck("spatial", arr);
  filterMultSelection(arr);
}

//show all views
document.getElementById("show-all-views").onclick=function() {
  arr = uncheck("single-view", arr);
  arr = uncheck("multiple-view", arr);
  filterMultSelection(arr);
}

//show all scales
document.getElementById("show-all-scales").onclick=function() {
  arr = uncheck("single-scale", arr);
  arr = uncheck("multiple-scale", arr);
  filterMultSelection(arr);
}

//show all foci
document.getElementById("show-all-foci").onclick=function() {
  arr = uncheck("single-focus", arr);
  arr = uncheck("multiple-focus", arr);
  filterMultSelection(arr);
}


function uncheck(other, arr) {
  for( var i = 0; i < arr.length; i++){
    if ( arr[i] === other) {
      arr.splice(i, 1);
    }
  }
  return arr;
}
