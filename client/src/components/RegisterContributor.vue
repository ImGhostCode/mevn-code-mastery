<template>
    <div
        class="absolute top-0 left-0 flex justify-center items-center w-full h-full bg-transparent text-gray-300 font-Roboto ">
        <div class="w-[700px] bg-gray-900 p-6 rounded-md">
            <div class="flex justify-between mb-6">
                <h1 class="text-3xl font-bold text">Register Contributor</h1>
                <span class="" @click="() => emits('show')"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </span>
            </div>

            <form @submit.prevent="handleRegister" enctype="multipart/form-data">
                <div class=" flex flex-col mb-8">
                    <label for="name">Name</label>
                    <input required type="text" v-model="newContributor.name" name="name"
                        class="bg-inherit border-slate-600 border-2 rounded-sm outline-none px-2 py-3 text-sm" id="name">
                </div>
                <div class="flex flex-col mb-8">
                    <label for="pic">Picture
                        <img class="h-32 w-32 mx-auto rounded-full" :src="url || 'https://fireship.io/img/ui/avatar.svg'"
                            alt="av">
                    </label>
                    <input required type="file" name="pic" id="pic" accept="image/png, image/jpeg" @change="onFileSelected"
                        hidden class="bg-inherit border-slate-600 border-2 rounded-sm outline-none px-2 py-3 text-sm">
                </div>
                <div class="flex flex-col mb-8">
                    <label for="bio">Bio</label>
                    <input required type="text" v-model="newContributor.bio" name="bio"
                        class="bg-inherit border-slate-600 border-2 rounded-sm outline-none px-2 py-3 text-sm" id="bio">
                </div>
                <div class="flex flex-col mb-8">
                    <label for="github">Github</label>
                    <input required type="text" v-model="newContributor.url[0].url" name="github"
                        class="bg-inherit border-slate-600 border-2 rounded-sm outline-none px-2 py-3 text-sm" id="github">
                </div>
                <div class="flex flex-col mb-8">
                    <label for="linkedin">Linkedin</label>
                    <input required type="text" v-model="newContributor.url[1].url" name="linkedin"
                        class="bg-inherit border-slate-600 border-2 rounded-sm outline-none px-2 py-3 text-sm"
                        id="linkedin">
                </div>
                <div class="flex flex-col mb-8">
                    <label for="youtube">Youtube</label>
                    <input required type="text" v-model="newContributor.url[2].url"
                        class="bg-inherit border-slate-600 border-2 rounded-sm outline-none px-2 py-3 text-sm" id="youtube">
                </div>
                <button type="submit"
                    class="uppercase text-white bg-green-500 px-3 mb-6 border-none outline-none py-2 text-[16px] font-medium">
                    Submit</button>


                <!-- <p class="text-sm text-green-600 font-Roboto mb-3 font-bold" v-if="isShow.updateSuccessful">
                    User update successful!</p> -->

            </form>
        </div>
    </div>
</template>

<script setup>
import { useToast } from 'vue-toast-notification';
import { ref, reactive } from 'vue'
import { useContributorStore } from '../stores/contributor.store'
import { useUserStore } from '../stores/user.store'
import { useAuthStore } from '../stores/auth.store';
import { useRouter } from 'vue-router';
const selectedFile = ref(null)
const url = ref(null)
const newContributor = reactive({
    name: '', imageUrl: "https://fireship.io/img/ui/avatar.svg", bio: '', url: [{ title: 'Github', url: '' }, { title: 'Linkedin', url: '' }, { title: 'Youtube', url: '' }],
})
const emits = defineEmits([['show']])
const contributorStore = useContributorStore()
const userStore = useUserStore()
const authStore = useAuthStore()
const $toast = useToast();

const onFileSelected = (event) => {
    selectedFile.value = event.target.files[0]
    url.value = URL.createObjectURL(selectedFile.value)
    newContributor.imageUrl = url.value
}
async function handleRegister() {

    const formData = new FormData()
    if (selectedFile.value) {
        formData.append('image', selectedFile.value)
    }
    formData.append('newContributor', JSON.stringify(newContributor))
    await contributorStore.createContributor(formData)
    if (contributorStore.err) {
        $toast.error(contributorStore.err)
        return
    }
    $toast.success(contributorStore.result.message)
    emits('show')
    await userStore.getUserById(authStore?.user?._id)
    authStore.user = userStore.user

}
</script>