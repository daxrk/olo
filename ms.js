$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay:true,
autoplayTimeout:3000,
autoplayHoverPause:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});
$(document).ready(function () {
  // Attach a click event handler to the button
  $(".uil").click(function () {
    $("input#gghl").toggleClass("actives");
  });
  $("a#toggle-btn").click(function () {
    $("ul#nav").toggleClass("active5");
  });
  $("div#nau").click(function () {
      $("div#nau").removeClass("active0");
      $("ul#nav").removeClass("active5");
  });

  $("a#toggle-btn").click(function () {
      $("div#nau").addClass("active0");
  });
});

// تحديد جميع العناصر .owl-carousel على الصفحة
var owlCarousels = document.querySelectorAll(".owl-carousel");

owlCarousels.forEach(function(owlCarousel) {
    // تحديد عناصر owl-nav و owl-stage-outer داخل العنصر الحالي
    var owlNav = owlCarousel.querySelector(".owl-nav");
    var owlStageOuter = owlCarousel.querySelector(".owl-stage-outer");

    // نقل عناصر owl-nav إلى داخل عنصر owl-carousel
    owlCarousel.insertBefore(owlNav, owlStageOuter);
});


/*-----------------------------------------------------------------------------------
/*
/* Main JS
/*
----------------------------------------------------------------------------------- */

(function($) {


  	/* Mobile Menu
   ------------------------------------------------------ */
   var toggle_button = $("<a>", {
     id: "toggle-btn",
     title: "Menu",
     href: "#"
 }).html("<i class='fa fa-bars' aria-hidden='true'></i>");

  	var nav_wrap = $('nav#nav-wrap')
  	var nav = $("ul#nav");

  	/* if JS is enabled, remove the two a.mobile-btns
  	and dynamically prepend a.toggle-btn to #nav-wrap */
  	nav_wrap.find('a.mobile-btn').remove();
  	nav_wrap.prepend(toggle_button);

  	toggle_button.on("click", function(e) {
   	e.preventDefault();
    	nav.slideToggle("fast");
  	});

  	if (toggle_button.is(':visible')) nav.addClass('mobile');
  	$(window).resize(function(){
   	if (toggle_button.is(':visible')) nav.addClass('mobile');
    	else nav.removeClass('mobile');
  	});

  	$('ul#nav li a').on("click", function(){
   	if (nav.hasClass('mobile')) nav.fadeOut('fast');
  	});


  	/* Smooth Scrolling
  	------------------------------------------------------ */
  	$('.smoothscroll').on('click', function (e) {

	 	e.preventDefault();

   	var target = this.hash,
    	$target = $(target);

    	$('html, body').stop().animate({
       	'scrollTop': $target.offset().top
      }, 800, 'swing', function () {
      	window.location.hash = target;
      });

  	});


  	/*	Back To Top Button
	------------------------------------------------------- */
	var pxShow = 300; //height on which the button will show
	var fadeInTime = 400; //how slow/fast you want the button to show
	var fadeOutTime = 400; //how slow/fast you want the button to hide
	var scrollSpeed = 300; //how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'

   // Show or hide the sticky footer button
	$(window).scroll(function() {

		if ($(window).scrollTop() >= pxShow) {
			$("#go-top").fadeIn(fadeInTime);
		} else {
			$("#go-top").fadeOut(fadeOutTime);
		}

	});


})(jQuery);
