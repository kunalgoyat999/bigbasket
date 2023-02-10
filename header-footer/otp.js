function showpopUp(){
    event.preventDefault();
    var ist = document.querySelector("#Ist").value;
    var sec = document.getElementById("Sec").value;
    var Third = document.getElementById("Third").value;
    var Fourth = document.getElementById("Fourth").value;
    var Fifth = document.getElementById("Fifth").value;
    var Six = document.getElementById("Six").value;

    if(ist==1 && sec ==2 && Third==3 && Fourth == 4 && Fifth == 5 && Six ==6){
        alert("Login Successful")
        window.location.href ="../index.html";
    } else {
        alert("Invalid OTP")
    }
}
