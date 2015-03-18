$(document).ready(function() {

	var choose_slider 		= $('.choose_slider'),
		choose_video 		= $('.choose_video'),
		slider_mini_overlay = $('.slider_mini_overlay'),
		video_mini_overlay	= $('.video_mini_overlay');

	choose_slider.hover(function(){
		slider_mini_overlay.css('display', 'block');
		slider_mini_overlay.css('z-index', '10');
	}, function(){
		slider_mini_overlay.css('display', 'none');
	});

	choose_video.hover(function(){
		video_mini_overlay.css('display', 'block');
		video_mini_overlay.css('z-index', '10');
	}, function(){
		video_mini_overlay.css('display', 'none');
	});

// HEADER SLIDER

	var header_slide_1 	= $('.header_slide_1'),
		imac_mockup	   	= $('.imac_mockup'),
		ipad_mockup	   	= $('.ipad_mockup'),
		ipadmini_mockup	= $('.ipadmini_mockup'),
		iphone_mockup  	= $('.iphone_mockup');

	if(header_slide_1.hasClass('active')) {
		imac_mockup.animate({
			marginLeft: '',
			marginTop: '0px'
		}, 2000, function() {
			
		});

		ipad_mockup.animate({
			marginLeft: '-50px',
			marginTop: '25vh'
		}, 2000);

		ipadmini_mockup.animate({
			marginLeft: '430px',
			marginTop: '25vh'
		}, 2000);

		iphone_mockup.animate({
			marginLeft: '-100px',
			marginTop: '33vh'
		}, 2000);

	} else {
		
	}

// SERVICES 

	var services = $('.services'),
		servicesSingle = $('.services_single'),
		servicesImg = $('.services img');
	

	setInterval( function () { 
		var servicesSingleFirst = $('.services_single:first-child');
		servicesSingleFirst.animate({
			'marginLeft': '0px'
		}, 5000, function() {
			if(servicesSingleFirst.css("marginLeft")=='0px') {
				$("<div class='services_single'><img src='"+$(this).find('img').attr('src')+"'></div>").appendTo(services);
				$(this).remove();
			}
		});
	}, 0);

// PROJECTS

	var projects_single = $('.projects_single'),
		projects_single_info = $('.projects_single_info');

	projects_single.hover( function(){
		$(this).find(projects_single_info).show();
	}, function() {
		$(this).find(projects_single_info).hide();
	});


$('.pull-down').each(function() {
	$(this).css('margin-top', $(this).parent().height()-$(this).height())
});
		
});