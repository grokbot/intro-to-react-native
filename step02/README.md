Separating Platforms
====================
Use imports, and where necessary, use the namespacing feature of name.platform.ext (i.e. index.android.js)
- Allows the use of platform specific components
- Tweak the look or style of components per platform
- Handle hardware features/differences for specific platforms

The Dream: 100% code re-use
===========================
Difficult but depending on features, possible.
- 3rd-Party modules often have multi-platform support but sometimes have different feature sets.
- Behavior and appearance of many Native Modules has a distinct OS feel but has great performance (ActivityIndicator, Modal, Alert)
- Android lags behind iOS as it was introduced later.
