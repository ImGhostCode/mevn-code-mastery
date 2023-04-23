<template>
    <div class="w-[768px] mx-auto mb-16" v-if="userStore.user">
        <h1 class="text-5xl font-bold text-center uppercase mb-4 mt-16">{{ userStore.user.username }}</h1>

        <div class="mx-auto w-24 h-1 my-12 bg-gradient-to-r from-green-600 to-green-400 rounded-full"></div>

        <div class="font-Roboto text-xl text-slate-300 mb-16  ">
            <div class="mb-4">User ID: <span class="text-white font-bold">{{ userStore.user._id }}</span>
            </div>

            <div class="mb-4">PRO Status: <span class="font-Cubano">{{ userStore.user.proStatus }}</span></div>

            <div class="mb-4">Account Email: <span class="text-white font-bold">{{ userStore.user.email }}</span></div>

            <button @click="handleSignout"
                class="block text-black bg-white w-max py-2 px-3 uppercase text-sm font-semibold">
                sign out
            </button>
        </div>

        <h1 class="text-5xl font-bold text-center uppercase mb-4">Manage account</h1>
        <div class="mx-auto w-24 h-1 my-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>

        <button
            class="font-Roboto text-yellow-400 block uppercase  bg-blue-600 px-3 mb-6 border-none outline-none py-2 text-[16px] font-medium"
            @click="isShow.register = !isShow.register">Register
            Contributor</button>

        <RegisterContributor v-if="isShow.register" @show="() => isShow.register = !isShow.register" />
        <div class="font-Roboto">
            <button
                class="block uppercase text-white bg-blue-600 px-3 mb-6 border-none outline-none py-2 text-[16px] font-medium"
                @click="isShow.update = !isShow.update">Update
                address</button>

            <form @submit.prevent="handleUpdateUser" v-if="isShow.update">
                <div class="flex flex-col mb-8">
                    <label for="name">Name</label>
                    <input type="text" v-model="dataUpdate.username"
                        class="bg-inherit border-slate-600 border-2 rounded-sm outline-none px-2 py-3 text-sm" id="name">
                </div>
                <div class="flex flex-col mb-8">
                    <label for="city">City</label>
                    <input type="text" v-model="dataUpdate.city"
                        class="bg-inherit border-slate-600 border-2 rounded-sm outline-none px-2 py-3 text-sm" id="city">
                </div>
                <div class="flex flex-col mb-8">
                    <label for="phone">Phone</label>
                    <input type="text" v-model="dataUpdate.phone"
                        class="bg-inherit border-slate-600 border-2 rounded-sm outline-none px-2 py-3 text-sm" id="phone">
                </div>
                <button
                    class="uppercase text-white bg-green-500 px-3 mb-6 border-none outline-none py-2 text-[16px] font-medium"
                    :disabled="userStore.isLoading">{{ userStore.isLoading ? "Saving..." : "Save" }}</button>


                <p class="text-sm text-green-600 font-Roboto mb-3 font-bold" v-if="isShow.updateSuccessful">
                    User update successful!</p>

            </form>

            <button @click="isShow.subscription = !isShow.subscription"
                class="block uppercase text-white bg-blue-600 px-3 mb-6 border-none outline-none py-2 text-[16px] font-medium">Manage
                subscription</button>


            <ul v-if="isShow.subscription" class="grid grid-cols-2 gap-4">
                <!-- <li>
                    <Course></Course>
                </li>
                <li>
                    <Course></Course>
                </li>
                <li>
                    <Course></Course>
                </li>
                <li>
                    <Course></Course>
                </li>
                <li>
                    <Course></Course>
                </li> -->
                test
            </ul>

        </div>
        <h1 class="text-5xl font-bold text-center uppercase mb-4">Danger zone</h1>

        <div class="mx-auto w-24 h-1 my-12 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>

        <button @click="handleDeleteAccount"
            class="block text-white bg-red-600 font-semibold px-3 mb-6 border-none outline-none py-2 text-[16px] font-Roboto">Delete
            this Account</button>
    </div>
    <div class="" v-else-if="userStore.err">{{ userStore.err }}</div>
    <div class="" v-else-if="userStore.isLoading">Loading...</div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';
import Course from '../components/Course.vue';
import { useUserStore } from '../stores/user.store'
import { useAuthStore } from '../stores/auth.store';
import { useRouter } from 'vue-router';
import RegisterContributor from '../components/RegisterContributor.vue';

const isShow = ref({
    update: false,
    subscription: false,
    updateSuccessful: false,
    register: false
})


const userStore = useUserStore()
const authStore = useAuthStore()
const router = useRouter()

async function handleSignout() {
    await authStore.logout()
    if (authStore.err) {
        console.log(authStore.err);
        return
    }
    router.push({ name: "Login", params: {} })
}

onMounted(async () => {
    await userStore.getUserById(authStore?.user?._id)

})

const dataUpdate = reactive({
    username: '',
    city: '',
    phone: ''
})


async function handleUpdateUser() {
    isShow.value.updateSuccessful = false
    await userStore.updateUser(dataUpdate)
    isShow.value.updateSuccessful = true

}


async function handleDeleteAccount() {
    if (confirm('Are you sure ?')) {
        await authStore.deleteAccount(authStore.user._id)
        await authStore.logout()
        if (authStore.err) {
            console.log(authStore.err);
            return
        }
        router.push({ name: "Login", params: {} })
    }
}

</script>