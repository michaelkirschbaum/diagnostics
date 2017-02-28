/*
  puls.js

  Allows interaction with the Carfit Puls device.

  Created by Michael Kirschbaum on February 20, 2017.
  Copyright © 2017 Carfit. All rights reserved.
*/

import { NativeModules } from 'react-native';

// instantiate singleton
var CarFitManager = NativeModules.CarFitManager;

export async function getDevices() {
  try {
    // scan for devices
    var devices = await CarFitManager.availableBLEDevicesAsync();

    return devices;
  } catch (e) {
    console.error(e)
  }
}

export function connectDevice(id) {
  try {
    // connect with uuid
    CarFitManager.connectBLEDeviceAsync(id);
  } catch (e) {
    console.error(e)
  }
}

function connectionStatus() {
  // CarFitManager.getConnection()
}

function loginAuth0() {
  try {
    // CarFitManager.authenticate()
  } catch (e) {}
}

function loginNorauto() {
  // CarFitManager.authenticate()
}

function addVehicleVIN() {
  // CarFitManager.onBoardVehicleWithVIN()
}

function addVehiclePlate() {
  // CarFitManager.onBoardVehicleWithPlate()
}

function buttonClick() {
  // support flow
}

function updateDistance() {
  // update kilometrage
}

function notify() {
  // vehicle status alerts
}
