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
