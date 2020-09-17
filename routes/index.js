var express = require('express');
var router = express.Router();
var courses = require('./database/courses');

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'MITS learning platform',
    courses
  });
});

router.get('/course/:courseTitle', function (req, res, next) {
  let course;
  for (let counter = 0; counter < courses.length; counter++) {
    if (courses[counter].title == req.params.courseTitle) {
      course = courses[counter];
    }
  }
  res.render('course', {
    title: req.params.courseTitle,
    course
  });
});

module.exports = router;
