    var foursquare = require('foursquarevenues')(process.env.four_id, process.env.four_secret);

    module.exports.getVenues = function(req, res) {

        var params = {
            "ll": "40.7,-74"
        };

        foursquare.getVenues(params, function(error, venues) {
            if (!error) {
                res.json(venues);
            }
        });
    }
