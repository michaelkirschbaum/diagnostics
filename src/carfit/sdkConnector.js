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

  return new Promise((res) => setTimeout(res, 2000))
    .then(() => {
      console.log('discoverCarfitDevices is returning an array of data');
      return [
        { name: 'CARFIT', id: '1212121212' , signal: 80 },
        { name: 'CARFIT', id: '2222222222' , signal: 15 },
        { name: 'CARFIT', id: '4242424242' , signal: 46 },
      ]
    });

  // let ChrisSDK = {};
  // ChrisSDK.ChrisFunction = new Promise(function(){ return [{ name: 'CARFIT', id: '1212121212' , signal: 80 }] });
  //
  // return ChrisSDK.ChrisFunction();

}