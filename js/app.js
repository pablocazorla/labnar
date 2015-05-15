// App

$('document').ready(function() {
	$(".royalSlider").royalSlider({
		controlNavigation: 'bullets',
		arrowsNav: true,
		arrowsNavAutoHide: false,
		arrowsNavHideOnTouch: false,
		autoPlay: {
			enabled: true,
			pauseOnHover: false,
			delay: 5000
		},
		keyboardNavEnabled: true,
		loop: true
	});

	$(".product-details-description").organicTabs({
		"speed": 200
	});

	$('.pregunta').each(function(){
		var cp = new Spry.Widget.CollapsiblePanel($(this)[0], {
			contentIsOpen: false
		});
	});



});