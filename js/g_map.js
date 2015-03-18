function initialize() {
	var iconBase = 'img/The_Hive_marker.png';
  	var mapOptions = {
        zoom: 11,
        scrollwheel: false,
        center: new google.maps.LatLng(13.469240, 144.806684), 
        styles: [
        			{
        			"featureType":"landscape",
	        		"stylers":[
	        			{"hue":"#FFAD00"},
	        			{"saturation":80.2},
	        			{"lightness":-34.8},
	        			{"gamma":0}
	        		]}, {
	        		"featureType":"road.highway",
	        		"stylers":[
	        			{"hue":"#FFAD00"},
	        			{"saturation":-19.8},
	        			{"lightness":-1.8},
	        			{"gamma":1}
	        		]}, {
	        		"featureType":"road.arterial",
	    			"stylers":[
	    				{"hue":"#FFAD00"},
	        			{"saturation":72.4},
	        			{"lightness":-32.6},
	        			{"gamma":1}
	        		]}, {
	        		"featureType":"road.local",
	        		"stylers":[
	        			{"hue":"#FFAD00"},
	        			{"saturation":74.4},
	        			{"lightness":-18},
	        			{"gamma":1}
	        		]}, {
	        		"featureType":"water",
	        		"stylers":[
	        			{"hue":"#00FFA6"},
	        			{"saturation":-63.2},
	        			{"lightness":38},
	        			{"gamma":1}
	        		]}, {
	        		"featureType":"poi",
	        		"stylers":[
	        			{"hue":"#FFC300"},
	        			{"saturation":54.2},
	        			{"lightness":-14.4},
	        			{"gamma":1}
	        		]}
	        	]
    };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);

  var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(13.469240, 144.806684),
                    map: map,
                    title: 'Hello! :)',
  					icon: iconBase
                });
}
google.maps.event.addDomListener(window, 'load', initialize);