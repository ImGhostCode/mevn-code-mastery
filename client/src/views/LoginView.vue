<template>
    <div
        class="bg-[url('./src/assets/image/bg01.jpg')] w-[100vw] h-[100vh] bg-no-repeat bg-cover bg-center flex justify-center gap-12 items-center">
        <div class="w-[450px]">
            <router-link :to="{ name: 'Home', params: {} }">
                <img src="../assets/image/code-mastery.png" alt="logo" class="h-60 w-96 mb-4 rounded-xl">
                <div class="text-2xl text-white text">Hệ thống đào tạo trực tuyến, cổng kết nối Chuyên gia
                    với Học
                    viên
                </div>
            </router-link>
        </div>
        <login-form />
    </div>
</template>

<script setup>
import LoginForm from '../components/LoginForm.vue';
</script>