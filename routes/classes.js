const express = require('express');
const router = express.Router();
const classController = require('../controllers/classController');

router.post('/', classController.createClass);
// Define DELETE route for deleting a class
router.delete('/:id', classController.deleteClass);


module.exports = router;