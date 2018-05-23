const socket = io.connect(window.location.origin);

socket.on('connect', () => {
  console.log('browser connected to server');
  socket.on('boxChanges', (alpha, beta, gamma) => {
    // console.log('alpha: ', alpha, ' | beta: ', beta, ' | gamma: ', gamma);
  })
});

function setup() {
  let cnv = createCanvas(500, 500, WEBGL);
  cnv.position((windowWidth - width)/2, 130);
}

function draw() {
  background(0);
  normalMaterial();
  box(150);
}
