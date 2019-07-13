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

# Images binding

```js
image: require("@/assets/img/gal-8.jpeg"),
```

---

# Deploy to github pages

1. Create a new local branch in your project and name it ‘gh-pages’.

2. Go to github and copy the name of the repository. Let’s assume the repository name is ‘my-first-project’

3. Create a new file in root directory of your project and name it `vue.config.js`.

In ‘vue.config.js’ file paste the following code:
// vue.config.js
module.exports = {
publicPath: ‘<my-first-project>’
}
NOTE: in publicPathinside the <> chars you have to put the name of your project. Specifically read here why.
Find and open the file .gitignore located in root directory of your project.Next, find and comment the line which has the text ‘/dist’.
NOTE: this folder it’s ignored by default that’s why we have to comment it.
Run npm run build, and wait for it to finish.
IMPORTANT!! Before you run the next command make sure you don’t commit the .gitignore and vue.config.js.
Run the command:
git add dist && git commit -m "Initial dist subtree commit"
Run the command: git subtree push --prefix dist origin gh-pages
Navigate to github on your browser and open your repository.
