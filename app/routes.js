var express = require('express');
var path = require('path');

var Events = require('./models/events');
var Users = require('./models/users');


module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // sample api route
        app.get('/api/events', function(req, res) {
            // use mongoose to get all nerds in the database
            Events.find(function(err, events) {

                // if there is an error retrieving, send the error. 
                                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.json(events); // return all nerds in JSON format
            });
        });


    app.get('*', function(req, res) {
        res.sendFile('index.html', {
            root: path.join(__dirname, '../public')
        });
    });

}
