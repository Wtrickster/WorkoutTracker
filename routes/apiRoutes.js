const db = require("../Models");

// Calling & Storing Data
module.exports = function(app) {
    app.get("/api/workouts", function(req, res) {
      db.Workout.find({})
        .then(dbWorkout => {
          res.json(dbWorkout);
        })
        .catch(err => {
          res.json(err);
        });
    });
  
    app.put("/api/workouts/:id", function({body, params}, res) {
      db.Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body } },
        { new: true }
      )
        .then(dbWorkout => {
          res.json(dbWorkout);
        })
        .catch(err => {
          res.json(err);
        });
    });
  
    app.post("/api/workouts", (req, res) => {
      db.Workout.create({})
        .then(dbWorkout => {
          res.json(dbWorkout);
        })
        .catch(err => {
          res.json(err);
        });
    });
  
    app.get("/api/workouts/range", function(req, res) {
      db.Workout.find({}).limit(5)
        .then(dbWorkout => {
          res.json(dbWorkout);
        })
        .catch(err => {
          res.json(err);
        });
    });
  };