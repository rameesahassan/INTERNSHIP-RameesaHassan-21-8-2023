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
  classId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class'
  },
  // Defines the field as an ObjectId reference
});

module.exports = mongoose.model('Student', studentSchema);
