| Table of Contents                                 |
| ------------------------------------------------- |
| [# Global Settings](#global-settings)             |
| [# CSS custom properties](#css-custom-properties) |
| [# SCSS Folder Stracture](#scss-folder-stracture) |

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
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 1.6;
}
```

### Roboto Fonts

```html
<link
  href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
  rel="stylesheet"
/>
```

```css
font-family: 'Roboto', sans-serif;
```

### Unslpash images

```html
<img src="//unsplash.it/300/500
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

## Margin-bottom/

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

---

## MetaTags

```html
<meta name="description" content="Free Web tutorials" />
<meta name="keywords" content="HTML,CSS,XML,JavaScript" />
<meta name="author" content="John Doe" />
```

---

# SCSS Folder Stracture

- styles
  - abstract
    - \_mixins.scss
    - \_variables.scss
  - base
    - \_animations.scss
    - \_typografy.scss
    - \_utilities.scss
    - \_base.scss
  - components
    - \_card.scss
    - \_form.scss
    - \_feature-box.scss
  - layout
    - \_footer.scss
    - \_grid.scss
    - \_header.scss
    - \_navigation_scss
    - \_popup.scss
  - pages
    - \_home.scss

main.scss

---

## The 7-1 Pattern

```scss
sass/
|
|– abstracts/ (or utilities/)
|   |– _variables.scss    // Sass Variables
|   |– _functions.scss    // Sass Functions
|   |– _mixins.scss       // Sass Mixins
|
|– base/
|   |– _reset.scss        // Reset/normalize
|   |– _typography.scss   // Typography rules
|
|– components/ (or modules/)
|   |– _buttons.scss      // Buttons
|   |– _carousel.scss     // Carousel
|   |– _slider.scss       // Slider
|
|– layout/
|   |– _navigation.scss   // Navigation
|   |– _grid.scss         // Grid system
|   |– _header.scss       // Header
|   |– _footer.scss       // Footer
|   |– _sidebar.scss      // Sidebar
|   |– _forms.scss        // Forms
|
|– pages/
|   |– _home.scss         // Home specific styles
|   |– _about.scss        // About specific styles
|   |– _contact.scss      // Contact specific styles
|
|– themes/
|   |– _theme.scss        // Default theme
|   |– _admin.scss        // Admin theme
|
|– vendors/
|   |– _bootstrap.scss    // Bootstrap
|   |– _jquery-ui.scss    // jQuery UI
|
`– main.scss              // Main Sass file
```

## Simple Stracture

For a small project - a single page apllication

```scss
_base.scss
_layout.scss
_components.scss
main.scss
```
