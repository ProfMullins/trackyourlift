let muscleGroups = {
    "arms": [
        "Biceps",
        "Triceps"
    ],
    "chest": [
        "Chest"
    ],
    "legs": [
        "Calves",
        "Hamstrings",
        "Quadriceps"
    ],
    "lowerBack": [
        "Lowerback"
    ],
    "shoulders": [
        "Back Deltoid",
        "Front Deltoid",
        "Side Deltoid"
    ],
    "upperBack": [
        "Lats",
        "Traps"
    ]
};

$(document).ready(function() {
    $('#bodyPart').on('change', function() {
        let bodyPart = $('#bodyPart').val();
        let muscles = muscleGroups[bodyPart];
        $('#primaryMuscleGroup').children('option:not(:first)').remove();
        $('#primaryMuscleGroup').prop('disabled', false);

        muscles.forEach(function(muscle) {
            $('#primaryMuscleGroup').append($('<option>', { value : muscle }).text(muscle.charAt(0).toUpperCase() + muscle.slice(1)));
        });

        $('#bodyPart').removeClass('is-invalid');
    });

    $('#primaryMuscleGroup').on('change', function() {
        $('#primaryMuscleGroup').removeClass('is-invalid');
    });

    $('#liftName').keyup(function() {
        if ($('#liftName').val() !== '') {
            $('#liftName').removeClass('is-invalid');
        }
    });

    $('#liftFormSubmitBtn').click(hasErrors);
});

function hasErrors() {
    let errors;

    if ($('#liftName').val() === '') {
        $('#liftName').addClass('is-invalid');
        errors = 1;
    }

    if ($('#bodyPart').val() === '' || !$('#bodyPart').val()) {
        console.log("empty");
        $('#bodyPart').addClass('is-invalid');
        errors = 1;
    }

    if ($('#primaryMuscleGroup').val() === '' || !$('#primaryMuscleGroup').val()) {
        $('#primaryMuscleGroup').addClass('is-invalid');
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