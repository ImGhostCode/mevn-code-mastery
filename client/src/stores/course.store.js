import { ref, computed } from "vue";
import { defineStore } from "pinia";
import courseService from "../services/course.service";

export const useCourseStore = defineStore("course", () => {
    const result = ref(null);
    const isLoading = ref(false);
    const err = ref(null);
    const courses = ref(null)
    const course = ref(null)

    async function createNewCourse(data) {
        isLoading.value = true;
        result.value = null;
        err.value = null;
        course.value = null
        try {
            const res = await courseService.createNewCourse(data)
            console.log(res);
            if (res.code === 400) throw new Error(res.message);
            result.value = res;
            course.value = res.data
        } catch (error) {
            err.value = error.message;
        } finally {
            isLoading.value = false;
        }
    }


    return { course, courses, result, err, isLoading, createNewCourse };
});
