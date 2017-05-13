import {
  NativeEventEmitter,
  NativeModules,
  Alert
} from 'react-native';

var ReactNative = require('react-native');
var { Alert } = ReactNative;

const { CarFitManager } = NativeModules;

export default class Connection {
  constructor() {
    // get singleton
    this.manager = NativeModules.CarFitManager;
    this.connectionEmitter = new NativeEventEmitter(CarFitManager);
  }

  simulateButtonClick() {
    try {
      this.manager.clickButton();
      return 1;
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
      // update firmware
      var update_firmware_subscription = connectionEmitter.addListener(
        'BLEOADNotification',
        (notification) => switch(notification.state) {
            case "start":
              Alert.alert(
                loc.device.connect,
                loc.device.firmware,
                {text: 'OK', onPress: () => undefined}
              );
            case "stop":
              Alert.alert(
                loc.device.connect,
                loc.device.updateComplete,
                {text: 'OK', onPress: () => undefined}
              );
            default:
              Alert.alert(
                loc.device.connect,
                loc.device.percent,
                {text: 'OK', onPress: () => undefined}
              );
          }
        }
      );

      // connect given uuid
      var response = await this.manager.connectBLEDeviceAsync(id);

      // cancel update listener
      update_subscription_subscription.remove();

      return response;
    } catch (e) {
      return null;
    }
  }

  setConnectionStatus() {
    // flag bluetooth status
  }

  addPhone(number) {
    this.manager.setPhone(number);
    /*
    Alert.alert(
      'Support',
      'Your phone number has been added.',
      {text: 'OK', onPress: () => console.log('OK Pressed.')},
    ); */
  }
}
