import { NativeEventEmitter, NativeModules } from 'react-native';
const { CarFitManager } = NativeModules;
var ReactNative = require('react-native');
var { Alert } = ReactNative;

export default class Vehicle {
  constructor(vin = '') {
    // get singleton
    this.manager = NativeModules.CarFitManager;
    this.vin = vin;
  }

  async addByVIN(vin) {
    try {
      var response = await this.manager.onBoardVehicleWithVIN(vin);

      // check whether promise was resolved
      return response;
    } catch (e) {
      return null;
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

  async getMileage() {
    try {
      var vehicle = await this.manager.vehicleVinGet(this.vin);
      var mileage = vehicle["current_meters"] / 1000;

      return mileage.toString();
    } catch (e) {
      return null;
    }
  }

  async getTrips(vin) {
    try {
      var trips = await this.manager.tripLogVinGet(vin);

      return trips["items"];
    } catch (e) {
      return null;
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
      return null;
    }
  }

  async getTitle() {
    try {
      var vehicle = await this.manager.vehicleVinGet(this.vin);
      var title = vehicle["name"];

      return title;
    } catch (e) {
      return null;
    }
  }

  async getDescription() {
    try {
      var vehicle = await this.manager.vehicleVinGet(this.vin);
      var year = vehicle["year"];
      var model = vehicle["model"];
      var description = year + ' ' + model;

      return description;
    } catch (e) {
      return null;
    }
  }

  async getPhoto() {
    try {
      var vehicle = await this.manager.vehicleVinGet(this.vin);
      var image_url = vehicle["user_image_url"];

      return image_url;
    } catch (e) {
      return null;
    }
  }
}
