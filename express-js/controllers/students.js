const studentService = require("../services/students");
const { successResponse } = require("../utils/response");

exports.getStudents = (req, res, next) => {
    // Call the usecase or service
    const data = studentService.getStudents(
        req.query?.nama,
        req.query?.panggilan,
        req.query?.universitas
    );

    successResponse(res, data);
};

exports.getStudentById = (req, res, next) => {
    // Get the id from params
    const { id } = req.params;
    const data = studentService.getStudentById(id);
    successResponse(res, data);
};

exports.createStudent = async (req, res, next) => {
    const requestBody = {
        ...req.body,
        alamat : {
            provinsi : req.body["alamat.provinsi"],
            kota : req.body["alamat.kota"]
        },
        pendidikan : {
            universitas : req.body["pendidikan.universitas"]
        },
    };
    delete requestBody["alamat.provinsi"];
    delete requestBody["alamat.kota"];
    delete requestBody["pendidikan.universitas"]
    ;
    const data = await studentService.createStudent(requestBody, req.files);
    successResponse(res, data);
};

exports.updateStudent = async (req, res, next) => {
    // Get the id from params
    const { id } = req.params;
    const requestBody = {
        ...req.body,
        alamat : {
            provinsi : req.body["alamat.provinsi"],
            kota : req.body["alamat.kota"]
        },
        pendidikan : {
            universitas : req.body["pendidikan.universitas"]
        },
    };
    delete requestBody["alamat.provinsi"];
    delete requestBody["alamat.kota"];
    delete requestBody["pendidikan.universitas"]
    ;
    const data = await studentService.updateStudent(id, requestBody, req.files);
    successResponse(res, data);
};

exports.deleteStudentById = (req, res, next) => {
    // Get the id from params
    const { id } = req.params;
    const data = studentService.deleteStudentById(id);
    successResponse(res, data);
};