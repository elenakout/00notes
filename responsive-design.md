| Table of Contents                             |
| --------------------------------------------- |
| [# RESPONSIVE DESIGN](#responsive-design)     |
| [# MEDIA QUERY MANAGER](#media-query-manager) |

# RESPONSIVE DESIGN

## Destop First

**Maximum** width at witch media query still applies

```css
max-width: 600px;
```

> Is width <= 600px ?

Media queries don't add any importance or speceficity to selectors, so code order matters - **media queries at the end**

## Mobile First

**Minimum** width at witch media query strarts to apply

```css
min-width: 600px;
```

> is width >= 600px ?

# MEDIA QUERY MANAGER

|          Size | Name                             |
| ------------: | :------------------------------- |
|     0 - 600px | Phone                            |
|   600 - 900px | Tablet portrait                  |
|  900 - 1200px | Tablet landscape                 |
| 1200 - 1800px | Is where our normal styles apply |
|      1800px + | Big desktop                      |

> `$breakpoint` argument choices:
>
> - phone
> - tab-port
> - tab-land
> - big-desktop

```scss
@mixin respond($breakpoint) {
  @if $breakpoint == phone {
    @media (max-width: 600px) {
      @content;
    }
  }
  @if $breakpoint == tab-port {
    @media (max-width: 900px) {
      @content;
    }
  }
  @if $breakpoint == tab-land {
    @media (max-width: 1200px) {
      @content;
    }
  }
  @if $breakpoint == big-desktop {
    @medis (min-width: 1800px) {
      @content;
    }
  }
}
```

We use `em` for media queries

> 1em = 16px

- _600px_ : `37.5em`
- _900px_ : `56.25em`
- _1200px_ : `75em`
- _1800px_ : `112.5em`

---

### Order for the media queries

Base + Typografy > general layout + grid > page layout > components
