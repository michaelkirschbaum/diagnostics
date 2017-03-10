/*
  CarFitManager.java

  Exposes Android methods to React Native.
*/

package com.carfit;

import com.connected.watch.api.CarFitSDKManager;
import com.connected.watch.api.utilities.ICarFitResult;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

public class CarFitManager extends ReactContextBaseJavaModule {

    public CarFitManager(ReactApplicationContext reactContext) {

    super(reactContext);
    sdkManager =  CarFitSDKManager.getInstance();

    }

    private CarFitSDKManager sdkManager;


    @Override
    public String getName() {
        return "CarFitManager";
    }

    @ReactMethod
    public void availableBleDevicesAsync(
        Promise promise) {
      try {
        promise.resolve("Success.");
      } catch(Exception e) {
        promise.reject(e);
      }
    }

    @ReactMethod
    public void connectBLEDeviceAsync(
        String identifier,
        Promise promise) {
      try {
        promise.resolve("Success.");
      } catch(Exception e) {
        promise.reject(e);
      }
    }

    @ReactMethod
    public void onBoardVehicleWithPlate(
        String licensePlate,
        Promise promise) {
      try {
        promise.resolve("Success.");
      } catch(Exception e) {
        promise.reject(e);
      }
    }

    @ReactMethod
    public void onBoardVehicleWithVIN(
        String vin,
        Promise promise) {
      try {
        promise.resolve("Success.");
      } catch(Exception e) {
        promise.reject(e);
      }
    }

    @ReactMethod
    public void authenticateAuth0(
        String domain,
        String token,
        final Promise promise) {
      try {
        sdkManager.onBoardUser(domain, token, new ICarFitResult()
            {
            @Override
            public void onSuccess()
                {
                promise.resolve("Success.");
                }

            @Override
            public void onFailure()
                {
                promise.reject(new Exception("Failure."));
                }
            });

      } catch(Exception e) {
        promise.reject(e);
      }
    }

    @ReactMethod
    public void authenticateNorauto(
        String code,
        String demographics,
        Promise promise) {
      try {
        promise.resolve("Success.");
      } catch(Exception e) {
        promise.reject(e);
      }
    }

    @ReactMethod
    public void scheduledServiceItemsFor(
        String vin,
        Promise promise) {
      try {
        promise.resolve("Success.");
      } catch(Exception e) {
        promise.reject(e);
      }
    }

    @ReactMethod
    public void vehicleBacklog(
        String vin,
        String backlogType,
        Promise promise) {
      try {
        promise.resolve("Success.");
      } catch(Exception e) {
        promise.reject(e);
      }
    }

    @ReactMethod
    public void clickButton(
        Promise promise) {
      try {
        promise.resolve("Success.");
      } catch(Exception e) {
        promise.reject(e);
      }
    }

    @ReactMethod
    public void updatedDistance(
        String vin,
        Integer kilometers,
        Promise promise) {
      try {
        promise.resolve("Success.");
      } catch(Exception e) {
        promise.reject(e);
      }
    }
}
