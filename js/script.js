/*jshint devel:true */


$(document).ready(function() {

var menuBtn = $('.menu-icon');
var navMenu = $('.menu-navigation-wrapper');
menuBtn.click(function() {
  navMenu.toggleClass('show-mobile-nav');
});

}); // end of ready
