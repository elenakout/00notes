# Installation

Package is installable via npm

```js
npm install vuelidate --save
```

# Basic usage

You can import the library and `use` as a Vue plugin to enable the functionality globally on all components containing validation configuration.

```js
import Vue from 'vue'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
```

# Work with vuelidate

We’ll need to create an object called `validations` that will mirror the data structure of what we’re trying to capture in the form.

```js
data: {
  name: ''
},
validations: {
  name: {
    required
  }
}
```

This would create an object within computed properties that we can find with `$v`.

> `$v` is a computed property.
