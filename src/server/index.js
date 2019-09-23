const express = require('express');
const os = require('os');
const config = require('./config');

const app = express();

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

app.listen(config.port, () => console.log(`Listening on port ${config}!`));
