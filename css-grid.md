# GRID Terminology

We have a `grid container`

```css
display: grid;
```

> display: grid-inline

All the elements inside are `grid items`

We have `row axis` in the `X` direction and the `column axis` in the `Y` direction

## Using `repeat` and `fractions`

```css
grid-template-rows: repeat(2, 150px);
grid-template-columns: repeat(2, 150px) 1fr;
```

## Changing the order

```css
grid-area: 1 / 2 / 2 / 3;
```

`row-start` / `column-start` / `row-end` / `column-end`

## Spaning cells

We have 3 ways

```css
grid-column: 2 / 4; // start / end
grid-column: 1 / span 2; // How many cells after start
grid-column: 1 / -1; // We define the start and -1 is the end
```

# All direct children selector

```css
& > * {
}
```

## Grid areas

```css
grid-template-areas:
  'head head head head'
  'box box box side'
  'main main main side'
  'foot foot foot foot';

.header {
  grid-area: head;
}

.sidebar {
  grid-area: side;
}

.main {
  grid-area: main;
}

.footer {
  grid-area: foot;
}
```
