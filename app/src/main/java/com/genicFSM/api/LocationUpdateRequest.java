package com.genicFSM.api;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

/**
 * Created by Rohit on 21-09-2020.
 */
public class LocationUpdateRequest {

    @SerializedName("EngineerId")
    @Expose
    String enginnerId;
    @SerializedName("Latitude")
    @Expose
    String latitude;
    @SerializedName("Longitude")
    @Expose
    String longitude;
    @SerializedName("LocationAddress")
    @Expose
    String locationAddress;

    public String getEnginnerId() {
        return enginnerId;

    }

    public void setEnginnerId(String enginnerId) {
        this.enginnerId = enginnerId;
    }

    public String getLatitude() {
        return latitude;
    }

    public void setLatitude(String latitude) {
        this.latitude = latitude;
    }

    public String getLongitude() {
        return longitude;
    }

    public void setLongitude(String longitude) {
        this.longitude = longitude;
    }

    public String getLocationAddress() {
        return locationAddress;
    }

    public void setLocationAddress(String locationAddress) {
        this.locationAddress = locationAddress;
    }
}
