const successResponse = (res, data, statusCode = 200) => {
    return res.status(statusCode).json({ success: true, data });
};

const errorResponse = (res, error, statusCode = 500) => {
    return res.status(statusCode).json({ success: false, message: error.message || error });
};

module.exports = { successResponse, errorResponse };