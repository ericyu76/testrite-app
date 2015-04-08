
ionic build android --release 

#uncomment to gen key
#
# keytool -genkey -v -keystore my-release-key.keystore -alias qr-app -keyalg RSA -keysize 2048 -validity 10000
# 

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore -storepass "Aa123456" ./platforms/android/ant-build/CordovaApp-debug.apk testrite 

/Development/adt-bundle-mac-x86_64-20140624/sdk/build-tools/android-4.4W/zipalign -f -v  4 ./platforms/android/ant-build/CordovaApp-debug.apk ./platforms/android/ant-build/testrite-release.apk
