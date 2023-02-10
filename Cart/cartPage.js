
const icon = document.querySelector('.mark');

icon.addEventListener('click', function() {
  window.open('cart.html', '_blank');
  


});


// / object structure

    // name: 'Strawberry',
    // imgSrc: 'https://www.bigbasket.com/media/uploads/p/m/10000263_12-fresho-strawberry.jpg?tr=w-3840,q=80',
    // finalPrice: '₹45.89',
    // strikedOffPrice: '₹60.38',
    // quantity: '200 g',
    // offer: '24% OFF'

//getting added product details


var cartProductArr =JSON.parse(localStorage.getItem("cartProduct"))||[];

displayCartProducts(cartProductArr);

function displayCartProducts(arr){
   console.log("in cart")

   if(arr.length==0){
      document.getElementById("productCount").textContent ="no"
   }
   else{
      document.getElementById("productCount").textContent =arr.length
   }

   var cartValue =0;

   document.querySelector("tbody").textContent ="";

   arr.map(function(e,i){

      var tr =document.createElement("tr");

      var name =document.createElement("td");
      name.textContent =e.name+" ["+e.quantity+"]";

      var price =document.createElement("td");

      var num =e.finalPrice;
      num =num.substring(1,num.length);
      
      price.textContent =e.finalPrice;

      // quantity td
      var qty =document.createElement("td");
      qty.setAttribute("class","qtyBtns")

      var minusBtn =document.createElement("button");
      minusBtn.textContent ="-";

      var qtyText = document.createElement("p");
      qtyText.textContent =e.qty;

      var addBtn =document.createElement("button");
      addBtn.textContent ="+";
      
      // qty.textContent =2;
      qty.append(minusBtn,qtyText,addBtn);


      // adding btn listeners to addBtn and subBtn
      addBtn.addEventListener("click",function(){
         increaseQty(i);
      })
      
      minusBtn.addEventListener("click",function(){
         if(e.qty!=0){
            decreaseQty(i);
         }
         
      })



      console.log(num,qty.innerText)
      var total =document.createElement("td");


      total.textContent ="₹ "+(e.qty * num).toFixed(2);

      cartValue+=e.qty * num; // total basket value

      var deleteIcon =document.createElement("span");
      deleteIcon.setAttribute("class","deleteIcon")

      // adding listener to delete that item

      deleteIcon.addEventListener("click",function(){
         removeItem(i);
      })

      deleteIcon.innerHTML =`<i class="fa-regular fa-trash-can"></i>`;

      total.append(deleteIcon)

      tr.append(name,price,qty,total);

      document.querySelector("tbody").append(tr);


   })

   document.getElementById("totalCartPrice").textContent =cartValue.toFixed(2);
   document.getElementById("finalCartPrice").textContent =cartValue.toFixed(2);
   document.getElementById("saveAmount").textContent =(cartValue*0.1).toFixed(2);


   

}



function increaseQty(index){
   cartProductArr[index].qty+=1;
   localStorage.setItem("cartProduct",JSON.stringify(cartProductArr));
   displayCartProducts(cartProductArr);
}

function decreaseQty(index){
   cartProductArr[index].qty-=1;
   localStorage.setItem("cartProduct",JSON.stringify(cartProductArr));
   displayCartProducts(cartProductArr);
}


// empty basket


document.getElementById("emptyButton").addEventListener("click",emptyCart);

function emptyCart(){

   if(cartProductArr.length!=0){
   cartProductArr =[];
   localStorage.setItem("cartProduct",JSON.stringify(cartProductArr));
   displayCartProducts(cartProductArr);
   alert("All items removed from Cart!")
   }
   else{
      alert("No products to remove from Cart!")
   }
}



// remove item when delete icon clicked

function removeItem(index){
   var name =cartProductArr[index].name;
   cartProductArr.splice(index,1);
   localStorage.setItem("cartProduct",JSON.stringify(cartProductArr));
   displayCartProducts(cartProductArr);
   
   alert(name," Successfully! removed from cart")
   
}



document.getElementById("continueShopping").addEventListener("click",function(){
   window.location.href ="../index.html";
})

document.getElementById("checkout").addEventListener("click",function(){
   window.location.href ="../Payment Page/payment.html";

   localStorage.setItem("totalcartValue",document.getElementById("finalCartPrice").innerText);
})


   
    