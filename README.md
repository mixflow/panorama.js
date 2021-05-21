# panorama.js

[WIP] In develop and not fully functional right now.

A simple panorama viewer in Javascript. You can see panorama image in 360° horizonally and 180° vertically.

The project is built on WebGL direcly, there is no dependence on other 3D engines or large libs.

Only one external lib `m4.js` from [webglfundametals.org](https://webglfundamentals.org) is used, which contains matrix operatation utilities that are necessary in 3D and WebGL enviroment. (e.g. matrix mulitply, a lot use on the geometry)

## Example
[Basic](https://www.mix-flow.com/panorama.js/)

## How to use

1. Link the js file `panorama.js` from `dist` folder in HTML. Usually put the link `<script>` inside `<head>` of the HTML.
```html
<script src="dist/panorama.js"></script>
```
2. Create or specify a DOM element and treat it as the container that contains panorama viewer later.
```html
<div id="viewer"></div>
```

3. Create the panorama viewer in js. 

    * Only the `url` option that specify the panorama image path is required. 

    * The default container would be `<body>` in html if user don't specify the `container`.

    * `container` option can be passed in `DOMElemnt`(example below), or the **CSS selector** string: `container: "#viewer"` is same result as the example below.

```html
<script>
    const viewer = document.getElementById("viewer");

    let panoramajs = panorama({
        container: viewer,
        url: "images/Forest-Day_Left.jpg",

    });
</script>
```

See full code in the [`index.html`](index.html) file.


