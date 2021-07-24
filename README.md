# Constellation

Constellation is a JavaScript library for creating dynamic line art.

Visit live examples at: https://mscottwold.github.io/constellation/

# About

The line art consists of vertices, lines, and shapes that wander around, but 
never too far from their original coordinates. Depending on the settings, 
pointer events will cause the shapes to perform different actions.

An example artboard, with controls, can be viewed here: 
https://mscottwold.github.io/constellation/example.html

# Quick Setup

For a blank canvas, without any color options:

```html
<!-- index.html -->
<script src="./js/constellation-min.js"></script>
<canvas id="my-canvas"></canvas>
```

```javascript
// index.js
initConstellation('my-canvas');
```

Or, provide an artboard:

```javascript
// index.js
const artboard = {
  points: {
    0: [28, 24],
    1: [34, 34],
    2: [54, 20],
    3: [66, 44],
  },
  lines: [
    // use arrays of corresponding point keys
    [ 0, 1, 2, 3],
  ],
  polygons: [
    // polygons will automatically close from the last point to the first
    [0, 1, 2]
  ],
  options: {
    vertices: {
      strokeColor: '#1F2833',
      fillColor: '#66FCF1',
      altFillColor: '#B41A4E',
      lineWidth: 2,
      radius: 4
    },
    shapes: {
      strokeColor: '#1F2833',
      fillColor: '#2C5F5D',
      lineWidth: 2,
    },
  }
};

initConstellation('my-canvas', arboard);
```

# Controls


* ## Constellation.prototype.changeMouseMode(string)

  The constellation will react differently to mouse clicks depending on the mouse
  mode.

  Parameter options:
  * 'create' -  Click will create new vertex
  * 'destroy' - Click (and optional hold) destroys
  * 'coalesce' - Click (and optional hold) draws all vertices toward mouse
  * 'radiate' - Click will cause all vertices to radiate from click location



* ## Constellation.prototype.toggleLines()
  
  Initally, lines can be present from a given artboard and will be created
  when the mouse mode is set to 'create'. Use toggleLines() to delete any lines
  that are present and prevent more lines from being created. Use toggleLines() 
  again to resume line creation when using 'create' mode.

* ## Constellation.prototype.destroyShapes()
  Destroys any polygons present in the artboard.

* ## Constellation.prototype.resetArtboard(artboard)

  Resets the artboard's vertices, lines, and shapes to the supplied artboard.

# Creating an Artboard

The artboard is created as a square, with visible points having x and y 
coordinates between 0 and 100. An artboard should follow the format below. For 
a live preview visit:  https://mscottwold.github.io/constellation/example.html

```javascript
// index.js
const exampleArtboard = {
  points: {
    /**
     * Define the points in the points object. Keys are used to aid in the 
     * creation of an artboard. Points can also be invisible by setting the 
     * 'hidden' value to true. E.g. points: { 0: [25, 10, true] }
     * */ 

    0: [25, 10],
    1: [20, 80],
    2: [66,  9],
    3: [72, 88],
    4: [37, 60],
    5: [85,  8],
    6: [88, 60],
    7: [46, 26],
    8: [ 8, 41],
    9: [61, 62]
  },

  /**
   * Numbers correspond to a point's key. The line can be of any length. During
   * initialization, the line will be broken into a series of two-point lines
   * for performance optimization.
   * */ 
  lines: [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 7, 0],
    [2, 5, 9, 7, 1],
    [3, 9, 4, 7],
  ],

  /**
   * Like lines, polygons are arrays of point keys. However, they must have >2 
   * point keys. The last point is connected with the first to close the 
   * polygon.
   * */ 
  polygons: [
    [0, 1, 7],
    [4, 7, 9],
    [2, 5, 6]
  ],
  options: {
    vertices: {
      strokeColor: '#87998C',
      fillColor: '#A63A29',
      altFillColor: '#F5EFD5',
      lineWidth: 2,
      radius: 4
    },
    shapes: {
      strokeColor: '#87998C',
      fillColor: '#102A3B',
      lineWidth: 2,
    },

    /**
     * Scale down is an option to reduce the size of vertices and line sizes.
     * When initally rendered on a screen below the maxWidth, the vertices and 
     * lines will be smaller by the given factor. This is optional to include.
    */
    scaleDown: {
      maxWidth: 380,
      factor: 2
    },

    /**
     * To maintain the visual integrity of a supplied artboard, the image will
     * rescale on larger screens. This will be determined by the screen width
     * or height (whichever is smaller). If the stretch option is included, the 
     * image will be stretched to fit the screen, instead.
    */
    stretch: true
  }
};
```

## Options and Points

### Points

Points should be defined in the artboard as an object with each point having a 
unique key. For a visible point, the point value should be an array with the x 
and y coordinate. (e.g. [33, 90]) Values below 0 or above 100 will not be 
in-frame.

For points that should not show up as vertices, the third value should be 
"true". (e.g. [33, 90, true]) Using the lineCap option below will make lines
without vertices look better.

For an example, see: https://mscottwold.github.io/constellation/caffeine.html

### Options

If no options are provided, defaults will be used. The options are:

Vertices
* strokeColor: (string) - color of the line around the vertex
* fillColor: (string) - color inside the vertex
* altFillColor: (string) - color inside the vertex during some action/interaction
* lineWidth: (integer) - width of the line around the vertex
* radius: (integer) - size of the vertex

Shapes
* strokeColor: (string) - color of the lines
* fillColor: (string) - color of the polygons
* lineWidth: (integer) - width of the lines
* lineCap: (string) - end style of lines (see documentation on 
[canvas context](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap))
This is an optional parameter and best used when lines are hidden

scaleDown (optional to include)
* maxWidth: (integer) - to scale size of vertices and lines when screen size is
less than maxWidth
* factor: (integer) - the scale factor for scaling down the vertices and lines

Stretch: (bool) - set to "true" if the image should be stretched across the 
screen (optional to include)

## Using CreateConstellation to Make Artboard

For live example, visit: https://mscottwold.github.io/constellation/draw.html

### Setup

```html
<!-- index.html -->
<script src="./js/constellation-min.js"></script>
<canvas id="my-canvas"></canvas>
```
```javascript
// index.js
initCreateConstellation('my-canvas');
```

Clicking on the canvas will add a point and label it with an id. Press 'Enter' 
on your keyboard to display all the points and their scaled coordinates. Copy 
and paste these points into your artboard as you create the image; 
CreateConstellation can also be given an arboard. 

```javascript
// index.js
const myInProgressArtboard = { /* artboard & options */ };

initCreateConstellation('my-canvas', myInProgressArtboard);
```

# Technologies Used
* JavaScript (ES6+)
* Canvas