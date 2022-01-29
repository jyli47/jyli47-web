function setup() {
  createCanvas(1000, 1000);
}
var movy=150
function draw() {
  background(220);
  triangle(500,10+movy,500,100+movy,300,100+movy)
  triangle(100,50+movy,300,50+movy,300,100+movy)
  rect(300,50+movy,200,50)
  fill(204)
}
