const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type :String
  },
  rollno: {
    type :String
  },
  mobileno:{
    type :String
  },
  classId: mongoose.Schema.Types.ObjectId,// Defines the field as an ObjectId reference
});

module.exports = mongoose.model('Student', studentSchema);
