const errorMiddleware = (err, req, res, next) => {
  const status = err.status || 500; // 500 is a standard status for server errors
  const message =  err.message || 'backend error';
  const extraDetail = err.extraDetail || 'error from error middleware';

  const error = {status, message, extraDetail};
  return res.status(status).json(error);
};

module.exports = errorMiddleware;