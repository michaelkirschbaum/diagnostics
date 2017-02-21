import { NativeModules } from 'react-native';
var CarFitManager = NativeModules.CarFitManager;

export async function callCognitoLogin(username, password) {
  /*
   Possible?
   { name: 'CARFIT', id: '129AB20934' , signal: 80 }

   This would normally just return the promise/callback from the SDK.
   This is a faked timed response after 2 seconds.
   */
  console.log('callCognitoLogin started...');

  return new Promise((res) => setTimeout(res, 2000))
    .then(() => {
      console.log('callCognitoLogin is returning an fake success data');
      return {
        success: true,
        email: 'something@carfit.com',
        userId: 1234
      }
    })

}


/**
 * Call to CARFIT SDK to get an array of supported BLE devices to pair with.
 * @returns {Promise<T>}
 */
export async function discoverCarfitDevices() {
  /*
  Possible?
  { name: 'CARFIT', id: '129AB20934' , signal: 80 }

  This would normally just return the promise/callback from the SDK.
  This is a faked timed response after 2 seconds.
   */
  console.log('discoverCarfitDevices started...');

  try {
    return CarFitManager.availableBLEDevices();
  } catch (e) {
    console.error(e);
  }

}
