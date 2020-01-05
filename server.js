const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3000;

const User = require("./models/user");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nightShift");

// Get Request to localhost:3000 returns the database of users.
app.get("/api/users", function(req, res) {
  console.log("get users");
  User.findAll({}).then(eachOne => {
    res.json(eachOne);
    console.log("each user:", eachOne);
  });
});

// GET BY ID
app.get("/api/users/:id", function(req, res) {
  User.findById(req.params._id).then(function(err, user) {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
});

// UPDATE BY ID
app.put("/api/users/:id", function(req, res) {
  User.findOneAndUpdate({
    email: req.body.email,
    username: req.body.username
  }).then(user => {
    res.json(user);
  });
});

// POST Request
app.post("/api/users", function(req, res) {
  console.log("TEST POST REQUEST");

  User.create({
    email: req.body.email,
    username: req.body.username,
    class: req.body.class,
    dateJoined: new Date(Date.now())
  }).then(user => {
    res.json(user);
    console.log("user:", user);
  });
});

// DELETE
app.delete("/api/users/:id", function(req, res) {
  User.findOneAndRemove({
    email: req.body.email,
    username: req.body.username
  }).then(user => {
    res.json(user);
  });
});

// GET ITEMS BY DATE
app.get("/api/users/date/:date", function(req, res) {
  User.find(req.params.dateJoined).then(function(err, user) {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
