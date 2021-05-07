const router = require('express').Router();
const Workout = require('../models/workout');

router.post('/api/workouts', (req, res) => {
    Workout.create({}).then(data => {
        console.log(data);
        res.json(data);
    }).catch(err => {
        res.json(err);
    })
});


// adding exercise
router.put('/api/workouts:id', (req, res) => {
    Workout.findByIdAndUpdate(
        req.params.id,
        {$push: {exercises: req.body }},
    ).then((data) => {
        res.json(data);
}).catch( err => {
    res.json(err);
    })
});

module.exports = router;