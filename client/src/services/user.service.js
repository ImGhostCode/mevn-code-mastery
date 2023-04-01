import createApiClient from "./api.service";

class UserService {
    constructor(baseURL = "/api/v1/users") {
        this.api = createApiClient(baseURL);
    }

    async getUserById(id) {

        return await (
            await this.api.get(`/${id}`,)
        ).data;
    }

    async updateUser(data) {

        return await (
            await this.api.put(`/${id}`, data)
        ).data;
    }



}

export default new UserService();
