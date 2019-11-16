var express = require('express');
var router = express.Router();
var Pickup = require("../models/pickupSchema");

/* GET home page. */

router.get('/', async (req, res, next) => {
  res.send('THE TRESH IS HEA');
});

router.get('/pickups', async (req, res, next) => {
  Pickup.find(function(err, pickups) {
    if (err) {
      res.send(err)
    }
    res.json(pickups);
  });
});

router.post('/pickups', async (req, res, next) => {
  var pu = new Pickup();
  pu.save(function(err) {
    if (err) res.send(err);
    console.log('ASODKASDOKASDOKADSOK');
    res.send({message: 'Pickup created at your moms house!'})
  });
});

module.exports = router;