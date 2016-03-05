/* ==============================================
MAP -->
=============================================== */

var locations = [
	['<div class="infobox"><h3 class="title"><a href="about.html">My BeiJing Location</a></h3><span>HuiLongGuan</span><br><span>+86 185 006 12334</span></div>', 40.083966, 116.349804, 2]
	];     
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 16,
		scrollwheel: false,
		navigationControl: true,
		mapTypeControl: false,
		scaleControl: false,
		draggable: true,
		styles: [ { "stylers": [ { "hue": "#ffffff" },  {saturation: -100},
		{gamma: 2} ] } ],
		center: new google.maps.LatLng(40.083966, 116.349804),
		mapTypeId: google.maps.MapTypeId.ROADMAP
		});
		var infowindow = new google.maps.InfoWindow();
		var marker, i;
		for (i = 0; i < locations.length; i++) {  
		marker = new google.maps.Marker({ 
		position: new google.maps.LatLng(locations[i][1], locations[i][2]), 
		map: map ,
		icon: 'img/marker.png'
		});
		google.maps.event.addListener(marker, 'click', (function(marker, i) {
		return function() {
		infowindow.setContent(locations[i][0]);
		infowindow.open(map, marker);
	}
	})(marker, i));
}
