const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nightShift");

const userSeed = [
  {
    email: "dpowel11@kent.edu",
    username: "Goobaspank",
    class: "Shaman",
    dateJoined: new Date(Date.now())
  },
  {
    email: "tpwalker94@gmail.com",
    username: "Picklericks",
    class: "Shaman",
    dateJoined: new Date(Date.now())
  },
  {
    email: "ascxtel@gmail.com",
    username: "Xtel",
    class: "Shaman",
    dateJoined: new Date(Date.now())
  },
  {
    email: "chefnhatanguyen@gmail.com",
    username: "Yourbrojoe",
    class: "Shaman",
    dateJoined: new Date(Date.now())
  },
  {
    email: "coreyg83@gmail.com",
    username: "Zapz",
    class: "Shaman",
    dateJoined: new Date(Date.now())
  }
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
