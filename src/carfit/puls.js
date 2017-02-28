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

export async function connectDevice(id) {
  try {
    // connect with uuid
    var response = await CarFitManager.connectBLEDeviceAsync(id);
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
  try {
    // CarFitManager.onBoardVehicleWithVIN()
  } catch (e) {}
}

function addVehiclePlate() {
  try {
    // CarFitManager.onBoardVehicleWithPlate()
  } catch (e) {}
}

function buttonClick() {
  // support flow
}

function updateDistance() {
  // update kilometrage
}

function getVehicleStatus() {
  // vehicle status alerts
}
