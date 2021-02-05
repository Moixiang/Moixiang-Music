const searchBtn = document.querySelector(".search-btn")
const searchInput = document.querySelector(".searchinput")
const searchBox = document.querySelector(".search-box")
const cancelBtn = document.querySelector(".cancel-btn")
const account = document.querySelector(".account")
const logoBtn = document.querySelector(".logo-btn")
const menuBtn = document.querySelector(".menu-btn")
const menuBtn2 = document.querySelector(".menu-btn2")

searchBtn.onclick = () =>{
  account.classList.add("active");
  logoBtn.classList.add("active");
  menuBtn.classList.add("active");
  menuBtn2.classList.add("active");
  cancelBtn.classList.add("active");
  searchBtn.classList.add("active");
  searchInput.classList.add("active");
  searchBox.classList.add("active");
}

cancelBtn.onclick = () =>{
  account.classList.remove("active");
  logoBtn.classList.add("active");
  menuBtn.classList.remove("active");
  menuBtn2.classList.remove("active");
  searchInput.classList.remove("active");
  searchBtn.classList.remove("active");
  searchBox.classList.remove("active");
  cancelBtn.classList.remove("active");
}