/* eslint-disable */

let muscleGroups = {
    'arms': [
        'Biceps',
        'Triceps'
    ],
    'chest': [
        'Chest'
    ],
    'legs': [
        'Calves',
        'Hamstrings',
        'Quadriceps'
    ],
    'lowerBack': [
        'Lowerback'
    ],
    'shoulders': [
        'Back Deltoid',
        'Front Deltoid',
        'Side Deltoid'
    ],
    'upperBack': [
        'Lats',
        'Traps'
    ]
};

$(document).ready(function() {
    let bodyPartInput = $('#bodyPart');
    let primaryMuscleGroupInput = $('#primaryMuscleGroup');
    let liftNameInput = $('#liftName');

    bodyPartInput.on('change', function() {
        let bodyPart = bodyPartInput.val();
        let muscles = muscleGroups[bodyPart];
        primaryMuscleGroupInput.children('option:not(:first)').remove();
        primaryMuscleGroupInput.prop('disabled', false);

        muscles.forEach(function(muscle) {
            primaryMuscleGroupInput.append($('<option>', { value : muscle }).text(muscle.charAt(0).toUpperCase() + muscle.slice(1)));
        });

        bodyPartInput.removeClass('is-invalid');
    });

    primaryMuscleGroupInput.on('change', function() {
        primaryMuscleGroupInput.removeClass('is-invalid');
    });

    liftNameInput.keyup(function() {
        if (liftNameInput.val() !== '') {
            liftNameInput.removeClass('is-invalid');
        }
    });

    $('#liftFormSubmitBtn').click(hasErrors);
});

function hasErrors() {
    let errors;
    let liftNameInput = $('#liftName');
    let bodyPartInput = $('#bodyPart');
    let primaryMuscleGroupInput = $('#primaryMuscleGroup');

    if (liftNameInput.val() === '') {
        liftNameInput.addClass('is-invalid');
        errors = 1;
    }

    if (bodyPartInput.val() === '' || !bodyPartInput.val()) {
        bodyPartInput.addClass('is-invalid');
        errors = 1;
    }

    if (primaryMuscleGroupInput.val() === '' || !primaryMuscleGroupInput.val()) {
        primaryMuscleGroupInput.addClass('is-invalid');
        errors = 1;
    }

    if (errors) {
        event.preventDefault();
        event.stopPropagation();
    }
    else {
        $('#liftForm').addClass('was-validated');
    }
}