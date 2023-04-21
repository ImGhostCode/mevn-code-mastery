<template>
    <div class="py-8 px-5 w-[450px] bg-white rounded-lg shadow-xl text-black">
        <h1 class="text-3xl text-center font-bold mb-6">Chào mừng đến với <p>Code Mastery</p>
        </h1>
        <form @submit.prevent="handleLogin" class="cm-login-form">
            <div class="flex flex-col mb-3">
                <label class="uppercase text-xs mb-1" for="email">Email</label>
                <input type="email" name="email" id="email" v-model="data.email"
                    class="border-2 font-Roboto mb-3 p-3 h-full w-full border-purple-200 outline-none focus:border-purple-400 rounded-md"
                    placeholder="Email">
                <p class="text-xs text-red-600 font-Roboto" v-if="error.email">{{ error.email }}</p>
            </div>
            <div class="flex flex-col mb-3">
                <label class="uppercase text-xs mb-1" for="password">Mật khẩu</label>
                <input type="password" name="password" id="password" v-model="data.password"
                    class="border-2 font-Roboto mb-3 p-3 h-full w-full border-purple-200 outline-none focus:border-purple-400 rounded-md"
                    placeholder="Mật khẩu">
                <p class="text-xs text-red-600 font-Roboto" v-if="error.password">{{ error.password }}</p>

            </div>
            <!-- <div class="">
            <input type="checkbox" name="" id="">
            <span>Ghi nho tai khoan</span>
        </div> -->
            <button :disabled="authStore.isLoading"
                class="uppercase w-full p-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md mb-4 text-[15px]"> {{
                    authStore.isLoading ? 'Loading...' : 'Đăng nhập' }}</button>
            <p class="text-xs text-green-600 font-Roboto text-center mb-3 font-bold"
                v-if="authStore.result?.code && authStore.result?.code === 200">
                Đăng nhập thành công</p>
            <p class="text-xs text-red-600 font-Roboto text-center mb-3 font-bold" v-if="authStore.err">
                {{ authStore.err }}</p>

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
import { ref, reactive, onMounted } from 'vue';
import { RouterLink } from 'vue-router'
import { useAuthStore } from '../stores/auth.store';
import { useRouter } from "vue-router"

const data = reactive({
    email: '',
    password: ''
})
const error = reactive({
    email: '',
    password: ''
})

const authStore = useAuthStore()
const router = useRouter()

async function handleLogin() {
    console.log(data);
    if (!data.email || !(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(data.email))) {
        error.email = "Email không hợp lệ"
        return
    }
    if (data.password.length < 6) {
        error.email = ''
        error.password = "Password phải lớn hơn 6 ký tự"
        return
    } else {
        error.password = ''
    }

    await authStore.login(data)
    if (authStore.result?.code && authStore.result?.code === 200) {
        setTimeout(() => { router.push({ name: 'Home', params: {} }) }, 2000)

    }
}


</script>