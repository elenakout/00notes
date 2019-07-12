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

---

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

---

## Utility Classes

Utility classes are very simple classes which only hane one goal

```css
.u-center-text {
  text-align: center;
}

.u-margin-bottom-8 {
  margin-bottom: 8rem;
}
```

## Margin-bottom

```css
.mb-sm {
  margin-bottom: 2rem;
}
.mb-md {
  margin-bottom: 3rem;
}
.mb-lg {
  margin-bottom: 4rem;
}
.mb-hg {
  margin-bottom: 8rem;
}
```

---

## FontAwsome

```html
<link
  rel="stylesheet"
  href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
  integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
  crossorigin="anonymous"
/>
```

```css
<i class="fas fa-globe"></i>
```

---

## Shadows

```css
box-shadow: 0 2rem 5rem rgba(#000, 0.1);
```
