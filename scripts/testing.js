var testingList = [];
testingList.push([]);
testingList.push([]);

function click_filter(id) {
  var tool = document.getElementById(id);
  var name = tool.getAttribute("name");
  var index = getNameIndex(name);
  if (tool.checked == true) {
    if (!testingList.includes(id)) {
      testingList[index].push(id);
    }
  } else {
    testingList[index] = uncheck(id, testingList[index]);
  }
  console.log(testingList);
  checkbox_filter(testingList);
}

document.getElementById("cat").onclick = function() {
  click_filter("cat");
}

document.getElementById("dog").onclick = function() {
  click_filter("dog");
}

document.getElementById("orange").onclick = function() {
  click_filter("orange");
}

document.getElementById("apple").onclick = function() {
  click_filter("apple");
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
