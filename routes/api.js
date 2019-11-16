var express = require('express');
var router = express.Router();
var Pickup = require("../models/pickupSchema");

/* GET home page. */

router.get('/', async (req, res, next) => {
  res.send('Hello world!');
});

router.get('/pickups', async (req, res, next) => {
  Pickup.find(function(err, pickups) {
    if (err) {
      res.send(err)
    }
    res.json(pickups);
  });
});

router.delete('/pickups/delete/:id', async (req, res, next) => {
  Pickup.findByIdAndRemove(req.params.id, (err, pickup) => {
    if (err) res.send(err)
    res.send({message: "Picked up!"});
  });
});

router.post('/pickups', async (req, res, next) => {
  var pu = new Pickup();
  console.log(req);
  pu.save(function(err) {
    if (err) res.send(err);
    res.send({message: 'New location created for pickup!'})
  });
});

module.exports = router;