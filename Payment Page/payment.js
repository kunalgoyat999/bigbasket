displayamount();


function displayamount() {
  var basketvalue = document.getElementById("basketvalue");
  var total = document.getElementById("tot");

  var tot = localStorage.getItem("totalcartValue");
  basketvalue.textContent = " "+ tot;

  total.textContent = " "+ tot;
}

var couponInput = document.getElementById("coupon-input");
var applyBtn = document.getElementById("apply-btn");
var message = document.getElementById("message");

applyBtn.addEventListener("click", function () {
  const couponCode = couponInput.value;
  var basketvalue = document.getElementById("basketvalue");
  var total = document.getElementById("tot");
  if (couponCode === "masai30") {
    basketvalue.textContent -= Number(basketvalue.textContent) * (3 / 10);
    total.textContent -= Number(total.textContent) * (3 / 10);
  } else {
    message.innerHTML = "Invalid coupon code. Please try again.";
  }
});

// Save Address

document.getElementById("submitbutton").addEventListener("click", saveAddress)

var addArr = JSON.parse(localStorage.getItem("address")) || [];

function saveAddress() {
  var fullname = document.getElementById("fullName").value;
  var street = document.getElementById("address").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var zip = document.getElementById("zip").value;

  console.log(street + " " + city+ " "+state+" ,"+ zip);

  var addobj = {
    name: fullname,
    address: street + " ," + city+ " ,"+state+" ,"+ zip
  }

  addArr.push(addobj)

  localStorage.setItem("address", JSON.stringify(addArr))

}

// For Payment
document.getElementById("pay").addEventListener("click", pay);
function pay() {
  let cardNo = document.getElementById("card_no").value;
  let v = document.getElementById("valid").value;
  let cvv = document.getElementById("cvv").value;

  if (cardNo.length != 16) {
    alert("Invalid card number");
  } else if (v.length != 4) {
    console.log("2nd");
    alert("Validity Expired");
  } else if (cvv.length != 3) {
    console.log("3rd");
    alert("Invalid cvv");
  } else {
    alert("PAYMENT SUCCESSFULL AND YOUR ORDER IS PLACED");
    window.location.href = "../../index.html";
  }
}


// Nav Bar
document.getElementById("basket").addEventListener("click", function () {
  window.location.href = "../Cart/cartPage.html";
});
