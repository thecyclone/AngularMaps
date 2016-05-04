//Data
var cities = [
              {
                  city : 'Okhla Metro',
                  desc : 'Okhla Metro Station, Delhi',
                  lat : 28.5422425,
                  long : 77.269239
              },
              {
                  city : 'Govindpuri Metro',
                  desc : 'Govindpuri Metro Station, Delhi',
                  lat : 28.5430766,
                  long : 77.2569323
              },
              {
                  city : 'International Trade Tower',
                  desc : 'International Trade Tower, Nehru Place, Delhi',
                  lat : 28.5464887,
                  long : 77.2522894
              },
              {
                  city : 'Post Office',
                  desc : 'Head Post Office, Kalkaji, Delhi',
                  lat : 28.5440396,
                  long : 77.2564885
              },
              {
                  city : 'Deshbandhu College ',
                  desc : 'Deshbandhu College, Delhi',
                  lat : 28.5410691,
                  long : 77.2538262
              }
          ];
          //Angular App Module and Controller
          var sampleApp = angular.module('mapsApp', []);
          sampleApp.controller('MapCtrl', function ($scope) {

              var mapOptions = {
                  zoom: 15,
                  center: new google.maps.LatLng(28.546282,77.256848),
                  mapTypeId: google.maps.MapTypeId.TERRAIN
              }

              $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

              $scope.markers = [];
              
              var infoWindow = new google.maps.InfoWindow();
              
              var createMarker = function (info){
                  
                  var marker = new google.maps.Marker({
                      map: $scope.map,
                      position: new google.maps.LatLng(info.lat, info.long),
                      title: info.city
                  });
                  marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
                  
                  google.maps.event.addListener(marker, 'click', function(){
                      infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                      infoWindow.open($scope.map, marker);
                  });
                  
                  $scope.markers.push(marker);
                  
              }  
              
              for (i = 0; i < cities.length; i++){
                  createMarker(cities[i]);
              }

              $scope.openInfoWindow = function(e, selectedMarker){
                  e.preventDefault();
                  google.maps.event.trigger(selectedMarker, 'click');
              }

          });