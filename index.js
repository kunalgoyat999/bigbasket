document.getElementById("textButton").addEventListener("click", ontoggle);
function ontoggle() {
  var dots = document.getElementById("dots");
  var showMoreText = document.getElementById("moretext");
  var buttonText = document.getElementById("textButton");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    buttonText.innerHTML = "Read more..";
    showMoreText.style.display = "none";
  } else {
    dots.style.display = "none";
    showMoreText.style.display = "inline";
    var brtg = document.createElement("br");
    showMoreText.append(brtg);
    buttonText.innerHTML = "Read Less..";
  }
}

document.getElementById("fruits").addEventListener("click", function(){
    localStorage.setItem("category", "fruits")
    
    window.location.href ="category/category.html"
})

document.getElementById("daily").addEventListener("click", function(){
    localStorage.setItem("category", "daily")
    window.location.href ="category/category.html"
})

document.getElementById("beverage").addEventListener("click", function(){
    localStorage.setItem("category", "beverage")
    window.location.href ="category/category.html"
})

document.getElementById("snack").addEventListener("click", function(){
    localStorage.setItem("category", "snack")
    window.location.href ="category/category.html"
})

document.getElementById("clean").addEventListener("click", function(){
    localStorage.setItem("category", "clean")
    window.location.href ="category/category.html"
})

document.getElementById("beaut").addEventListener("click", function(){
    localStorage.setItem("category", "beaut")
    window.location.href ="category/category.html"
})

document.getElementById("homeproducts").addEventListener("click", function(){
    localStorage.setItem("category", "homeproducts")
    window.location.href ="category/category.html"
})

document.getElementById("basket").addEventListener("click", function() {
    window.location.href ="Cart/cartPage.html"
})