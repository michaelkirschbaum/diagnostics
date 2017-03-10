// puls.js

import { NativeEventEmitter, NativeModules } from 'react-native';

export class Connection {
  constructor() {
    // get singleton
    this.manager = NativeModules.CarFitManager;
    this.connectionEmitter = new NativeEventEmitter(NativeModules);
  }

  async getDevices() {
    try {
      // scan for devices
      var devices = await this.manager.availableBLEDevicesAsync();

      return devices;
    } catch (e) {
      console.error(e);
    }
  }

  async connectDevice(id) {
    try {
      // connect given uuid
      var response = await this.manager.connectBLEDeviceAsync(id);

      // subscribe to disconnect
      const subscription = this.connectionEmitter.addListener(
        'BLEDeviceDisconnect',
        (reminder) => console.log(reminder.name)
      );

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
      var response = this.manager.authenticateAuth0(domain, token['idToken']);

      return response;
    } catch (e) {
      console.error(e);
    }
  }

  norauto(code, demographics) {
    try {
      var response = this.manager.authenticateNorauto(code, demographics);

      return response;
    } catch (e) {
      console.error(e);
    }
  }
}

export class Vehicle {
  constructor() {
    // get singleton
    this.manager = NativeModules.CarFitManager;
  }

  addByVIN(vin) {
    try {
      var response = this.manager.onBoardVehicleWithVIN(vin);

      return response;
    } catch (e) {
      console.error(e);
    }
  }

  addByPlate(plate, region) {
    try {
      var response = this.manager.onBoardVehicleWithPlate(plate, region, null);

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
      var response = this.manager.clickButton();
    } catch (e) {
      console.log(e);
    }
  }
}
