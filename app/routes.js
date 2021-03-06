var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

var Event = require('./models/events');
var FoursquareCtrl = require('./controller/foursquare.controller.js');
var MeetupCtrl = require('./controller/meetup.controller.js');


module.exports = function(app) {
    // GET Routes
    // --------------------------------------------------------
    // Retrieve records for all users in the db
    app.get('/events', function(req, res) {
        // Uses Mongoose schema to run the search (empty conditions)
        var query = Event.find({});
        query.exec(function(err, events) {
            if (err)
                res.send(err);

            // If no errors are found, it responds with a JSON of all users
            res.json(events);
        });
    });

    // POST Routes
    // --------------------------------------------------------
    // Provides method for saving new users in the db
    app.post('/createEvent', function(req, res) {

        // Creates a new User based on the Mongoose schema and the post bo.dy
        var newevent = new Event(req.body);

        // New User is saved in the db.
        newevent.save(function(err) {
            if (err) {
                res.send(err);
            } else {

                // If no errors are found, it responds with a JSON of the new user
                res.json(req.body);
            }
        });
    });


    app.get('/api/venues/:location', FoursquareCtrl.getVenues);

    app.get('/api/events/:location', MeetupCtrl.getLocalEvents);
    app.get('/api/browse/:id', MeetupCtrl.getEventsByCategory);

    app.get('/api/categories/', MeetupCtrl.getEventCategories);


    app.get('*', function(req, res) {
        res.sendFile('index.html', {
            root: path.join(__dirname, '../public')
        });
    });

};
