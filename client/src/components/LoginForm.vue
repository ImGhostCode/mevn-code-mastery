<template>
    <div class="py-8 px-5 w-[450px] bg-white rounded-lg shadow-xl text-black">
        <h1 class="text-3xl text-center font-bold mb-6">Chào mừng đến với <p>Code Mastery</p>
        </h1>
        <form method="post" class="cm-login-form">
            <div class="flex flex-col">
                <label class="uppercase text-xs mb-1" for="email">Email</label>
                <input type="email" name="email" id="email"
                    class="border-2 mb-3 p-3 h-full w-full border-purple-200 outline-none focus:border-purple-400 rounded-md"
                    placeholder="Email">
            </div>
            <div class="flex flex-col">
                <label class="uppercase text-xs mb-1" for="password">Mật khẩu</label>
                <input type="password" name="password" id="password"
                    class="border-2 mb-3 p-3 h-full w-full border-purple-200 outline-none focus:border-purple-400 rounded-md"
                    placeholder="Mật khẩu">
            </div>
            <!-- <div class="">
            <input type="checkbox" name="" id="">
            <span>Ghi nho tai khoan</span>
        </div> -->
            <button
                class="uppercase w-full p-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md mb-4 text-[15px]">Đăng
                nhập</button>

            <div class="text-center mb-4 text-sm">
                <p class="mb-2">Chưa có tài khoản?&nbsp;
                    <router-link :to="{ name: 'Register', params: {} }" class="underline text-purple-800">Đăng
                        ký</router-link>
                </p>
                <router-link :to="{ name: 'Register', params: {} }" class="hover:underline">Quên mật khẩu ?</router-link>
            </div>

            <div class="text-center">
                <p class="">Hoặc đăng nhập với</p>
                <button class="w-full py-2 px-auto border-2 rounded-full border-gray-300 hover:bg-gray-200 my-3">
                    <router-link :to="{ name: 'Register', params: {} }">
                        <i class="fa-brands fa-facebook text-purple-800 text-xl"></i>
                        Tiếp tục với Google
                    </router-link>
                </button>
                <button class="w-full py-2 px-auto border-2 rounded-full border-gray-300 hover:bg-gray-200">
                    <router-link :to="{ name: 'Register', params: {} }" class="text-left">
                        <img src="../assets/image/google-18px.svg" alt="google" class="inline-block">
                        Tiếp tục với Facebook
                    </router-link>
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>