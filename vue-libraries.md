- [AOS](<#aos-(animate-on-scroll-webpage)>)

# vue-carousel

```js
npm i vue-carousel
```

> Carousel.vue

```html
<template>
  <div>
    <Carousel
      :paginationEnabled="false"
      :autoplayTimeout="3000"
      :autoplay="true"
      :per-page="3"
      :loop="true"
      :speed="1500"
      :centerMode="true"
    >
      <Slide v-for="slide in slides" :key="slide.id">
        <div class="slider__bck">
          <img :src="slide.img" alt="slide img" />
        </div>
      </Slide>
    </Carousel>
  </div>
</template>
```

```js
<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "carousel",
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      slides: [
        {
          id: 1,
          img: "https://i.imgur.com/d9mLSSc.jpg"
        },
        {
          id: 2,
          img: "https://i.imgur.com/27qKW2z.jpg"
        },
        {
          id: 3,
          img: "https://i.imgur.com/G4Eo02o.jpg"
        },
        {
          id: 4,
          img: "https://i.imgur.com/7KDtuAI.jpg"
        },
        {
          id: 5,
          img: "https://i.imgur.com/PVKJdQJ.jpg"
        },
        {
          id: 6,
          img: "https://i.imgur.com/shNS0lI.jpg"
        }
      ]
    };
  }
};
</script>
```

```css
<style lang="scss" scoped>
.slider__bck {
  background-color: black;
  width: 100%;
  height: 65vh;
  background-size: cover !important;
  background-repeat: no-repeat !important;

  display: flex;
  align-items: center;

  & > img {
    width: 100%; /* or any custom size */
    max-height: 65vh;

    object-fit: contain;
    vertical-align: middle;
  }
}

@media only screen and (max-width: 768px) {
  .slider__bck {
    height: 40vh;

    & > img {
      max-height: 40vh;
    }
  }
}

@media only screen and (max-width: 320px) {
  .slider__bck {
    height: 25vh;

    & > img {
      max-height: 25vh;
    }
  }
}
</style>
```

# slugify

```js
npm i slugify
```

At component

```js
import slugify from 'slugify'
```

### Useage

```js
this.slug = slugify(this.username, {
  replacement: '-',
  remove: /[$_*+~.()'"!\-:@]/g,
  lower: true
})
```

---

# AOS (Animate On Scroll Webpage)

- [Github Page](https://github.com/michalsnik/aos)
- [Codepen example ](https://codepen.io/elenakout/pen/zYOzLaz)

Installation

```js
npm i aos
```

We import an initialize inside `main.js`

```js
import AOS from 'aos'
import 'aos/dist/aos.css'

new Vue({
  crated() {
    AOS.init()
  }
})
```

To use the library inside a component:

```html
<div data-aos="fade-up" data-aos-duration="4000"></div>
```

And we can use the other parametes like `duration` if we want in `init` or inline on an element.

---
