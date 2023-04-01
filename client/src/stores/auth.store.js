import { ref, computed } from "vue";
import { defineStore } from "pinia";
import authService from "../services/auth.service";

export const useAuthStore = defineStore("auth", () => {
  const result = ref(null);
  const isLoading = ref(false);
  const err = ref(null);
  const user = ref(null)

  async function register(data) {
    isLoading.value = true;
    result.value = null;
    err.value = null;
    try {
      const res = await authService.register(data);
      if (res.code === 400) throw new Error(res.message);
      result.value = res;
    } catch (error) {
      err.value = error.message;
    } finally {
      isLoading.value = false;
    }
  }
  async function login(data) {
    isLoading.value = true;
    result.value = null;
    err.value = null;
    try {
      const res = await authService.login(data);
      if (res.code === 404 || res.code === 400) throw new Error(res.message);
      result.value = res;
      user.value = res.data
    } catch (error) {
      err.value = error.message;
    } finally {
      isLoading.value = false;
    }
  }

  return { register, result, isLoading, err, login, user };
});
