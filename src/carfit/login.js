import { NativeEventEmitter, NativeModules } from 'react-native';
const { CarFitManager } = NativeModules;
var ReactNative = require('react-native');
var { Alert } = ReactNative;

export default class Login {
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

  async getUser() {
    try{
      var user = await this.manager.userGet();

      return user;
    } catch (e) {
      console.error(e);
    }
  }
}
