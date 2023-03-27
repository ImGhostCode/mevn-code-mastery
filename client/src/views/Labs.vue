
<template>
    <div class="mt-20 w-[75%] mx-auto mb-32" v-if="apiResponse">
        <div class="container mb-32">
            <div class="text-center">
                <h1 class="text-5xl font-extrabold uppercase mb-4">labs</h1>
                <p class="text-slate-400 text-sm">Video bài học và hướng dẫn</p>
            </div>
            <div class="mx-auto w-24 h-1 my-12 bg-gradient-to-r from-gray-500 to-gray-400 rounded-full"></div>
            <div class="grid grid-cols-4 gap-6 ">
                <lab v-for="lab in apiResponse" :info="lab" :key="lab._id"></lab>
            </div>
        </div>
        <div class="pagination flex justify-center items-center flex-row text-slate-400 gap-2">
            <div class="flex justify-center items-center flex-row gap-2">
                <a href="#" class="px-5 py-3 bg-slate-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                    </svg>
                </a>
                <a href="#" class="px-5 py-3 bg-slate-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>

                </a>
            </div>
            <ul class="flex justify-center items-center flex-row text-sm gap-2">
                <li>
                    <a href="#" class="px-6 py-4 bg-slate-700">
                        1
                    </a>
                </li>
                <li>
                    <a href="#" class="px-6 py-4 bg-slate-700">
                        2
                    </a>
                </li>
                <li>
                    <a href="#" class="px-6 py-4 bg-slate-700">
                        3
                    </a>
                </li>
                <li>
                    <a href="#" class="px-6 py-4 bg-slate-700">
                        4
                    </a>
                </li>
                <li>
                    <a href="#" class="px-6 py-4 bg-slate-700">
                        5
                    </a>
                </li>
            </ul>
            <div class="flex justify-center items-center flex-row gap-2">
                <a href="#" class="px-5 py-3 bg-slate-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </a>
                <a href="#" class="px-5 py-3 bg-slate-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                    </svg>
                </a>
            </div>
        </div>
        <div class="mx-auto w-24 h-1 my-12 bg-gradient-to-r from-gray-500 to-gray-400 rounded-full"></div>
    </div>
    <div class="" v-else-if="error">{{ error }}</div>
    <div class="" v-else>Loading...</div>
</template>


<script setup>
import { onMounted, ref } from 'vue';

import Lab from '../components/Lab.vue';
import LabService from '../services/lab.service'

const apiResponse = ref(null);
const error = ref(null);

const fetchData = async () => {
    try {
        const { data } = await LabService.getAll();
        apiResponse.value = data;
    } catch (err) {
        error.value = err.messsage
    }

};

onMounted(() => {
    fetchData();
})

</script>


<!-- <template>
    <div class="mt-20 w-[75%] mx-auto mb-32" v-if="data.labs.length">

        <div class="container mb-32">
            <div class="text-center">
                <h1 class="text-5xl font-extrabold uppercase mb-4">labs</h1>
                <p class="text-slate-400 text-sm">Video bài học và hướng dẫn</p>
            </div>
            <div class="mx-auto w-24 h-1 my-12 bg-gradient-to-r from-gray-500 to-gray-400 rounded-full"></div>
            <div class="grid grid-cols-4 gap-6 " v-if="data.labs.length">
                <lab v-for="lab in data.labs" :info="lab" :key="lab._id" />
            </div>
        </div>
        <div class="pagination flex justify-center items-center flex-row text-slate-400 gap-2">
            <div class="flex justify-center items-center flex-row gap-2">
                <a href="#" class="px-5 py-3 bg-slate-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                    </svg>
                </a>
                <a href="#" class="px-5 py-3 bg-slate-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>

                </a>
            </div>
            <ul class="flex justify-center items-center flex-row text-sm gap-2">
                <li>
                    <a href="#" class="px-6 py-4 bg-slate-700">
                        1
                    </a>
                </li>
                <li>
                    <a href="#" class="px-6 py-4 bg-slate-700">
                        2
                    </a>
                </li>
                <li>
                    <a href="#" class="px-6 py-4 bg-slate-700">
                        3
                    </a>
                </li>
                <li>
                    <a href="#" class="px-6 py-4 bg-slate-700">
                        4
                    </a>
                </li>
                <li>
                    <a href="#" class="px-6 py-4 bg-slate-700">
                        5
                    </a>
                </li>
            </ul>
            <div class="flex justify-center items-center flex-row gap-2">
                <a href="#" class="px-5 py-3 bg-slate-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </a>
                <a href="#" class="px-5 py-3 bg-slate-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                    </svg>
                </a>
            </div>
        </div>
        <div class="mx-auto w-24 h-1 my-12 bg-gradient-to-r from-gray-500 to-gray-400 rounded-full"></div>
    </div>
    {{ data.labs }}
    <div class="" v-if="data.err">{{ data.err }}</div>
    <div class="" v-if="data.loading">Loading...</div>
</template>


<script setup>
import { onMounted } from 'vue';
import { useLabStore } from '../stores/lab.store';
import Lab from '../components/Lab.vue'


const { getAllLabs, data } = useLabStore()
onMounted(async () => {

    try {
        await getAllLabs();
        console.log(data.labs);
        console.log(data.loading);
        console.log(data.err);
    } catch (error) {
        console.error(error);
    }
});
</script> -->