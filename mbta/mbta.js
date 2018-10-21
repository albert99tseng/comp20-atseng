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

var stations1[{"stop": "Alewife", "lat": 42.395428, "long": -71.142483},
			  {"stop": "Davis", "lat": 42.39674, "long": -71.121815},
			  {"stop": "Porter Square", "lat": 42.3884, "long": -71.11914899999999},
			  {"stop": "Harvard Square", "lat": 42.373362, "long": -71.118956},
			  {"stop": "Central Square", "lat": 42.365486, "long": -71.103802},
			  {"stop": "Kendall/MIT", "lat": 42.36249079, "long": -71.08617653},
			  {"stop": "Charles/MGH", "lat": 42.361166, "long": -71.070628},
			  {"stop": "Park Street", "lat": 42.35639457, "long": -71.0624242},
			  {"stop": "Downtown Crossing", "lat": 42.355518, "long": -71.060225},
			  {"stop": "South Station", "lat": 42.352271, "long": -71.05524200000001},
			  {"stop": "Broadway", "lat": 42.342622, "long": -71.056967},
			  {"stop": "Andrew", "lat":  42.330154, "long": -71.057655},
			  {"stop": "JFK/UMass", "lat":   42.320685, "long": -71.052391}]

var stations2[{"stop": "North Quincy", "lat": 42.275275, "long": -71.029583},
			  {"stop": "Wallaston", "lat": 42.2665139, "long": -71.0203369},
			  {"stop": "Quincy Center", "lat": 42.251809, "long": -71.005409},
			  {"stop": "Quicny Adams", "lat": 42.233391, "long": -71.007153,
			  {"stop": "Braintree", "lat": 42.2078543, "long": -71.0011385}]

var stations3[{"stop": "Savin Hill", "lat": 42.31129, "long": -71.053331},
			  {"stop": "Fells Corner", "lat": 42.300093, "long": -71.061667},
			  {"stop": "Shawmut", "lat": 42.29312583, "long": -71.06573796000001},
			  {"stop": "Ashmont", "lat": 42.284652, "long": -71.06448899999999}]

