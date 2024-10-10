const { z } = require("zod");
const { BadRequestError } = require("../utils/request");


exports.validateGetStudents = (req, res, next) => {
    // Validate the query
    const validateQuery = z.object({
        nama: z.string(),
        panggilan: z.string().optional(),
        universitas: z.string().optional(),
    });

    const resultValidateQuery = validateQuery.safeParse(req.query);
    if (!resultValidateQuery.success) {
        // If validation fails, return error messages
        throw new BadRequestError(resultValidateQuery.error.errors);
    }

    next();
};

exports.validateGetStudentsbyId = (req, res, next) => {
    const validateParams = z.object({
        id: z.string(),
    });
    const result = validateParams.safeParse(req.params);
    if (!result.success) {
        // If validation fails, return error messages
        throw new BadRequestError(result.error.errors);
    } 
    next();
};

exports.validateCreateStudent = (req, res, next) => {
    // Validation body schema
    const validateBody = z.object({
        nama : z.string(),
        panggilan : z.string(),
        nim : z.string(),
        kelas : z.string(),
        "alamat.provinsi" : z.string(),
        "alamat.kota" : z.string(),
        "pendidikan.universitas" : z.string(),
    });

    const validateFileBody = z.object({
        profilePicture: z.object({
            name : z.string(),
            data : z.any(),
        })
        .nullable()
        .optional(),
    });

    // Validate
    const result = validateBody.safeParse(req.body);
    if (!result.success) {
        // If validation fails, return error messages
        throw new BadRequestError(result.error.errors);
    };

    const resultValidateFile = validateFileBody.safeParse(req.files);
    if (!resultValidateFile.success) {
        // If validation fails, return error messages
        throw new BadRequestError(resultValidateFile.error.errors);
    };

    next();
};

exports.validateUpdateStudent = (req, res, next) => {
    // zod validation
    const validateParams = z.object({
        id: z.string(),
    });

    const resultValidateParams = validateParams.safeParse(req.params);
    if (!resultValidateParams.success) {
        // If validation fails, return error messages
        throw new BadRequestError(result.error.errors);
    }

    // Validation body schema
    const validateBody = z.object({
        nama : z.string(),
        panggilan : z.string(),
        nim : z.string(),
        kelas : z.string(),
        "alamat.provinsi" : z.string(),
        "alamat.kota" : z.string(),
        "pendidikan.universitas" : z.string(),
    });

    const validateFileBody = z.object({
        profilePicture: z.object({
            name : z.string(),
            data : z.any(),
        })
        .nullable()
        .optional(),
    });
    // Validate
    const resultValidateBody = validateBody.safeParse(req.body);
    if (!resultValidateBody.success) {
        // If validation fails, return error messages
        throw new BadRequestError(result.error.errors);
    };

    if(req.files){
        const resultValidateFile = validateFileBody.safeParse(req.files);
        if (!resultValidateFile.success) {
            // If validation fails, return error messages
            throw new BadRequestError(resultValidateFile.error.errors);
        };
    }

    next();
};

exports.validateDeleteStudentById = (req, res, next) => {
    // Make a validation schema
    const validateParams = z.object({
        id: z.string(),
    });

    const result = validateParams.safeParse(req.params);
    if (!result.success) {
        // If validation fails, return error messages
        throw new BadRequestError(result.error.errors);
    }

    next();
};