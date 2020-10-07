package com.genicFSM.api;

import okhttp3.ResponseBody;
import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.POST;
import retrofit2.http.Path;
import retrofit2.http.Query;

/**
 * Created by Rohit on 21-09-2020.
 */
public interface ApiCall {

    @POST("api/app/EngineerProfile/LocationHistory/{token}")
    Call<ResponseBody> updateLocation(@Path("token") String token, @Body LocationUpdateRequest locationRequest);

    @GET("json")
    Call<GeocodeLocation> getAddressfromLatLng(@Query("latlng") String latlng, @Query("key") String key);
}
