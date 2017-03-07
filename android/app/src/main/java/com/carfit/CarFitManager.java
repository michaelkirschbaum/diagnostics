/*
  CarFitManager.java

  Created by Michael Kirschbaum on March6, 2017.
*/
package com.carfit;

import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class CarFitManager extends ReactContextBaseJavaModule
    {

    public CarFitManager(ReactApplicationContext reactContext)
        {
        super(reactContext);
        }

    @Override
    public String getName()
        {
        return "CarFitManager";
        }

    @ReactMethod
    public String authenticate(String domain, String token)
        {
        Toast.makeText(getReactApplicationContext(), "Hello Android", Toast.LENGTH_LONG).show();
        return "{}";
        }
    }
