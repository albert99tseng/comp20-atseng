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

var stations1 = [{"stop_name": "Alewife", "lat": 42.395428, "long": -71.142483},
			  {"stop_name": "Davis", "lat": 42.39674, "long": -71.121815},
			  {"stop_name": "Porter Square", "lat": 42.3884, "long": -71.11914899999999},
			  {"stop_name": "Harvard Square", "lat": 42.373362, "long": -71.118956},
			  {"stop_name": "Central Square", "lat": 42.365486, "long": -71.103802},
			  {"stop_name": "Kendall/MIT", "lat": 42.36249079, "long": -71.08617653},
			  {"stop_name": "Charles/MGH", "lat": 42.361166, "long": -71.070628},
			  {"stop_name": "Park Street", "lat": 42.35639457, "long": -71.0624242},
			  {"stop_name": "Downtown Crossing", "lat": 42.355518, "long": -71.060225},
			  {"stop_name": "South Station", "lat": 42.352271, "long": -71.05524200000001},
			  {"stop_name": "Broadway", "lat": 42.342622, "long": -71.056967},
			  {"stop_name": "Andrew", "lat":  42.330154, "long": -71.057655},
			  {"stop_name": "JFK/UMass", "lat":   42.320685, "long": -71.052391}]

var stations2 = [{"stop_name": "North Quincy", "lat": 42.275275, "long": -71.029583},
			  {"stop_name": "Wallaston", "lat": 42.2665139, "long": -71.0203369},
			  {"stop_name": "Quincy Center", "lat": 42.251809, "long": -71.005409},
			  {"stop_name": "Quicny Adams", "lat": 42.233391, "long": -71.007153},
			  {"stop_name": "Braintree", "lat": 42.2078543, "long": -71.0011385}]

var stations3 = [{"stop_name": "Savin Hill", "lat": 42.31129, "long": -71.053331},
			  {"stop_name": "Fells Corner", "lat": 42.300093, "long": -71.061667},
			  {"stop_name": "Shawmut", "lat": 42.29312583, "long": -71.06573796000001},
			  {"stop_name": "Ashmont", "lat": 42.284652, "long": -71.06448899999999}]

function init_map()
{
	map = new google.maps.Map(document.getElementId("map", myOptions))
	getLocation();
}

function myLocation()
{
	if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(position)){
			curr_lat = position.coords.latitude;
			curr_long = position.coords.longitude;
			renderMap();
		};
	}
	else{
		alert("Geolocation is not supported.")
	}
}

function renderMap(){
	request.open('GET', "https://dry-peak-77207.herokuapp.com/redline.json", true);
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

showTrainData(timedata){

	var stationLatLongs = [];
	var stationNames = [];

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

3


}
























