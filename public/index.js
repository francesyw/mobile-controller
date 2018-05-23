const socket = io.connect(window.location.origin);

socket.on('connect', () => {
  console.log('browser connected to server');
});
