function setup() {
  createCanvas(1000, 600);
}
var movy = 0;
var y = 350;
var movx = 0;
var movy=movy+y;
function draw() {
  background(220);
 movx = movx + 1;
  if (movx>1000) {movx=0; movy=y;}
  triangle(
    500 + movx,
    10 + movy,
    500 + movx,
    100 + movy,
    300 + movx,
    100 + movy
  );
  triangle(
    100 + movx,
    50 + movy,
    300 + movx,
    50 + movy,
    300 + movx,
    100 + movy
  );
  rect(300 + movx, 50 + movy, 200, 50);
  fill(204)
}
