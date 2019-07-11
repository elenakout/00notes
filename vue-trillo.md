# Global Settings

```css
* {
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%; // 1rem = 10px (10px/16px=62.5%)
}

body {
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  line-height: 1.6;
}
```

# CSS custom properties

CSS variables they have to be defined inside a decleration block

We put them in the `::root` pseudo class it's the same like `html` selectror, but with higher speceficity.

And they are accesible in the entire document because its like the global parent element

```css
:root {
  --color-primary: #eb2f64;
  --shadow-dark: 0 2rem 6rem rgba(0, 0, 0, 0.3);
}
```

# How to use SVGs

Download the svgs from `https://icomoon.io`

We get the `symbol-defs.svg` and the `svg` folder to our assets

the HTML markup is:

```html
<svg class="search__icon">
  <use xlink:href="../assets/img/sprite.svg#icon-magnifying-glass"></use>
</svg>
```

## Include SVG file in css

The easiest way is to use `background-image` and we put it in a `::before` element

```css
&__item::before {
  content: '';
  background-image: url(../image.svg);
}
```

# Using masks

```css
backgound-color: pink;
-webkit-mask-image: url(../image.svg);
-webkit-mask-size: cover;
```
