var obj = JSON.parse(localStorage.getItem("productDetails")) || [];



displaydata(obj);

function displaydata(elem) {

    var h1 = document.createElement("h1");
    h1.textContent = elem.name;

    var p1 = document.createElement("p");
    p1.textContent = "MRP: " + elem.strikedOffPrice;
    p1.setAttribute("id", "mrp");

    var p2 = document.createElement("p");
    p2.textContent = "Price: " + elem.finalPrice;
    p2.setAttribute("id", "price");

    var p3 = document.createElement("p");
    p3.textContent = "Your Offer: " + elem.offer;
    p3.setAttribute("id", "save");

    var p4 = document.createElement("p");
    p4.textContent = "(Inclusive of all taxes)";
    p4.setAttribute("id", "taxes");

    var p5 = document.createElement("p");
    p5.setAttribute("id", "ratingreviews");

    var span1 = document.createElement("span");
    span1.setAttribute("id", "ratings");
    span1.textContent = (Math.random() * 4 + 1).toFixed(1);

    var i = document.createElement("i");
    i.setAttribute("class", "fa-solid fa-star");

    span1.append(i);

    var span2 = document.createElement("span");
    span2.textContent = (Math.random() * 1000 + 100).toFixed() + " Ratings & ";

    var span3 = document.createElement("span");
    span3.textContent = (Math.random() * 100 + 10).toFixed() + " Reviews";

    p5.append(span1, span2, span3);

    document.getElementById("contentdiv").append(h1, p1, p2, p3, p4, p5);

    var img = document.createElement("img");
    img.setAttribute("src", elem.imgSrc);

    document.querySelector("#imgdiv").append(img);
}


var cartArr = JSON.parse(localStorage.getItem("cartProduct")) || [];

function addtoBasket() {
  for(var i=0; i<cartArr.length; i++){
    if(cartArr[i] === obj){
      alert("Already in Cart");
      return;
    } 
  }

  var btn = document.getElementById("basket2");
  btn.style.display = "none";

  var show = document.getElementById("increasequant");
  show.style.display = "flex";



  cartArr.push(obj);

  localStorage.setItem("cartProduct", JSON.stringify(cartArr));
}

document.getElementById("countinc").addEventListener("click", inccount);

function inccount() {
  var val = document.getElementById("quant").textContent;
  val = Number(val) + 1;
  document.getElementById("quant").textContent = val;

  obj.qty = obj.qty+1;
  cartArr[cartArr.length-1]= obj;

  localStorage.setItem("cartProduct", JSON.stringify(cartArr));
}

document.getElementById("countdec").addEventListener("click", deccount);

function deccount() {
  var val = document.getElementById("quant").textContent;
  val = Number(val) - 1;

  if (val !== 0) {
    document.getElementById("quant").textContent = val;
  } else {
    var btn = document.getElementById("basket2");
    btn.style.display = "inline";

    var show = document.getElementById("increasequant");
    show.style.display = "none";
  }

  obj.qty = obj.qty-1;
  console.log(obj.qty)
  cartArr[cartArr.length-1]= obj;

  localStorage.setItem("cartProduct", JSON.stringify(cartArr));
}

document.getElementById("basket").addEventListener("click", function() {
  window.location.href ="../Cart/cartPage.html"
})

