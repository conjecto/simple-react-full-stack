const express = require('express');
const os = require('os');
const config = require('./config');
const middlewares = require('./middlewares');

const app = express();

// allows use of req.body (for json)
app.use(express.json())

// static files
app.use(express.static('dist'));

// routes
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

// middlewares
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

// listen
app.listen(config.port, () => console.log(`Listening on port ${config.port}!`));
