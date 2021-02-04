const searchBtn = document.querySelector(".search-btn")
const searchInput = document.querySelector(".searcinput")
const cancelBtn = document.querySelector(".cancel-btn")
const searchBox = document.querySelector(".search-box")

searchBtn.onclick = () =>{
  searchBtn.classList.add("active");
  searchBox.classList.add("active");
  searchInput.classList.add("active");
  cancelBtn.classList.add("active");
}

cancelBtn.onclick = () =>{
  searchBtn.classList.remove("active");
  searchBox.classList.remove("active");
  searchInput.classList.remove("active");
  cancelBtn.classList.remove("active");
}