package com.genicFSM;

import android.webkit.JavascriptInterface;

/**
 * Created by Rohit on 21-09-2020.
 */
public class JavaScriptInterface {

    public static String BASE_URL = "";
    public static String engineerId = "";
    public static String token = "";
    MainActivity activity;


    public JavaScriptInterface(MainActivity activity) {
        this.activity = activity;
    }

    @android.webkit.JavascriptInterface
    public void startLocationUpdates(String token, String engineerId, String baseURL) {
        BASE_URL = baseURL + "/";

        JavaScriptInterface.engineerId = engineerId;
        JavaScriptInterface.token = token;
        activity.requestLocationUpdates();
    }

    @JavascriptInterface
    public void stopLocationUpdates() {
        activity.stopLocationUpdates();
    }

    @JavascriptInterface
    public String recordAudio() {
        return activity.recordAudio();

    }

    @JavascriptInterface
    public String stopRecording() {
        return activity.stopRecording();
    }

    @JavascriptInterface
    public void playAudio(String path){
        activity.playAudio(path);
    }

    @JavascriptInterface
    public void pauseAudio(String path){
        activity.pauseAudio(path);
    }

}
