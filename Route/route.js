var express = require('express');
var router = express.Router();
var studentController = require('../Controller/studentController');

//routing to  post and get user
router.route('/User')
.post(studentController.postUser)
.get(studentController.getAllUsers);

//routing to  post and get student
router.route('/Student')
.post(studentController.postStudent)
.get(studentController.getAllStudents);

//routing to  post and get university
router.route('/University')
.post(studentController.postUniversity)
.get(studentController.getAllUniversities);

//routing to get students in stream
router.route('/student/:stream')
.get(studentController.getStudentInStream);

//routing to get students in university
router.route('/student/search/:reg')
.get(studentController.getStudentInUniversity);

//routing to get all details of student
router.route('/studentDetails/:name')
.get(studentController.getStudentDetails);


module.exports = router;
