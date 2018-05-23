const socket = io.connect(window.location.origin);

socket.on('connect', () => {
  console.log('browser connected to server');
});

function setup() {
  let cnv = createCanvas(500, 500);
  cnv.position((windowWidth - width)/2, 130);
}

function draw() {
  background(220);
}
