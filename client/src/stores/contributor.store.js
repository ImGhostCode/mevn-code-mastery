import { ref, computed } from "vue";
import { defineStore } from "pinia";
import contributorService from "../services/contributor.service";

export const useContributorStore = defineStore("contributor", () => {
    const isLoading = ref(false);
    const err = ref(null);
    const contributor = ref(null)
    const contributors = ref([])
    const result = ref(null)

    async function getContributorById(id) {
        isLoading.value = true;
        contributor.value = null;
        err.value = null;
        try {
            const res = await contributorService.getContributorById(id);
            if (res.code === 400) throw new Error(res.message);
            contributor.value = res.data;
        } catch (error) {
            err.value = error.message;
        } finally {
            isLoading.value = false;
        }
    }

    async function getContributorBySlug(slug) {
        isLoading.value = true;
        contributor.value = null;
        err.value = null;
        try {
            const res = await contributorService.getContributorBySlug(slug);
            // console.log(res);
            result.value = res
            if (res.code === 400) throw new Error(res.message);
            contributor.value = res.data;
        } catch (error) {
            err.value = error.message;
        } finally {
            isLoading.value = false;
        }
    }

    async function createContributor(data) {
        isLoading.value = true;
        contributor.value = null;
        err.value = null;
        result.value = null
        try {
            const res = await contributorService.createContributor(data)
            console.log(res);
            result.value = res
            if (res.code === 400 || res.code === 401 || res.code == 403) throw new Error(res.message);
            contributor.value = res.data;
        } catch (error) {
            err.value = error.message;
        } finally {
            isLoading.value = false;
        }
    }


    return { isLoading, err, getContributorBySlug, contributor, getContributorById, createContributor, result };
});
