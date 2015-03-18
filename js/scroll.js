$(document).scroll(function () {

    var y = $(this).scrollTop();

    var header_slider 	   = $('.header_slider'),
		about_container    = $('.about_container'),
    	about_iphone_frame = $('.about_iphone_frame'),
    	about_text		   = $('.about_text'),
        paralax_bckg_1     = $(".paralax_bckg_1"),
        team_container     = $(".team_container"),
        paralax_bckg_2     = $(".paralax_bckg_2"),
        clients_content    = $(".clients_content"),
        timeline           = $(".timeline"),
        statistics         = $(".statistics"),
        services_details   = $(".services_details"),
        paralax_bckg_3     = $(".paralax_bckg_3"),
        google_map         = $(".google_map"),
        contact            = $(".contact");

    
    var header_slider_height    = header_slider.height(),
        about_height            = header_slider.height() + about_container.height(),
        team_height             = header_slider.height() + about_container.height() + paralax_bckg_1.height(),
        projects_height         = header_slider.height() + about_container.height() + paralax_bckg_1.height() + team_container.height() + paralax_bckg_2.height(),
        timeline_height         = header_slider.height() + about_container.height() + paralax_bckg_1.height() + team_container.height() + paralax_bckg_2.height() + clients_content.height(),
        services_details_height = header_slider.height() + about_container.height() + paralax_bckg_1.height() + team_container.height() + paralax_bckg_2.height() + clients_content.height() + timeline.height(),
        newsletter_height       = header_slider.height() + about_container.height() + paralax_bckg_1.height() + team_container.height() + paralax_bckg_2.height() + clients_content.height() + timeline.height() + statistics.height() + services_details.height(),
        goglemap_height         = header_slider.height() + about_container.height() + paralax_bckg_1.height() + team_container.height() + paralax_bckg_2.height() + clients_content.height() + timeline.height() + statistics.height() + services_details.height() + paralax_bckg_3.height(), 
        contact_height          = header_slider.height() + about_container.height() + paralax_bckg_1.height() + team_container.height() + paralax_bckg_2.height() + clients_content.height() + timeline.height() + statistics.height() + services_details.height() + paralax_bckg_3.height() + google_map.height();
                       
    var nav                          = $('nav'),
        nav_li                       = $('.nav li'),
        services_details_col_left_1  = $('.services_details_col_left_1'),
        services_details_col_left_2  = $('.services_details_col_left_2'),
        services_details_col_left_3  = $('.services_details_col_left_3'),
        services_details_col_right_1 = $('.services_details_col_right_1'),
        services_details_col_right_2 = $('.services_details_col_right_2'),
        services_details_col_right_3 = $('.services_details_col_right_3');

    if ( y > header_slider_height ) {
        nav.show();
        about_iphone_frame.animate({
        	marginLeft: 0
        }, 2000);
        about_text.fadeIn(4000);
    } else {
        nav.hide();
    }

    if ( y > about_height ) {
        nav_li.css({
            'padding': '0px',
            'font-size': '12px'
        });
    } else {
        nav_li.css({
            'padding': '10px',
            'font-size': '20px'
        });
    }

    if ( y > team_height ) {
        
    } else {
        
    }

    if (y > projects_height ) {
        
    } else {
        
    }

    if (y > timeline_height ) {
        
    } else {
        
    }

    if (y > services_details_height ) {

        services_details_col_left_1.animate({
            marginLeft: 0
        }, 2000, function() {
            services_details_col_left_2.animate({
                marginLeft: 0
            }, 2000, function() {
                services_details_col_left_3.animate({
                    marginLeft: 0
                }, 2000)
            });
        });

        services_details_col_right_1.animate({
            marginLeft: 0
        }, 2000, function() {
            services_details_col_right_2.animate({
                marginLeft: 0
            }, 2000, function() {
                services_details_col_right_3.animate({
                    marginLeft: 0
                }, 2000, function() {
                    $('.services_details_mockup').fadeIn(2000);
                });
            });
        })

    } else {
        
    }

    if (y > newsletter_height ) {
        
    } else {
        
    }

    if (y > goglemap_height ) {
        
    } else {
        
    }

    if (y > contact_height ) {
        
    } else {
        
    }

});