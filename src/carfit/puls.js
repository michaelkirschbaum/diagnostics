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

export function loginAuth0(domain, token) {
  try {
    var response = CarFitManager.authenticate(domain, token['idToken']);
  } catch (e) {
    console.error(e)
  }
}

export function loginNorauto() {
  try {
    // CarFitManager.authenticate()
  } catch (e) {}
}

export function addVehicleVIN(vin) {
  try {
    var response = CarFitManager.onBoardVehicleWithVIN(vin, 1, null, null, null, null);
  } catch (e) {
    console.error(e)
  }
}

export function addVehiclePlate(plate, region, vin_last_six) {
  try {
    CarFitManager.onBoardVehicleWithPlate(plate, region, vin_last_six);
  } catch (e) {}
}

export function buttonClick() {
  // support flow
}

export function updateDistance() {
  // update kilometrage
}

export function getVehicleStatus() {
  // vehicle status alerts
}
