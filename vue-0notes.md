# Use Sass in vue project

We choose Pre-processor: SCSS/SASS in `create-app`

Create a folder within the src folder named styles. This is where we will store all of our SCSS for the app. In this folder, create a file that will be used for your global styles e.g. global.scss

In the Vue Project Manager, go to the Plugins tab and click on the Add plugin button. We want to install a plugin called

> vue-cli-plugin-style-resources-loader

Once this has installed, it will add a file to the root of your project called vue.config.js

Go to vue.config.js and add the following code, replacing the stylesheet name/path with whatever you have named your scss file for your global styles.

```js
const path = require('path')

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, './src/styles/main.scss')]
    }
  }
}
```

# Class Binding

## Array Syntax

We can pass an array to v-bind:class to apply a list of classes:

```html
<div v-bind:class="[activeClass, errorClass]"></div>
```

```js
data: {
activeClass: 'active',
errorClass: 'text-danger'
}
```

Which will render:

```html
<div class="active text-danger"></div>
```

## Object Syntax (true/false)

We can pass an object to `v-bind:class` to dynamically toggle classes:

```html
<div v-bind:class="{ active: isActive }"></div>
```

You can have multiple classes toggled by having more fields in the object. In addition, the `v-bind:class` directive can also co-exist with the plain class attribute. So given the following template:

```html
<div
  class="static"
  v-bind:class="{ active: isActive, 'text-danger': hasError }"
></div>
```

And the following data:

```js
data: {
  isActive: true,
  hasError: false
}
```

It will render:

```html
<div class="static active"></div>
```

## Object Syntax (values in style)

The object syntax for `v-bind:style` is pretty straightforward - it looks almost like CSS, except it’s a JavaScript object. You can use either camelCase or kebab-case (use quotes with kebab-case) for the CSS property names:

```html
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
```

```js
data: {
  activeColor: 'red',
  fontSize: 30
}
```

It is often a good idea to bind to a style object directly so that the template is cleaner:

```html
<div v-bind:style="styleObject"></div>
```

```js
data: {
  styleObject: {
    color: 'red',
    fontSize: '13px'
  }
}
```

---

# Images binding

```js
image: require("@/assets/img/gal-8.jpeg"),
```

---

# Firestore Upload Img

Template

```html
<input type="file" @change="onFileChanged" />
<button @click.prevent="onUpload">Upload!</button>
```

Script

```js
onFileChanged(event) {
    this.selectedFile = event.target.files[0]
},
onUpload() {
  // upload file, get it from this.selectedFile
  firebase
    .storage()
    .ref('photos/' + this.selectedFile.name)
    .put(this.selectedFile)
    .then(response => {
      response.ref.getDownloadURL().then(downloadURL => {
        //  firebase.database().ref(YOUR_DATABASE).child(THE_USER_ID).update({imageUrl:downloadURL})
        this.imgUp = downloadURL
        console.log(downloadURL)
      })
    })
  .catch(err => console.log(err))
}
```

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

---

# USER AUTHENTICATION (firebase)

## Store

> Folder -> `modules`
>
> File -> `auth.js`

```js
import firebase from 'firebase'
import db from '@/firebase/init'

const state = {
  user: null
}

const getters = {
  activeuser(state) {
    return state.user
  }
}

const mutations = {
  setUser(state, payload) {
    state.user = payload
  }
}

const actions = {
  signUserUp({ commit }, payload) {
    let ref = db.collection('users').doc(payload.slug)

    firebase
      .auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(cred => {
        const newUser = {
          id: payload.slug,
          username: payload.username,
          user_id: cred.user.uid,
          date: Date.now()
        }

        ref.set(newUser)
        commit('setUser', newUser)
      })
      .catch(error => {
        console.log(error)
      })
  },
  signUserIn({ commit }, payload) {
    firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(cred => {
        let ref = db.collection('users').where('user_id', '==', cred.user.uid)

        ref.get().then(snapshot => {
          snapshot.forEach(doc => {
            let usr = {
              ...doc.data(),
              id: doc.id
            }
            commit('setUser', usr)
          })
        })
      })
      .catch(err => {
        console.log(err.message)
      })
  },
  signUserOut({ commit }) {
    firebase
      .auth()
      .signOut()
      .then(() => {
        commit('setUser', null)
      })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
```

## SignUp Component

Template

```html
<!-- Form -->
<v-form @submit.prevent="onSignup"></v-form>
```

Script

```js
<script>
import slugify from 'slugify'
import db from '@/firebase/init'
export default {
  name: 'Signup',
  data () {
    return {
      show1: false,
      username: '',
      slug: null,
      email: '',
      password: '',
      feedback: null,
    }
  },
  computed: {
    user () {
      return this.$store.getters.activeuser
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push({ name: 'home'})
      }
    }
  },
  methods: {
    onSignup () {
      this.slug = slugify(this.username, {
        replacement: '-',
        remove: /[$_*+~.()'"!\-:@]/g,
        lower: true
      })

      const userData = {
        slug: this.slug,
        email: this.email,
        username: this.username,
        password: this.password,
        date: Date.now()
      }
      let ref = db.collection('users').doc(this.slug)

      ref.get().then(doc => {
        if(doc.exists){
          this.feedback = 'This username already exists'
        }else {
          this.$store.dispatch('signUserUp', userData)
        }
      })



    }
  }
}
</script>
```

## Active User on Navbar

Template

```html
<v-btn v-if="this.activeuser">{{activeuser.username}}</v-btn>
```

Script

```js
<script>
import {(mapGetters, mapActions)} from "vuex";
computed: {
    ...mapGetters(["activeuser"]),
}
</script>
```

## Sign User out

Template

```html
<v-btn @click="signout" v-if="this.activeuser">SIGNOUT</v-btn>
```

Script

```js
methods: {
    ...mapActions(["signUserOut"]),
    signout() {
      this.signUserOut();
      this.$router.push({ name: "home" });
    }
  }
```

## SignIn Component

Template

```html
<!-- Form -->
<v-form @submit.prevent="onSignin"></v-form>
```

Script

```js
<script>
import {mapGetters, mapActions} from "vuex"

computed: {
    ...mapGetters(['activeuser'])
  },
  watch: {
    activeuser (value) {
      if (value) {
        this.$router.push({ name: 'home'})
      }
    }
  },
  methods: {
    ...mapActions(['signUserIn']),
    onSignin() {
      if (this.email && this.password){
      let user = {
        email: this.email,
        password: this.password
      }

        this.feedback = null
        this.signUserIn(user)
      }else {
        this.feedback = 'You must fill all fields'
      }
    }
  }

</script>
```

## Wait for firebase to init before create the app

> main.js

```js
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import db from '@/firebase/init'

Vue.config.productionTip = false

let app

const initialize = () => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
}

// wait for firebase to init before create the app
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    let ref = db.collection('users').where('user_id', '==', user.uid)

    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        let usr = {
          ...doc.data(),
          id: doc.id,
          email: user.email
        }

        store.commit('setUser', usr)
      })
    })
  } else {
    store.commit('setUser', null)
  }
  initialize()
})
```

---

# Truncate Filter

```html
<p>{{ message|truncate(20) }}</p>
```

```js
filters: {
    truncate: function(value, limit) {
      if (value.length > limit) {
        value = value.substring(0, (limit - 3)) + '...';
      }


      return value

    }
  }
```
