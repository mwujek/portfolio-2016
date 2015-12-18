/*jshint devel:true */

var setIntroType = function (){
	var intro = $('.canvas-container h1');
	var introH = intro.height();
	var introW = intro.width();
	var screenH = $(window).height();
	var screenW = $(window).width();
	console.log("height = " + introH + "... screen height = " + screenH);
	
	// set type
	intro.css({
		'top': ((screenH - introH) / 2) + 'px',
		'left': ((screenW - introW) / 2) + 'px'
	})
}
var smoothScroll= function(){
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

}
$(window).load(function() {
	// set type
	setIntroType();
	smoothScroll();
});


$(document).ready(function() {

var menuBtn = $('.menu-icon');
var navMenu = $('.menu-navigation-wrapper');
menuBtn.click(function() {
  navMenu.toggleClass('show-mobile-nav');
});

//hide desktop
var desktopNav = $('.desktop-nav');
desktopNav.toggleClass('hide-desktop-nav');

// flickity function
var globalFunction = function() {
  //var windowW = $(window).width();
  var breakPoint = 800;

  function toggleFlicker() {
    if (flickityActive) {
      // destroy Flickity
      $gallery.flickity('destroy');
    } else {
      // init new Flickity
      $gallery.flickity({
        prevNextButtons: false,
        cellAlign: 'center',
        contain: true
      });
    }
    flickityActive = !flickityActive;
    resizeObject.mobileView = !resizeObject.mobileView;
  }

  var resizeObject = {
    mobileView: false,
    breakWidth: breakPoint,
    checkView: function() {
      if ($(window).width() < this.breakWidth) {
        this.mobileView = true;
      } else {
        this.mobileView = false;
      }
    }
  };

  // Set Gallery Variables
  var flickityActive = true;
  var $gallery = $('.project-gallery').each(function() {
    $(this).flickity({
      prevNextButtons: false,
      cellAlign: 'center',
      contain: true
    });
  });

  // initiate gallery
  resizeObject.checkView();
  if (!resizeObject.mobileView) {
    $gallery.flickity('destroy');
    flickityActive = false;
  }

  $(window).resize(function() {
    var currentW = $(this).width();
    if (resizeObject.mobileView && currentW > resizeObject.breakWidth || !resizeObject.mobileView && currentW < resizeObject.breakWidth) {
      toggleFlicker();
    }
  }); // end of resize
}




// everlane
var href = window.location.pathname;
if(href === '/everlane.html'){
	globalFunction();
}


//waypoints ... get to work
var workSection = $('#work');
var waypoints = $('#work').waypoint({
	offset: '50%',
	handler: function(direction) {
		
		if (direction === 'down' && desktopNav.hasClass('hide-desktop-nav') ){
			desktopNav.toggleClass('hide-desktop-nav');
		}
		if (direction === 'up' && desktopNav.not('.hide-desktop-nav') ){
			desktopNav.toggleClass('hide-desktop-nav');
			console.log('not class');
		}
	}
});


}); // end of ready

  $(window).resize(function() {
    setIntroType();
  }); // end of resize
