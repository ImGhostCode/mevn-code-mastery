<template>
    <div class="py-8 px-5 w-[450px] bg-white rounded-lg shadow-xl text-black">
        <h1 class="text-3xl text-center mb-6">Đăng ký tài khoản <p>Code Mastery</p>
        </h1>
        <form method="post" class="cm-login-form">
            <div class="flex flex-col mb-3">
                <label class="uppercase text-xs mb-1" for="username">Username</label>
                <input type="text" name="username" id="username"
                    class="border-2 p-3 h-full w-full border-purple-200 outline-none focus:border-purple-400 rounded-md font-Roboto"
                    placeholder="Username" v-model="data.username">
                <p class="text-xs text-red-600 font-Roboto" v-if="error.username">{{ error.username }}</p>
            </div>
            <div class="flex flex-col mb-3">
                <label class="uppercase text-xs mb-1" for="email">Email</label>
                <input type="email" name="email" id="email"
                    class="border-2 p-3 h-full w-full border-purple-200 outline-none focus:border-purple-400 rounded-md font-Roboto"
                    placeholder="Email" v-model="data.email">
                <p class="text-xs text-red-600 font-Roboto" v-if="error.email">{{ error.email }}</p>

            </div>
            <div class="flex flex-col">
                <label class="uppercase text-xs mb-1" for="phone">Số điện thoại</label>
                <div class="flex border-2 border-purple-200 rounded-md focus-within:border-purple-400 mb-3">
                    <img src="../assets/image/vietnam.jpeg" alt="vietnam" class="h-[20px] w-6 my-auto ml-3 inline-block">
                    <input type="phone" name="phone" id="phone" class="p-3 h-full w-full border-none outline-none"
                        placeholder="038 123 45 67" v-model="data.phone">
                </div>
            </div>
            <div class="flex flew-row gap-4">
                <div class="flex flex-col mb-3">
                    <label class="uppercase text-xs mb-1" for="password">Mật khẩu</label>
                    <input type="password" name="password" id="password"
                        class="border-2 p-3 h-full w-full border-purple-200 outline-none focus:border-purple-400 rounded-md font-Roboto"
                        placeholder="Mật khẩu" v-model="data.password">
                    <p class="text-xs text-red-600 font-Roboto" v-if="error.password || error.repassword">{{ error.password
                        || error.repassword }}</p>

                </div>
                <div class="flex flex-col mb-3">
                    <label class="uppercase text-xs mb-1" for="repassword">Nhập lại mật khẩu</label>
                    <input type="password" name="repassword" id="repassword"
                        class="border-2 p-3 h-full w-full border-purple-200 outline-none focus:border-purple-400 rounded-md font-Roboto"
                        placeholder="Mật khẩu" v-model="data.repassword">
                    <p class="text-xs text-red-600 font-Roboto" v-if="error.repassword">{{ error.repassword }}</p>

                </div>
            </div>

            <!-- <div class="">
            <input type="checkbox" name="" id="">
            <span>Ghi nho tai khoan</span>
        </div> -->
            <button @click.prevent="handleRegister" :disabled="authStore.isLoading"
                class="uppercase w-full p-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md mb-4 font-bold text-[15px]">
                {{ authStore.isLoading ? "Loading.." : "Đăng ký" }}
            </button>
            <p class="text-xs text-green-600 font-Roboto text-center mb-3 font-bold"
                v-if="authStore.result?.code && authStore.result?.code === 200">
                Đăng ký thành công</p>
            <p class="text-xs text-red-600 font-Roboto text-center mb-3 font-bold" v-if="authStore.err">
                {{ authStore.err }}</p>


            <div class="text-center mb-4 text-sm">
                <p class="mb-2">Bạn đã có tài khoản?&nbsp;
                    <router-link :to="{ name: 'Login', params: {} }" class="underline text-purple-600">Đăng
                        nhập</router-link>
                </p>

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
import { ref, reactive } from 'vue';
import { RouterLink } from 'vue-router'
import { useAuthStore } from '../stores/auth.store';
import { useRouter } from "vue-router"

const data = reactive({
    username: '',
    email: '',
    password: '',
    phone: '',
    repassword: '',
})
const error = reactive({
    username: '',
    email: '',
    password: '',
    phone: '',
    repassword: '',
})

const authStore = useAuthStore()
const router = useRouter()

async function handleRegister() {

    if (data.username.length < 3) {
        error.username = "Username phải lớn hơn 3 ký tự"
        return
    }
    if (!data.email || !(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(data.email))) {
        error.username = ''
        error.email = "Email không hợp lệ"
        return
    }
    if (data.password.length < 6) {
        error.email = ''
        error.password = "Password phải lớn hơn 6 ký tự"
        return
    }
    if (data.password !== data.repassword) {
        error.password = ''
        error.password = error.repassword = "Mật khẩu không trùng khớp"
        return
    }

    await authStore.register({ data })
    if (authStore.result?.code && authStore.result?.code === 200) {
        setTimeout(() => { router.push({ name: 'Home', params: {} }) }, 2000)

    }
}


</script>