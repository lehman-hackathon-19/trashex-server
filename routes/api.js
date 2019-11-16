var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/pickups', function(req, res, next) {
  Pickup.find(function(err, pickups) {
    if (err) res.send(err)
    res.json(pickups);
  });
  res.send("THE TRASH IS HERE");
});

router.post('/pickups', function(req, res, next) {
  var pickup = new Pickup();
  Pickup.location = "Your moms house";
  Pickup.save(function(err) {
    if (err) res.send(err);
    res.json({message: 'Pickup created at your moms house!'})
  });
});

module.exports = router;