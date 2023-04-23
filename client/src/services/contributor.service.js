import createApiClient from "./api.service";

class ContributorService {
    constructor(baseURL = "/api/v1/contributors") {
        this.api = createApiClient(baseURL);
    }

    async getContributorById(id) {

        return await (
            await this.api.get(`/id/${id}`,)
        ).data;
    }

    async getContributorBySlug(slug) {

        return await (
            await this.api.get(`/slug/${slug}`,)
        ).data;
    }

    async createContributor(data) {
        return await (
            await this.api.post('/', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        ).data;
    }

    async updateContributor(id, data) {

        return await (
            await this.api.put(`/${id}`, data)
        ).data;
    }



}

export default new ContributorService();
