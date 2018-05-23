const socket = io.connect(window.location.origin);
let [degX, degY, degZ] = [0, 0, 0];
socket.on('connect', () => {
  socket.on('boxChanges', (alpha, beta, gamma) => {
    [degY, degX, degZ] = [-alpha, -beta, gamma];
  })
});

function setup() {
  let cnv = createCanvas(500, 500, WEBGL);
  cnv.position((windowWidth - width)/2, 130);
}

function draw() {
  background(0);
  normalMaterial();
  rotateY(radians(degY));
  rotateX(radians(degX));
  rotateZ(radians(degZ));
  box(150);
}
