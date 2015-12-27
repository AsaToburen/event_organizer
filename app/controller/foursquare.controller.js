    var foursquare = (require('foursquarevenues'))(process.env.four_id, process.env.four_secret);


    var params = {
        "ll": "40.7,-74"
    };

    module.exports.getVenues = function(req, res) {

        foursquare.getVenues(params, function(error, venues) {
            if (!error) {
                res.json(venues);
            }
        });

    }

    module.exports.exploreVenues = function(req, res) {
        foursquare.exploreVenues(params, function(error, venues) {
            if (!error) {
                console.log(venues);
            }
        });
    }
