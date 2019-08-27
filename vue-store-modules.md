# STORE

We create a folder named `modules` and for every diferent database collection we create a different module.

```scss
modules
|
| - auth.js
| - meetups.js
```

We import all the modules in `store.js`

```js
import Vue from 'vue'
import Vuex from 'vuex'
import meetups from './modules/meetups'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    meetups
  }
})
```

### `auth.js`

```js
import firebase from 'firebase'
import moment from 'moment'
import db from '@/firebase/init'

const data = {}

const getters = {}

const mutations = {}

const actions = {}

export default {
    state: data,
    getters,
    mutations,
    actions,
};

}
```
