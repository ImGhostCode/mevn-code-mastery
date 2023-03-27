import createApiClient from "./api.service";

class LabService {
  constructor(baseURL = "/api/v1/labs") {
    this.api = createApiClient(baseURL);
  }

  async getAll() {
    return await (
      await this.api.get("/")
    ).data;
  }

  async getById(id) {
    return await (
      await this.api.get(`/id/${id}`)
    ).data;
  }

  async getBySlug(slug) {
    return await (
      await this.api.get(`/slug/${slug}`)
    ).data;
  }
}

export default new LabService();
