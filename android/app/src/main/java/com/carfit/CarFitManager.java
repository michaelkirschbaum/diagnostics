// CarFitManager.java

package com.carfit;

import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class CarFitManager extends ReactContextBaseJavaModule {
    @Override
    public String getName() {
        return "CarFitManager";
    }

    @ReactMethod
    public void availableBleDevicesAsync() {

    }

    @ReactMethod
    public void connectBLEDeviceAsync(String identifier) {

    }

    @ReactMethod
    public void onBoardVehicleWithPlate(String licensePlate) {

    }

    @ReactMethod
    public void onBoardVehicleWithVIN(String vin) {

    }

    @ReactMethod
    public void authenticateAuth0(String domain, String token) {

    }

    @ReactMethod
    public void authenticateNorauto(String code, ReadableMap demographics) {

    }

    @ReactMethod
    public void scheduledServiceItemsFor(String vin) {

    }

    @ReactMethod
    public void vehicleBacklog(String vin, String backlogType) {

    }

    @ReactMethod
    public void clickButton() {

    }

    @ReactMethod
    public void updatedDistance(String vin, Integer kilometers) {

    }
}
