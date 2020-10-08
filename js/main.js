// Cossacs -------------------------------------------

// menu burger ==========================================

$(document).ready(function () {
  toggle_nav_container();
  gotoByScroll();
});

var toggle_nav_container = function () {
  var $toggleButton = $("#toggle_m_nav");
  $navContainer = $("#m_nav_container");
  $menuButton = $("#m_nav_menu");
  $menuButtonBars = $(".m_nav_ham");
  $wrapper = $("#wrapper");

  // toggle the container on click of button (can be remapped to $menuButton)

  $toggleButton.on("click", function () {
    // declare a local variable for the window width
    var $viewportWidth = $(window).width();

    // if statement to determine whether the nav container is already toggled or not

    if ($navContainer.is(":hidden")) {
      $wrapper.removeClass("closed_wrapper");
      $wrapper.addClass("open_wrapper");
      $navContainer
        .slideDown(200)
        .addClass("container_open")
        .css("z-index", "2");
      // $(window).scrollTop(0);
      $menuButtonBars.removeClass("button_closed");
      $menuButtonBars.addClass("button_open");
      $("#m_ham_1").addClass("m_nav_ham_1_open");
      $("#m_ham_2").addClass("m_nav_ham_2_open");
      $("#m_ham_3").addClass("m_nav_ham_3_open");
    } else {
      $navContainer
        .css("z-index", "0")
        .removeClass("container_open")
        .slideUp(200);
      $menuButtonBars.removeClass("button_open");
      $menuButtonBars.addClass("button_closed");
      $wrapper.removeClass("open_wrapper");
      $wrapper.addClass("closed_wrapper");
      $("#m_ham_1").removeClass("m_nav_ham_1_open");
      $("#m_ham_2").removeClass("m_nav_ham_2_open");
      $("#m_ham_3").removeClass("m_nav_ham_3_open");
    }
  });
};

// Function that takes the href value of links in the navbar and then scrolls
//the div on the page whose ID matches said value. This only works if you use
//a consistent naming scheme for the navbar anchors and div IDs

var gotoByScroll = function () {
  $(".m_nav_item a").on("click", function (e) {
    $("html,body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 50,
      },
      "slow"
    );
  });
};
// /menu  ***********************************

// header slider
$(document).ready(function () {
  $(".header-slider").slick({
    arrows: false,
    draggable: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true, // режим плавної зміни слайдів
  });
});

// main-slider--------------------------------------
$(document).ready(function () {
  $(".main-project__slider").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    customPaging: function (slider, i) {
      return '<img src="../images/slide-dot.svg" /><img src="../images/slide-dot-active.svg" />';
    },
  });
});

// video ---------------------------
//  remoove control panel for media pleyer ********************
// var vids = $("video");
// $.each(vids, function () {
//   this.controls = false;
// });
//Loop though all Video tags and set Controls as false
// $("video").click(function () {
//   if (this.paused) {
//     this.play();
//   } else {
//     this.pause();
//   }
// });
// ***************************************************************

// galery  ==================================
// Zoom photo when hovering
// $(function () {
//   $(".minimized").click(function (event) {
//     var i_path = $(this).attr("img=src");

//     $("body").append(
//       '<div id="overlay"></div><div id="magnify"><img src="' +
//         i_path +
//         '"><div id="close-popup"><i></i></div></div>'
//     );
//     $("#magnify").css({
//       left: ($(document).width() - $("#magnify").outerWidth()) / 2,
//       top: ($(window).height() - $("#magnify").outerHeight()) / 2,
//     });
//     $("#overlay, #magnify").fadeIn("fast");
//   });

//   $("body").on("click", "#close-popup, #overlay", function (event) {
//     event.preventDefault();
//     $("#overlay, #magnify").fadeOut("fast", function () {
//       $("#close-popup, #magnify, #overlay").remove();
//     });
//   });
// });

// testimonials------------------------
$(document).ready(function () {
  $(".testimonials-conteiner").slick({
    arrows: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/left-arrow-w.svg" alt="arrow"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="images/right-arrow-w.svg" alt="arrow"></button>',
    draggable: true,
    // autoplay: true,
    // autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  });
});
