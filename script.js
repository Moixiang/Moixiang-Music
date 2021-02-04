const searchBtn = document.querySelector(".search-btn")
const searchInput = document.querySelector(".searcinput")
const cancelBtn = document.querySelector(".cancel-btn")
const searchBox = document.querySelector(".search-box")
const account = document.querySelector(".account")
const logo = document.querySelector(".logo")
const menuBtn = document.querySelector(".menu-btn")
const menuBtn2 = document.querySelector(".menu-btn2")

searchBtn.onclick = () =>{
  searchBtn.classList.add("active");
  searchBox.classList.add("active");
  searchInput.classList.add("active");
  account.classList.add("active");
  logo.classList.add("active");
  cancelBtn.classList.add("active");
  menuBtn.classList.add("active");
  menuBtn2.classList.add("active");
}

cancelBtn.onclick = () =>{
  searchBtn.classList.remove("active");
  searchBox.classList.remove("active");
  searchInput.classList.remove("active");
  account.classList.remove("active");
  cancelBtn.classList.remove("active");
  menuBtn.classList.remove("active");
  menuBtn2.classList.remove("active");
}