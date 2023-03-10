<template>
    <div class="my-10 w-[75%] mx-auto">
        <!-- Profile -->
        <div class="flex justify-center items-center flex-col font-Roboto mb-20">
            <h3 class="text-4xl  text-yellow-400 font-extrabold uppercase mb-10 font-Cubano">Jeff Delaney</h3>
            <div class="h-80 w-80 rounded-full overflow-hidden my-8">
                <img src="https://fireship.io/contributors/img/jeff-delaney.webp" alt="jeff"
                    class="object-cover h-full w-full">
            </div>

            <ul class="flex gap-1 font-bold  text-xs uppercase text-black mb-8">
                <li class="px-3 py-1 bg-white rounded-sm"><a href="#">Github</a></li>
                <li class="px-3 py-1 bg-white rounded-sm"><a href="#">Github</a></li>
                <li class="px-3 py-1 bg-white rounded-sm"><a href="#">Github</a></li>
                <li class="px-3 py-1 bg-white rounded-sm"><a href="#">Github</a></li>
                <li class="px-3 py-1 bg-white rounded-sm"><a href="#">Github</a></li>
                <li class="px-3 py-1 bg-white rounded-sm"><a href="#">Github</a></li>
                <li class="px-3 py-1 bg-white rounded-sm"><a href="#">Github</a></li>
                <li class="px-3 py-1 bg-white rounded-sm"><a href="#">Github</a></li>
            </ul>

            <p class="text-sm text-gray-300 tracking-wide font-semibold">Jeff Delaney is a Google Developer Expert and the
                creator of
                fireship.io. When
                not
                writing
                code, he is out seeking adventure with his wife and 3 boys.</p>
        </div>

        <div class="">
            <h3 class="text-4xl  text-white font-extrabold uppercase mb-10 font-Cubano">Lessons</h3>
            <div class="grid grid-cols-4 gap-6 ">
                <course></course>
                <course></course>
                <course></course>
                <course></course>
            </div>
        </div>
    </div>
    <div class="mx-auto w-24 h-1 my-12 bg-gradient-to-r from-gray-500 to-gray-400 rounded-full"></div>
</template>

<script setup>
import Course from '../components/Course.vue';

</script>