class ApiError extends Error {
  constructor(code, status, message, data) {
    super(message);
    this.code = code;
    this.status = status;
    this.data = null;
  }
}

module.exports = ApiError;
