<template>
    <div class="mt-20 w-[75%] mx-auto mb-32">
        <div class="container mb-32">
            <div class="text-center">
                <h1 class="text-5xl font-extrabold uppercase mb-4">Courses</h1>
                <p class="text-slate-400 text-sm">Trải nghiệm nhiều bước đầy thử thách với các câu đố và theo dõi tiến độ
                </p>
            </div>
            <div class="mx-auto w-24 h-1 my-12 bg-gradient-to-r from-gray-500 to-gray-400 rounded-full"></div>
            <div class="grid grid-cols-4 gap-6 ">
                <course></course>
                <course></course>
                <course></course>
                <course></course>
                <course></course>
                <course></course>
                <course></course>
                <course></course>

            </div>
        </div>
        <div class="container">
            <div class="text-center">
                <h1 class="text-5xl font-extrabold uppercase mb-4">past courses</h1>
                <p class="text-slate-400 text-sm">Các khóa học này có thể hơi cũ</p>
            </div>
            <div class="mx-auto w-24 h-1 my-12 bg-gradient-to-r from-gray-500 to-gray-400 rounded-full"></div>
            <div class="grid grid-cols-4 gap-6 ">
                <course></course>
                <course></course>
                <course></course>
                <course></course>
                <course></course>
                <course></course>
                <course></course>
                <course></course>
            </div>
        </div>
        <div class="mx-auto w-24 h-1 my-12 bg-gradient-to-r from-gray-500 to-gray-400 rounded-full"></div>
    </div>
</template>

<script setup>
import Course from '../components/Course.vue';

</script>