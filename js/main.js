function closeTran(){

    window.addEventListener("click", function (e) {
      if (document.getElementById("Anutrickz_translateBTN").contains(e.target)) {
        //inside box
        return;
      } 
      
      //outside box
      document.getElementById("ATLang_list").classList.remove("show");
      document.getElementById("ATLang_list").classList.add("hide");

    });

}

function xNav(){
  let navOpen = document.getElementById("navOpen");
  let navClose = document.getElementById("navClose");
  let mobileBox = document.getElementById("mobileBox");

  navOpen.addEventListener("click", function (e) {
    mobileBox.classList.remove("hidden");
  });

  navClose.addEventListener("click", function (e) {
    mobileBox.classList.add("hidden");
  });
}




closeTran();
xNav();