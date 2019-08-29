| Table of Contents                                                                           |
| ------------------------------------------------------------------------------------------- |
| [## Gradient Text Effect](##gradient-text-effect)                                           |
| [## Moving Text on Hover](##moving-text-on-hover)                                           |
| [## Skew a section](##skew-a-section)                                                       |
| [## Implement a full rotate on a card element](##implement-a-full-rotate-on-a-card-element) |
| [## Background Blend Property](##background-blend-property)                                 |
| [## Make Text go round](##make-text-go-round)                                               |

---

## Gradient Text Effect

Set a `backgrount-image` to the `<h#>` with a `linear-gradient`

```css
background-image: linear-gradient(
  to right,
  $color-primary-light,
  $color-primary-dark
);
```

We want the `background-color` to be only behind the text and stop when the text stop.

Because `<h#>` is a `block` element we need to change it to `inline-block`

```scss
display: inline-block;
```

For the effect to be only on the text we use `-webkit-background-clip`

This will clip the background only to where the text is

```css
-webkit-background-clip: text;
```

And now we have the `background-image` hidden behind the text

so we make the text `transparent` so we can see the background

```css
color: transparent;
```

---

## Moving Text on Hover

We use the `transform` property

We can put multiple things we want to transform

> `skewY(degrees)`
>
> `skewX(degrees)`
>
> `scale(percent)`

```scss
&:hover {
  transform: skewY(2deg) skewX(15deg) scale(1.1);
}
```

We put the `transform` property to the element we want

```css
.heading {
  transition: all 0.2s;
}
```

---

## Skew a section

This will `skew` the hole section

```css
transform: skewY(-7deg);
```

To `unskew` the content of the section we use `direct-child` selector (`>`)

```scss
& > * {
  transform: skewY(7deg);
}
```

---

## Implement a full rotate on a card element

The `card` element

```scss
.card {
  perspective: 150rem;
  -moz-perspective: 150rem;
  position: relative;
  height: 50rem;
}
```

We make two sides of the card

```html
<div class="card__side card__side--front">FRONT</div>
<div class="card__side card__side--back">BACK</div>
```

```scss
&__side {
    background-color: orangered;
    color: #fff;
    font-size: 2rem;

    height: 50rem;
    transition: all 0.8s;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    backface-visibility: hidden;

    &--front {
      background-color: orangered;
    }

    &--back {
      background-color: green;
      transform: rotateY(180deg);
    }
```

Rotate the sides

```scss
&:hover &__side--front {
  transform: rotateY(180deg);
}

&:hover &__side--back {
  transform: rotateY(0);
}
```

---

## Background Blend Property

The `background-blend` property describes how the elements background images should blend

If we have muliple backgrounds and we wnat them to blend.

### Blend a background img with linear gradient

> One background then a comma then another

```scss
background-image: linear-gradient(
    to right bottom,
    $color-secondary-light,
    $color-secondary-dark
  ), url(https://raw.githubusercontent.com/jonasschmedtmann/advanced-css-course/master/Natours/starter/img/nat-5.jpg);
```

The property `background-blend-mode` takes values like photoshop

```css
background-blend-mode: screen;
```

---

## Make Text go round

We use the `shape-outside` property

We define a shape like in `clip-path`

```scss
&__shape {
  width: 15rem;
  height: 15rem;
  float: left;
  -webkit-shape-outside: circle(50% at 50% 50%);
  shape-outside: circle(50% at 50% 50%);
  -webkit-clip-path: circle(50% at 50% 50%);
  clip-path: circle(50% at 50% 50%);

  transform: translateX(-3rem);
}
```
