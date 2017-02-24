/*
  Carfit React Native Puls library

  Created by Michael Kirschbaum on February 20, 2017
*/

import { NativeModules } from 'react-native';
var CarFitManager = NativeModules.CarFitManager;

export function getPulsDevices() {
  try {
    return CarFitManager.availableBLEDevicesAsync();
  } catch (e) {}
}

export function connectPulsDevice() {
  try {
    return CarFitManager.connectBLEDeviceAsync(0);
  } catch (e) {}
}

function login() {}

function addVehicle() {}

function buttonClick() {}

function updateKilometrage() {}

function notify() {}
