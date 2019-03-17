const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let LiftSchema = new Schema({
    name: {type: String, required: true},
    bodyPart: {type: String, required: true},
    primaryMuscleGroup: {type: String, required: true},
});


// Export the model
module.exports = mongoose.model('Lift', LiftSchema);