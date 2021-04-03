// show and hide tools matching attribute    
 
    var totals = document.getElementsByClassName("total");
    var i; console.log("totals", totals.length);

    for (i = 0; i < totals.length; i++) {
      totals[i].addEventListener("click", function() {
         this.classList.toggle("open");
        var content = this.nextElementSibling;
        if (content.style.display === "none") {
          content.style.display = "grid";
        } else {
          content.style.display = "none";
        }
      });
    }
