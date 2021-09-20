class Vertex {
  constructor(point) {
    this.point = point;
  }

  // Set default options
  static options = {
    fillColor: 'white',
    altFillColor: 'black',
    strokeColor: 'black',
    radius: 4,
  };

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.point.x, this.point.y, Vertex.options.radius, 0, Math.PI * 2, false);
    ctx.closePath();
    
    if (this.point.wander) {
      ctx.fillStyle = Vertex.options.fillColor;
    } else {
      ctx.fillStyle = Vertex.options.altFillColor;
    }

    ctx.fill();
    ctx.stroke();
  }

  label(ctx) {
    ctx.beginPath();
    ctx.font = '12px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText(this.point.id, this.point.x - 3, this.point.y + 13);
  }
}

export default Vertex;