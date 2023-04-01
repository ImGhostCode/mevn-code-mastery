<template>
  <main class="w-[75%] mx-auto my-10">
    <div
      class="slider flex flew-row justify-between bg-gradient-to-r from-cyan-500 to-blue-500 h-72 gap-4 rounded-2xl mb-10 overflow-hidden"
      v-if="topCourse">
      <div class="flex justify-center flex-col p-10 basis-1/2">
        <h1 class="text-4xl font-semibold mb-4">{{ topCourse.title }}</h1>
        <p class="mb-4 font-Roboto">{{ topCourse.description }}</p>
        <router-link :to="{
          name: 'CourseDetail', params: { slug: topCourse.slug }
        }" class="inline-block w-max px-5 py-3 border-2 rounded-full border-white">Errol now</router-link>
      </div>
      <div class="basis-1/2">
        <img :src="topCourse.imgUrl" class="h-full w-full" alt="hot">
      </div>
    </div>

    <div class="" v-if="apiResponse">
      <h1 class="text-3xl font-bold mb-10">Khóa học nổi bậc</h1>
      <div class="grid grid-cols-4 gap-6">
        <course v-for="course in apiResponse" :info="course" :key="course._id"></course>

      </div>
      <div class="mx-auto w-24 h-1 my-12 bg-gradient-to-r from-gray-500 to-gray-400 rounded-full"></div>

    </div>

    <div class="" v-else-if="error">{{ error }}</div>
    <div class="" v-else>Loading...</div>
  </main>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { onMounted, ref, reactive, computed } from 'vue';
import Course from '../components/Course.vue';
import CourseService from '../services/course.service'

const apiResponse = ref([]);
const error = ref(null);
const topCourse = ref(null)

const fetchData = async () => {
  try {
    const { data } = await CourseService.getAll();
    apiResponse.value = data.sort((a, b) => {
      return parseInt(b.students) - parseInt(a.students)
    })
    topCourse.value = apiResponse.value[0]
    // console.log(topCourse.value);

  } catch (err) {
    error.value = err.messsage
  }

};

onMounted(async () => {
  await fetchData();
})




</script>
