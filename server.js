const express = require('express');
const app = express();
const path = require('path');

const server = app.listen(1337, function () {
  console.log('Server running on 1337...');
})

app.use(express.static(path.join(__dirname, '.', 'public')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '.', 'public/index.html'));
});

// error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});
