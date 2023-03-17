# BIFROST-VPN
If you are like everyone else, then you probably use public Wi-Fi quite frequently.

## About

This extension allows you to customize your browser's settings to appear as if you are accessing the internet from a different location, locale, or device. This can be useful for testing websites, bypassing regional restrictions, or protecting your privacy online. With just a few clicks, you can change your time zone, locale, geolocation, and user agent to match your desired settings.

bifrost utilizes the chrome.debugger API to spoof this data instead. This allows the data to be spoofed in frames, web workers and during the initial loading of a website. It also makes the spoofing completely undetectable.

You can test and compare bifrost and other extensions on https://eighred.com

bifrost contains collects no data and signup is not required.

## Limitations

### Debugging bar

While the chrome.debugger API is active, a bar under the address bar is displayed. Hiding the bar is only possible when the --silent-debugger-extension-api command-line switch is used.

Instructions on how to run chromium with flags: https://www.chromium.org/developers/how-tos/run-chromium-with-flags

### FireFox

Unfortunately bifrost doesn't work on Firefox since Firefox doesn't support the debugger API for extensions. https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#browser_compatibility

### New tab

The chrome debugger cannot attach itself to chrome://newtab. This can result in data leakage to the first non chrome:// page you navigate to.

### Locale override does not mock language data

Unlike the Chrome devtools location sensor, overriding the locale does not change language data (such as navigator.language or navigator.languages). There is an open ticket about this here: https://bugs.chromium.org/p/chromium/issues/detail?id=1306254

## Screenshots

![Screenshot of location data tab](https://raw.githubusercontent.com/akifgrape/bifrost-vpn/bisrost-ss.png)

![Screenshot of location data tab](https://raw.githubusercontent.com/akifgrape/bifrost-vpn/bisrost-ss2.png)



Load the extension on Chrome:

- Access chrome://extensions/
- Check Developer mode
- Click on Load unpacked extension
- Select the folder.
