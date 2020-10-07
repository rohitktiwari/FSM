package com.genicFSM.api;

import android.webkit.JavascriptInterface;

import com.genicFSM.JavaScriptInterface;

import java.util.concurrent.TimeUnit;

import okhttp3.OkHttpClient;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class ServiceGenerator {

    private static OkHttpClient.Builder httpClient = new OkHttpClient.Builder()
            .connectTimeout(5, TimeUnit.MINUTES)
            .readTimeout(5, TimeUnit.MINUTES)
            .writeTimeout(5, TimeUnit.MINUTES);

    private static Retrofit.Builder builder =
            new Retrofit.Builder()
                    .baseUrl(JavaScriptInterface.BASE_URL)
                    .addConverterFactory(GsonConverterFactory.create());



    public static <S> S createService(Class<S> serviceClass) {
        builder.client(httpClient.build());
        Retrofit retrofit = builder.build();
        return retrofit.create(serviceClass);
    }

    private static Retrofit.Builder buildergson =
            new Retrofit.Builder()
                    .baseUrl("https://maps.googleapis.com/maps/api/geocode/")
                    .addConverterFactory(GsonConverterFactory.create());

    public static <S> S createGoogleService(Class<S> serviceClass) {
        Retrofit retrofit_gson = buildergson.build();
        return retrofit_gson.create(serviceClass);
    }
}
