<template>
    <div class="p-4 w-[900px] mx-auto">
        <h1 class="text-4xl  text-yellow-400 font-extrabold uppercase mb-10 font-Cubano">Create New Course</h1>
        <form class="space-y-4" @submit.prevent="createCourse">
            <div>
                <label class="block font-medium">Title</label>
                <input v-model="course.title" type="text" required
                    class="w-full p-2 border-gray-400 outline-none bg-transparent border rounded-md">
            </div>
            <div>
                <label class="block font-medium">Description</label>
                <textarea v-model="course.description" required
                    class="w-full p-2 border-gray-400 outline-none bg-transparent border rounded-md"></textarea>
            </div>
            <div>
                <label class="block font-medium">Image URL</label>
                <input v-model="course.imgUrl" type="text" required
                    class="w-full p-2 border-gray-400 outline-none bg-transparent border rounded-md">
            </div>
            <div>
                <label class="block font-medium">Video URL</label>
                <input v-model="course.videoUrl" type="text" required
                    class="w-full p-2 border-gray-400 outline-none bg-transparent border rounded-md">
            </div>
            <div>
                <label class="block font-medium">Will Learn</label>
                <textarea v-model="course.willLearn" required
                    class="w-full p-2 border-gray-400 outline-none bg-transparent border rounded-md"></textarea>
            </div>
            <div>
                <label class="block font-medium">Price</label>
                <input v-model="course.price" type="number" required
                    class="w-full p-2 border-gray-400 outline-none bg-transparent border rounded-md">
            </div>
            <div>
                <label class="block font-medium">Chapters</label>
                <div v-for="(chapter, index) in course.chapters" :key="index" class="space-y-2">
                    <input v-model="chapter.title" type="text" required
                        class="w-full p-2 border-gray-400 outline-none bg-transparent border rounded-md">
                    <textarea v-model="chapter.description" required
                        class="w-full p-2 border-gray-400 outline-none bg-transparent border rounded-md"></textarea>
                </div>
                <button type="button" @click="addChapter" class="mt-2 text-blue-600 hover:text-blue-800">Add
                    Chapter</button>
            </div>
            <div>
                <label class="block font-medium">Tags</label>
                <input v-model="tags" type="text" required
                    class="w-full p-2 border-gray-400 outline-none bg-transparent border rounded-md">
            </div>
            <button type="submit" class="bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded-md">Create
                Course</button>
        </form>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useToast } from 'vue-toast-notification';
import { useAuthStore } from '../stores/auth.store';
import { useCourseStore } from '../stores/course.store';
import { useContributorStore } from '../stores/contributor.store';
import { useRoute, useRouter } from 'vue-router';

const { params } = useRoute()
const contributorStore = useContributorStore()
const authStore = useAuthStore()
const courseStore = useCourseStore()
const $toast = useToast();
const emits = defineEmits(['show'])
const course = ref({
    title: '',
    description: '',
    authorID: '',
    imgUrl: '',
    videoUrl: '',
    willLearn: '',
    price: '',
    chapters: [
        {
            title: '',
            description: ''
        }
    ]
})

const tags = ref('')

const addChapter = () => {
    const chapterFormIsValid = course.value.chapters[course.value.chapters.length - 1].title !== '' && course.value.chapters[course.value.chapters.length - 1].description !== ''

    if (chapterFormIsValid) {
        const chapter = {
            title: chapterForm.title,
            description: chapterForm.description
        }
        course.value.chapters.push(chapter)
        resetChapterForm()
        $toast.success('Chapter added successfully')
    } else {
        $toast.error('Please fill out all fields')
    }
}

const resetChapterForm = () => {
    chapterForm.title = ''
    chapterForm.description = ''
}

const chapterForm = ref({
    title: '',
    description: ''
})

async function createCourse() {

    const newCourse = {
        title: course.value.title.trim(),
        description: course.value.description.trim(),
        authorID: authStore.user.contributorId,
        imgUrl: course.value.imgUrl.trim(),
        videoUrl: course.value.videoUrl.trim(),
        willLearn: course.value.willLearn.trim(),
        price: course.value.price,
        chapters: course.value.chapters,
        tags: tags.value.trim().split(',')

    }
    console.log(newCourse);

    await courseStore.createNewCourse(newCourse)
    if (courseStore.err) {
        $toast.error(courseStore.err)
        return
    }
    $toast.success(courseStore.result.message)
    await contributorStore.getContributorBySlug(params.slug)
    emits('show')

}
//.split(/\r?\n/)
</script>