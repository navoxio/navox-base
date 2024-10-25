let fullName = document.getElementById("fullName");
let email = document.getElementById("email");
let message = document.getElementById("message");

let sendBtn = document.getElementById("sendBtn");
let successDiv = document.getElementById("successDiv");

let count = 0;

sendBtn.addEventListener("click", function (e) {
  
    count++;

    if(count > 2){
        sendBtn.style.color = "#00ff00";
        sendBtn.textContent = "You have sent too many messages. Try again later...";
        return;
    }

    if(fullName.value == "" || email.value == "" || message.value == ""){
        alert("Complete the form before submitting");
        return;
    }

    sendBtn.disabled = true;
    sendBtn.textContent = "Sending message...";
    sendBtn.style.color = "#00ff00";

    axios.post("https://api.navox.io/v1/contact-mail", {
        fullName: fullName.value,
        uEmail: email.value,
        message: message.value,
        
      })
      .then(function (response) {
        sendBtn.style.display = "none";
        successDiv.style.display = "flex";
      });


});