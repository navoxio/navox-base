function xSTK() {
  
  let sBtn1 = document.getElementById("sBtn1");
  let sBtn2 = document.getElementById("sBtn2");
  let sBtn3 = document.getElementById("sBtn3");
  let sBtn4 = document.getElementById("sBtn4");
  let sBtn5 = document.getElementById("sBtn5");
  let sBtn6 = document.getElementById("sBtn6");
  let sBtn7 = document.getElementById("sBtn7");
  let sBtn8 = document.getElementById("sBtn8");
  let sBtn9 = document.getElementById("sBtn9");

  sBtn1.addEventListener("click", function (e) {
    document.getElementById("sDiv1").classList.toggle("grid-rows-[1fr]");
    document.getElementById("sTag1").classList.toggle("rotate-90");
  });

  sBtn2.addEventListener("click", function (e) {
    console.log("BTTN2");
    document.getElementById("sDiv2").classList.toggle("grid-rows-[1fr]");
    document.getElementById("sTag2").classList.toggle("rotate-90");
  });

  sBtn3.addEventListener("click", function (e) {
    console.log("BTTN3");
    document.getElementById("sDiv3").classList.toggle("grid-rows-[1fr]");
    document.getElementById("sTag3").classList.toggle("rotate-90");
  });

  sBtn4.addEventListener("click", function (e) {
    console.log("BTTN4");
    document.getElementById("sDiv4").classList.toggle("grid-rows-[1fr]");
    document.getElementById("sTag4").classList.toggle("rotate-90");
  });

  sBtn5.addEventListener("click", function (e) {
    console.log("BTTN5");
    document.getElementById("sDiv5").classList.toggle("grid-rows-[1fr]");
    document.getElementById("sTag5").classList.toggle("rotate-90");
  });

  sBtn6.addEventListener("click", function (e) {
    console.log("BTTN6");
    document.getElementById("sDiv6").classList.toggle("grid-rows-[1fr]");
    document.getElementById("sTag6").classList.toggle("rotate-90");
  });

  sBtn7.addEventListener("click", function (e) {
    console.log("BTTN7");
    document.getElementById("sDiv7").classList.toggle("grid-rows-[1fr]");
    document.getElementById("sTag7").classList.toggle("rotate-90");
  });

  sBtn8.addEventListener("click", function (e) {
    console.log("BTTN8");
    document.getElementById("sDiv8").classList.toggle("grid-rows-[1fr]");
    document.getElementById("sTag8").classList.toggle("rotate-90");
  });

  sBtn9.addEventListener("click", function (e) {
    console.log("BTTN9");
    document.getElementById("sDiv9").classList.toggle("grid-rows-[1fr]");
    document.getElementById("sTag9").classList.toggle("rotate-90");
  });

}

xSTK();