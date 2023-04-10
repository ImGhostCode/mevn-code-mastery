<!-- <template>
    <div class="container w-[75%] mx-auto flex justify-between gap-4 my-20">
        <div class="basis-3/4">
            <h1 class="text-6xl text-center text-yellow-400 font-extrabold uppercase mb-3">
                React Supabase Full Course
            </h1>

            <p class="mb-8 font-Roboto text-center text-gray-200">IBuild and deploy a full-stack, production-ready web app
                with Supabase,
                React, and
                Postgres.</p>
            <div class="mx-auto w-24 h-1 my-24 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"></div>

            <div class="mb-4">
                <iframe class="w-full h-[600px]" src="https://www.youtube.com/embed/gUYBFDPZ5qk"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </div>
            <div class="px-4 py-5 bg-gray-600 rounded-lg mb-5 text-left">
                <a href="#" class="inline-flex items-center">
                    <img src="https://fireship.io/contributors/img/jeff-delaney.webp" alt="author"
                        class="h-10 w-10 mr-3 rounded-full">
                    <div class="text-sm">
                        <h4 class="mb-1">Taught by <span class="text-yellow-500">Jeff Delaney</span> </h4>
                        <p class="text-gray-400 text-xs font-Roboto">Senior Engineering Manager at Nx && that guy from the
                            Supaship
                            YouTube channel</p>
                    </div>
                </a>
            </div>

            <div class="mx-auto w-24 h-1 my-24 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"></div>

            <div class="mb-8">
                <div class="text-4xl text-white font-extrabold uppercase mb-5">What will I learn?</div>
                <ul class="font-Roboto text-gray-300 list-disc">
                    <li class="">Master the Basics of Supabase</li>
                    <li class="">Build interactive UI components with React</li>
                    <li class="">Type-safe queries with TypeScript</li>
                    <li class="">User Authentication and Row-level Security</li>
                </ul>
            </div>

            <div class="mb-20">
                <div class="text-4xl text-white font-extrabold uppercase mb-5">When was the course last updated?</div>
                <p class="py-2 px-2 text-white bg-green-500 text-xs font-Roboto w-max rounded-lg">Updated Nov 23rd, 2022</p>
            </div>

            <h1 class="text-6xl text-center text-yellow-400 font-extrabold uppercase mb-3">
                Chapters
            </h1>

            <div class="mx-auto w-24 h-1 my-20 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"></div>

            <div class="grid grid-cols-3 gap-5">
                <div class="chapter-item hover:scale-105 transition-all bg-gray-600 rounded-xl p-5">
                    <h4 class="text-xl mb-4"><span class="text-yellow-600 ">01</span>&nbsp;meet zack</h4>
                    <p class="font-Roboto text-gray-300">Get to know your instructor Zack DeRose</p>
                </div>
                <div class="chapter-item hover:scale-105 transition-all bg-gray-600 rounded-xl p-5">
                    <h4 class="text-xl mb-4"><span class="text-yellow-600 ">01</span>&nbsp;meet zack</h4>
                    <p class="font-Roboto text-gray-300">Get to know your instructor Zack DeRose</p>
                </div>
                <div class="chapter-item hover:scale-105 transition-all bg-gray-600 rounded-xl p-5">
                    <h4 class="text-xl mb-4"><span class="text-yellow-600 ">01</span>&nbsp;meet zack</h4>
                    <p class="font-Roboto text-gray-300">Get to know your instructor Zack DeRose</p>
                </div>
                <div class="chapter-item hover:scale-105 transition-all bg-gray-600 rounded-xl p-5">
                    <h4 class="text-xl mb-4"><span class="text-yellow-600 ">01</span>&nbsp;meet zack</h4>
                    <p class="font-Roboto text-gray-300">Get to know your instructor Zack DeRose</p>
                </div>
                <div class="chapter-item hover:scale-105 transition-all bg-gray-600 rounded-xl p-5">
                    <h4 class="text-xl mb-4"><span class="text-yellow-600 ">01</span>&nbsp;meet zack</h4>
                    <p class="font-Roboto text-gray-300">Get to know your instructor Zack DeRose</p>
                </div>
                <div class="chapter-item hover:scale-105 transition-all bg-gray-600 rounded-xl p-5">
                    <h4 class="text-xl mb-4"><span class="text-yellow-600 ">01</span>&nbsp;meet zack</h4>
                    <p class="font-Roboto text-gray-300">Get to know your instructor Zack DeRose</p>
                </div>
                <div class="chapter-item hover:scale-105 transition-all bg-gray-600 rounded-xl p-5">
                    <h4 class="text-xl mb-4"><span class="text-yellow-600 ">01</span>&nbsp;meet zack</h4>
                    <p class="font-Roboto text-gray-300">Get to know your instructor Zack DeRose</p>
                </div>

            </div>

            <div class="mx-auto w-24 h-1 my-12 bg-gradient-to-r from-gray-500 to-gray-400 rounded-full"></div>
        </div>

        <div class="basis-1/4 ">
            <h1 class="text-4xl text-center text-white font-extrabold uppercase mb-8">
                how to enroll
            </h1>

            <div class="p-8 border-2 border-blue-600 rounded-lg text-center ">
                <a href="#"><span class="uppercase text-xl text-blue-500">buy this course </span>for <span>$20</span>.</a>
            </div>
        </div>
    </div>
</template> -->

<template>
    <div class="container w-[75%] mx-auto my-20" v-if="apiResponse">

        <h1 class="text-6xl text-center text-yellow-400 font-extrabold uppercase mb-3">
            {{ apiResponse.title }}
        </h1>

        <p class="mb-8 font-Roboto text-center text-gray-200">{{ apiResponse.description }}</p>
        <div class="mx-auto w-24 h-1 my-24 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"></div>

        <div class="mb-4 w-full">
            <iframe class="h-[500px] w-[800px] mx-auto" :src="apiResponse.videoUrl" title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        </div>
        <div class="px-4 py-5 bg-gray-600 rounded-lg mb-5 mx-auto w-max ">
            <a href="#" class="inline-flex items-center">
                <img src="https://fireship.io/contributors/img/jeff-delaney.webp" alt="author"
                    class="h-10 w-10 mr-3 rounded-full">
                <div class="text-sm">
                    <h4 class="mb-1">Taught by <router-link
                            :to="{ name: 'ContributorDetail', params: { slug: 'jeff-delaney' } }"
                            class="text-yellow-500">Jeff Delaney</router-link></h4>
                    <p class="text-gray-400 text-xs font-Roboto">Senior Engineering Manager at Nx && that guy from the
                        Supaship
                        YouTube channel</p>
                </div>
            </a>
        </div>

        <div class="mx-auto w-24 h-1 my-24 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"></div>

        <div class="mb-8">
            <div class="text-4xl text-white font-extrabold uppercase mb-5">What will I learn?</div>
            <ul class="font-Roboto text-gray-300 list-disc">
                <li class="">Master the Basics of Supabase</li>
                <li class="">Build interactive UI components with React</li>
                <li class="">Type-safe queries with TypeScript</li>
                <li class="">User Authentication and Row-level Security</li>
            </ul>
        </div>

        <div class="mb-20">
            <div class="text-4xl text-white font-extrabold uppercase mb-5">When was the course last updated?</div>
            <p class="py-2 px-2 text-white bg-green-500 text-xs font-Roboto w-max rounded-lg">Updated {{
                moment(apiResponse.updatedAt).format('ll') }}</p>
        </div>


        <div class="text-center">
            <h1 class="text-4xl  text-white font-extrabold uppercase mb-8">
                how to enroll
            </h1>

            <div class="p-8 border-2 border-blue-600 rounded-lg mx-auto w-max  ">
                <a href="#"><span class="uppercase text-xl text-blue-500">buy this course </span>for <span>${{
                    apiResponse.price }}</span>.</a>
            </div>
        </div>

        <div class="mx-auto w-24 h-1 my-24 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"></div>


        <h1 class="text-6xl text-center text-yellow-400 font-extrabold uppercase mb-3">
            Chapters
        </h1>

        <div class="mx-auto w-24 h-1 my-20 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"></div>

        <div class="grid grid-cols-3 gap-5">
            <div class="chapter-item hover:scale-105 transition-all bg-gray-600 rounded-xl p-5"
                v-for="chapter in apiResponse.chapters" :id="apiResponse.title">
                <h4 class="text-xl mb-4"><span class="text-yellow-600 ">01</span>&nbsp;{{ chapter.title }}</h4>
                <p class="font-Roboto text-gray-300">{{ chapter.description }}</p>
            </div>
        </div>

        <div class="mx-auto w-24 h-1 my-12 bg-gradient-to-r from-gray-500 to-gray-400 rounded-full"></div>
    </div>
    <div class="" v-else-if="error">{{ error }}</div>
    <div class="" v-else>Loading...</div>
</template>
<!-- 
<script setup>
import { onMounted } from 'vue';
import useCourse from '../composables/useCourse'
import { useRoute } from 'vue-router';

const { data, error, isLoading, getCourseBySlug } = useCourse()

const route = useRoute();

onMounted(async () => {
    await getCourseBySlug(route.params.slug)
    console.log(data);
})


</script> -->

<script setup>
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import CourseService from '../services/course.service'
import moment from 'moment'

const route = useRoute();
const apiResponse = ref(null);
const error = ref(null);

const fetchData = async () => {
    try {
        const { data } = await CourseService.getBySlug(route.params.slug);
        apiResponse.value = data;
    } catch (err) {
        error.value = err.messsage
    }
};

onMounted(() => {
    fetchData();
})


</script>