# Use Sass in vue project

We choose Pre-processor: SCSS/SASS in `create-app`

Create a folder within the src folder named styles. This is where we will store all of our SCSS for the app. In this folder, create a file that will be used for your global styles e.g. global.scss

In the Vue Project Manager, go to the Plugins tab and click on the Add plugin button. We want to install a plugin called

> `vue-cli-plugin-style-resources-loader`

Once this has installed, it will add a file to the root of your project called vue.config.js

Go to vue.config.js and add the following code, replacing the stylesheet name/path with whatever you have named your scss file for your global styles.

```js
const path = require('path')

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [path.resolve(__dirname, './src/styles/global.scss')]
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
