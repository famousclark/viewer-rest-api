const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const viewerModel = require('./api/models/viewerModel');
const userModel = require('./api/models/userModel');


mongoose.connect('mongodb://localhost/Lazarusdb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const viewerRoute = require('./api/routes/viewerRoute');
const userRoute = require('./api/routes/userRoute');
viewerRoute(app);
userRoute(app);

app.listen(port);
console.log('todo list RESTful API server started on: ' + port);
