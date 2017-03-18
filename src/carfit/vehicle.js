import { NativeEventEmitter, NativeModules } from 'react-native';
const { CarFitManager } = NativeModules;
var ReactNative = require('react-native');
var { Alert } = ReactNative;

export default class Vehicle {
  constructor() {
    // get singleton
    this.manager = NativeModules.CarFitManager;
  }

  addByVIN(vin) {
    try {
      var response = this.manager.onBoardVehicleWithVIN(vin);

      // if response is an error return null
      if (response.error)
        return null;
      else {
        return response;
      }
    } catch (e) {
      // do promises throw an error?
      console.error(e);
    }
  }

  addByPlate(plate, region) {
    try {
      var response = this.manager.onBoardVehicleWithPlate(plate, region, null);

      if (response.error)
        return null;
      else {
        return response;
      }
    } catch (e) {
      console.error(e);
    }
  }

  setMileage(vin, distance) {
    try {
      var response = this.manager.vehicleVinPut(vin, {'current_meters': distance});
    } catch (e) {
      console.error(e);
    }
  }

  getMileage(vin) {
    try {
      return this.manager.vehicleVinGet(vin);
    } catch (e) {
      console.error(e);
    }
  }

  getTrips(vin) {
    try {
      return this.manager.tripLogVinGet(vin);
    } catch (e) {
      console.error(e)
    }
  }

  // get backlog
  getAlerts(vin) {
    try {
      var results = this.manager.backlogVinGet(vin);

      return results;
    } catch (e) {
      console.error(e);
    }
  }
}
