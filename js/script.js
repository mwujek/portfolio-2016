/*jshint devel:true */


$(document).ready(function() {

var menuBtn = $('.menu-icon');
var navMenu = $('.menu-navigation-wrapper');
menuBtn.click(function() {
  navMenu.toggleClass('show-mobile-nav');
});

var workContent = $('.work-section');
// workContent.toggleClass('hidden-section');
// $(".everlane-title").typed({
//     strings: ["Everlane Mobile"],
//     contentType: 'html',
//     typeSpeed: 50,
//     showCursor: false,
//      onStringTyped: function() {
//       console.log('done!');
//       setTimeout(function(){
//         workContent.removeClass('hidden-section');
//       },150);
      
//      }
// });


// flickity function
function globalFunction() {
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


// waypoints ... get to work
// var workSection = $('#work');
// var waypoints = $('#work').waypoint({
//   handler: function(direction) {
//     console.log(direction + ' hit');
//   }
// });


}); // end of ready
