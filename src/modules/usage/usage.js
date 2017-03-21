'use strict';

/**
 * @ngdoc function
 * @name viewcarfitApp.controller:UsageCtrl
 * @description
 * # UsageCtrl
 * Controller of the viewcarfitApp
 */
angular.module('viewcarfitApp')
  .controller('UsageCtrl', function ($scope,$state,$window,carfit,$timeout,$interval,awsCognito) {
    if(!$window.localStorage.currentVin && $state.params.vin){
      var currentVin = $state.params.vin;
  		$window.localStorage.setItem("currentVin", currentVin);
    } else if ($state.params.vin == 'undefined'){
      console.log('vin is undefined');
    }else if($state.params.vin != 'undefined'){
      var currentVin = $state.params.vin;
      $window.localStorage.setItem("currentVin", currentVin);
    }
    $scope.currentVin = $window.localStorage.getItem("currentVin");


    function readVehicleTripDataInLocalStorageToScope(){
      var tripDataFull = JSON.parse($window.localStorage.getItem("tripData"));
      $timeout(function () {
        var tripData = tripDataFull.sort(function(a, b){return Date.parse(a.end_timestamp) - Date.parse(b.end_timestamp)}).reverse();



        function trueTrips(value) {
          return value.meters_travelled >= 200;
        };
        $scope.tripData = tripData.filter(trueTrips);
        var trueTripsArray = $scope.tripData;
        console.log('tripData: ',$scope.tripData);
        $scope.dataLoaded = true;
        // console.log($scope.cars);


        var durations = tripData.reduce( function( out, value) {
            out.city += value.secs_below_72kph;
            out.highway += value.secs_above_72kph;
            out.hard_driving += value.hard_driving_events;
            out.road_shock += value.road_shock_events;
            out.meters_travelled += value.meters_travelled;
            return out;
        }, {city:0, highway: 0,hard_driving:0,road_shock:0,meters_travelled:0});
        $scope.durations = durations;



        var trueTripsArray  = tripData.filter(trueTrips).slice(0,10).reverse();
        console.log('trueTripsArray:',trueTripsArray);

        function toSpeedArray( trips ) {
            return trips.reduce( function( out, trip ) {
                out.highwaySpeeds.push(Math.round(trip.secs_above_72kph/60));
                out.citySpeeds.push(Math.round(trip.secs_below_72kph/60));
                return out;
            }, { highwaySpeeds: [], citySpeeds: [] });
        };

        var citySpeeds = toSpeedArray(trueTripsArray).citySpeeds;
        var hwySpeeds = toSpeedArray(trueTripsArray).highwaySpeeds;
        console.log('filtered speed array for chart: ',toSpeedArray(trueTripsArray));
        console.log('citySpeeds',citySpeeds);
        console.log('hwySpeeds',hwySpeeds);


        $scope.chartOptions = {

          options: {
            colors: ["#3999de", "#e39f35"],
              //This is the Main Highcharts chart config. Any Highchart options are valid here.
              //will be overriden by values specified below.
              chart: {
                  type: 'column'
              },
              tooltip: {
                  style: {
                      padding: 10,
                      fontWeight: 'bold'
                  }
              },
              legend: {
                enabled: false,
                 itemStyle: {
                    color: '#E0E0E3'
                 },
                 itemHoverStyle: {
                    color: '#FFF'
                 },
                 itemHiddenStyle: {
                    color: '#606063'
                 }
              },
              plotOptions: {
                  column: {
                    stacking: 'percent'
                  },
                  series: {
                    fillOpacity:0.2,
                      marker: {
                          enabled: false
                      }
                  }
              },
              credits: {
                  enabled: false
              }
          },
          //The below properties are watched separately for changes.

          //Series object (optional) - a list of series using normal Highcharts series options.
          series: [
            {
              name:"Highway",
              data: hwySpeeds
            },
            {
              name:"City",
              data:citySpeeds
            }
        ],
          //Title configuration (optional)
          title: {
            text:'10 Most Recent Trips',
             style: {
              color: '#fff',
              textTransform: 'uppercase',
              fontSize: '20px'
             }
          },
          //Boolean to control showing loading status on chart (optional)
          //Could be a string if you want to show specific loading text.
          loading: false,
          //Configuration for the xAxis (optional). Currently only one x axis can be dynamically controlled.
          //properties currentMin and currentMax provided 2-way binding to the chart's maximum and minimum
          xAxis: {
            gridLineColor: '#707073',
            labels: {
               style: {
                  color: '#E0E0E3'
               }
            },
            title: {
              text: 'Trips',
              style: {
                 color: '#fff',
                 textTransform: 'uppercase',
                 fontSize: '10px'
              }
            },
              categories: [1,2,3,4,5,6,7,8,9,10]
          },
          yAxis:{
            labels: {
               style: {
                  color: '#E0E0E3'
               }
            },
            title: {
              style: {
                 color: '#fff',
                 textTransform: 'uppercase',
                 fontSize: '10px'
              },
                text: 'Trip Percentage'
            }
          },
          //Whether to use Highstocks instead of Highcharts (optional). Defaults to false.
          useHighStocks: false,
          //size (optional) if left out the chart will default to size of the div or something sensible.
          size: {
           height: 300
          },
          //function (optional)
          func: function (chart) {
           //setup some logic for the chart
          }
        };

      },0);



    };

    function saveVehicleTripDataToLocalStorage(data){
      $window.localStorage.setItem("tripData", JSON.stringify(data.data));
      readVehicleTripDataInLocalStorageToScope();
    };


    function getVehicleTripData(){
      carfit.vehicleTripDataGet(currentVin)
      .then(function(data){
        if(!data.data.errorMessage || data != ''){
        saveVehicleTripDataToLocalStorage(data);
      } else{
        console.log('data.data.errorMessage', data.data.errorMessage);
      }
      });
    };

    // readVehicleTripDataInLocalStorageToScope();
    getVehicleTripData();


    var getVehicleTripDataIntervalWrapper = function(){
      var getVehicleTripDataInterval = $interval(function(){
        getVehicleTripData(currentVin);
        console.log('getting current trip data info on interval!');
        awsCognito.cognitoRenew();
      },60000);
      $scope.$on(
          "$destroy",
          function( event ) {
            console.log('destroying interval');
              $interval.cancel( getVehicleTripDataInterval );
          }
      );
    };
    getVehicleTripDataIntervalWrapper();

    function postVinInfo(vin,body){
      carfit.vehicleVinDataPut(vin,body)
      .then(function(){
        getVinInfo(currentVin);
      });
    };

  });
