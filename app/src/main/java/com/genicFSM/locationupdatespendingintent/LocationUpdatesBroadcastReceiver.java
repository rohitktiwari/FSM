/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 * <p>
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * <p>
 * http://www.apache.org/licenses/LICENSE-2.0
 * <p>
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.genicFSM.locationupdatespendingintent;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.location.Location;
import android.util.Log;

import com.genicFSM.JavaScriptInterface;
import com.genicFSM.api.ApiCall;
import com.genicFSM.api.Constants;
import com.genicFSM.api.GeocodeLocation;
import com.genicFSM.api.GeocodeResult;
import com.genicFSM.api.LocationUpdateRequest;
import com.genicFSM.api.ServiceGenerator;
import com.google.android.gms.location.LocationResult;

import java.util.List;

import okhttp3.ResponseBody;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class LocationUpdatesBroadcastReceiver extends BroadcastReceiver {
    public static final String ACTION_PROCESS_UPDATES =
            "com.genicFSM.locationupdatespendingintent.action" +
                    ".PROCESS_UPDATES";
    private static final String TAG = "LUBroadcastReceiver";

    @Override
    public void onReceive(Context context, Intent intent) {
        if (intent != null) {
            final String action = intent.getAction();
            if (ACTION_PROCESS_UPDATES.equals(action)) {
                LocationResult result = LocationResult.extractResult(intent);
                if (result != null) {
                    List<Location> locations = result.getLocations();
                    getLocationFromlatlng(locations.get(0).getLatitude(),locations.get(0).getLongitude());

                }
            }
        }
    }

    private void updateLocation(String formattedAddress, double lat, double lng){
        LocationUpdateRequest locationUpdateRequest = new LocationUpdateRequest();
        locationUpdateRequest.setEnginnerId(JavaScriptInterface.engineerId);
        locationUpdateRequest.setLatitude(String.valueOf(lat));
        locationUpdateRequest.setLongitude(String.valueOf(lng));
        locationUpdateRequest.setLocationAddress(formattedAddress);
        ApiCall apiCall = ServiceGenerator.createService(ApiCall.class);
        Call<ResponseBody> call = apiCall.updateLocation(JavaScriptInterface.token, locationUpdateRequest);
        call.enqueue(new Callback<ResponseBody>() {
            @Override
            public void onResponse(Call<ResponseBody> call, Response<ResponseBody> response) {
                Log.i(TAG, "onResponse: Success");
            }

            @Override
            public void onFailure(Call<ResponseBody> call, Throwable t) {
                Log.e(TAG, "onFailure: " + t.getMessage(), t);
            }
        });
    }

    private synchronized void getLocationFromlatlng(double lat,double lng) {
        try {
            ApiCall apiRequest = ServiceGenerator.createGoogleService(ApiCall.class);
            apiRequest.getAddressfromLatLng(lat + "," + lng, Constants.GOOGLE_MAP_API_KEY).enqueue(new Callback<GeocodeLocation>() {
                @Override
                public void onResponse(Call<GeocodeLocation> call, Response<GeocodeLocation> response) {
                    try {
                        // Toast.makeText(mContext, "GetAddress method called.", Toast.LENGTH_SHORT).show();
                        GeocodeLocation geocodeLocation = response.body();
                        List<GeocodeResult> geocodeResults;
                        if (geocodeLocation != null) {
                            geocodeResults = geocodeLocation.getResults();
                            updateLocation(geocodeResults.get(0).getFormattedAddress(),lat,lng);
                        }
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                }

                @Override
                public void onFailure(Call<GeocodeLocation> call, Throwable t) {

                }
            });
        } catch (Exception e) {

            e.printStackTrace();
        }
    }


}
