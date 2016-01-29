/*jshint devel:true */

// rough progress ease
// TweenLite.to(graph, 5, { ease: RoughEase.ease.config({ template: Circ.easeInOut, strength: 0.2, points: 20, taper: "both", randomize: false, clamp: false}), y: 0 });

$(document).ready(function() {


	// collapse and expand demo
	var $toggleIcon = $('#acc-toggle-icon');
	var $toggleContent = $('#toggle-content');
	var $togglePulser = $('.toggle-demo-container .pulse-circle');
	// tweens
	var toggleRotate = TweenLite.to($toggleIcon, 0.8, {rotationX:"180deg", ease: Back.easeInOut.config(3), paused:true,}); //tween constructor
	var hideContent = TweenLite.to($toggleContent, 0.7, {height:0, ease: Back.easeIn.config(1.2), paused:true}); //tween constructor
	$toggleIcon.data.active = false
	$toggleIcon.click(function() {
		if ( $(this).data.active === false ){
			toggleRotate.play(); // play tween
			hideContent.play(); // play tween
			$togglePulser.remove();
			$toggleIcon.data.active = true
		} else {
			toggleRotate.reverse(); // reverse tween
			hideContent.reverse(); // reverse tween
			$toggleIcon.data.active = false
		}
	});


	// toggle nav
	var $content = $('.container');
	var $navToggle = $('.sidebar .icon-container');
	var $sidebar = $('.sidebar');
	var toggleNav = TweenLite.to($sidebar , 0.3, {left:0, paused:true}); //tween constructor
	var toggleContent = TweenLite.to($content , 0.3, {left:250, paused:true}); //tween constructor
	$navToggle.data.active = false

	$navToggle.click(function() {
		if ( $(this).data.active === false ){
			toggleNav.play();
			toggleContent.play();
			$navToggle.data.active = true

		} else {
			toggleNav.reverse();
			toggleContent.reverse();
			$navToggle.data.active = false

		}
	});


	// spin loading icon
	var $loadingIcon = $('#load-icon');
	var $loadBar = $('#load-bar');
	var loadingRotate = TweenLite.to($loadingIcon, 1.5, {rotationZ:360, transformOrigin: "48% 47%", ease: Back.easeOut.config(1.2), paused: true,
		onComplete: function(){
			loadingRotate.restart();
			
		}
		}); //tween constructor
	$loadBar.hover(function() {
		loadingRotate.play();
		console.log('go!');
	}, function() {
		loadingRotate.pause();
		console.log('stop!');
	});

	// expand code snippet
	// first close everything 
	$('.codepen-wrapper').each(function() {
		
		if($(this).hasClass('logo-family')){
			//$(this).find('img').toggleClass('hide-snippet');
			//$(this).toggleClass('hide-snippet');
		} else {
			//$(this).toggleClass('hide-snippet');
		}
	});

	var toggleSnippet = function(el){

			console.log(el.data.active);
			var thisBtn = el;
			var container = el.parent().find('.codepen-wrapper');

			if( thisBtn.data.active === false){
				//thisBtn.find('em').text('Hide');
				thisBtn.data.active = true;
			} else {
				//thisBtn.find('em').text('View');
				thisBtn.data.active = false;
			}

			if(container.hasClass('logo-family') ){
				container.find('img').toggleClass('hide-img');
				container.toggleClass('hide-snippet');	
			} else{
				container.toggleClass('hide-snippet');	
			}
	}



	$('.expand-code-btn:not(.coming-soon)').each(function() {
		var btn = $(this);
		btn.data.active = false;
		console.log($(this).data.active)
		//button action
		btn.click(function() {
			var el = $(this)
			toggleSnippet(el);
		}); // end of click
	}); // end of each statement


	

	// expand contract toggles
	var toggleIcons = $('.toggle-icon');

	toggleIcons.each(function() {		

		$(this).click(function() {
			var thisIcon = $(this);
			console.log('ok');
			TweenLite.to(thisIcon, 0.8, {rotationX:"+=180deg", ease: Back.easeInOut.config(3)}); //tween constructor
		});
	});

	// switch toggle
	var green = $('.toggle-switch-indicator li.yes');
	var red = $('.toggle-switch-indicator li.no');
	var toggleContainer = $('.toggle-switch-container');
	var switchButton = $('.toggle-switch-btn');
	toggleContainer.data.active = false;
	var switchTween = TweenLite.to(switchButton , 0.3, {width:55, ease: Expo.easeInOut, paused:true}); //tween constructor
	toggleContainer.click(function() {
		if ( $(this).data.active === false ){
			switchTween.play();
			toggleContainer.data.active = true;
			setTimeout(function(){
				red.removeClass('toggle-no-active');
				green.addClass('toggle-yes-active');
			},200);
			
		} else {
			switchTween.reverse();
			toggleContainer.data.active = false;
			setTimeout(function(){
				red.addClass('toggle-no-active');
				green.removeClass('toggle-yes-active');
			},200);
			
		}
	});

	//transition demo
	var transitionContainer = $('#moving-content-demo');
	var transitionBox = transitionContainer.find('span');
	var counter = transitionContainer.find('.time-counter');
	var tl = new TimelineLite({paused:true, 
		onUpdate: function(){
			var timeVal = tl.time().toFixed(2);
			counter.text(timeVal);
		}
	});
	tl.add( TweenLite.to(transitionBox, 0.8, {x:300, ease: Expo.easeInOut}) );
	transitionContainer.hover(function() {
		tl.play();
		console.log('start!');
	}, function() {
		tl.reverse();
	});

	var transitionContainerShort = $('#moving-content-demo-short');
	var transitionBox = transitionContainerShort.find('span');
	var counter2 = transitionContainerShort.find('.time-counter');
	var tls = new TimelineLite({paused:true, 
		onUpdate: function(){
			var timeVal = tls.time().toFixed(2);
			counter2.text(timeVal);
		}
	});
	tls.add( TweenLite.to(transitionBox, 0.3, {x:50, ease: Expo.easeInOut}) );
	transitionContainerShort.hover(function() {
		tls.play();
		console.log('start!');
	}, function() {
		tls.reverse();
	});
	//hidden content demo
	var hcToggleMenu = $('#hc-menu-toggle');
	var hiddenContentBtn = $('#hidden-content-toggle');
	var hiddenContentWrapper =$('.hidden-content-box-wrapper');
	var menuBar =$('.hidden-content-topbar');
	
	hiddenContentBtn.click(function() {
		hiddenContentWrapper.toggleClass('move-hidden-content');
		$(this).toggleClass('hc-active-toggle');
	});

	hcToggleMenu.click(function() {
		menuBar.toggleClass('move-hidden-menu-bar');
		hcContentContainer.toggleClass('move-hidden-menu');
		hiddenContentBtn.toggleClass('hc-active-nav-icon');
	});

	$('.box-list li').each(function(index, el) {
		var widthVal = Math.floor(Math.random() * 40) + 30;  
		$(this).css('width', widthVal + 'px');
	});


	//color transition demo
	var colorContainer = $('#color-transition-demo');
	var colorCounter = colorContainer.find('.time-counter');
	var tlColor = new TimelineLite({paused:true, 
		onUpdate: function(){
			var timeVal = tlColor.time().toFixed(2);
			colorCounter.text(timeVal);
		}
	});


	// timeline for color transition
	tlColor.add( TweenLite.to(colorContainer, 0.3, {backgroundColor:'#5F7D8C', ease: Expo.easeInOut}) );
	colorContainer.hover(function() {
		tlColor.play();
	}, function() {
		tlColor.reverse();
	});
	// resize container
	var resizeContainer = $('#resizable');
	resizeContainer.resizable({
		minHeight: 300,
		maxHeight: 300,
		minWidth: 125,
		handles: "e",
		containment: "parent"
	});

	// buttons
	var toggleBtn = $('.btn-toggle');
	toggleBtn.click(function() {
		if( $(this).hasClass('btn-toggle-active') ){
			$(this).removeClass('btn-toggle-active');
		} else {
			$(this).addClass('btn-toggle-active');
		}
	});

	// pagination (bootstrap standard)

	$('.pagination a').click(function(e) {
		e.preventDefault();
	});



	// // tabs
	// var tabsLink = $('.tabs-group li');
	// tabsLink.click(function() {
	// 	if( $(this).hasClass('active-tab') ){

	// 	} else {
	// 		$(this).parent().find('.active-tab').removeClass('active-tab');
	// 		$(this).addClass('active-tab');
	// 	}
	// });

	// // pagination
	// var pageLink = $('.pagination-list li');
	// pageLink.click(function() {
	// 	if( $(this).hasClass('active-page') ){

	// 	} else {
	// 		$(this).parent().find('.active-page').removeClass('active-page');
	// 		$(this).addClass('active-page');
	// 	}
	// });

});

	// lightbox function
	$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox({
    	left_arrow_class:'.icon .ion-chevron-left',
    	right_arrow_class: '.icon .ion-chevron-right'
    });
}); 

	// accordion]
$('.collapse').collapse({
  toggle: false
});
$('.collapse').each(function() {
	var thisPanel = $(this);
	var panelHeading = thisPanel.parent().find('.panel-heading');
	var icon = thisPanel.parent().find('.icon');
	thisPanel.on('hide.bs.collapse', function () {
  		icon.toggleClass('flip-chevron');
  		panelHeading.toggleClass('active-acc-panel');
	});

	thisPanel.on('show.bs.collapse', function () {
		icon.toggleClass('flip-chevron');
  		panelHeading.toggleClass('active-acc-panel');
  		
	});
});	

$('#popover').popover({
	placement: 'top'
});




// no event link
$('a.noEvent').click(function(event) {
	event.preventDefault();
});

// tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


// waypoints
var setWaypoints = function(){
var navList = $('nav ul');
var navElements = $('nav ul li');
$('.waypoint-marker').each(function(index, el) {
	var el = $(this);

	var waypoint = el.waypoint({
		//offset: 10,
		handler: function(direction) {
			//console.log(this.element.id + ' hit');
			navElements.removeClass('current-section');
			//console.log(navElements);
			var key = this.key;
			console.log(this.key);
			switch (key) {
 
			    case 'waypoint-0': navList.find('li:nth-child(1)').addClass('current-section');
			    break;
			 
			    case 'waypoint-1': navList.find('li:nth-child(2)').addClass('current-section');
			    break;

			    case 'waypoint-2': navList.find('li:nth-child(3)').addClass('current-section');
			    break;

			    case 'waypoint-3': navList.find('li:nth-child(4)').addClass('current-section');
			    break;

			    case 'waypoint-4': navList.find('li:nth-child(5)').addClass('current-section');
			    break;

			    case 'waypoint-5': navList.find('li:nth-child(6)').addClass('current-section');
			    break;

			    case 'waypoint-6': navList.find('li:nth-child(7)').addClass('current-section');
			    break;

			    case 'waypoint-7': navList.find('li:nth-child(8)').addClass('current-section');
			    break;

			    case 'waypoint-8': navList.find('li:nth-child(9)').addClass('current-section');
			    break;

			    case 'waypoint-9': navList.find('li:nth-child(10)').addClass('current-section');
			    break;

			    case 'waypoint-10': navList.find('li:nth-child(11)').addClass('current-section');
			    break;

			    case 'waypoint-11': navList.find('li:nth-child(12)').addClass('current-section');
			    break;
			 


			    break;
			 
			    // And so on...
 
			}
			}
		})
	});
}

var smoothScroll= function(){
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
      	if(target.offset().top - window.scrollY > 0){
      		// going down
      		$('html,body').animate({
          		scrollTop: target.offset().top + 100
        	}, 600);
      	} else {
      		// going up
      		$('html,body').animate({
          		scrollTop: target.offset().top - 100
        	}, 600);
      	}
        
        return false;
      }
    }
  });

}
$(window).load(function() {
	smoothScroll();
	setWaypoints();
});

