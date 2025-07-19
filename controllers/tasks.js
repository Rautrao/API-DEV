const Course = require('../models/courses.js');
const Faculty = require('../models/faculty.js');
const asyncWrapper = require('../middleware/async.js');
const {createCustomError} = require('../errors/custom-error.js');

const getAllCourses = asyncWrapper(async(req ,res,next)=>{
    const courses = await Course.find({});
    res.status(200).json({status:`success`,data:{courses,nbHits:courses.length}});
});
const getAllFaculties = asyncWrapper(async(req,res,next) => {
    const faculties = await Faculty.find({});
    res.status(200).json({status:`success`,data:{faculties,nbHits:faculties.length}});
});
const addCourse = asyncWrapper(async (req ,res, next)=>{
    const course = await Course.create(req.body);
    res.status(201).json({course});
});
const addFaculty = asyncWrapper(async(req ,res,next)=>{
    const faculty = await Faculty.create(req.body);
    res.status(201).json({faculty});
});
const getFaculty = asyncWrapper(async (req ,res,next)=>{
    const {id} = req.params;
    const faculty = await Faculty.findOne({id});
    if(!faculty) return next(createCustomError(`No faculty with id : ${id}`,404));
    res.status(200).json({faculty});
});

const getCourse = asyncWrapper(async (req ,res,next)=>{
    const {id} = req.params;
    const course = await Course.findOne({id});
    if(!course) return next(createCustomError(`No course with id : ${id}`,404));
    res.status(200).json({course});
});

const deleteCourse = asyncWrapper(async (req,res,next)=>{
    const {id} = req.params;
    const course = await Course.findOneAndDelete({id});
    if(!course) return next(createCustomError(`No course with id : ${id}`,404));
    res.status(200).json({course});
});

const deleteFaculty = asyncWrapper(async (req ,res,next)=>{
    const {id} = req.params;
    const faculty = await Faculty.findOneAndDelete({id});
    if(!faculty){
        return next(createCustomError(`No faculty with id : ${id}`,404));
    }
    res.status(200).json({faculty});
});

const updateCourse = asyncWrapper( async (req ,res,next)=>{
    const {id} = req.params;
    const course = await Course.findOneAndUpdate({id:id},req.body,{
        new:true,
        runValidators:true
    });
    if(!course) return next(createCustomError(`No course with id : ${id}.`,404));
    res.status(200).json({course});
});

const updateFaculty = asyncWrapper( async(req ,res,next)=>{
    
    const {id} = req.params;
    console.log(id);
    const faculty = await Faculty.findOneAndUpdate({id:id},req.body,{
        new:true,
        runValidators:true
    });
    
    if(!faculty) await next(createCustomError(`No faculty with id : ${id}`,404));
    res.status(200).json({faculty});
})

module.exports = {
    getAllCourses,
    getAllFaculties,
    addCourse,
    addFaculty,
    getFaculty,
    getCourse,
    deleteCourse,
    deleteFaculty,
    updateCourse,
    updateFaculty
};