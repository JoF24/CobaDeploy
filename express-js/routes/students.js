const express = require("express");
const {
    validateGetStudents,
    validateCreateStudent,
    validateGetStudentsbyId,
    validateUpdateStudent,
    validateDeleteStudentById,
} = require("../middlewares/students");
const {
    getStudents,
    createStudent,
    getStudentById,
    updateStudent,
    deleteStudentById,
} = require("../controllers/students");

const router = express.Router();

router.get("/", validateGetStudents, getStudents);
router.post("/", validateCreateStudent, createStudent);
router.get("/:id", validateGetStudentsbyId, getStudentById);
router.put("/:id", validateUpdateStudent, updateStudent);
router.delete("/:id", validateDeleteStudentById, deleteStudentById);

module.exports = router;