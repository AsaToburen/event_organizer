var meetup = require('meetup-api')({
    key: process.env.meetupAPI
});

module.exports.getLocalEvents = function(req, res) {

    var coords = JSON.parse(req.params.location);
    var fields = ["photo_sample", "event_hosts", "photo_url", "group_photos"];
    var lat = coords.lat.toString();
    var lon = coords.lon.toString();

    meetup.getOpenEvents({
        fields: fields,
        lat: lat,
        lon: lon
    }, function(err, events) {
        if (!err) {
            res.send(events.results);
        } else {
            console.log(err);
        }
    });
},

module.exports.getEventCategories = function(req, res) {

    meetup.getCategories(function(err, categories) {
        if (!err) {
            res.send(categories);
        } else {
            console.log(err);
        }
    });
},

module.exports.getEventsByCategory = function(req, res) {

    var cat = req.params.id;
    var fields = ["group_photos"];

    meetup.getOpenEvents({
        fields: fields,
        category: cat
    }, function(err, events) {
        if (!err) {
            res.send(events.results);
        } else {
            console.log(err);
        }
    });
}
