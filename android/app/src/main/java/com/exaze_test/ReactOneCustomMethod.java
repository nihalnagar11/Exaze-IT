package com.exaze_test;

import android.annotation.SuppressLint;
import android.provider.Settings;

import androidx.annotation.NonNull;
import android.os.Build;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;

public class ReactOneCustomMethod extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    ReactOneCustomMethod(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @NonNull
    @Override
    public String getName() {
        return "ReactOneCustomMethod";
    }

    @ReactMethod
    public void getPhoneID(Promise response) {
        try {
            // @SuppressLint("HardwareIds") String id =
            // Settings.Secure.getString(reactContext.getContentResolver(),
            // Settings.Secure.ANDROID_ID);
            // String model = Build.MODEL;
            String product = Build.PRODUCT;
            boolean isEmulator = false;
            if (product != null) {
                isEmulator = product.equals("sdk") || product.contains("_sdk") || product.contains("sdk_");
            }
            response.resolve(isEmulator);
        } catch (Exception e) {
            response.reject("Error", e);
        }
    }
}
