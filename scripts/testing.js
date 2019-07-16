var testingList = [];
testingList.push([]);
testingList.push([]);

document.getElementById("cat").onclick = function() {
  var cat = document.getElementById("cat");
  var name = cat.getAttribute("name");
  var index = getNameIndex(name);
  if (cat.checked == true) {
    if (!testingList.includes("cat")) {
      testingList[index].push("cat");
    }
  } else {
    testingList[index] = uncheck("cat", testingList[index]);
  }
  console.log(testingList);
  checkbox_filter(testingList);
}

document.getElementById("dog").onclick = function() {
  var dog = document.getElementById("dog");
  var name = dog.getAttribute("name");
  var index = getNameIndex(name);
  if (dog.checked == true) {
    if (!testingList.includes("dog")) {
      testingList[index].push("dog");
    }
  } else {
    testingList[index] = uncheck("dog", testingList[index]);
  }
  console.log(testingList);
  checkbox_filter(testingList);
}

document.getElementById("orange").onclick = function() {
  var orange = document.getElementById("orange");
  var name = orange.getAttribute("name");
  var index = getNameIndex(name);
  if (orange.checked == true) {
    if (!testingList.includes("orange")) {
      testingList[index].push("orange");
    }
  } else {
    testingList[index] = uncheck("orange", testingList[index]);
  }
  console.log(testingList);
  checkbox_filter(testingList);
}

document.getElementById("apple").onclick = function() {
  var apple = document.getElementById("apple");
  var name = apple.getAttribute("name");
  var index = getNameIndex(name);
  if (apple.checked == true) {
    if (!testingList.includes("apple")) {
      testingList[index].push("apple");
    }
  } else {
    testingList[index] = uncheck("apple", testingList[index]);
  }
  console.log(testingList);
  checkbox_filter(testingList);
}

function getNameIndex(name) {
  if (name == "fruit") {
    return 0;
  }
  if (name == "animal") {
    return 1;
  }
}

function checkbox_filter(tags) {
  var tools, i, j, or;
  tools = document.getElementsByClassName("filterDiv");
  for (i = 0; i < tools.length; i++) {
    var tagList = tools[i].className.split(" ");
    console.log("tool is "+tagList[1]);
    j=0;
    addTool(tools[i], "show");
    while (j<tags.length) {
      console.log("curr category tags are "+tags[j]);
      console.log("length of tags["+j+"] is "+tags[j].length);
      or = false;
      if (tags[j].length == 0) {
        or = true;
      }
      k=0;
      while (k < tags[j].length) {
        console.log("curr tag is "+tags[j][k]);
        if (tools[i].className.indexOf(tags[j][k]) != -1 || tags[j].length == 0) {
          //if tool contains at least one of the tags
          console.log("found match: tool is "+tagList[1]+" tag is"+tags[j][k]);
          or = true;
        }
        k++;
      }
      if (or == false) {
        console.log("did not find any matches: tool is "+tagList[1]+" category "+tags[j]);
        removeTool(tools[i], "show");
        break;
      }
      j++;
    }
  }
}
