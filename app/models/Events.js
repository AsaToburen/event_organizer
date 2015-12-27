

// Pulls Mongoose dependency for creating schemas
var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

// Creates a User Schema. This will be the basis of how user data is stored in the db
var EventSchema = new Schema({
    eventTitle: {type: String, required: true},
    eventType: {type: String, required: true},
    cost: {type: Number, required: true},
    contactName: {type: String, required: true},
    contactPhone: {type: [Number], required: true}, 
    address: {type: String, required: true}
});

// Sets the created_at parameter equal to the current time
EventSchema.pre('save', function(next){
    now = new Date();
    this.updated_at = now;
    if(!this.created_at) {
        this.created_at = now
    }
    next();
});

// Indexes this schema in 2dsphere format (critical for running proximity searches)
EventSchema.index({location: '2dsphere'});

// Exports the UserSchema for use elsewhere. Sets the MongoDB collection to be used as: "scotch-users"
module.exports = mongoose.model('main-events', EventSchema);