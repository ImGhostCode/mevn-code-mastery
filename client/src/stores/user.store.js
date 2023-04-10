import { ref, computed } from "vue";
import { defineStore } from "pinia";
import userService from "../services/user.service";

export const useUserStore = defineStore("user", () => {
    const isLoading = ref(false);
    const err = ref(null);
    const user = ref(null)

    async function getUserById(id) {
        isLoading.value = true;
        user.value = null;
        err.value = null;
        try {
            const res = await userService.getUserById(id);
            if (res.code === 400) throw new Error(res.message);
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
            if (res.code === 400) throw new Error(res.message);
            user.value = res.data;
        } catch (error) {
            console.log(error);
            err.value = error.message;
        } finally {
            isLoading.value = false;
        }
    }


    return { isLoading, err, getUserById, user, updateUser };
});
