<script setup>
</script>

<template>
  <main class="w-[75%] mx-auto my-10">
    <div
      class="slider flex flew-row justify-between bg-gradient-to-r from-cyan-500 to-blue-500 h-72 gap-4 rounded-2xl mb-10">
      <div class="flex justify-center flex-col p-10 basis-1/2">
        <h1 class="text-4xl font-semibold mb-4">Hoc ReactJs mien phi</h1>
        <p class="mb-4">Khoa hoc ReactJs tu co ban toi nang cao. Ket qua cua khoa hoc nay la ban co the lam hau het cac du
          an
          thuong
          gap voi ReactJs</p>
        <a href="#" class="inline-block w-max px-5 py-3 border-2 rounded-full border-white">Dang ky ngay</a>
      </div>
      <div class="basis-1/2">
        <img src="https://files.fullstack.edu.vn/f8-prod/banners/Banner_web_ReactJS.png" class="" alt="react">
      </div>
    </div>

    <div class="">
      <h1 class="text-3xl font-bold mb-10">Khoa hoc noi bat</h1>
      <div class="grid grid-cols-4 gap-6">
        <course></course>
        <course></course>
        <course></course>
        <course></course>
        <course></course>
        <course></course>
        <course></course>
        <course></course>
      </div>
      <div class="mx-auto w-24 h-1 my-12 bg-gradient-to-r from-gray-500 to-gray-400 rounded-full"></div>

    </div>
  </main>
</template>

<script setup>
import { defineComponent } from 'vue';
import Course from '../components/Course.vue';
defineComponent({
    Course
})
</script>
