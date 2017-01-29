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
    })

}