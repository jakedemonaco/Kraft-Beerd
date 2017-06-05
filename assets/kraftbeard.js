   var idApi = [];
   var barName= [];
   var barLat=[];
   var barLong=[];

   var bars = [
                ['Brooklyn Brewery', 40.7215, -73.9577],
                ['Greenpoint Beerworks', 40.6824, -73.9654],
                ['Sixpoint Craft Ales', 40.6739, -74.0119],
                ['Waterfront Alehouse', 40.6906, -73.9949],
                ['Soda Bar', 40.6781, -73.9684],
                ['Red Hook Bait And Tackle', 40.670448, -73.981926],
                ['12th Street Bar and Grill', 40.664417, -73.980331]
              ];

              //+++++++++++++++++++MAP IS NEEDED BEFORE DOCUMENT READY FUNCTION++++++++++++++++++

//949676794497-fi6l2lga6sepd6a0u3j2skr40ltd7ju5.apps.googleusercontent.com
//WpmHMae5nHoZHn9vanPoyAPr
//192.168.1.255

// //our starting lat: 40.708, lng: -73.957

// //This function creates a Google Map, available upon page load. initMap function doesn't need to be "called"
// //The function call is part of this APIs call parameter (see html page, Google Maps API url in script tags)
// //It creates and automatically loads the STYLED version of the map--default map is an option, however.
// //Colors are based on Front-End's chosen color for the KraftBeerd heading; I plugged the color into Adobe & got a theme.
// //Front-End, feel free to choose a different theme and plug those colors in below:
 // =======================================================================
  //                   GOOGLE LOG IN
  // =======================================================================
  function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;

    var xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://jakedemonaco.github.io/Kraft-Beerd');

    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onload = function() {
      console.log('Signed in as: ' + xhr.responseText);
    };

    xhr.send('idtoken=' + id_token);
    console.log("ID Token: " + id_token);
    console.log(profile);


    if (auth2.isSignedIn.get()) {
        var profile = auth2.currentUser.get().getBasicProfile();
        console.log('ID: ' + profile.getId());
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
      }

      gapi.load('auth2', function() {
        auth2 = gapi.auth2.init({
          client_id: '580134311712-mefi6sqvababpcio3ef88e3a0kpuv3qs.apps.googleusercontent.com/',
          fetch_basic_profile: false,
          scope: 'profile'
        });

        // Sign the user in, and then retrieve their ID.
        auth2.signIn().then(function() {
          console.log(auth2.currentUser.get().getId());
        });
      });
  };

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function() {
      console.log('User signed out.');
    });
  }


  $('.g-signin2').on("click", "#signIn", function(e) {
      onSignIn();
    });




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
                stylers: [{color: '#ba8902'}]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#ba8902'}]
              },
              {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry',
                stylers: [{color: '#ba8902'}]
              },
              {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry.stroke',
                stylers: [{color: '#ba8902'}]
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
          center: {lat: 40.678, lng: -73.944},
          zoom: 13,
          mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
          },
        });



  var image = 'https://funduval.files.wordpress.com/2017/05/beer-stein-marker1.png'
  var beerdMarker = new google.maps.Marker({
    position: {lat: 40.678, lng: -73.944},
    map: map,
    icon: image

  });

        //Associate the styled map with the MapTypeId and set it to display.
        map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');


        //latlng : Latitude: 40.72173, Longitude: -73.95805
        //mock up of adding lat long to create a new marker on The map
        function addMark(){
              var myLatlng = new google.maps.LatLng(40.678,-73.994);
              var mapOptions = {
                zoom: 13,
                center: myLatlng
              }

              var map = new google.maps.Map(document.getElementById("map"), mapOptions);



              var image = 'https://funduval.files.wordpress.com/2017/05/beer-stein-marker1.png'
              for (var i = 0; i < bars.length; i++) {
                var bar = bars[i];
                var multiMarker = new google.maps.Marker({
                  position: {lat: bar[1], lng: bar[2]},
                  map: map,
                  icon: image,

                });
              }

              // To add the marker to the map, call setMap();
              multiMarker.setMap(map);
              //Associate the styled map with the MapTypeId and set it to display.
              map.mapTypes.set('styled_map', styledMapType);
              map.setMapTypeId('styled_map');
        }//end addMark()
        addMark();



  $(document).ready(function() {
        console.log( "ready!" );



$(document).ready(function(){
   // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
   $('#modal226').modal();
   $('#modal551').modal();
   $('#modal1212').modal();
   $('#modal1613').modal();
   $('#modal1610').modal();
   $('#modal1612').modal();
   $('#modal1609').modal();
   $('#modal1608').modal();
   $('#modal1587').modal();
   $('#modal1607').modal();
  

 });
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

  //+++++++++++++++++++ BEER MAP API KEY AND AJAX CALL ++++++++++++++++++
  //beer mapping api key :  688a37b4a7135bbd9cadc8adec782fb2

   var queryURL = "https://beermapping.com/webservice/loccity/688a37b4a7135bbd9cadc8adec782fb2/brooklyn,ny&s=json"


   console.log(barLat);
   console.log(barLat);
   console.log(barName);

   $.ajax({
       url:queryURL,
       method:"GET"
     }).done(function(response){
       var results = response;
        console.log(results);

          for (var i = 0; i < results.length-58; i++) {
              var newDiv = $("<a>");
              newDiv.addClass("waves-effect waves-light btn");
              newDiv.attr("id", "modal1")
              newDiv.attr("data-name", results[i].name)
              newDiv.attr("data-target", "modal1")
              newDiv.html(results[i].name);
              newDiv.attr("href", "#modal" + results[i].id);
              $("#name").append(newDiv);
              // console.log(results[i].name);
              idResult = results[i].id;
              // console.log("the results are " + idResult);
              idApi.push(idResult);
              barName.push(results[i].name);

          }

          console.log(idApi);
          //for loop to assign map location from each ID to get LATLONG AJAXCALL
          for (var i = 0; i < idApi.length; i++) {
              var idUrl = "https://beermapping.com/webservice/locmap/688a37b4a7135bbd9cadc8adec782fb2/" + idApi[i] + "&s=json";

              //+++++++++++++++++++ BEER MAP AJAX CALL for lat long START +++++++++++
              $.ajax({
                  url:idUrl,
                  method:"GET",
                }).done(function(response){
                  // var results = response;
                  // console.log(response[0].lat);

                  // forloop to loop through all id to get lat long
                      for(j=0; j<response.length; j++){
                        var lat = response[j].lat;
                        var lng = response[j].lng;
                        barLat.push(lat);
                        barLong.push(lng);
                        // console.log(lat);
                        // console.log(lng);
                      }
                });//end done function for 2nd ajax call

            }//for loop idApi.length

                //+++++++++++++++++++ onclick event listners for MODALS +++++++++++
                $("a[data-name = 'Brooklyn Brewery']").on("click", function(event){
                    $("#modal226 .nameBrew").html(response[0].name);
                    $("#modal226 .streetBrew").html(response[0].street);
                    $("#modal226 .cityBrew").html(response[0].city);
                    $("#modal226 .phoneBrew").html(response[0].phone);
                    $("#modal226 .urlBrew").html(response[0].url);
                    brookMark();

                });

                $("a[data-name = 'Greenpoint Beerworks']").on("click", function(event){
                  $("#modal551 .nameBrew").html(response[1].name);
                  $("#modal551 .streetBrew").html(response[1].street);
                  $("#modal551 .cityBrew").html(response[1].city);
                  $("#modal551 .phoneBrew").html(response[1].phone);
                  $("#modal551 .urlBrew").html(response[1].url);
                  greenMark();
                });

                $("a[data-name = 'Sixpoint Craft Ales']").on("click", function(event){
                  $("#modal1212 .nameBrew").html(response[2].name);
                  $("#modal1212 .streetBrew").html(response[2].street);
                  $("#modal1212 .cityBrew").html(response[2].city);
                  $("#modal1212 .phoneBrew").html(response[2].phone);
                  $("#modal1212 .urlBrew").html(response[2].url);
                  sixMark();
                });

                $("a[data-name = 'Waterfront Alehouse - Brooklyn']").on("click", function(event){
                  $("#modal1613 .nameBrew").html(response[3].name);
                  $("#modal1613 .streetBrew").html(response[3].street);
                  $("#modal1613 .cityBrew").html(response[3].city);
                  $("#modal1613 .phoneBrew").html(response[3].phone);
                  $("#modal1613 .urlBrew").html(response[3].url);
                  waterMark();
                });

                $("a[data-name = 'Soda Bar']").on("click", function(event){
                  $("#modal1610 .nameBrew").html(response[4].name);
                  $("#modal1610 .streetBrew").html(response[4].street);
                  $("#modal1610 .cityBrew").html(response[4].city);
                  $("#modal1610 .phoneBrew").html(response[4].phone);
                  $("#modal1610 .urlBrew").html(response[4].url);
                  sodaMark();
                });

                $("a[data-name = 'Spuyten Duyvil']").on("click", function(event){
                  $("#modal1612 .nameBrew").html(response[5].name);
                  $("#modal1612 .streetBrew").html(response[5].street);
                  $("#modal1612 .cityBrew").html(response[5].city);
                  $("#modal1612 .phoneBrew").html(response[5].phone);
                  $("#modal1612 .urlBrew").html(response[5].url);
                  spuytenMark();
                });

                $("a[data-name = 'Sample']").on("click", function(event){
                  $("#modal1609 .nameBrew").html(response[6].name);
                  $("#modal1609 .streetBrew").html(response[6].street);
                  $("#modal1609 .cityBrew").html(response[6].city);
                  $("#modal1609 .phoneBrew").html(response[6].phone);
                  $("#modal1609 .urlBrew").html(response[6].url);
                  sampleMark();
                });

                $("a[data-name = 'Red Hook Bait And Tackle']").on("click", function(event){
                  $("#modal1608 .nameBrew").html(response[7].name);
                  $("#modal1608 .streetBrew").html(response[7].street);
                  $("#modal1608 .cityBrew").html(response[7].city);
                  $("#modal1608 .phoneBrew").html(response[7].phone);
                  $("#modal1608 .urlBrew").html(response[7].url);
                  redMark();
                });

                $("a[data-name ='Park Slope Ale House']").on("click", function(event){
                  $("#modal1607 .nameBrew").html(response[9].name);
                  $("#modal1607 .streetBrew").html(response[9].street);
                  $("#modal1607 .cityBrew").html(response[9].city);
                  $("#modal1607 .phoneBrew").html(response[9].phone);
                  $("#modal1607 .urlBrew").html(response[9].url);
                  parkMark();
                });

                $("a[data-name ='12th Street Bar and Grill']").on("click", function(event){
                  $("#modal1587 .nameBrew").html(response[8].name);
                  $("#modal1587 .streetBrew").html(response[8].street);
                  $("#modal1587 .cityBrew").html(response[8].city);
                  $("#modal1587 .phoneBrew").html(response[8].phone);
                  $("#modal1587 .urlBrew").html(response[8].url);
                  twelvthMark();

                });
  });//end first ajax call
function brookMark(){
              var myLatlng = new google.maps.LatLng(40.7215,-73.9577);
              var mapOptions = {
                zoom: 15,
                center: myLatlng
              }

              var map = new google.maps.Map(document.getElementById("map"), mapOptions);



              var image = 'https://funduval.files.wordpress.com/2017/05/beer-stein-marker1.png'
              for (var i = 0; i < bars.length; i++) {
                var bar = bars[i];
                var multiMarker = new google.maps.Marker({
                  position: {lat: 40.7215, lng: -73.9577},
                  map: map,
                  icon: image,

                });
              }

              // To add the marker to the map, call setMap();
              multiMarker.setMap(map);
              //Associate the styled map with the MapTypeId and set it to display.
              map.mapTypes.set('styled_map', styledMapType);
              map.setMapTypeId('styled_map');
        }



        function greenMark(){
              var myLatlng = new google.maps.LatLng(40.6824,-73.9654);
              var mapOptions = {
                zoom: 16,
                center: myLatlng
              }

              var map = new google.maps.Map(document.getElementById("map"), mapOptions);



              var image = 'https://funduval.files.wordpress.com/2017/05/beer-stein-marker1.png'
              for (var i = 0; i < bars.length; i++) {
                var bar = bars[i];
                var multiMarker = new google.maps.Marker({
                  position: {lat: 40.6824, lng: -73.9654},
                  map: map,
                  icon: image,

                });
              }

              // To add the marker to the map, call setMap();
              multiMarker.setMap(map);
              //Associate the styled map with the MapTypeId and set it to display.
              map.mapTypes.set('styled_map', styledMapType);
              map.setMapTypeId('styled_map');
        }


        function sixMark(){
              var myLatlng = new google.maps.LatLng(40.6739,-74.0119);
              var mapOptions = {
                zoom: 16,
                center: myLatlng
              }

              var map = new google.maps.Map(document.getElementById("map"), mapOptions);



              var image = 'https://funduval.files.wordpress.com/2017/05/beer-stein-marker1.png'
              for (var i = 0; i < bars.length; i++) {
                var bar = bars[i];
                var multiMarker = new google.maps.Marker({
                  position: {lat: 40.6739, lng: -74.0119},
                  map: map,
                  icon: image,

                });
              }

              // To add the marker to the map, call setMap();
              multiMarker.setMap(map);
              //Associate the styled map with the MapTypeId and set it to display.
              map.mapTypes.set('styled_map', styledMapType);
              map.setMapTypeId('styled_map');
        }


        function waterMark(){
              var myLatlng = new google.maps.LatLng(40.6644,-73.9803);
              var mapOptions = {
                zoom: 16,
                center: myLatlng
              }

              var map = new google.maps.Map(document.getElementById("map"), mapOptions);



              var image = 'https://funduval.files.wordpress.com/2017/05/beer-stein-marker1.png'
              for (var i = 0; i < bars.length; i++) {
                var bar = bars[i];
                var multiMarker = new google.maps.Marker({
                  position: {lat: 40.6644, lng: -73.9803},
                  map: map,
                  icon: image,

                });
              }

              // To add the marker to the map, call setMap();
              multiMarker.setMap(map);
              //Associate the styled map with the MapTypeId and set it to display.
              map.mapTypes.set('styled_map', styledMapType);
              map.setMapTypeId('styled_map');
        }


        function sodaMark(){
              var myLatlng = new google.maps.LatLng(40.6781,-73.9684);
              var mapOptions = {
                zoom: 16,
                center: myLatlng
              }

              var map = new google.maps.Map(document.getElementById("map"), mapOptions);



              var image = 'https://funduval.files.wordpress.com/2017/05/beer-stein-marker1.png'
              for (var i = 0; i < bars.length; i++) {
                var bar = bars[i];
                var multiMarker = new google.maps.Marker({
                  position: {lat: 40.6781, lng: -73.9684},
                  map: map,
                  icon: image,

                });
              }

              // To add the marker to the map, call setMap();
              multiMarker.setMap(map);
              //Associate the styled map with the MapTypeId and set it to display.
              map.mapTypes.set('styled_map', styledMapType);
              map.setMapTypeId('styled_map');
        }


        function spuytenMark(){
              var myLatlng = new google.maps.LatLng(40.8812,-73.9154);
              var mapOptions = {
                zoom: 16,
                center: myLatlng
              }

              var map = new google.maps.Map(document.getElementById("map"), mapOptions);



              var image = 'https://funduval.files.wordpress.com/2017/05/beer-stein-marker1.png'
              for (var i = 0; i < bars.length; i++) {
                var bar = bars[i];
                var multiMarker = new google.maps.Marker({
                  position: {lat: 40.8812, lng: -73.9154},
                  map: map,
                  icon: image,

                });
              }

              // To add the marker to the map, call setMap();
              multiMarker.setMap(map);
              //Associate the styled map with the MapTypeId and set it to display.
              map.mapTypes.set('styled_map', styledMapType);
              map.setMapTypeId('styled_map');
        }



        function sampleMark(){
              var myLatlng = new google.maps.LatLng(40.6739,-73.9684);
              var mapOptions = {
                zoom: 16,
                center: myLatlng
              }

              var map = new google.maps.Map(document.getElementById("map"), mapOptions);



              var image = 'https://funduval.files.wordpress.com/2017/05/beer-stein-marker1.png'
              for (var i = 0; i < bars.length; i++) {
                var bar = bars[i];
                var multiMarker = new google.maps.Marker({
                  position: {lat: 40.6739, lng: -73.9684},
                  map: map,
                  icon: image,

                });
              }

              // To add the marker to the map, call setMap();
              multiMarker.setMap(map);
              //Associate the styled map with the MapTypeId and set it to display.
              map.mapTypes.set('styled_map', styledMapType);
              map.setMapTypeId('styled_map');
        }





        function redMark(){
              var myLatlng = new google.maps.LatLng(40.6791,-74.0111);
              var mapOptions = {
                zoom: 16,
                center: myLatlng
              }

              var map = new google.maps.Map(document.getElementById("map"), mapOptions);



              var image = 'https://funduval.files.wordpress.com/2017/05/beer-stein-marker1.png'
              for (var i = 0; i < bars.length; i++) {
                var bar = bars[i];
                var multiMarker = new google.maps.Marker({
                  position: {lat: 40.6791, lng: -74.0111},
                  map: map,
                  icon: image,

                });
              }

              // To add the marker to the map, call setMap();
              multiMarker.setMap(map);
              //Associate the styled map with the MapTypeId and set it to display.
              map.mapTypes.set('styled_map', styledMapType);
              map.setMapTypeId('styled_map');
        }



        function twelvthMark(){
              var myLatlng = new google.maps.LatLng(40.6640,-73.9805);
              var mapOptions = {
                zoom: 16,
                center: myLatlng
              }

              var map = new google.maps.Map(document.getElementById("map"), mapOptions);



              var image = 'https://funduval.files.wordpress.com/2017/05/beer-stein-marker1.png'
              for (var i = 0; i < bars.length; i++) {
                var bar = bars[i];
                var multiMarker = new google.maps.Marker({
                  position: {lat: 40.6640, lng: -73.9805},
                  map: map,
                  icon: image,

                });
              }

              // To add the marker to the map, call setMap();
              multiMarker.setMap(map);
              //Associate the styled map with the MapTypeId and set it to display.
              map.mapTypes.set('styled_map', styledMapType);
              map.setMapTypeId('styled_map');
        }



        function parkMark(){
              var myLatlng = new google.maps.LatLng(40.6706,-73.9820);
              var mapOptions = {
                zoom: 16,
                center: myLatlng
              }

              var map = new google.maps.Map(document.getElementById("map"), mapOptions);



              var image = 'https://funduval.files.wordpress.com/2017/05/beer-stein-marker1.png'
              for (var i = 0; i < bars.length; i++) {
                var bar = bars[i];
                var multiMarker = new google.maps.Marker({
                  position: {lat: 40.6706, lng: -73.9820},
                  map: map,
                  icon: image,

                });
              }

              // To add the marker to the map, call setMap();
              multiMarker.setMap(map);
              //Associate the styled map with the MapTypeId and set it to display.
              map.mapTypes.set('styled_map', styledMapType);
              map.setMapTypeId('styled_map');
        }


// });
}//end initMap
