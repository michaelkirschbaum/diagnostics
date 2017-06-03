import {
  NativeEventEmitter,
  NativeModules,
  Alert
} from 'react-native';
import en from '../config/localization.en';
import fr from '../config/localization.fr';
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
      // connect given uuid
      var response = await this.manager.connectBLEDeviceAsync(id);

      return response;
    } catch (e) {
      return null;
    }
  }

  async addPhone(number) {
    this.manager.setPhone(number);
  }

  getFirmwareVersion() {
    try {
      return 'Not available';
    } catch(e) {
      return null;
    }
  }
}
