# Dependencies

```js
npm i firebase
npm i moment
npm i slugify
npm add vue-cli-plugin-style
npm i vuelidate
npm add vuetify
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
npm run build
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
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: ''
}
const firebaseApp = firebase.initializeApp(config)

export default firebaseApp.firestore()
```
