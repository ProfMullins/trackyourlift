const Lift = require('../models/lift');

exports.getIndex = function (req, res, next) {
    res.render('add-lift');
};

exports.getLifts = async function (req, res, next) {
    console.log('view all');
    await Lift.find({}, function(error, documents) {
        console.log('error', error);
        console.log('documents', documents);

        if (error === null) {
            res.render('view-lifts', { lifts: documents });
        }
    });
};

exports.createLift = async function (req, res) {
    console.log(req.body);
    let lift = new Lift(
        {
            name: req.body.liftName,
            bodyPart: req.body.bodyPart,
            primaryMuscleGroup: req.body.primaryMuscleGroup
        }
    );

    await lift.save(function (err) {
        if (err) {
            console.log(err);
        }
        res.render('view-lifts');
    });
};

exports.getLift = async function (req, res) {
    await Lift.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    });
};

exports.updateLift = async function (req, res) {
    await Lift.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Lift updated.');
    });
};

exports.deleteLift = async function (req, res) {
    await Lift.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    });
};