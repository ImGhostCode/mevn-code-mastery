import createApiClient from "./api.service";

class CourseService {
  constructor(baseURL = "/api/v1/courses") {
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
  async createNewCourse(data) {
    return await (
      await this.api.post('/', data)
    ).data;
  }
}

export default new CourseService();
