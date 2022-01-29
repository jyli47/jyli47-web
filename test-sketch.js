function setup() {
  createCanvas(400, 400);
}
var movy=200
function draw() {
  background(220);
  triangle(500,10+movy,500,100+movy,300,100+movy)
  triangle(100,50+movy,300,50+movy,300,100+movy)
  rect(300,50+movy,200,50)
  fill(204)
}
