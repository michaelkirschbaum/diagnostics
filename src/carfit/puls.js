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

  // add device methods
}

export class Login {
  constructor() {
    // get singleton
    this.manager = NativeModules.CarFitManager;
  }

  // add login methods
}

export class Vehicle {
  constructor() {
    // get singleton
    this.manager = NativeModules.CarFitManager;
  }

  // add vehicle methods
}

export async function getDevices() {
  try {
    // scan for devices
    var devices = await CarFitManager.availableBLEDevicesAsync();

    return devices;
  } catch (e) {
    console.error(e);
  }
}

export async function connectDevice(id) {
  try {
    // connect given uuid
    var response = await CarFitManager.connectBLEDeviceAsync(id);

    return response;
  } catch (e) {
    console.error(e);
  }
}

export function loginAuth0(domain, token) {
  try {
    var response = CarFitManager.authenticate(domain, token['idToken']);

    return response;
  } catch (e) {
    console.error(e);
  }
}

export function loginNorauto() {}

export function addVehicleVIN(vin) {
  try {
    var response = CarFitManager.onBoardVehicleWithVIN(vin);

    return response;
  } catch (e) {
    console.error(e);
  }
}

export function addVehiclePlate(plate, region) {
  try {
    var response = CarFitManager.onBoardVehicleWithPlate(plate, region, null);

    return response;
  } catch (e) {
    console.error(e);
  }
}

function updateDistance() {
  try {
    // manager.updateDistance();
  } catch (e) {
    console.error(e);
  }
}

export default class Alert {
  constructor() {
    // get singleton
    this.manager = NativeModules.CarFitManager;
  }

  // get backlog
  getAlerts(vin) {
    try {
      // var results = this.manager.scheduledServiceItemsFor(vin);

      var results = fetch("https://tnexnmzch3.execute-api.us-east-1.amazonaws.com/dev/backlog/AAAAAA");

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

  clickButton() {
    try {
      CarFitManager.clickButton();
    } catch (e) {
      console.log(e);
    }
  }
}
