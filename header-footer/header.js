document.getElementById("button").addEventListener("click", submitForm);
var arr = JSON.parse(localStorage.getItem("login-data")) || [];
function submitForm(){
    
    event.preventDefault();
    console.log("hii")
    var num = document.getElementById("number").value;
    console.log(num)
    arr.push(num)
    localStorage.setItem("login-data", JSON.stringify(arr));

    if(num.length === 10){
        window.location.href = "otp.html";
    }
    else{
        var tag = document.getElementById("ptag");
        tag.textContent="Invalid Number!";
        tag.style.textAlign="center"
        tag.style.color="red"
        tag.style.fontSize="20px"
    }
}

var loginBtn = document.querySelector(".loginBtn");
loginBtn.addEventListener("click",showForm);
function showForm(){
    document.querySelector(".overlay").classList.add("showOverlay")
    document.querySelector(".loginform").classList.add("showLoginform")
}


var cross = document.querySelector(".cross");
cross.addEventListener("click", closeForm);
function closeForm(){
    document.querySelector(".overlay").classList.remove("showOverlay")
    document.querySelector(".loginform").classList.remove("showLoginform")
}