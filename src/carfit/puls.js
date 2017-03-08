// puls.js

import { NativeModules } from 'react-native';

// todo: wrap methods in class
// get singleton
var CarFitManager = NativeModules.CarFitManager;

export class Connection {
  constructor() {
    // get singleton
    this.manager = NativeModules.CarFitManager;
  }

  async getDevices() {
    try {
      // scan for devices
      var devices = await CarFitManager.availableBLEDevicesAsync();

      return devices;
    } catch (e) {
      console.error(e);
    }
  }

  async connectDevice(id) {
    try {
      // connect given uuid
      var response = await CarFitManager.connectBLEDeviceAsync(id);

      return response;
    } catch (e) {
      console.error(e);
    }
  }
}

export class Login {
  constructor() {
    // get singleton
    this.manager = NativeModules.CarFitManager;
  }

  auth0(domain, token) {
    try {
      var response = CarFitManager.authenticate(domain, token['idToken']);

      return response;
    } catch (e) {
      console.error(e);
    }
  }

  norauto() {}
}

export class Vehicle {
  constructor() {
    // get singleton
    this.manager = NativeModules.CarFitManager;
  }

  addByVIN(vin) {
    try {
      var response = CarFitManager.onBoardVehicleWithVIN(vin);

      return response;
    } catch (e) {
      console.error(e);
    }
  }

  addByPlate(plate, region) {
    try {
      var response = CarFitManager.onBoardVehicleWithPlate(plate, region, null);

      return response;
    } catch (e) {
      console.error(e);
    }
  }

  updateDistance(vin, kilometers) {
    try {
      // manager.updateDistance();
    } catch (e) {
      console.error(e);
    }
  }
}

export class Alert {
  constructor() {
    // get singleton
    this.manager = NativeModules.CarFitManager;
  }

  // get backlog
  getAlerts(vin) {
    try {
      var results = this.manager.scheduledServiceItemsFor(vin);

      // var results = fetch("https://tnexnmzch3.execute-api.us-east-1.amazonaws.com/dev/backlog/AAAAAA");

      return results;
    } catch (e) {
      console.error(e);
    }
  }

  // get backlog by type
  getAlertsByType(vin, type) {
    try {
      var results = this.manager.vehicleBacklog(vin, type);

      return results;
    } catch (e) {
      console.error(e);
    }
  }

  pulsClick() {
    try {
      CarFitManager.clickButton();
    } catch (e) {
      console.log(e);
    }
  }
}
