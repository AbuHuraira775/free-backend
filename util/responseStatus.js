const success = (res, { 
    status_code = 200,
    state = true,
    message = "success",
    data = null
} = {}) => {
    return res.status(status_code).json({
        state,
        message,
        data
    });
};

const error = (res, {
    status_code = 500,
    state = false,
    message = "internal server error",
} = {}) => {
    return res.status(status_code).json({
        state,
        message,
    });
};

module.exports = { success, error };
