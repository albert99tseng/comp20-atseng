var map;
var request = new XMLHttpRequest();
var curr_long = -71.05524200000001;
var curr_lat = 42.352271;
var option = {
	center: {lat: curr_lat, lng: curr_long},
    zoom: 15
}
var distanceToMyStation = 0;
var closestStation = "Closest Station";
shortest_distance = haversineDistance([curr_long,curr_lat], [-71.142483, 42.395428], true);

var Braintree_polyline = [
	{lat: 42.320685 , lng:-71.052391}, //JFK
	{lat: 42.275275 , lng:-71.029583}, // N Quincy
	{lat: 42.2665139 , lng:-71.0203369}, // Wollaston
	{lat: 42.251809 , lng:-71.005409}, // Quincy Center
	{lat: 42.233391 , lng:-71.007153}, // Quincy Adams
	{lat: 42.2078543 , lng:-71.0011385} // Braintree
]; 

var Ashmont_polyline = [
	{lat: 42.395428 , lng:-71.142483}, // Alewife
	{lat: 42.39674 , lng:-71.121815}, // Davis
	{lat: 42.3884 , lng:-71.11914899999999}, // Porter
	{lat: 42.373362 , lng:-71.118956}, // Harvard
	{lat: 42.365486 , lng:-71.103802}, //Central
	{lat: 42.36249079 , lng:-71.08617653}, // Kendall
	{lat: 42.361166 , lng:-71.070628}, // Charles
	{lat: 42.35639457 , lng:-71.0624242}, // Park
	{lat: 42.355518 , lng:-71.060225}, // Downtown
	{lat: 42.352271 , lng:-71.05524200000001}, // South
	{lat: 42.342622 , lng:-71.056967}, // Broadway
	{lat: 42.330154 , lng:-71.057655}, // Andrew
	{lat: 42.320685 , lng:-71.052391}, //JFK
	{lat: 42.31129 , lng:-71.053331}, // Savin Hill
	{lat: 42.300093 , lng:-71.061667}, // Fields Corner
	{lat: 42.29312583 , lng:-71.06573796000001}, //Shawmut
	{lat: 42.284652 , lng:-71.06448899999999}, //Ashmont
];

var redLineCoordinates = 
{
	"Alewife":				[-71.142483, 42.395428],
	"Davis": 				[-71.121815, 42.39674],
	"Porter": 				[-71.11914899999999, 42.3884],
	"Harvard": 				[-71.118956, 42.373362],
	"Central": 				[-71.118956, 42.373362],
	"Kendall/MIT": 			[-71.08617653, 42.36249079],
	"Charles/MGH": 			[-71.070628, 42.361166],
	"Park Street": 			[-71.0624242, 42.35639457],
	"Downtown Crossing": 	[-71.060225, 42.355518],
	"South Station": 		[-71.05524200000001, 42.352271],
	"Broadway": 			[-71.056967, 42.342622],
	"Andrew": 				[-71.057655, 42.330154],
	"JFK/UMass": 			[-71.052391, 42.320685],
	"North Quincy":			[-71.0203369, 42.275275],
	"Wollaston": 			[-71.0203369, 42.2665139],
	"Quincy Central":		[-71.005409, 42.251809],
	"Quincy Adams": 		[-71.007153, 42.233391],
	"Braintree": 			[-71.0011385, 42.2078543],
	"Savin Hill": 			[-71.053331, 42.31129],
	"Fields Corner": 		[-71.061667, 42.300093],
	"Shawmut": 				[-71.06573796000001, 42.29312583],
	"Ashmont": 				[-71.06448899999999, 42.284652]
}


function initMap() {
    map = new google.maps.Map(document.getElementById('map'), option);
    myLocation();
}

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
	request.open('GET', 'https://chicken-of-the-sea.herokuapp.com/redline/schedule.json', true);
	request.send();
	request.onreadystatechange = function(){
		if (request.readyState == XMLHttpRequest.DONE){
			if (request.status != 200){
				alert("Can't load train data")
			}
			else{
				var timedata = JSON.parse(request.responseText);
				showTrainData(timedata);
				setMarker();
    			getPolyline();
			}
		}
	}
}

function showTrainData(timedata){

	var infowindow = new google.maps.InfoWindow();

	user = new google.maps.LatLng(curr_lat, curr_long);
    map.panTo(user);

    marker = new google.maps.Marker({
      position: user,
      title: "Current location",
      icon:"me.png"
    });
    marker.setMap(map);

    //pop up window for my location
    google.maps.event.addListener(marker, 'click', function(){
  		//staion_info = get_info(Alewife.title);
  		//infowindow.setContent(marker.title);
  		info = nearestStation();
  		infowindow.setContent("Closest station is: " + closest_station + " which is " + shortest_distance 
  							   + " miles away.", info);
  		infowindow.open(map,marker);
  	});
/*
    google.maps.event.addListener(user, 'click', function() {
        info = nearestStation(user, marker, stationLatLongs, stationNames);
        infowindow.setContent(info);
        infowindow.open(map, this);
    }); 
*/
    marker.setMap(map); 

}

function nearestStation(){
	var longitude = -71.142483;
	var latitude = 42.395428;

	for (i in redLineCoordinates) {
		var coords = redLineCoordinates[i];
		var distance = haversineDistance([curr_long, curr_lat], coords, true);

		if (distance < shortest_distance) {
			shortest_distance = distance;
			closest_station = i;
			distance_to_station = distance;
			latitude = coords[1];
			longitude = coords[0];
		}
	}

	var closest_position = new google.maps.LatLng(latitude, longitude);
	var nearby_station = [user, closest_position];

//draws the path to the nearest mbta 
	var nearby_path = new google.maps.Polyline({
    	path:nearby_station,
        geodesic: true,
        strokeColor: '#0000FF',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });

    nearby_path.setMap(map);

    console.log(shortest_distance);
    console.log(closest_station);
}

function getPolyline(){

	var Ashmont_path = new google.maps.Polyline( {
               	path:Ashmont_polyline,
                geodesic: true,
                strokeColor: '#FF0000',
                strokeOpacity: 1.0,
                strokeWeight: 2
        });
        Ashmont_path.setMap(map);

    var Braintree_path = new google.maps.Polyline( {
                path:Braintree_polyline,
                geodesic: true,
                strokeColor: '#FF0000',
                strokeOpacity: 1.0,
                strokeWeight: 2
        });
        Braintree_path.setMap(map);
}

//http://stackoverflow.com/questions/14560999/using-the-haversine-formula-in-javascript
function haversineDistance(coords1, coords2, isMiles) {
        function toRad(x) {
                return x * Math.PI / 180;
        }

        var lon1 = coords1[0];
        var lat1 = coords1[1];

        var lon2 = coords2[0];
        var lat2 = coords2[1];

        var R = 6371; // km

        var x1 = lat2 - lat1;
        var dLat = toRad(x1);
        var x2 = lon2 - lon1;
        var dLon = toRad(x2)
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;

        if(isMiles) d /= 1.60934;

       	return d;
}

function get_info(){



}

function setMarker(){

	var image_marker = 'mbta.png';
	var infowindow = new google.maps.InfoWindow();

	//Alewife 
  	var Alewife = new google.maps.Marker({
   		position: {lat: 42.395428, lng: -71.142483},
    	map: map,
    	icon: image_marker,
    	title: "Alewife"
 	});
  	Alewife.setMap(map);

  	//pop up window to show the time of the trains
  	google.maps.event.addListener(Alewife, 'click', function(){
  		//staion_info = get_info(Alewife.title);
  		infowindow.setContent(Alewife.title);
  		infowindow.open(map,Alewife);
  	});

  	//Davis 
  	var Davis = new google.maps.Marker({
   		position: {lat: 42.39674, lng: -71.121815},
    	map: map,
    	icon: image_marker,
    	title: "Davis"
 	});
  	Davis.setMap(map);

  	google.maps.event.addListener(Davis, 'click', function(){
  		//staion_info = get_info(Davis.title);
  		infowindow.setContent(Davis.title);
  		infowindow.open(map,Davis);
  	});

  	//Porter Square
  	var Porter_Square = new google.maps.Marker({
   		position: {lat: 42.3884, lng: -71.11914899999999},
    	map: map,
    	icon: image_marker,
    	title: "Porter Sqaure"
 	});

  	Porter_Square.setMap(map);

  	google.maps.event.addListener(Porter_Square, 'click', function(){
  		//staion_info = get_info(Davis.title);
  		infowindow.setContent(Porter_Square.title);
  		infowindow.open(map,Porter_Square);
  	});

  	//Harvard Square
  	var Harvard_Square = new google.maps.Marker({
   		position: {lat: 42.373362, lng: -71.118956},
    	map: map,
    	icon: image_marker,
    	title: "Harvard Sqaure"
 	});
  	Harvard_Square.setMap(map);

  	google.maps.event.addListener(Harvard_Square, 'click', function(){
  		//staion_info = get_info(Harvard_sqaure.title);
  		infowindow.setContent(Harvard_Square.title);
  		infowindow.open(map,Harvard_Square);
  	});

  	//Central Sqaure
  	var Central_Square = new google.maps.Marker({
   		position: {lat: 42.365486, lng: -71.103802},
    	map: map,
    	icon: image_marker,
    	title: "Central Square"
 	});
  	Central_Square.setMap(map);

  	google.maps.event.addListener(Central_Square, 'click', function(){
  		//staion_info = get_info(Davis.title);
  		infowindow.setContent(Central_Square.title);
  		infowindow.open(map,Central_Square);
  	});

  	//Kendall/MIT
  	var Kendall_MIT = new google.maps.Marker({
   		position: {lat: 42.36249079, lng: -71.08617653},
    	map: map,
    	icon: image_marker,
    	title: "Kendall/MIT"
 	});
  	Kendall_MIT.setMap(map);

  	google.maps.event.addListener(Kendall_MIT, 'click', function(){
  		//staion_info = get_info(Davis.title);
  		infowindow.setContent(Kendall_MIT.title);
  		infowindow.open(map,Kendall_MIT);
  	});

  	//Charles/MGH
  	var Charles_MGH = new google.maps.Marker({
   		position: {lat: 42.361166, lng: -71.070628},
    	map: map,
    	icon: image_marker,
    	title: "Charles/MGH"
 	});
  	Charles_MGH.setMap(map);

  	google.maps.event.addListener(Charles_MGH, 'click', function(){
  		//staion_info = get_info(Davis.title);
  		infowindow.setContent(Charles_MGH.title);
  		infowindow.open(map,Charles_MGH);
  	});

  	//Park Street
  	var Park_Street = new google.maps.Marker({
   		position: {lat: 42.35639457 , lng: -71.0624242},
    	map: map,
    	icon: image_marker,
    	title: "Park Street"
 	});
  	Park_Street.setMap(map);

  	google.maps.event.addListener(Park_Street, 'click', function(){
  		//staion_info = get_info(Davis.title);
  		infowindow.setContent(Park_Street.title);
  		infowindow.open(map,Park_Street);
  	});

  	//Downtown Crosseing
  	var Downtown_Crossing = new google.maps.Marker({
   		position: {lat: 42.355518, lng: -71.060225},
    	map: map,
    	icon: image_marker,
    	title: "Downtown Crossing"
 	});
  	Downtown_Crossing.setMap(map);

  	google.maps.event.addListener(Downtown_Crossing, 'click', function(){
  		//staion_info = get_info(Davis.title);
  		infowindow.setContent(Downtown_Crossing.title);
  		infowindow.open(map,Downtown_Crossing);
  	});

  	//South Station
  	var South_Station = new google.maps.Marker({
   		position: {lat: 42.352271, lng: -71.05524200000001},
    	map: map,
    	icon: image_marker,
    	title: "South Station"
 	});
  	South_Station.setMap(map);

  	google.maps.event.addListener(South_Station, 'click', function(){
  		//staion_info = get_info(Davis.title);
  		infowindow.setContent(South_Station.title);
  		infowindow.open(map,South_Station);
  	});

  	//Broadway
  	var Broadway = new google.maps.Marker({
   		position: {lat: 42.342622, lng: -71.056967},
    	map: map,
    	icon: image_marker,
    	title: "Broadway"
 	});
  	Broadway.setMap(map);

  	google.maps.event.addListener(Broadway, 'click', function(){
  		//staion_info = get_info(Davis.title);
  		infowindow.setContent(Broadway.title);
  		infowindow.open(map,Broadway);
  	});

  	//Andrew
  	var Andrew = new google.maps.Marker({
   		position: {lat: 42.330154, lng: -71.057655},
    	map: map,
    	icon: image_marker,
    	title: "Andrew"
 	});
  	Andrew.setMap(map);

  	google.maps.event.addListener(Andrew, 'click', function(){
  		//staion_info = get_info(Davis.title);
  		infowindow.setContent(Andrew.title);
  		infowindow.open(map,Andrew);
  	});

  	//JFK/UMass
  	var JFK_UMass = new google.maps.Marker({
   		position: {lat:42.320685, lng: -71.052391},
    	map: map,
    	icon: image_marker,
    	title: "JFK/UMass"
 	});
  	JFK_UMass.setMap(map);

  	google.maps.event.addListener(JFK_UMass, 'click', function(){
  		//staion_info = get_info(Davis.title);
  		infowindow.setContent(JFK_UMass.title);
  		infowindow.open(map,JFK_UMass);
  	});

  	//North Quincy
  	var North_Quincy = new google.maps.Marker({
   		position: {lat:42.275275, lng: -71.029583},
    	map: map,
    	icon: image_marker,
    	title: "North Quincy"
 	});
  	North_Quincy.setMap(map)

  	google.maps.event.addListener(North_Quincy, 'click', function(){
  		//staion_info = get_info(Davis.title);
  		infowindow.setContent(North_Quincy.title);
  		infowindow.open(map,North_Quincy);
  	});

  	//Wallaston
  	var Wallaston = new google.maps.Marker({
   		position: {lat:42.2665139, lng: -71.0203369},
    	map: map,
    	icon: image_marker,
    	title: "Wallaston"
 	});
  	Wallaston.setMap(map);

  	google.maps.event.addListener(Wallaston, 'click', function(){
  		//staion_info = get_info(Davis.title);
  		infowindow.setContent(Wallaston.title);
  		infowindow.open(map,Wallaston);
  	});

  	//Quincy Center
  	var Quincy_Center = new google.maps.Marker({
   		position: {lat:42.251809, lng: -71.005409},
    	map: map,
    	icon: image_marker,
    	title: "Quincy Center"
 	});
  	Quincy_Center.setMap(map);

  	google.maps.event.addListener(Quincy_Center, 'click', function(){
  		//staion_info = get_info(Davis.title);
  		infowindow.setContent(Quincy_Center.title);
  		infowindow.open(map,Quincy_Center);
  	});

  	//Quincy Adams
  	var Quincy_Adams = new google.maps.Marker({
   		position: {lat: 42.233391, lng: -71.007153 },
    	map: map,
    	icon: image_marker,
    	title: "Quincy Adams"
 	});
  	Quincy_Adams.setMap(map);

  	google.maps.event.addListener(Quincy_Adams, 'click', function(){
  		//staion_info = get_info(Davis.title);
  		infowindow.setContent(Quincy_Adams.title);
  		infowindow.open(map,Quincy_Adams);
  	});

  	//Braintree
  	var Braintree = new google.maps.Marker({
   		position: {lat: 42.2078543, lng: -71.0011385 },
    	map: map,
    	icon: image_marker,
    	title: "Braintree"
 	});
  	Braintree.setMap(map);

  	google.maps.event.addListener(Braintree, 'click', function(){
  		//staion_info = get_info(Davis.title);
  		infowindow.setContent(Braintree.title);
  		infowindow.open(map,Braintree);
  	});

  	//Savin Hill
  	var Savin_Hill = new google.maps.Marker({
   		position: {lat: 42.31129, lng: -71.053331 },
    	map: map,
    	icon: image_marker,
    	title: "Savin Hill"
 	});
  	Savin_Hill.setMap(map);

  	google.maps.event.addListener(Savin_Hill, 'click', function(){
  		//staion_info = get_info(Davis.title);
  		infowindow.setContent(Savin_Hill.title);
  		infowindow.open(map,Savin_Hill);
  	});

  	//Fells Corner
  	var Fells_Corner = new google.maps.Marker({
   		position: {lat: 42.300093, lng: -71.061667 },
    	map: map,
    	icon: image_marker,
    	title: "Fells Corner"
 	});
  	Fells_Corner.setMap(map);

  	google.maps.event.addListener(Fells_Corner, 'click', function(){
  		//staion_info = get_info(Davis.title);
  		infowindow.setContent(Fells_Corner.title);
  		infowindow.open(map,Fells_Corner);
  	});

  	//Shawmut
  	var Shawmut = new google.maps.Marker({
   		position: {lat: 42.29312583, lng: -71.06573796000001 },
    	map: map,
    	icon: image_marker,
    	title: "Shawmut"
 	});
  	Shawmut.setMap(map);

  	google.maps.event.addListener(Shawmut, 'click', function(){
  		//staion_info = get_info(Davis.title);
  		infowindow.setContent(Shawmut.title);
  		infowindow.open(map,Shawmut);
  	});

  	//Ashmont
  	var Ashmont = new google.maps.Marker({
   		position: {lat: 42.284652, lng: -71.06448899999999},
    	map: map,
    	icon: image_marker,
    	title: "Ashmont"
 	});
  	Ashmont.setMap(map);

  	google.maps.event.addListener(Ashmont, 'click', function(){
  		//staion_info = get_info(Davis.title);
  		infowindow.setContent(Ashmont.title);
  		infowindow.open(map,Ashmont);
  	});

}
