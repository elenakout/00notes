# Dependencies

```js
npm i firebase
npm i moment
npm i slugify
```

# Firebase Deploy

1.

```js
npm i -g firebase-tools
```

2.

```js
firebase login
```

3.

```js
firebase init
```

The answers are:

- y
- firestore - hosting
- project-selection
- y (Single-page-app)

4.

```js
npm run built
```

5.

```js
firebase deploy
```

# Init

```scss
src
|
|   |- Firebase
|   |   - init.js
```

```js
import firebase from 'firebase/app'
import 'firebase/firestore'
// Initialize Firebase
const config = {
  apiKey: 'AIzaSyCIdNVZwqNJHsM84MKFK6-0e0Qe1Lz_QNo',
  authDomain: 'test4-3e413.firebaseapp.com',
  databaseURL: 'https://test4-3e413.firebaseio.com',
  projectId: 'test4-3e413',
  storageBucket: 'test4-3e413.appspot.com',
  messagingSenderId: '522096248555'
}
const firebaseApp = firebase.initializeApp(config)

export default firebaseApp.firestore()
```
