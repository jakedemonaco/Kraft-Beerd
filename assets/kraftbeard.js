//+++++++++++++++++++MAP IS NEEDED BEFORE DOCUMENT READY FUNCTION++++++++++++++++++


// //our starting lat: 40.708, lng: -73.957 

// //This function creates a Google Map, available upon page load. initMap function doesn't need to be "called"
// //The function call is part of this APIs call parameter (see html page, Google Maps API url in script tags)
// //It creates and automatically loads the STYLED version of the map--default map is an option, however.
// //Colors are based on Front-End's chosen color for the KraftBeerd heading; I plugged the color into Adobe & got a theme.
// //Front-End, feel free to choose a different theme and plug those colors in below:   
     
     function initMap() {


        var styledMapType = new google.maps.StyledMapType(
            [
              {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
              {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
              {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
              {
                featureType: 'administrative',
                elementType: 'geometry.stroke',
                stylers: [{color: '#c9b2a6'}]
              },
              {
                featureType: 'administrative.land_parcel',
                elementType: 'geometry.stroke',
                stylers: [{color: '#dcd2be'}]
              },
              {
                featureType: 'administrative.land_parcel',
                elementType: 'labels.text.fill',
                stylers: [{color: '#ae9e90'}]
              },
              {
                featureType: 'landscape.natural',
                elementType: 'geometry',
                stylers: [{color: '#DAC6B2'}]
              },
              {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
              },
              {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#93817c'}]
              },
              {
                featureType: 'poi.park',
                elementType: 'geometry.fill',
                stylers: [{color: '#E0E2E6'}]
              },
              {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#447530'}]
              },
              {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#806b63'}]
              },
              {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [{color: '#806b63'}]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#4B416C'}]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#4B416C'}]
              },
              {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry',
                stylers: [{color: '#4B416C'}]
              },
              {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry.stroke',
                stylers: [{color: '#4B416C'}]
              },
              {
                featureType: 'road.local',
                elementType: 'labels.text.fill',
                stylers: [{color: '#806b63'}]
              },
              {
                featureType: 'transit.line',
                elementType: 'geometry',
                stylers: [{color: 'BBC3E1'}]
              },
              {
                featureType: 'transit.line',
                elementType: 'labels.text.fill',
                stylers: [{color: '#8f7d77'}]
              },
              {
                featureType: 'transit.line',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#ebe3cd'}]
              },
              {
                featureType: 'transit.station',
                elementType: 'geometry',
                stylers: [{color: 'BBC3E1'}]
              },
              {
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [{color: '#DAC6B2'}]
              },
              {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#92998d'}]
              }
            ],
            {name: 'Styled Map'});

        // Create a map object, and include the MapTypeId to add
        // to the map type control.

        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.708, lng: -73.957},
          zoom: 13,
	        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
          },
        });



  var image = 'https://funduval.files.wordpress.com/2017/05/beer-stein-marker1.png'
  var beerdMarker = new google.maps.Marker({
    position: {lat: 40.708, lng: -73.957},
    map: map,
    icon: image
 
  });

        //Associate the styled map with the MapTypeId and set it to display.
        map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');
      
     

  }

  $(document).ready(function() {
    		console.log( "ready!" );

  
    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB3TT3u_TIoFFxglNbgOUv3WZ1KHwFOmfo",
    authDomain: "kraft-beerd.firebaseapp.com",
    databaseURL: "https://kraft-beerd.firebaseio.com",
    projectId: "kraft-beerd",
    storageBucket: "kraft-beerd.appspot.com",
    messagingSenderId: "908512752117"
  };
  firebase.initializeApp(config);
  });


 

// });