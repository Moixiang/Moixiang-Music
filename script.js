var modal = document.getElementById("search");
var btn = document.getElementById("search-btn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function() {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}