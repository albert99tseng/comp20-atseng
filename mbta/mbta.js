var map;
var curr_long = -71.0589;
var curr_lat = 42.3601;
var option = {
	center: {lat: curr_lat, lng: curr_long},
    zoom: 13
}
//var request = new XHMLHttpRequest();
// var stations1 = [{"stop_name": "Alewife", "lat": 42.395428, "lon": -71.142483},
// 			  {"stop_name": "Davis", "lat": 42.39674, "lon": -71.121815},
// 			  {"stop_name": "Porter Square", "lat": 42.3884, "lon": -71.11914899999999},
// 			  {"stop_name": "Harvard Square", "lat": 42.373362, "lon": -71.118956},
// 			  {"stop_name": "Central Square", "lat": 42.365486, "lon": -71.103802},
// 			  {"stop_name": "Kendall/MIT", "lat": 42.36249079, "lon": -71.08617653},
// 			  {"stop_name": "Charles/MGH", "lat": 42.361166, "lon": -71.070628},
// 			  {"stop_name": "Park Street", "lat": 42.35639457, "lon": -71.0624242},
// 			  {"stop_name": "Downtown Crossing", "lat": 42.355518, "lon": -71.060225},
// 			  {"stop_name": "South Station", "lat": 42.352271, "lon": -71.05524200000001},
// 			  {"stop_name": "Broadway", "lat": 42.342622, "lon": -71.056967},
// 			  {"stop_name": "Andrew", "lat":  42.330154, "lon": -71.057655},
// 			  {"stop_name": "JFK/UMass", "lat":   42.320685, "lon": -71.052391}]

// var stations2 = [{"stop_name": "North Quincy", "lat": 42.275275, "lon": -71.029583},
// 			  {"stop_name": "Wallaston", "lat": 42.2665139, "lon": -71.0203369},
// 			  {"stop_name": "Quincy Center", "lat": 42.251809, "lon": -71.005409},
// 			  {"stop_name": "Quicny Adams", "lat": 42.233391, "lon": -71.007153},
// 			  {"stop_name": "Braintree", "lat": 42.2078543, "lon": -71.0011385}]

// var stations3 = [{"stop_name": "Savin Hill", "lat": 42.31129, "lon": -71.053331},
// 			  {"stop_name": "Fells Corner", "lat": 42.300093, "lon": -71.061667},
// 			  {"stop_name": "Shawmut", "lat": 42.29312583, "lon": -71.06573796000001},
// 			  {"stop_name": "Ashmont", "lat": 42.284652, "lon": -71.06448899999999}]



function initMap() {
    map = new google.maps.Map(document.getElementById('map'), option);
    //myLocation();


 	var image_marker = 'mbta.png';
  	var Alewife = new google.maps.Marker({
   		position: {lat: 42.395428, lng: -71.142483},
    	map: map,
    	icon: image_marker
 	});
  	Alewife.setMap(map);

  	var Davis = new google.maps.Marker({
   		position: {lat: 42.39674, lng: -71.121815},
    	map: map,
    	icon: image_marker
 	});
  	Davis.setMap(map);

  	var Porter_Square = new google.maps.Marker({
   		position: {lat: 42.3884, lng: -71.11914899999999},
    	map: map,
    	icon: image_marker
 	});
  	Porter_Square.setMap(map);

  	var Harvard_Square = new google.maps.Marker({
   		position: {lat: 42.373362, lng: -71.118956},
    	map: map,
    	icon: image_marker
 	});
  	Harvard_Square.setMap(map);

  	var Central_Square = new google.maps.Marker({
   		position: {lat: 42.365486, lng: -71.103802},
    	map: map,
    	icon: image_marker
 	});
  	Central_Square.setMap(map);

  	var Kendall_MIT = new google.maps.Marker({
   		position: {lat: 42.36249079, lng: -71.08617653},
    	map: map,
    	icon: image_marker
 	});
  	Kendall_MIT.setMap(map);

  	var Charles_MGH = new google.maps.Marker({
   		position: {lat: 42.361166, lng: -71.070628},
    	map: map,
    	icon: image_marker
 	});
  	Charles_MGH.setMap(map);

  	var Park_Street = new google.maps.Marker({
   		position: {lat: 42.35639457 , lng: -71.0624242},
    	map: map,
    	icon: image_marker
 	});
  	Park_Street.setMap(map);

  	var Downtown_Crossing = new google.maps.Marker({
   		position: {lat: 42.355518, lng: -71.060225},
    	map: map,
    	icon: image_marker
 	});
  	Downtown_Crossing.setMap(map);

  	var South_Station = new google.maps.Marker({
   		position: {lat: 42.352271, lng: -71.05524200000001},
    	map: map,
    	icon: image_marker
 	});
  	South_Station.setMap(map);

  	var Broadway = new google.maps.Marker({
   		position: {lat: 42.342622, lng: -71.056967},
    	map: map,
    	icon: image_marker
 	});
  	Broadway.setMap(map);

  	var Andrew = new google.maps.Marker({
   		position: {lat: 42.330154, lng: -71.057655},
    	map: map,
    	icon: image_marker
 	});
  	Andrew.setMap(map);

  	var JFK_UMass = new google.maps.Marker({
   		position: {lat:42.320685, lng: -71.052391},
    	map: map,
    	icon: image_marker
 	});
  	JFK_UMass.setMap(map);

  	var North_Quincy = new google.maps.Marker({
   		position: {lat:42.275275, lng: -71.029583},
    	map: map,
    	icon: image_marker
 	});
  	North_Quincy.setMap(map)

  	var Wallaston = new google.maps.Marker({
   		position: {lat:42.2665139, lng: -71.0203369},
    	map: map,
    	icon: image_marker
 	});
  	Wallaston.setMap(map);

  	var Quincy_Center = new google.maps.Marker({
   		position: {lat:42.251809, lng: -71.005409},
    	map: map,
    	icon: image_marker
 	});
  	Quincy_Center.setMap(map);

  	var Quincy_Adams = new google.maps.Marker({
   		position: {lat: 42.233391, lng: -71.007153 },
    	map: map,
    	icon: image_marker
 	});
  	Quincy_Adams.setMap(map);

  	var Braintree = new google.maps.Marker({
   		position: {lat: 42.2078543, lng: -71.0011385 },
    	map: map,
    	icon: image_marker
 	});
  	Braintree.setMap(map);

  	var Savin_Hill = new google.maps.Marker({
   		position: {lat: 42.31129, lng: -71.053331 },
    	map: map,
    	icon: image_marker
 	});
  	Savin_Hill.setMap(map);

  	var Fells_Corner = new google.maps.Marker({
   		position: {lat: 42.300093, lng: -71.061667 },
    	map: map,
    	icon: image_marker
 	});
  	Fells_Corner.setMap(map);

  	var Shawmut = new google.maps.Marker({
   		position: {lat: 42.29312583, lng: -71.06573796000001 },
    	map: map,
    	icon: image_marker
 	});
  	Shawmut.setMap(map);

  	var Ashmont = new google.maps.Marker({
   		position: {lat: 42.284652, lng: -71.06448899999999},
    	map: map,
    	icon: image_marker
 	});
  	Ashmont.setMap(map);









}




/*
function myLocation(){
	if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(position){
			curr_lat = position.coords.latitude;
			curr_long = position.coords.longitude;
			renderMap();
		});
	}
	else{
		alert("Geolocation is not supported.")
	}
}


function renderMap(){
	request.open('GET', "https://chicken-of-the-sea.herokuapp.com/redline/schedule.json?stop_id=place-davis", true);
	request.send();
	request.onreadystatechange = function(){
		if (request.readyState == XHMLHttpRequest.DONE){
			if (request.readyState != 200){
				alert("Can't load train data")
			}
			else{
				var timedata = JSON.parse(request.responseText);
				//showTrainData(timedata);
			}
		}
	}
}

*/




/*

var curr_long = 0;
var curr_lat = 0;
var request = new XHMLHttpRequest();
var curr_location = new google.maps.LatLng(curr_lat, curr_long);
var myOptions = {
	zoom: 13,
	center: curr_location,
	mapTypeId: google.maps.MapType.ROADMAP
}
var mark;
var marks;
var map;
var infowindow = new google.maps.InfoWindow();
var numstations1 = 13; //stations from alewife to JFK/UMass
var numstations2 = 5; //stations from North Quicy to Braintree
var numstations3 = 4; //statins from Savin Hill to Ashmont

var stations1 = [{"stop_name": "Alewife", "lat": 42.395428, "lon": -71.142483},
			  {"stop_name": "Davis", "lat": 42.39674, "lon": -71.121815},
			  {"stop_name": "Porter Square", "lat": 42.3884, "lon": -71.11914899999999},
			  {"stop_name": "Harvard Square", "lat": 42.373362, "lon": -71.118956},
			  {"stop_name": "Central Square", "lat": 42.365486, "lon": -71.103802},
			  {"stop_name": "Kendall/MIT", "lat": 42.36249079, "lon": -71.08617653},
			  {"stop_name": "Charles/MGH", "lat": 42.361166, "lon": -71.070628},
			  {"stop_name": "Park Street", "lat": 42.35639457, "lon": -71.0624242},
			  {"stop_name": "Downtown Crossing", "lat": 42.355518, "lon": -71.060225},
			  {"stop_name": "South Station", "lat": 42.352271, "lon": -71.05524200000001},
			  {"stop_name": "Broadway", "lat": 42.342622, "lon": -71.056967},
			  {"stop_name": "Andrew", "lat":  42.330154, "lon": -71.057655},
			  {"stop_name": "JFK/UMass", "lat":   42.320685, "lon": -71.052391}]

var stations2 = [{"stop_name": "North Quincy", "lat": 42.275275, "lon": -71.029583},
			  {"stop_name": "Wallaston", "lat": 42.2665139, "lon": -71.0203369},
			  {"stop_name": "Quincy Center", "lat": 42.251809, "lon": -71.005409},
			  {"stop_name": "Quicny Adams", "lat": 42.233391, "lon": -71.007153},
			  {"stop_name": "Braintree", "lat": 42.2078543, "lon": -71.0011385}]

var stations3 = [{"stop_name": "Savin Hill", "lat": 42.31129, "lon": -71.053331},
			  {"stop_name": "Fells Corner", "lat": 42.300093, "lon": -71.061667},
			  {"stop_name": "Shawmut", "lat": 42.29312583, "lon": -71.06573796000001},
			  {"stop_name": "Ashmont", "lat": 42.284652, "lon": -71.06448899999999}]


function init_map()
{
	map = new google.maps.Map(document.getElementId("map", myOptions))
	Location();
}

//Gets the current location using geolocation
function myLocation()
{
	if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(position){
			curr_lat = position.coords.latitude;
			curr_long = position.coords.longitude;
			renderMap();
		});
	}
	else{
		alert("Geolocation is not supported.")
	}
}

// Run the API request of the redline schedule
function renderMap(){
	request.open('GET', "https://chicken-of-the-sea.herokuapp.com/redline/schedule.json", true);
	request.send();
	request.onreadystatechange = function(){
		if (request.readyState == XHMLHttpRequest.DONE){
			if (request.readyState != 200){
				alert("Can't load train data")
			}
			else{
				var timedata = JSON.parse(request.responseText);
				showTrainData(timedata);
			}
		}
	}
}



// places markers at each station and creates the polyline paths
function showTrainData(timedata){

	var stationLatLongs = [];
	var stationNames = [];

	// creating markers for red line
	for (var i = 0; i < numstations1; i++){
		pos = new google.maps.LatLng(stations1[i].lat, stations1[i].lon);
		stationLatLongs.push(pos);
		stationNames.push(stations1[i].stop);
		var marker == new google.maps.Marker({animation: google.maps.Animation.DROP,
					  position: pos, title: stations1[i].stop, icon:"mbta.png"})
		marker.setMap(map);

		google.maps.event.addListener(marker, 'click', function(){
		var sched = getNextTrains(this.title, timedata);
		infowindow.setControl("<h1>" + this.title.toString() + "</h1>" + sched);
		infowindow.open(map,this);
		});
	}

	//creating markers for first branch of red line
	for (var i = 0; i < numstations2; i++){
		pos = new google.maps.LatLng(stations2[i].lat, stations2[i].lon);
		stationLatLongs.push(pos);
		stationNames.push(stations2[i].stop);
		var marker == new google.maps.Marker({animation: google.maps.Animation.DROP,
					  position: pos, title: stations2[i].stop, icon:"mbta.png"})
		marker.setMap(map);

		google.maps.event.addListener(marker, 'click', function(){
		var sched = getNextTrains(this.title, timedata);
		infowindow.setControl("<h1>" + this.title.toString() + "</h1>" + sched);
		infowindow.open(map,this);
		});
	}

	// creating markers for second branch of red line
	for (var i = 0; i < numstations3; i++){
		pos = new google.maps.LatLng(stations3[i].lat, stations3[i].lon);
		stationLatLongs.push(pos);
		stationNames.push(stations3[i].stop);
		var marker == new google.maps.Marker({animation: google.maps.Animation.DROP,
					  position: pos, title: stations3[i].stop, icon:"mbta.png"})
		marker.setMap(map);

		google.maps.event.addListener(marker, 'click', function(){
		var sched = getNextTrains(this.title, timedata);
		infowindow.setControl("<h1>" + this.title.toString() + "</h1>" + sched);
		infowindow.open(map,this);
		});
	}


	//Create paths 
	var brain_path = stations1.map(function(station){
		return new google.maps.LatLng(station.lat, station.lon)
	});

	brain_path = brain_path.concat(stations2.map(function(station) {
		return new google.maps.LatLng(station.lat, station.lon);
	}));

	var ash_path = stations3.map(function(station){
		return new google.maps.LatLng(station.lat, station.lon);
	});

	//Drawing the polylines 
	var draw_path1 = google.maps.Polylines({
		path: brain_path;
		strokeColor: "#FF0000",
		strokeOpacity: 1.0,
		strokeWeight: 2
	});

	var draw_path2 = google.maps.Polylines({
		path: ash_path;
		strokeColor: "#FF0000",
		strokeOpacity: 1.0,
		strokeWeight: 2
	});

	//Adding the polylines 
	draw_path1.setMap(map);
	draw_path2.setMap(map);

	//finding the current position 
	my_position = new google.maps.LatLng(curr_lat, curr_long);
	map.panto(my_position);

	marker = new google.maps.Marker({
		position: my_position;
		title: " My Location",
		icon: "train.png";
	})

//finding the shortest distance 
function nearest_station(me, marker, stations, names){




}



}








*/














