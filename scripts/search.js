$(document).ready(function () {
  console.log("DOM Ready - Bootstrap Variable Loaded - Google Fonts Loaded - JavaScript Library Loaded - JQuery Plugin Loaded");
});

let button = document.querySelector(".like-btn");
let icon = document.querySelector(".like_icon");

button.addEventListener("click", ()=>{
  button.classList.toggle("active");
  if(button.classList.contains("active")){
    createClones(button);
  }
});

function randomNum(min, max) {
  return Math.floor(Math.random()*(max- min + 1 )+ min);
}

function negativePositve() {
  return Math.random() <0.5 ? -1 : 1;
}

function createClones(button) {
  let numberOfClones = randomNum(2, 4);

  for(let i=1; i<= numberOfClones; i++) {
    let clone = icon.cloneNode(true);
    let size = randomNum(8, 20);
    button.appendChild(clone);
    clone.setAttribute("width", size);
    clone.setAttribute("height", size);
    clone.classList.add("clone");
    clone.style.transform =
    "translate(" +
    negativePositve() * randomNum(15, 30) + "px," +
    negativePositve() * randomNum(15, 30) + "px)";

    let removeNode = setTimeout(() =>{
      button.removeChild(clone);
      clearTimeout(removeNode);
    }, 800);
  }
}

function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('search-input');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
