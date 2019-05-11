import "bootstrap/dist/css/bootstrap-grid.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./scss/main.scss";

import $ from "jquery";
import "slick-carousel";

$(".practice__slider").slick({
  prevArrow: "<div class='prev-arrow'></div>",
  nextArrow: "<div class='next-arrow'></div>",
  asNavFor: ".practice__slider-miniature",
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 768,
      settings: { arrows: false, dots: true, dotsClass: "practice__slider-dots" }
    }
  ]
});

$(".practice__slider-miniature").slick({
  slidesToShow: 8,
  asNavFor: ".practice__slider",
  focusOnSelect: true
});

console.log(23);
