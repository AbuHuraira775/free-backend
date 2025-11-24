const adminMiddleware = (req, res, next) => {
    const isAdmin = req.user.isAdmin;
    if (!isAdmin) {
        return res.status(400).json({
            state: false,
            msg: `Access denied. You are not authorized to access this route`
        });
    }
    next();
}

module.exports = adminMiddleware;