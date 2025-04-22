var modal = document.getElementById("myModal");

var btn1 = document.getElementById("cttsEmergencia");
// var btn2 = document.getElementById("cttsEmergencia");
// var btn3 = document.getElementById("cttsEmergencia");
// var btn4 = document.getElementById("cttsEmergencia");


var span = document.getElementsByClassName("close")[0];

btn1.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}