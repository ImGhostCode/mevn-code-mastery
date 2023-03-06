<template>
    <div class="w-[768px] mx-auto mb-16">
        <h1 class="text-5xl font-bold text-center uppercase mb-4 mt-16">Ghost</h1>

        <div class="mx-auto w-24 h-1 my-12 bg-gradient-to-r from-green-600 to-green-400 rounded-full"></div>

        <div class="font-Roboto text-xl text-slate-300 mb-16    ">
            <div class="mb-4">User ID: <span class="text-white font-bold">i2rKOncDDBSSxPKG56mqmWcNWkf1</span>
            </div>

            <div class="mb-4">PRO Status: <span class="font-Cubano">basic</span></div>

            <div class="mb-4">Account Email: <span class="text-white font-bold">thanhliem91.2016@gmail.com</span></div>

            <a href="#" class="block text-black bg-white w-max py-2 px-3 uppercase text-sm font-semibold">
                sign out
            </a>
        </div>

        <h1 class="text-5xl font-bold text-center uppercase mb-4">Manage account</h1>
        <div class="mx-auto w-24 h-1 my-12 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>

        <div class="font-Roboto">
            <button
                class="block uppercase text-white bg-blue-600 px-3 mb-6 border-none outline-none py-2 text-[16px] font-medium"
                @click="isShow.update = !isShow.update">Update
                address</button>

            <form action="" method="post" v-if="isShow.update">
                <div class="flex flex-col mb-8">
                    <label for="name">Name</label>
                    <input type="text"
                        class="bg-inherit border-slate-600 border-2 rounded-sm outline-none px-2 py-3 text-sm" id="name">
                </div>
                <div class="flex flex-col mb-8">
                    <label for="city">City</label>
                    <input type="text"
                        class="bg-inherit border-slate-600 border-2 rounded-sm outline-none px-2 py-3 text-sm" id="city">
                </div>
                <div class="flex flex-col mb-8">
                    <label for="phone">Phone</label>
                    <input type="text"
                        class="bg-inherit border-slate-600 border-2 rounded-sm outline-none px-2 py-3 text-sm" id="phone">
                </div>

                <button
                    class="uppercase text-white bg-green-500 px-3 mb-6 border-none outline-none py-2 text-[16px] font-medium">Save</button>

            </form>

            <button @click="isShow.subscription = !isShow.subscription"
                class="block uppercase text-white bg-blue-600 px-3 mb-6 border-none outline-none py-2 text-[16px] font-medium">Manage
                subscription</button>


            <ul v-if="isShow.subscription" class="grid grid-cols-2 gap-4">
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
                </li>
                <li>
                    <Course></Course>
                </li>

            </ul>

        </div>
        <h1 class="text-5xl font-bold text-center uppercase mb-4">Danger zone</h1>

        <div class="mx-auto w-24 h-1 my-12 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>

        <button
            class="block text-white bg-red-600 font-semibold px-3 mb-6 border-none outline-none py-2 text-[16px] font-Roboto">Delete
            this Account</button>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import Course from '../components/Course.vue';

const isShow = ref({
    update: false,
    subscription: false
})
</script>