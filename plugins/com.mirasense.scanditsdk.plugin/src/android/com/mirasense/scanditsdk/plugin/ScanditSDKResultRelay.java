
//
//  Copyright 2010 Mirasense AG
//
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//  http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
//
//

package com.mirasense.scanditsdk.plugin;

import android.os.Bundle;

public class ScanditSDKResultRelay {
    
    private static ScanditSDKResultRelayCallback mCallback;
    
    public static void setCallback(ScanditSDKResultRelayCallback callback) {
        mCallback = callback;
    }
    
    public static void onResult(Bundle bundle) {
        if (mCallback != null) {
            mCallback.onResultByRelay(bundle);
        }
    }
    
    public interface ScanditSDKResultRelayCallback {
        void onResultByRelay(Bundle bundle);
    }
}
