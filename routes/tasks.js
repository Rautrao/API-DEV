const express = require('express');
const router = express.Router();
const {
    getAllCourses,
    getAllFaculties,
    addCourse,
    addFaculty,
    getFaculty,
    getCourse,
    deleteCourse,
    deleteFaculty,
    updateFaculty,
    updateCourse
} = require('../controllers/tasks.js');

router.route('/courses').get(getAllCourses).post(addCourse);
router.route('/faculties').get(getAllFaculties).post(addFaculty);
router.route('/faculty/:id').get(getFaculty).delete(deleteFaculty).patch(updateFaculty);
router.route('/course/:id').get(getCourse).delete(deleteCourse).patch(updateCourse);
module.exports = router;