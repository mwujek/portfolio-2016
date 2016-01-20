/*jshint devel:true */


// INDEX ONLY
// Set intro text in the middle
var setIntroType = function (){
	var intro = $('.canvas-container h1');
	var introH = intro.height();
	var introW = intro.width();
	var screenH = $(window).height();
	var screenW = $(window).width();
	//console.log("height = " + introH + "... screen height = " + screenH);
	
	// set type
	intro.css({
		'top': ((screenH - introH) / 2) + 'px',
		'left': ((screenW - introW) / 2) + 'px'
	})
}

// INDEX ONLY
// set bio surf image HEIGHT
var setBioPic = function(){
	var pic = $('.bio-section');
	var screenW = $(window).width();
	pic.css('height', screenW * 0.6 + 'px');
}

// all pages
// smooth scroll
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


// on load
$(window).load(function() {
	// set type
	setIntroType();
	setBioPic();
	smoothScroll();
});

// on ready
$(document).ready(function() {

  var menuBtn = $('.menu-icon');
  var navMenu = $('.menu-navigation-wrapper');
  var navLink = $('.menu-navigation-wrapper a');
  menuBtn.click(function() {
    navMenu.toggleClass('show-mobile-nav');
  });
  navLink.click(function() {
    navMenu.toggleClass('show-mobile-nav');
  });

//hide desktop & work
var widthThreshold = 1300;
var shadowThreshold = 1130;


// PROJECTS ONLY
// project nav only FUNCTION
var placeProjectNav = function(){
  var href = window.location.pathname;
  var nav = $('.desktop-nav');
  var screenWidth = $(window).width();

  // ADD shadow or not
    if ( screenWidth > shadowThreshold){
      nav.removeClass('add-shadow');
    } else {
      nav.addClass('add-shadow');
      nav.css('left', '0px');
    }
  // set left if it's a big screen
  if ( screenWidth > shadowThreshold){
    var contentW = $('.content-container').width();
    var navOffset = ((screenWidth - shadowThreshold) / 2);
    nav.css('left', navOffset + 'px');
  }
}


var workSection = $('#work');
var desktopNav = $('.desktop-nav');
var href = window.location.pathname;
// NAVIGATION TOGGLE HERE...
console.log('href is: ' + href);

if(href === '/' || href === '/index.html' || href === '/portfolio-2016/' || href === '/portfolio-2016/index.html'){
  desktopNav.toggleClass('hide-desktop-nav');
} else {
  placeProjectNav();
}





// flickity function
var globalFunction = function() {
  //var windowW = $(window).width();
  var breakPoint = 800;
  console.log('inside globalFunction');

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
    placeProjectNav();
  }); // end of resize
}




// set all flickity slides and resize functions for project nav and toggleFlicker
//if(href !== '/' || href !== '/index.html' || href !== 'portfolio-2016/' || href !== 'portfolio-2016/index.html'){
if(href === '/' || href === '/index.html' || href === '/portfolio-2016/' || href === '/portfolio-2016/index.html'){
	console.log('on the home page (not running globalFunction');
} else {
  globalFunction();
}



// set waypoints
if(href === '/' || href === '/index.html' || href === '/portfolio-2016/' || href === '/portfolio-2016/index.html'){
	
//waypoints ... get to work
var canvas = $('.canvas-container')
$('#work').waypoint({
	offset: '50%',
	handler: function(direction) {
		
		if (direction === 'down' && desktopNav.hasClass('hide-desktop-nav') ){
			desktopNav.toggleClass('hide-desktop-nav');
		}
		if (direction === 'up' && desktopNav.not('.hide-desktop-nav') ){
			desktopNav.toggleClass('hide-desktop-nav');
		}
	}
});

canvas.waypoint({
	offset: '-10px',
	handler: function(direction) {
		if (direction === 'down' && workSection.hasClass('hide-work-title') ){
			workSection.toggleClass('hide-work-title');
		}
		if (direction === 'up' && workSection.not('.hide-work-title') ){
			workSection.toggleClass('hide-work-title');
		}
	}
});
}


}); // end of ready

$(window).resize(function() {
  setIntroType();
  setBioPic();
  }); // end of resize
