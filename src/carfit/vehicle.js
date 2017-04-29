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

  async setMileage(vin, distance) {
    try {
      var response = await this.manager.vehicleVinPut(vin, {"current_meters": distance});
    } catch (e) {
      return null;
    }
  }

  async getMileage() {
    try {
      var vehicle = await this.manager.vehicleVinGet(this.vin);

      return vehicle["current_meters"];
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
      var make = vehicle["make"];
      var model = vehicle["model"];
      var description = year + ' ' + make + ' ' + model;

      return description;
    } catch (e) {
      return null;
    }
  }

  async getPhoto(image) {
    try {
      var image_path = await this.manager.vehicleImageGet(image);

      // get image
      var image = null;

      return image
    } catch (e) {
      return null;
    }
  }

  setPhoto(image, name) {
    try {
      var response = this.manager.vehicleImagePut(image, name);

      return response;
    } catch(e) {
      return null;
    }
  }
}
