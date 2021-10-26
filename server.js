const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const striopService = require('./stripo');
const utilities = require('./utilities');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("stripo-service");
});

app.listen(PORT, HOST);