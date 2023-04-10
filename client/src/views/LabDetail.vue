<template>
    <div class="container w-[75%] mx-auto flex justify-between gap-4 my-20" v-if="apiResponse">
        <div class="basis-3/4">
            <div class="mb-4">
                <iframe class="w-full h-[600px]" :src="apiResponse.videoUrl" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </div>
            <div class="px-4 py-5 bg-gray-600 rounded-lg mb-5">
                <a href="#" class="inline-flex items-center">
                    <img src="https://fireship.io/contributors/img/jeff-delaney.webp" alt="author"
                        class="h-10 w-10 mr-3 rounded-full">
                    <div class="text-sm">
                        <h4 class="mb-1">By <router-link
                                :to="{ name: 'ContributorDetail', params: { slug: 'jeff-delaney' } }"
                                class="text-yellow-500">Jeff Delaney</router-link></h4>
                        <p class="text-gray-400 text-xs">Posted {{
                            moment(apiResponse.updatedAt).format('ll') }}</p>
                    </div>
                </a>
            </div>

            <h1 class="text-5xl text-yellow-400 font-extrabold uppercase mb-10">
                {{ apiResponse.title }}
            </h1>
            <p class="mb-8 font-Roboto">{{ apiResponse.description }} </p>
            <ul>
                <li class="text-4xl text-white font-extrabold uppercase mb-10" v-for="step in apiResponse.steps">{{ step }}
                </li>
            </ul>
            <div class="mx-auto w-24 h-1 my-12 bg-gradient-to-r from-gray-500 to-gray-400 rounded-full"></div>
        </div>

        <div class="basis-1/4 ">
            <ul class="p-5 text-gray-300">
                <li class="mb-2" v-for="step in apiResponse.steps"><a href="#">{{ step }}</a></li>
            </ul>
        </div>
    </div>
    <div class="" v-else-if="error">{{ error }}</div>
    <div class="" v-else>Loading...</div>
</template>
<!-- 
<script setup>
import { onMounted } from 'vue';
import useLab from '../composables/useLab'
import { useRoute } from 'vue-router';

const { apiResponse, error, isLoading, getLabBySlug } = useLab()

const route = useRoute();
onMounted(async () => {
    await getLabBySlug(route.params.slug)
    console.log(apiResponse);
})


</script> -->

<script setup>
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import LabService from '../services/lab.service'
import moment from 'moment'

const route = useRoute();
const apiResponse = ref(null);
const error = ref(null);

const fetchData = async () => {
    try {
        const { data } = await LabService.getBySlug(route.params.slug);
        apiResponse.value = data;
    } catch (err) {
        error.value = err.messsage
    }

};

onMounted(() => {
    fetchData();
})


</script>