/*
  Puls library

  Created by Michael Kirschbaum on February 20, 2017
*/

import { NativeModules } from 'react-native';
var CarFitManager = NativeModules.CarFitManager;

export function getDevices() {
  try {
    return CarFitManager.availableBLEDevicesAsync();
  } catch (e) {}
}

export function connectDevice() {
  try {
    return CarFitManager.connectBLEDeviceAsync(0);
  } catch (e) {}
}

function login() {}

function addVehicle() {}

function buttonClick() {}

function updateDistance() {}

function notify() {}
