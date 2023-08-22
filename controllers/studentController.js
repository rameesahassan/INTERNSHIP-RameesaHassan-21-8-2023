const Student = require('../models/Student');//import the Student model
const Class = require('../models/Class'); // Import the Class model


exports.createStudent = async (req, res) => {
  try {
    const { name, rollno, mobileno,classId } = req.body;
console.log(req.body);
    // Create a new student instance
    const newStudent = new Student({
      name: name,
      rollno: rollno,
      mobileno: mobileno,
      classId:classId
    });
      console.log(newStudent)
    // Save the student to the database
    const savedStudent = await newStudent.save();

    res.status(201).json(savedStudent);
  } catch (error) {
    console.error('Error creating student:', error);
    res.status(500).json({ error: 'Error creating student' });
  }
};


//update student class

exports.updateStudentClass = async (req, res) => {
    try {
      const studentId = req.params.id; // Get the student ID from the URL parameter
      const { standard, division } = req.body;
  
      // Find the student by ID
      const studentToUpdate = await Student.findById(studentId);
  
      if (!studentToUpdate) {
        return res.status(404).json({ error: 'Student not found' });
      }
  
      // Retrieve the current classId
      const currentClassId = studentToUpdate.classId;
  
      // Update the class document based on the new standard and division values
      await Class.updateOne({ _id: currentClassId }, { $set: { standard, division } });
  
      // Update the student's class information
      studentToUpdate.classId.standard = standard;
      studentToUpdate.classId.division = division;
  
      // Save the updated student document
      const updatedStudent = await studentToUpdate.save();
  
      res.status(200).json(updatedStudent);
    } catch (error) {
      console.error('Error updating student class:', error);
      res.status(500).json({ error: 'Error updating student class' });
    }
  };

//Delete student


exports.deleteStudent = async (req, res) => {
    try {
      const studentId = req.params.id; // Get the student ID from the URL parameter
  
      // Find the student by ID and remove it
      const deletedStudent = await Student.findByIdAndRemove(studentId);
  
      if (!deletedStudent) {
        return res.status(404).json({ error: 'Student not found' });
      }
  
      res.status(200).json({ message: 'Student deleted successfully' });
    } catch (error) {
      console.error('Error deleting student:', error);
      res.status(500).json({ error: 'Error deleting student' });
    }
  };

  //Read all students in a class with standard and division

exports.getStudentsByClassStandardDivision = async (req, res) => {
    try {
      const standard= req.params.standard;
      const division=req.params.division;
  
      // Find all students in the specified class based on standard and division
     const students = await Student.find({ 'classId.standard': standard, 'classId.division': division });
    
      res.status(200).json(students);
      
    } catch (error) {  
      console.error('Error getting students by class, standard, and division:', error);
      res.status(500).json({ error: 'Error getting students by class, standard, and division' });
    }
  };
  

//Read all students in a standard


exports.getStudentsByStandard = async (req, res) => {
  try {
    const standard = req.params.standard;
    
    // Find all students in the specified standard
    const students = await Student.find({ standard:standard });


    res.status(200).json(students);
  } catch (error) {
    console.error('Error getting students by standard:', error);
    res.status(500).json({ error: 'Error getting students by standard' });
  }
};
