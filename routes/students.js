const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');



//create student class
router.post('/', studentController.createStudent);
// Update student's class
router.put('/:id', studentController.updateStudentClass);

// Define DELETE route for deleting a student
router.delete('/:id', studentController.deleteStudent);

// Define GET route for reading all students in a class with standard and division
router.get('/by-class/:classId', studentController.getStudentsByClass);

// Define GET route for reading all students in a standard
router.get('/by-standard/:standard', studentController.getStudentsByStandard);


module.exports = router;