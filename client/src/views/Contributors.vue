<template>
    <div class="my-10 w-[75%] mx-auto" v-if="contributorStore.contributor">
        <!-- Profile -->
        <div class="flex justify-center items-center flex-col font-Roboto mb-20">
            <h3 class="text-4xl  text-yellow-400 font-extrabold uppercase mb-10 font-Cubano">{{
                contributorStore.contributor.name }}</h3>
            <div class="h-80 w-80 rounded-full overflow-hidden my-8">
                <img :src="contributorStore.contributor.imageUrl" :alt="contributorStore.contributor.slug"
                    class="object-cover h-full w-full">
            </div>

            <ul class="flex gap-1 font-bold  text-xs uppercase text-black mb-8">
                <li class="px-3 py-1 bg-white rounded-sm" v-for="urlItem in contributorStore.contributor.url"
                    :key="urlItem._id"><a target="_blank" :href="urlItem.url">{{ urlItem.title }}</a></li>
            </ul>

            <p class="text-sm text-gray-300 tracking-wide font-semibold">{{ contributorStore.contributor.bio }}</p>
        </div>

        <div class="">
            <h3 class="text-4xl  text-white font-extrabold uppercase mb-10 font-Cubano">Lessons</h3>
            <div class="grid grid-cols-4 gap-6 ">
                <!-- <course></course>
                <course></course>
                <course></course>
                <course></course> -->
            </div>
        </div>
    </div>
    <div class="" v-else-if="contributorStore.err">{{ contributorStore.err }}</div>
    <div class="" v-else="contributorStore.isLoading"></div>
    <div class="mx-auto w-24 h-1 my-12 bg-gradient-to-r from-gray-500 to-gray-400 rounded-full"></div>
</template>

<script setup>
import { onMounted } from 'vue';
import Course from '../components/Course.vue';
import Lab from '../components/Lab.vue';
import { useRoute } from 'vue-router';
import { useContributorStore } from '../stores/contributor.store';

const { params } = useRoute()


const contributorStore = useContributorStore()

onMounted(async () => {
    await contributorStore.getContributorBySlug(params.slug)
    console.log(contributorStore.contributor);
})

</script>