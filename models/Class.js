const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  standard: {
    type :String
  },
  division: {
    type :String
  } ,
});

module.exports = mongoose.model('Class', classSchema);