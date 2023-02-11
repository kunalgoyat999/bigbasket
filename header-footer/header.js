document.getElementById("button").addEventListener("click", submitForm);
var arr = JSON.parse(localStorage.getItem("login-data")) || [];

function submitForm(){
    
    event.preventDefault();
    var num = document.getElementById("number").value;

    if(num.length === 10){

        for(var i=0; i<arr.length; i++){
            if(arr[i] == num){
                window.location.href = "../index.html";
                return;
            }
        }
        arr.push(num)
        localStorage.setItem("login-data", JSON.stringify(arr));
        window.location.href = "header-footer/otp.html";
        
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