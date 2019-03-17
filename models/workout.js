const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let WorkoutSchema = new Schema({
    lifts: [{type: Schema.Types.ObjectId, ref: 'UserLift'}],
    date: {type: Date, default: Date.now},
});


// Export the model
module.exports = mongoose.model('Workout', WorkoutSchema);