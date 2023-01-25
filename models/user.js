const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  deviceId: {
    type: String,
    required: true,
  },
  updatedAt: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    require: true,
  },
  currentPower: {
    type: Number,
    default: 0,
    min: 0,
  },
  currVoltage: {
    type: Number,
    default: 0,
    min: 0,
  },
  currCur: {
    type: Number,
    default: 0,
  },
  powerConsumptionByTime: {
    type: Map,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
