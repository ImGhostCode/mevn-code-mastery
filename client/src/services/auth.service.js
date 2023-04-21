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

  async logout() {
    return await (
      await this.api.post("/logout")
    ).data;
  }
  async deleteAccount(userId) {
    return await (
      await this.api.delete(`/${userId}`)
    ).data;
  }
  async editAccount(userId, image) {
    return await (
      await this.api.put(`/${userId}`, image, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
    ).data;
  }
}

export default new AuthService();
