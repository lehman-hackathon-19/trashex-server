var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PickupSchema = new Schema({
  name: {
    type: String,
    default: "Your moms house"
  },
  location: {
    type: [Number],
    required: false
  },
  items: {
    type: [String],
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: false,
  }
});

var Pickup = mongoose.model("Pickup", PickupSchema);
module.exports = Pickup;