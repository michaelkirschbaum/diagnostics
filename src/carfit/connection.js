import { NativeEventEmitter, NativeModules } from 'react-native';
const { CarFitManager } = NativeModules;
var ReactNative = require('react-native');
var { Alert } = ReactNative;

export default class Connection {
  constructor() {
    // get singleton
    this.manager = NativeModules.CarFitManager;
    this.connectionEmitter = new NativeEventEmitter(CarFitManager);
  }

  simulateButtonClick() {
    try {
      this.manager.clickButton();
    } catch(e) {
      return null;
    }
  }

  async getDevices() {
    try {
      // scan for devices
      var devices = await this.manager.availableBLEDevicesAsync();

      return devices;
    } catch (e) {
      return null;
    }
  }

  async connectDevice(id) {
    try {
      // connect given uuid
      var response = await this.manager.connectBLEDeviceAsync(id);
/*
      // subscribe to disconnect
      const connect_subscription = this.connectionEmitter.addListener(
        'BLEDeviceConnectionStatus',
        (reminder) => Alert.alert(
          'Puls',
          'Device has been disconnected.',
          {text: 'OK', onPress: () => console.log('OK Pressed')}
        )
      );
*/
      // listen for support click
      const support_subscription = this.connectionEmitter.addListener(
        'BLEButtonPress',
        (reminder) => Alert.alert(
          'Support',
          'A representative will call you shortly.',
          {text: 'OK', onPress: () => console.log('OK Pressed')}
        )
      );

      return response;
    } catch (e) {
      return null;
    }
  }

  setConnectionStatus() {

  }

  addPhone(number) {
    this.manager.setPhone(number);

    Alert.alert(
      'Support',
      'Your phone number has been added.',
      {text: 'OK', onPress: () => console.log('OK Pressed.')},
    );
  }
}
