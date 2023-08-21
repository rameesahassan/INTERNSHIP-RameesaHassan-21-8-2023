
const Class = require('../models/Class');

exports.createClass = async (req, res) => {
  try {
    const { standard,division } = req.body;

    // Create a new Class instance
    const newClass = new Class({
      standard: standard,
      division: division

    });
      console.log(newClass)
    // Save the class to the database
    const savedClass = await newClass.save();

    res.status(201).json(savedClass);
  } catch (error) {
    console.error('Error creating class:', error);
    res.status(500).json({ error: 'Error creating class' });
  }
};


//Delete class
exports.deleteClass = async (req, res) => {
    try {
      const classId = req.params.id; // Get the class ID from the URL parameter
  
      // Find the class by ID and remove it
      const deletedClass = await Class.findByIdAndRemove(classId);
  
      if (!deletedClass) {
        return res.status(404).json({ error: 'Class not found' });
      }
  
      res.status(200).json({ message: 'Class deleted successfully' });
    } catch (error) {
      console.error('Error deleting class:', error);
      res.status(500).json({ error: 'Error deleting class' });
    }
  };
