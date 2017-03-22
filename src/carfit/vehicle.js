import { NativeEventEmitter, NativeModules } from 'react-native';
const { CarFitManager } = NativeModules;
var ReactNative = require('react-native');
var { Alert } = ReactNative;

export default class Vehicle {
  constructor() {
    // get singleton
    this.manager = NativeModules.CarFitManager;
  }

  async addByVIN(vin) {
    try {
      var response = await this.manager.onBoardVehicleWithVIN(vin);

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

  async addByPlate(plate, region) {
    try {
      var response = await this.manager.onBoardVehicleWithPlate(plate, region, null);

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
      var response = this.manager.vehicleVinPut(vin, {"current_meters": distance});
    } catch (e) {
      console.error(e);
    }
  }

  async getMileage(vin) {
    try {
      var vehicle = await this.manager.vehicleVinGet(vin);
      var mileage = vehicle["current_meters"];

      return mileage.toString();
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
  async getAlerts(vin) {
    try {
      var results = await this.manager.backlogVinGet(vin);

      return results;
    } catch (e) {
      console.error(e);
    }
  }
}
