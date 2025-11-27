const success = (res, { 
    status_code = 200,
    state = true,
    message = "success",
    data = null,
    extraDetail = {}
} = {}) => {
    return res.status(status_code).json({
        state,
        message,
        extraDetail,
        data
    });
};

const error = (res, {
    status_code = 500,
    state = false,
    extraDetail = {},
    message = "internal server error",
} = {}) => {
    return res.status(status_code).json({
        state,
        message,
        extraDetail
    });
};

module.exports = { success, error };
