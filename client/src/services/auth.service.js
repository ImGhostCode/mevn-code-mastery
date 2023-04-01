import createApiClient from "./api.service";

class AuthService {
  constructor(baseURL = "/api/v1/auth") {
    this.api = createApiClient(baseURL);
  }

  async register(data) {
    return await (
      await this.api.post("/register", data)
    ).data;
  }
  async login(data) {
    return await (
      await this.api.post("/login", data)
    ).data;
  }
}

export default new AuthService();
