var modal = document.getElementById("search-box");
var btn = document.getElementById("search-btn");
var span = document.getElementsByClassName("close")[0];

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
  console.log('it works')
}