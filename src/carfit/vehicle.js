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

      // check whether promise was resolved
      return response;
    } catch (e) {
      console.error(e);
    }
  }

  async addByPlate(plate, region) {
    try {
      var response = await this.manager.onBoardVehicleWithPlate(plate, region, null);

      return response;
    } catch (e) {
      return null;
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
  async getAlerts(type, vin) {
    try {
      var alerts = await this.manager.backlogVinTypeGet(type, vin);

      // return array of backlog items
      alerts = alerts["items"];

      return alerts;
    } catch (e) {
      console.error(e);
    }
  }
}
