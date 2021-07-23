import Point from './point';
import Vertex from './vertex';
import Shape from './shape';
import Mouse from './mouse';

const defaultArtboard = {
  points: {},
  lines: [],
  polygons: [],
};

class Constellation {
  constructor(tagId, artboard = defaultArtboard) {
    this.canvas = {};
    this.mouse = new Mouse;
    this.modified = false;

    this._initCanvas(tagId);
    this._initShapes(artboard);
    this._installListeners();
    window.requestAnimationFrame(this._drawArt.bind(this));
  }

  changeMouseMode(mode) {
    this.mouse.mode = mode;
  }

  toggleLines() {
    this.lines = [];
    this.noLines = !this.noLines;
  }

  destroyShapes() {
    this.polygons = [];
  }

  resetArtboard(artboard) {
    this._initShapes(artboard);
    this.modified = false;
    this.noLines = false;
  }

  _removePoint(point) {
    // remove point from points array
    this.points = this.points.filter((pt) => pt !== point);

    // remove associated vtx
    this.vertices = this.vertices.filter((vtx) => vtx.point !== point);

    // remove point from lines
    this.lines.forEach((ln) => ln.removePoint(point));
    this.lines = this.lines.filter((ln) => ln.points.length > 1);
    
    // remove point from polygons
    this.polygons.forEach((plygn) => plygn.removePoint(point));
    this.polygons = this.polygons.filter((plygn) => plygn.points.length > 2);
  }

  _addNewPoint(x, y) {
    this.modified = true;
    const nextId = this.points.length >= 1 
      ? this.points[this.points.length - 1].id + 1
      : 0;
    const newPt = new Point( x, y, nextId,this.canvas, this.mouse);

    if (this.noLines) {
      this.points.push(newPt);
      this.vertices.push(new Vertex(newPt));
      return;
    }

    /**
     * Connect new point to two closest points (if any). Multipath lines are
     * avoided for performance concerns
     * */ 
    const shapePoints = newPt.twoClosestPoints(this.points);
    this.points.push(newPt);
    this.vertices.push(new Vertex(newPt));
    shapePoints.forEach((pt) => {
      this.lines.push(new Shape([pt, newPt], this.points));
    });
  }

  _teleportPoints() {
    this.mouse.setToIgnore();
    this.points.forEach((pt) => pt.jumpToMouse());
  }

  _initCanvas(tagId) {
    this.canvas.el = document.getElementById(tagId);
    this.canvas.el.width = window.innerWidth;
    this.canvas.el.height = window.innerHeight;
    this.canvas.ctx = this.canvas.el.getContext('2d');
  }

  _initShapes({ points, lines, polygons, options }) {
    // Set new class options
    if (options) this._setShapeOptions(options);

    this.vertices = [];
    this.points = [];
    for (const id in points) {
      const [x, y, hidden] = points[id];
      const ptObj = new Point(x, y, Number(id), this.canvas, this.mouse);
      if (this.stretch) {
        ptObj.stretchToCanvas(100, 100);
      } else {
        ptObj.scaleToArtboard();
      }

      this.points.push(ptObj);

      // vertex will handle visual aspect of a point
      if (!hidden) this.vertices.push(new Vertex(ptObj));
    }

    // Performance increases when lines are limited to two points
    this.lines = [];
    lines.forEach((line) => {
      for (let i = 0; i < line.length - 1; i++) {
        this.lines.push(new Shape([line[i], line[i + 1]], this.points));
      }
    });

    this.polygons = polygons.map((pointIds) => (
      new Shape(pointIds, this.points, true)
    ));
  }

  _setShapeOptions({ scaleDown, vertices, shapes, stretch, lineCap }) {
    // if (lineCap) this.canvas.ctx.lineCap = lineCap;
    this.stretch = stretch;
    Vertex.options = Object.assign({}, Vertex.options, vertices);
    Shape.options = Object.assign({}, Shape.options, shapes);
    if (scaleDown && window.innerWidth < scaleDown.maxWidth) {
      const factor = scaleDown.factor;
      if (vertices) {
        Vertex.options.lineWidth = vertices.lineWidth / factor;
        Vertex.options.radius = vertices.radius / factor;
      }

      if (shapes) Shape.options.lineWidth = shapes.lineWidth / factor;
    }
  }

  _drawArt(timestamp) {
    const { ctx } = this.canvas;

    ctx.clearRect(0, 0, this.canvas.el.width, this.canvas.el.height);

    // Order of shapes drawn is important for visual appeal

    // Draw all shapes
    ctx.lineWidth = Shape.options.lineWidth;
    ctx.strokeStyle = Shape.options.strokeColor;
    ctx.fillStyle = Shape.options.fillColor;
    if (Shape.options.lineCap) ctx.lineCap = Shape.options.lineCap;
    this.polygons.forEach((shape) => shape.draw(ctx));
    this.lines.forEach((shape) => shape.draw(ctx));

    // Draw all vertices
    ctx.lineWidth = Vertex.options.lineWidth;
    ctx.strokeStyle = Vertex.options.strokeColor;
    this.vertices.forEach((vtx) => vtx.draw(ctx));

    // Calc elapsed time for smooth animation
    if (!this.animStart) this.animStart = timestamp;
    const elapsed = Math.floor(timestamp - this.animStart);
    this.animStart = timestamp;

    // Points' movement will depend on the mouse position and mode
    if (this.mouse.mode === 'coalesce' && this.mouse.clicked === true) {
      this.points.forEach(pt => pt.moveToMouse(elapsed));
    } else {
      this.points.forEach(pt => {
        if (
          this.mouse.clicked
          && this.mouse.mode === 'destroy'
          && this.mouse.near(pt)
        ) {
          this._removePoint(pt);
        } else {
          pt.update(elapsed);
        }
      });
    }

    window.requestAnimationFrame(this._drawArt.bind(this));
  }

  _resizeCanvas(newW, newH) {
    const oldW = this.canvas.el.width;
    const oldH = this.canvas.el.height;
    this.canvas.el.height = newH;
    this.canvas.el.width = newW;
    
    // when an artboard is modified, the scaling will change
    if (this.modified || this.stretch) {
      this.points.forEach((pt) => pt.stretchToCanvas(oldW, oldH));
    } else {
      this.points.forEach((pt) => pt.scaleToArtboard());
    }
  }

  _installListeners() {
    window.addEventListener('resize', function () {
      this._resizeCanvas(window.innerWidth, window.innerHeight);
    }.bind(this));

    document.addEventListener('pointerdown', function (e) {
      // prevent chosen elements from reacting to click event
      if (
        e.target.localName === 'button'
        || e.target.localName === 'input'
        || e.target.localName === 'label'
        || e.target.localName === 'a'
        || e.target.dataset.ignoreClick
      ) {
        return;
      }

      this.mouse.click(e.clientX, e.clientY);
      if (this.mouse.mode === 'radiate') {
        this._teleportPoints();
      } else if (this.mouse.mode === 'create') {
        this._addNewPoint(e.clientX, e.clientY);
        this.mouse.setToIgnore(500);
      }
    }.bind(this));

    document.addEventListener('pointerup', function () {
      this.mouse.resetPos();
      if (this.mouse.mode === 'coalesce') {
        this.mouse.setToIgnore();
      }
    }.bind(this));

    document.addEventListener('pointermove', function (e) {
      this.mouse.updatePos(e.clientX, e.clientY);
    }.bind(this));

    document.addEventListener('pointercancel', function () {
      this.mouse.resetPos();
    }.bind(this));
  }
}

export default Constellation;