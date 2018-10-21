var curr_lat = 0;
var curr_long = 0;
var request = new XHMLHttpRequest();
var curr_location = new google.maps.LatLng(curr_lat, curr_long);
var myOptions = {
	zoom: 13,
	center: curr_location,
	mapTypeId: google.maps.MapType.ROADMAP
}

