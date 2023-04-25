import { ref, computed } from "vue";
import { defineStore } from "pinia";
import userService from "../services/user.service";

export const useUserStore = defineStore("user", () => {
    const isLoading = ref(false);
    const err = ref(null);
    const user = ref(null)
    const result = ref(null)

    async function getUserById(id) {
        isLoading.value = true;
        user.value = null;
        err.value = null;
        try {
            const res = await userService.getUserById(id);
            if (res.code === 400 || res.code === 401 || res.code === 403 || res.code === 404) throw new Error(res.message);
            // console.log(res.data);
            localStorage.removeItem('userInfo')
            localStorage.setItem("userInfo", JSON.stringify(res.data));
            user.value = res.data;
        } catch (error) {
            err.value = error.message;
        } finally {
            isLoading.value = false;
        }
    }

    async function updateUser(data) {
        isLoading.value = true;
        err.value = null;
        try {
            const res = await userService.updateUser(user.value._id, data);
            if (res.code === 400 || res.code === 401 || res.code === 403 || res.code === 404) throw new Error(res.message);
            localStorage.removeItem('userInfo')
            localStorage.setItem("userInfo", JSON.stringify(res.data));
            user.value = res.data;
        } catch (error) {
            console.log(error);
            err.value = error.message;
        } finally {
            isLoading.value = false;
        }
    }

    async function enrollCourse(userId, courseId) {
        isLoading.value = true;
        err.value = null;
        result.value = null
        try {
            const res = await userService.enrollCourse(userId, courseId);
            if (res.code === 400 || res.code === 401 || res.code === 403 || res.code === 404) throw new Error(res.message);
            localStorage.removeItem('userInfo')
            localStorage.setItem("userInfo", JSON.stringify(res.data));
            result.value = res
            user.value = res.data;
        } catch (error) {
            console.log(error);
            err.value = error.message;
        } finally {
            isLoading.value = false;
        }
    }


    return { isLoading, err, getUserById, user, updateUser, enrollCourse, result };
});
