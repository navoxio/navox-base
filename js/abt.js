function xAbt() {
  let slide1 = document.getElementById("splide06-slide01");
  let slide2 = document.getElementById("splide06-slide02");
  let slide3 = document.getElementById("splide06-slide03");
  let slide4 = document.getElementById("splide06-slide04");
  let slide5 = document.getElementById("splide06-slide05");

  let btn1 = document.getElementById("slideBtn1");
  let btn2 = document.getElementById("slideBtn2");
  let btn3 = document.getElementById("slideBtn3");
  let btn4 = document.getElementById("slideBtn4");
  let btn5 = document.getElementById("slideBtn5");

  let btn1R = document.getElementById("slideBtn1Ring");
  let btn2R = document.getElementById("slideBtn2Ring");
  let btn3R = document.getElementById("slideBtn3Ring");
  let btn4R = document.getElementById("slideBtn4Ring");
  let btn5R = document.getElementById("slideBtn5Ring");

  btn1.addEventListener("click", function (e) {
    btn1R.classList.add("opacity-100");
    slide1.classList.add("is-active");
    slide1.classList.add("is-visible");

    btn2R.classList.remove("opacity-100");
    btn2R.classList.add("opacity-0");
    slide2.classList.remove("is-active");
    slide2.classList.remove("is-visible");

    btn3R.classList.remove("opacity-100");
    btn3R.classList.add("opacity-0");
    slide3.classList.remove("is-active");
    slide3.classList.remove("is-visible");

    btn4R.classList.remove("opacity-100");
    btn4R.classList.add("opacity-0");
    slide4.classList.remove("is-active");
    slide4.classList.remove("is-visible");

    btn5R.classList.remove("opacity-100");
    btn5R.classList.add("opacity-0");
    slide5.classList.remove("is-active");
    slide5.classList.remove("is-visible");
  });

  btn2.addEventListener("click", function (e) {
    btn2R.classList.add("opacity-100");
    slide2.classList.add("is-active");
    slide2.classList.add("is-visible");

    btn1R.classList.remove("opacity-100");
    btn1R.classList.add("opacity-0");
    slide1.classList.remove("is-active");
    slide1.classList.remove("is-visible");

    btn3R.classList.remove("opacity-100");
    btn3R.classList.add("opacity-0");
    slide3.classList.remove("is-active");
    slide3.classList.remove("is-visible");

    btn4R.classList.remove("opacity-100");
    btn4R.classList.add("opacity-0");
    slide4.classList.remove("is-active");
    slide4.classList.remove("is-visible");

    btn5R.classList.remove("opacity-100");
    btn5R.classList.add("opacity-0");
    slide5.classList.remove("is-active");
    slide5.classList.remove("is-visible");
  });

  btn3.addEventListener("click", function (e) {
    btn3R.classList.add("opacity-100");
    slide3.classList.add("is-active");
    slide3.classList.add("is-visible");

    btn2R.classList.remove("opacity-100");
    btn2R.classList.add("opacity-0");
    slide2.classList.remove("is-active");
    slide2.classList.remove("is-visible");

    btn1R.classList.remove("opacity-100");
    btn1R.classList.add("opacity-0");
    slide1.classList.remove("is-active");
    slide1.classList.remove("is-visible");

    btn4R.classList.remove("opacity-100");
    btn4R.classList.add("opacity-0");
    slide4.classList.remove("is-active");
    slide4.classList.remove("is-visible");

    btn5R.classList.remove("opacity-100");
    btn5R.classList.add("opacity-0");
    slide5.classList.remove("is-active");
    slide5.classList.remove("is-visible");
  });

  btn4.addEventListener("click", function (e) {
    btn4R.classList.add("opacity-100");
    slide4.classList.add("is-active");
    slide4.classList.add("is-visible");

    btn2R.classList.remove("opacity-100");
    btn2R.classList.add("opacity-0");
    slide2.classList.remove("is-active");
    slide2.classList.remove("is-visible");

    btn3R.classList.remove("opacity-100");
    btn3R.classList.add("opacity-0");
    slide3.classList.remove("is-active");
    slide3.classList.remove("is-visible");

    btn1R.classList.remove("opacity-100");
    btn1R.classList.add("opacity-0");
    slide1.classList.remove("is-active");
    slide1.classList.remove("is-visible");

    btn5R.classList.remove("opacity-100");
    btn5R.classList.add("opacity-0");
    slide5.classList.remove("is-active");
    slide5.classList.remove("is-visible");
  });

  btn5.addEventListener("click", function (e) {
    btn5R.classList.add("opacity-100");
    slide5.classList.add("is-active");
    slide5.classList.add("is-visible");

    btn2R.classList.remove("opacity-100");
    btn2R.classList.add("opacity-0");
    slide2.classList.remove("is-active");
    slide2.classList.remove("is-visible");

    btn3R.classList.remove("opacity-100");
    btn3R.classList.add("opacity-0");
    slide3.classList.remove("is-active");
    slide3.classList.remove("is-visible");

    btn4R.classList.remove("opacity-100");
    btn4R.classList.add("opacity-0");
    slide4.classList.remove("is-active");
    slide4.classList.remove("is-visible");

    btn1R.classList.remove("opacity-100");
    btn1R.classList.add("opacity-0");
    slide1.classList.remove("is-active");
    slide1.classList.remove("is-visible");
  });
}

xAbt();