const router = require('express').Router();
const Workout = require('../models/workout');

router.get('/api/workouts', (req, res) => {
    Workout.find({})
    .sort({ date: -1 })
    .then(workouts => {
        res.json(workouts);
    }).catch(err => {
        res.status(400).json(err);
});
});

// get route to dashboard/range
router.get('/api/workouts/range', (req, res) => {
    Workout.find({})
    .sort({ date: -1 })
    .then((workouts) => {
        res.status(200).json(workouts);
    })
    .catch((err) => {
        res.status(400).json(workouts)
    });
});


// post workout route
router.post('/api/workouts', (req, res) => {
    Workout.create({})
        .then(data => {
        console.log(data);
        res.json(data);
    }).catch(err => {
        res.json(err);
    })
});


// adding exercise
router.put('/api/workouts/:id', (req, res) => {
    Workout.findByIdAndUpdate(
        req.params.id,
        {$push: {exercises: req.body }},
    ).then((data) => {
        res.json(data);
}).catch(err => {
    res.json(err);
    });
});




module.exports = router;