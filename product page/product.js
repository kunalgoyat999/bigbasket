var obj = [
  {
    name: "Fresho Strawberry, 200 g",
    mrp: 185,
    price: 147,
    img: "https://www.bigbasket.com/media/uploads/p/l/40099244_1-fresho-strawberry-organically-grown.jpg",
  },
];

displaydata();

function displaydata() {
  obj.map(function (elem) {
    var h1 = document.createElement("h1");
    h1.textContent = elem.name;

    var p1 = document.createElement("p");
    p1.textContent = "MRP: " + elem.mrp;
    p1.setAttribute("id", "mrp");

    var p2 = document.createElement("p");
    p2.textContent = "Price: " + elem.price;
    p2.setAttribute("id", "price");

    var pric = Number(elem.price);
    var mp = Number(elem.mrp);
    var save = ((mp - pric) / mp) * 100;
    save = Math.round(save);

    var p3 = document.createElement("p");
    p3.textContent = "You Save: " + save + "%";
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
    img.setAttribute("src", elem.img);

    document.querySelector("#imgdiv").append(img);
  });
}
var cartArr = JSON.parse(localStorage.getItem("cartItem")) || [];

var proddetails = {
  name: "Fresho Strawberry, 200 g",
  mrp: 185,
  price: 147,
  img: "https://www.bigbasket.com/media/uploads/p/l/40099244_1-fresho-strawberry-organically-grown.jpg",
  quant: 1
};
function addtoBasket() {
  var btn = document.getElementById("basket");
  btn.style.display = "none";

  var show = document.getElementById("increasequant");
  show.style.display = "flex";

  // var proddetails = JSON.parse(localStorage.getItem("proddetails"))

  var cartobj = {
    name: proddetails.name,
    price: proddetails.price,
    img: proddetails.img,
    quant: proddetails.quant
  };
  cartArr.push(cartobj);

  localStorage.setItem("cartItem", JSON.stringify(cartArr));
}

document.getElementById("countinc").addEventListener("click", inccount);

function inccount() {
  var val = document.getElementById("quant").textContent;
  val = Number(val) + 1;
  document.getElementById("quant").textContent = val;


  var cartobj = {
    name: proddetails.name,
    price: proddetails.price,
    img: proddetails.img,
    quant: proddetails.quant+1,
  };
  console.log(proddetails.quant)
  cartArr[cartArr.length-1]= cartobj;

  localStorage.setItem("cartItem", JSON.stringify(cartArr));
}

document.getElementById("countdec").addEventListener("click", deccount);

function deccount() {
  var val = document.getElementById("quant").textContent;
  val = Number(val) - 1;

  if (val !== 0) {
    document.getElementById("quant").textContent = val;
  } else {
    var btn = document.getElementById("basket");
    btn.style.display = "inline";

    var show = document.getElementById("increasequant");
    show.style.display = "none";
  }

  var cartobj = {
    name: proddetails.name,
    price: proddetails.price,
    img: proddetails.img,
    quant: proddetails.quant-1,
  };
  cartArr[cartArr.length-1]=cartobj;

  localStorage.setItem("cartItem", JSON.stringify(cartArr));
}
