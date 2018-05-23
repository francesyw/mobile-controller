const express = require('express');
const app = express();
const path = require('path');
const socketio = require('socket.io');

const server = app.listen(1337, function () {
  console.log('Server running on 1337...');
});

const io = socketio(server);

io.on('connection', socket => {
  console.log(`New socket: ${socket.id}`);

  socket.on('deviceInfo', (alpha, beta, gamma) => {
    console.log('alpha: ', alpha, ' | beta: ', beta, ' | gamma: ', gamma);
  })

  socket.on('disconnect', () => {
    console.log(`Socket ${socket.id} just left`);
  });
});

app.use(express.static(path.join(__dirname, '.', 'public')));

app.get('/mobile', (req, res) => {
  res.sendFile(path.join(__dirname, '.', 'public/mobile.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '.', 'public/index.html'));
});

// error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});
