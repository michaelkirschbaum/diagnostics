/*
  Carfit React Native Puls library

  Created by Michael Kirschbaum on February 20, 2017
*/

import { NativeModules } from 'react-native';
var CarFitManager = NativeModules.CarFitManager;

function login_auth0() {}

function login_norauto() {}

function addVehicle() {}

export async function getPulsDevices() {
  try {
    return CarFitManager.availableBLEDevicesAsync();
  } catch (e) {}
}

export function connectDevice() {
  try {
    return CarFitManager.connectBLEDeviceAsync(0);
  } catch (e) {}
}

function buttonClick() {}

function updateDistance() {}

function notify() {}
