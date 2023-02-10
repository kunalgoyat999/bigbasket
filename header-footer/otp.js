


function closepopUp(){
    var overlay = document.querySelector("#from");
    overlay.style.display = "none";
    console.log("1")
    // document.querySelector(".otpform").classList.remove("showLoginform");
}

// document.getElementById("continueBtn").addEventListener("click", closeOtp);
// function closeOtp(){
//     document.querySelector(".overlay").classList.remove("showOverlay");
//     document.querySelector(".otpform").classList.remove("closeOtp");
// }

function showpopUp(){
    event.preventDefault();
    var ist = document.querySelector("#Ist").value;
    console.log(ist);
    closepopUp();
}

// function closepopUp(){
//     document.querySelector(".success").classList.remove("showSuccess");
// //    console.log("hii")

//     var otp = JSON.parse(localStorage.getItem("otp"));
//     var Userotp = JSON.parse(localStorage.getItem("userOTP"));
//     console.log(otp,Userotp)
//     if(otp == Userotp){
//         window.location.href = "header.html";
//     }
// }

// inputs.forEach((input,index1)=>{
//     input.addEventListener("keyup",(e)=>{

//         var currentInput = input,
//         nextInput = input.nextElementSibling,
//         prevInput = input.previousElementSibling;

//         if(currentInput.value.length >1){
//             currentInput.value = ""; 
//             return;
//         }

//         if(nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== ""){
//             nextInput.removeAttribute("disabled");
//             nextInput.focus();
//         }

//         if(e.key === "Backspace"){
//             inputs.forEach((input,index2)=>{
//                 if(index1 <= index2 && prevInput){
//                     input.setAttribute("disabled",true);
//                     currentInput.value = "";
//                     prevInput.focus();
//                 }
//             })
//         }
//     });
// });

// window.addEventListener("load",()=>inputs[0].focus());


// var userNum = JSON.parse(localStorage.getItem("userNumber"));
// document.getElementById("number").textContent = userNum;


// document.querySelector("form").addEventListener("submit",formS);
// var arr = []
// function formS(){
//     event.preventDefault();
//     var otp = 123456;
//     localStorage.setItem("otp",JSON.stringify(otp));

//     var one = document.getElementById("Ist").value;
//     var two = document.getElementById("Sec").value;
//     var three = document.getElementById("Third").value;
//     var four = document.getElementById("Fourth").value;
//     var five = document.getElementById("Fifth").value;
//     var six = document.getElementById("Six").value;

//     var OTP = one + two + three + four + five + six;
//     localStorage.setItem("userOTP",JSON.stringify(OTP))

//     var getOtp = JSON.parse(localStorage.getItem("otp"));
//     if(getOtp != OTP){
//         document.getElementById("htag").textContent = "Invalid OTP!"
//     }
// }
