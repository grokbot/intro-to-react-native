Basic Navigation
================
- Navigation in React-Native [Navigator][1] is a stack of screens or views
- Navigator default animation is slide from right
- Handling Android back button should be considered, default implementation closes the app

Data Management
===============
- Plan to handle loading if you are dynamically populating the component
- Utilize [React][2] internals for managing component state or better yet use [Redux][3]
- Use [Fetch][4] with Async/Await because you can
- [AsyncStorage][5] for persisting data, or possibly [Realm][6]

[1]: https://facebook.github.io/react-native/docs/navigator.html
[2]: https://facebook.github.io/react/docs/component-specs.html
[3]: http://redux.js.org/
[4]: http://facebook.github.io/react-native/releases/0.32/docs/network.html#using-fetch
[5]: http://facebook.github.io/react-native/releases/0.32/docs/asyncstorage.html
[6]: https://realm.io/docs/react-native/latest/
