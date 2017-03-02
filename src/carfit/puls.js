/*
  puls.js

  Created by Michael Kirschbaum on February 20, 2017.
  Copyright © 2017 Carfit. All rights reserved.
*/

import { NativeModules } from 'react-native';

// create singleton
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
    // connect given uuid
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

export function loginNorauto() {}

export function addVehicleVIN(vin) {
  try {
    var response = CarFitManager.onBoardVehicleWithVIN(vin);
  } catch (e) {
    console.error(e)
  }
}

export function addVehiclePlate(plate, region) {
  try {
    CarFitManager.onBoardVehicleWithPlate(plate, region, null);
  } catch (e) {
    console.error(e)
  }
}

export function getVehicleStatus() {}

export function updateDistance() {}

export function clickButton() {
  try {
    CarFitManager.clickButton();
  } catch (e) {
    console.log(e)
  }
}
