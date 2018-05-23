const socket = io.connect(window.location.origin);

socket.on('connect', () => {
  console.log('connected to server');
});
