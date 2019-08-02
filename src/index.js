import "./scss/security-fire.scss";
import $ from "jquery";
import "slick-carousel";

setDates();
resizeWindow();
initSliders();

window.addEventListener("resize", resizeWindow);

function initSliders() {
  $(".practice__slider").slick({
    asNavFor: ".practice__slider-miniature",
    fade: true,
    adaptiveHeight: true,
    swipe: false,
    responsive: [
      {
        breakpoint: 769,
        settings: { arrows: false, dots: true, dotsClass: "practice__slider-dots", swipe: true, fade: false }
      }
    ]
  });

  $(".practice__slider-miniature").slick({
    prevArrow: "<div class='prev-arrow'></div>",
    nextArrow: "<div class='next-arrow'></div>",
    vertical: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".practice__slider",
    focusOnSelect: true,
    swipe: false,
    responsive: [
      {
        breakpoint: 1100,
        settings: { slidesToShow: 4 }
      },
      {
        breakpoint: 861,
        settings: { slidesToShow: 3 }
      }
    ]
  });
}

function setDates() {
  let setMonth = month => (month === 0 ? 12 : month);
  let scheduleDescAll = $(".schedule__desc strong");

  let sheduleService = scheduleDescAll.eq(0);
  let sheduleInspection = scheduleDescAll.eq(1);
  let sheduleBriefing = scheduleDescAll.eq(2);
  let date = new Date();
  let cYear = +date.getFullYear();
  let cMonth = +date.getMonth() + 1;
  let cDay = +date.getDate();
  let sMonth, sYear, iDay, iMonth, iYear, bMonth, bYear;

  if (cDay >= 10) {
    sMonth = cMonth;
    sYear = cYear;
  } else {
    sMonth = setMonth(cMonth - 1);
    sYear = cMonth === 1 ? cYear - 1 : cYear;
  }

  if (cDay >= 17) {
    bMonth = cMonth;
    bYear = cYear;
  } else {
    bMonth = setMonth(cMonth - 1);
    bYear = cMonth === 1 ? cYear - 1 : cYear;
  }

  if (cDay >= 12 && cDay < 26) {
    iDay = 12;
    iMonth = cMonth;
    iYear = cYear;
  } else if (cDay < 12 && cDay > 0) {
    iDay = 26;
    iMonth = setMonth(cMonth - 1);
    iYear = cMonth === 1 ? cYear - 1 : cYear;
  } else {
    iDay = 26;
    iMonth = cMonth;
    iYear = cYear;
  }

  if (sMonth < 10) sMonth = "0" + sMonth;
  if (iMonth < 10) iMonth = "0" + iMonth;
  if (bMonth < 10) bMonth = "0" + bMonth;

  sheduleService.text(`10.${sMonth}.${sYear}`);
  sheduleInspection.text(`${iDay}.${iMonth}.${iYear}`);
  sheduleBriefing.text(`17.${bMonth}.${bYear}`);
}

function resizeWindow() {
  let tagline = $(".tagline");
  let docWidth = $(window).width();

  if (docWidth > 1200) {
    docWidth = docWidth > 1400 ? 1400 : docWidth;

    let sideWidth = (docWidth - 1200) / 2;
    tagline.css({
      marginLeft: -sideWidth,
      marginRight: -sideWidth
    });
  }
}
