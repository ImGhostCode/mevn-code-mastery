<template>
    <div class="my-10 w-[75%] mx-auto" v-if="contributorStore.contributor">
        <!-- Profile -->
        <div class="flex justify-center items-center flex-col font-Roboto mb-20">
            <h3 class="text-4xl  text-yellow-400 font-extrabold uppercase mb-10 font-Cubano">{{
                contributorStore.contributor.name }}</h3>
            <div class="h-80 w-80 rounded-full overflow-hidden my-8">
                <img :src="contributorStore.contributor.imageUrl.toString().startsWith('https') ? contributorStore.contributor.imageUrl : 'http://localhost:3051/public/images/' + contributorStore.contributor.imageUrl"
                    :alt="contributorStore.contributor.slug" class="object-cover h-full w-full">
            </div>

            <ul class="flex gap-1 font-bold  text-xs uppercase text-black mb-8">
                <li class="px-3 py-1 bg-white rounded-sm" v-for="urlItem in contributorStore.contributor.url"
                    :key="urlItem._id"><a target="_blank" :href="urlItem.url">{{ urlItem.title }}</a></li>
            </ul>

            <p class="text-sm text-gray-300 tracking-wide font-semibold">{{ contributorStore.contributor.bio }}</p>
        </div>

        <div class="">
            <h3 class="text-4xl  text-white font-extrabold uppercase mb-10 font-Cubano">Lessons</h3>
            <div class="grid grid-cols-4 gap-6 mb-8">
                <course v-for="course in contributorStore.contributor.courses" :key="course._id" :info="course"></course>
                <lab v-for="lab in contributorStore.contributor.labs" :key="lab._id" :info="lab"></lab>
            </div>
            <div v-if="userStore?.user.contributorId._id === contributorStore.contributor._id" class="flex mb-8">
                <button @click="isShow.newCourse = !isShow.newCourse"
                    class="border-2 rounded-lg px-2 py-1  hover:text-purple-600 border-blue-500 mr-2"><span
                        class="inline-block"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg></span> New Course
                </button>

                <button class="border-2 rounded-lg px-2 py-1  hover:text-purple-600 border-blue-500"><span
                        class="inline-block"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg></span> New Lab
                </button>
            </div>
            <new-course-form v-if="isShow.newCourse" @show="isShow.newCourse = !isShow.newCourse" />

        </div>
    </div>
    <div class="" v-else-if="contributorStore.err">{{ contributorStore.err }}</div>
    <div class="" v-else="contributorStore.isLoading"></div>
    <div class="mx-auto w-24 h-1 my-12 bg-gradient-to-r from-gray-500 to-gray-400 rounded-full"></div>
</template>

<script setup>
import { onMounted, reactive } from 'vue';
import Course from '../components/Course.vue';
import Lab from '../components/Lab.vue';
import NewCourseForm from '../components/NewCourseForm.vue';
import { useRoute, useRouter } from 'vue-router';
import { useContributorStore } from '../stores/contributor.store';
import { useAuthStore } from '../stores/auth.store';
import { useUserStore } from '../stores/user.store'

const { params } = useRoute()
const router = useRouter()

const userStore = useUserStore()
const contributorStore = useContributorStore()
const authStore = useAuthStore()

const isShow = reactive({
    newCourse: false,
    newLab: false
})

onMounted(async () => {
    // console.log(userStore.user);
    userStore.user = JSON.parse(localStorage.getItem('userInfo'))
    await contributorStore.getContributorBySlug(params.slug)
    // console.log(contributorStore.result);
    if (contributorStore.result.code === 404) {
        router.push({ name: "NotFound" })
    }
})

</script>