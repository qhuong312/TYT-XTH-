(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: false,
        animateOut: 'fadeOutLeft',
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });

      
    
})(jQuery);

function toggleText() {
    var text = document.getElementById("moreText");
    var button = document.getElementById("myButton");
  
    if (text.style.display === "none") {
      text.style.display = "inline";
      button.textContent = "Thu gọn";
    } else {
      text.style.display = "none";
      button.textContent = "Đọc thêm";
    }
  }
function toggleTextHD() {
    var text1 = document.getElementById("moreTextHD");
    var button1 = document.getElementById("myButtonHD");
  
    if (text1.style.display === "none") {
      text1.style.display = "inline";
      button1.textContent = "Thu gọn";
    } else {
      text1.style.display = "none";
      button1.textContent = "Đọc thêm";
    }
  }
function toggleTextHD2() {
    var text2 = document.getElementById("moreTextHD2");
    var button2 = document.getElementById("myButtonHD2");
  
    if (text2.style.display === "none") {
      text2.style.display = "inline";
      button2.textContent = "Thu gọn";
    } else {
      text2.style.display = "none";
      button2.textContent = "Đọc thêm";
    }
  }
function toggleTextCumA() {
    var text3 = document.getElementById("moreTextCumA");
    var button3 = document.getElementById("myButtonCumA");
  
    if (text3.style.display === "none") {
      text3.style.display = "inline";
      button3.textContent = "Thu gọn";
    } else {
      text3.style.display = "none";
      button3.textContent = "Đọc thêm";
    }
  }

 
  
