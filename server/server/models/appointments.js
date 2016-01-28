var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var appointmentSchema = new Schema(
  {
    title: String,
    type: String,
    startAt: String,
    endsAt: String,
    draggable: Boolean,
    resizable: Boolean
  }
);

module.exports = mongoose.model('Appointment', appointmentSchema);
