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


// waypoints ... get to work
var workSection = $('#work');
var waypoints = $('#work').waypoint({
  handler: function(direction) {
    console.log(direction + ' hit')
  }
})


}); // end of ready
