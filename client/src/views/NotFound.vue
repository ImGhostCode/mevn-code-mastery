<template>
    <div class="flex justify-center items-center flex-col my-16">
        <h1 class="text-5xl font-extrabold uppercase mb-4">404 Not found</h1>
        <div class="mx-auto w-24 h-1 my-24 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"></div>

        <router-link :to="{ name: 'Home', params: {} }"
            class=" block text-black bg-white w-max py-2 px-3 uppercase text-sm">
            Home
        </router-link>

        <div class="mx-auto w-24 h-1 my-12 bg-gradient-to-r from-gray-500 to-gray-400 rounded-full"></div>

    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>