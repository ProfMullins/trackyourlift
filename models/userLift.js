const mongoose = require('mongoose');
require('mongoose-double')(mongoose);

const SchemaTypes = mongoose.Schema.Types;

const Schema = mongoose.Schema;

let UserLiftSchema = new Schema({
    sets: {type: Number, required: true},
    lift: [{type: Schema.Types.ObjectId, ref: 'Lift'}],
    reps: [{type: Number, required: true}],
    weight: [{type: SchemaTypes.Double, required: true}]
});


// Export the model
module.exports = mongoose.model('UserLift', UserLiftSchema);