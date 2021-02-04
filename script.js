var modal = document.getElementById("search");
var btn = document.getElementById("search-btn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

window.onclick = function (event) {
  if (modal.style.display === "block") {
    var modalContent = modal.querySelector(".modal-content");
    if (!modalContent.contains(event.target)) {
      modal.style.display = "none";
    }
  }
}