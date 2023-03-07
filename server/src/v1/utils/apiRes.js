class ApiRes {
  constructor(code, status, message, data) {
    this.code = code;
    this.status = status;
    this.message = message;
    this.data = data;
  }
}

module.exports = ApiRes;
