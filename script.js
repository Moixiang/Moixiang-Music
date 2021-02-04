const searchBtn = document.querySelector(".search-btn")
const searchInput = document.querySelector(".input")
const cancelBtn = document.querySelector(".cancel-btn")
const searchBox = document.querySelector(".search-box")

searchBtn.onclick = () =>{
  searchBtn.classList.add("active");
  searchBox.classList.add("active");
  searchInput.classList.add("active");
  cancelBtn.classList.add("active");
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}