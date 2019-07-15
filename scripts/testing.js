var testingList = [];
testingList.push([]);
testingList.push([]);

document.getElementById("testing").onclick = function() {
  var testing = document.getElementById("testing");
  if (testing.checked == true) {
    console.log("testing is checked!!");
    if (!testingList.includes("testing")) {
      testingList[0].push("testing");
      console.log(testingList);
    }
  } else {
    console.log("testing is unchecked");
    testingList[0] = uncheck("testing", testingList[0]);
    console.log(testingList);
  }
}
