class ErrorHander extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constractor);
  }
}

module.exports = ErrorHander;
