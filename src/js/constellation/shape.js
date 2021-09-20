import Point from './point';

class Shape {
  constructor(pointIds, points, polygon = false) {
    if (pointIds[0] instanceof Point) {
      this.points = pointIds;
    } else {
      this.points = pointIds.map(id => points[id]);
    }
    this.polygon = polygon;
  }

  // Set default options
  static options = {
    strokeColor: 'black',
    fillColor: 'white',
    lineWidth: 2,
  };

  draw(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.points[0].x, this.points[0].y);

    for (let i = 1; i < this.points.length; i++) {
      ctx.lineTo(this.points[i].x, this.points[i].y);
    }

    if (this.polygon) {
      ctx.closePath();
      ctx.fill();
    } else {
      ctx.stroke();
    }
  }

  removePoint(point) {
    this.points = this.points.filter((pt) => pt !== point);
  }
}

export default Shape;