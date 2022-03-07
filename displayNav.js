const width = window.innerWidth;

function myFunction() {
    var x = document.getElementById("extra-pages");
    if (width < 1024) {
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    }

  }
  
