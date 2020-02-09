const http = require('http');
const express = require('express');
const consolidate = require('consolidate');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
import eventsManager from './async/EventsManager';

import Companion from './models/Companion';
import Traveler from './models/Traveler';

import routes from './routes';

// Initialize DB
const db = 'mongodb://localhost:27017/walk_with_me';
mongoose.connect(db, { useNewUrlParser: true })
    .then(value => {
        // Successful connection
        console.log("DB successfully connected.");
    }).catch(error => {
        // Error in connection
        console.log(error);
    });

//Initialize EventsManager and subscribe to relevant topics
eventsManager.initialize();
eventsManager.subscribeToTopic("CompanionLocation");
eventsManager.subscribeToTopic("TripDispatch");

// Initialize and configure Express
const app = express();

app.use(express.static('public'));

// add & configure middleware
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())

// API handlers
app.get('/', (req, res) => res.send('root url'));
app.use("/api/", routes);

const server = http.Server(app);
const portNumber = 8000; // for locahost:8000

server.listen(portNumber, () => { // Runs the server on port 8000
    console.log(`Server listening at port ${portNumber}`);
});