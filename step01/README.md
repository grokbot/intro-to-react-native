Getting Started with React-Native
=================================

For Mac OSX:
------------
[React Native for Mac OSX][1]
- iOS is supported, you need xCode
- recommended to use [Homebrew][2] for package management, installing nodejs/watchman first
- for Android you need Java SDKs and Android Studio

Instructions assume you know how to use Terminal commands -- no GUI installer

For Windows:
------------
[React Native for Windows][3]
- iOS is not supported (because you need xCode)
- [Chocolatey][4] for package management, install node/npm first
- Android Studio and Java SDKs are required

###Bonus! Installing Chocolatey: On Windows 10/Powershell v3
To install Chocolatey make sure PowerShell is being ran as Administrator, then before running commands on website to install:
```
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
iwr https://chocolatey.org/install.ps1 -UseBasicParsing | iex
```

After Installation of Dependencies:
-----------------------------------
```
npm install -g react-native-cli
react-native init App
```
Note: the name of the app is preferred to be CamelCase and non-hyphenated.

Running on Device versus Running on Emulators:
----------------------------------------------
- Running on Device is excellent as it gives you a better idea of how everything is rendered to screen and performance of swipes/gestures.
- Running on Emulators is infinitely more convenient.
- Recommended to do both.
- Unless you are running a 'release' build that has dev functionality disabled, performance will be slower to allow for dev friendly tech like Hot-Reload / Live-Reload by injecting JS from the (local) react-native bundle server
- Reference articles on React-Native site for Running on Device:
  - [Running on iOS][5]
	- [Running on Android][6]

[1]: https://facebook.github.io/react-native/docs/getting-started.html#dependencies-for-mac-ios
[2]: http://brew.sh/
[3]: https://facebook.github.io/react-native/docs/getting-started.html#dependencies-for-windows-android
[4]: https://chocolatey.org/
[5]: https://facebook.github.io/react-native/docs/running-on-device-ios.html
[6]: https://facebook.github.io/react-native/docs/running-on-device-android.html
