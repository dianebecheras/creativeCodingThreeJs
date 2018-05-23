


var Point = function(x, y) {
  this.x = x;
  this.y = y;

}

function lerp(t, a, b) {
  return (a * (1 - t) + t * b);

}


function drawForme(ctx, w, h) {

  var a = new Point(0, 0);
  var b = new Point(w, 0);
  var c = new Point(w, h);
  var d = new Point(0, h);
  var u = new Point(w / 2, h / 2);

  var points = [a, b, c, d];
  var forme = [];
  var centerForme = false;

  for (i = 0; i < 4; i++) {
    var OriA = points[i];
    var OriB = points[(i + 1) % points.length];
    //ctx.moveTo(OriA.x, OriA.y);
    //ctx.lineTo(OriB.x, OriB.y);

    if (Math.random() > 0.75) {
      forme.push(OriA);
    }

    //nouveaux points !!
    var t = Math.random();

    var x = lerp(t, OriA.x, OriB.x);
    var y = lerp(t, OriA.y, OriB.y);

    var p = new Point(x, y);
    forme.push(p);

    // Centre ?

    if (centerForme == false) {

      if (Math.random() < 0.10) {
        forme.push(u);
        centerForme = true;
      }

    }

  }


  ctx.beginPath();
  forme.forEach(function(p) {
    ctx.lineTo(p.x, p.y);
  })
  ctx.closePath();
  //ctx.stroke();

}
