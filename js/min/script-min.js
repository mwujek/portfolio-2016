var setIntroType=function(){var e=$(".canvas-container h1"),t=e.height(),i=e.width(),o=$(window).height(),n=$(window).width();e.css({top:(o-t)/2+"px",left:(n-i)/2+"px"})},setBioPic=function(){var e=$(".bio-section"),t=$(window).width();e.css("height",.6*t+"px")},smoothScroll=function(){$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html,body").animate({scrollTop:e.offset().top},1e3),!1}})};$(window).load(function(){setIntroType(),setBioPic(),smoothScroll()}),$(document).ready(function(){var e=$(".menu-icon"),t=$(".menu-navigation-wrapper"),i=$(".menu-navigation-wrapper a");e.click(function(){t.toggleClass("show-mobile-nav")}),i.click(function(){t.toggleClass("show-mobile-nav")});var o=1300,n=1130,a=function(){var e=window.location.pathname;if("/everlane.html"===e){var t=$(".desktop-nav"),i=$(window).width();if(i>n?t.removeClass("add-shadow"):(t.addClass("add-shadow"),t.css("left","0px")),i>n){var o=$(".content-container").width(),a=(i-n)/2;console.log(a),t.css("left",a+"px")}}},l=$("#work"),s=$(".desktop-nav"),c=window.location.pathname;"/everlane.html"!==c?s.toggleClass("hide-desktop-nav"):a();var h=function(){function e(){o?n.flickity("destroy"):n.flickity({prevNextButtons:!1,cellAlign:"center",contain:!0}),o=!o,i.mobileView=!i.mobileView}var t=800,i={mobileView:!1,breakWidth:t,checkView:function(){$(window).width()<this.breakWidth?this.mobileView=!0:this.mobileView=!1}},o=!0,n=$(".project-gallery").each(function(){$(this).flickity({prevNextButtons:!1,cellAlign:"center",contain:!0})});i.checkView(),i.mobileView||(n.flickity("destroy"),o=!1),$(window).resize(function(){var t=$(this).width();(i.mobileView&&t>i.breakWidth||!i.mobileView&&t<i.breakWidth)&&e(),a()})};if(c=window.location.pathname,("/everlane.html"===c||"/p16/everlane.html"===c)&&h(),"/everlane.html"!==c){var r=$(".canvas-container");$("#work").waypoint({offset:"50%",handler:function(e){"down"===e&&s.hasClass("hide-desktop-nav")&&s.toggleClass("hide-desktop-nav"),"up"===e&&s.not(".hide-desktop-nav")&&(s.toggleClass("hide-desktop-nav"),console.log("not class"))}}),r.waypoint({offset:"-10px",handler:function(e){"down"===e&&l.hasClass("hide-work-title")&&l.toggleClass("hide-work-title"),"up"===e&&l.not(".hide-work-title")&&(l.toggleClass("hide-work-title"),console.log("not class"))}})}}),$(window).resize(function(){setIntroType(),setBioPic()});