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
