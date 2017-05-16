import {
  NativeEventEmitter,
  NativeModules,
  Alert
} from 'react-native';
import en from '../../config/localization.en';
import fr from '../../config/localization.fr';
const { CarFitManager } = NativeModules;

// set language
if (NativeModules.SettingsManager.settings.AppleLocale.startsWith("fr"))
  var loc = fr;
else
  var loc = en;

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
      var update_firmware_subscription = this.connectionEmitter.addListener(
        'BLEOADNotification',
        (notification) => this.firmwareAlert(notification)
      );

      // connect given uuid
      var response = await this.manager.connectBLEDeviceAsync(id);

      // cancel update listener
      update_firmware_subscription.remove();

      return response;
    } catch (e) {
      var temp = e;

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

  firmwareAlert(notification) {
    switch(notification.state) {
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
}
