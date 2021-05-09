# Bluewalls Developer Documentation

## External Libraries

- [React Router](https://reactrouter.com/web/guides/quick-start) - `npm i react-router-dom`
- [React Bootstrap](https://react-bootstrap.github.io/getting-started/introduction/) - `npm i react-bootstrap bootstrap`
- [React Player](https://www.npmjs.com/package/react-player) = `npm i react-player`
- [Firebase](https://www.npmjs.com/package/firebase) - `npm i firebase`
- [Redux](https://redux.js.org/introduction/getting-started) - `npm i redux`
- [React Redux](https://react-redux.js.org/introduction/getting-started) - `npm i react-redux`
- [Redux Thunk](https://www.npmjs.com/package/redux-thunk) - `npm i redux-thunk`
- [React Redux Firebase](https://www.npmjs.com/package/react-redux-firebase) - `npm i react-redux-firebase`
- [Redux Firestore](https://www.npmjs.com/package/redux-firestore) - `npm i redux-firestore`
- [md5](https://www.npmjs.com/package/md5) - `npm i md5`

### Misc Notes

- Bootstrap: Stylesheet import in App.js `import 'bootstrap/dist/css/bootstrap.min.css';`
- Font Awesome import `<script src="https://kit.fontawesome.com/fc31dedf63.js" crossorigin="anonymous">`
- Firebase Config File:

  ```js
  import firebase from 'firebase/app'
  import 'firebase/auth'
  import 'firebase/firestore'
  import 'firebase/analytics'
  import 'firebase/storage'

  var firebaseConfig = {
    apiKey: 'AIzaSyDa_a6Oj7nSWxSbiKLDsiCumAFxfuU3t-4',
    authDomain: 'bluewalls-ef2f6.firebaseapp.com',
    projectId: 'bluewalls-ef2f6',
    storageBucket: 'bluewalls-ef2f6.appspot.com',
    messagingSenderId: '542223932740',
    appId: '1:542223932740:web:f2e2f2c1671ccf906b4b11',
    measurementId: 'G-2WGMSLJSM0',
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
  firebase.analytics()
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase
  ```
