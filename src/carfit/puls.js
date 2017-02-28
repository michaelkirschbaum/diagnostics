/*
  puls.js

  Allows interaction with the Carfit Puls device.

  Created by Michael Kirschbaum on February 20, 2017.
  Copyright © 2017 Carfit. All rights reserved.
*/

import { NativeModules } from 'react-native';
var CarFitManager = NativeModules.CarFitManager;

export function getDevices() {
  try {
    return CarFitManager.availableBLEDevicesAsync();
  } catch (e) {
    console.error(e)
  }
}

export function connectDevice() {
  try {
    // CarFitManager.connectBLEDeviceAsync(0);
  } catch (e) {
    console.error(e)
  }
}

function connectionStatus() {
  // CarFitManager.getConnection()
}

export function loginAuth0(domain, token) {
  try {
    CarFitManager.authenticate(domain, token['idToken'])
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
