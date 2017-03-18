// puls.js

import { NativeEventEmitter, NativeModules } from 'react-native';
const { CarFitManager } = NativeModules;
var ReactNative = require('react-native');
var { Alert } = ReactNative;
import {AWSLambda} from 'aws-sdk-react-native-lambda';

export class Connection {
  constructor() {
    // get singleton
    this.manager = NativeModules.CarFitManager;
    this.connectionEmitter = new NativeEventEmitter(CarFitManager);
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
      const connect_subscription = this.connectionEmitter.addListener(
        'BLEDeviceDisconnect',
        (reminder) => Alert.alert(
          'Puls',
          'Device has been disconnected.',
          {text: 'OK', onPress: () => console.log('OK Pressed')},
          {cancelable: false}
        )
      );

      // listen for support click
      const support_subscription = this.connectionEmitter.addListener(
        'BLEButtonPress',
        (reminder) => Alert.alert(
          'Support',
          'Support has been initiated.',
          {text: 'OK', onPress: () => console.log('OK Pressed')},
          {cancelable: false}
        )
      );

      return response;
    } catch (e) {
      console.error(e);
    }
  }

  addPhone(number) {
    this.manager.setPhone(number);

    Alert.alert(
      'Support',
      'Support has been initiated.',
      {text: 'OK', onPress: () => console.log('OK Pressed')},
      {cancelable: false}
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

  updateDistance(vin, kilometers) {
    try {
      return null;
    } catch (e) {
      console.error(e);
    }
  }
}

export class Notification {
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

export function getUser() {
  // AWSLambda.initWithOptions({"region": "us-east-1"});

  return null;
}
