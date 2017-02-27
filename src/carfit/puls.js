/*
  Puls library

  Created by Michael Kirschbaum on February 20, 2017
*/

import { NativeModules } from 'react-native';
var CarFitManager = NativeModules.CarFitManager;

export async function getDevices() {
  try {
    var devices = await CarFitManager.availableBLEDevicesAsync();

    return devices
  } catch (e) {
    console.error(e)
  }
}

export function connectDevice() {
  try {
    return CarFitManager.connectBLEDeviceAsync(0);
  } catch (e) {
    console.error(e)
  }
}

function login() {}

function addVehicle() {}

function buttonClick() {}

function updateDistance() {}

function notify() {}
