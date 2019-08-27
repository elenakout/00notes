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
