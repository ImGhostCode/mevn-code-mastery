<template>
    <header class="flex flew-row justify-center w-full shadow-md px-5 lead text-md bg-inherit text-lg   ">
        <div class="flex basis-3/4">
            <router-link :to="{ name: 'Home', params: {} }" class="w-[80px] h-[60px] my-2 mr-3 rounded-md overflow-hidden">
                <img src="../assets/image/code-mastery.png" alt="code mastery" class="h-full w-full object-cover">
            </router-link>

            <ul class="flex flex-row text-white text-lg font-semisemibold justity-center items-center">
                <li class="py-4 px-3 mx-2 hover:text-purple-600">
                    <router-link :to="{ name: 'Home', params: {} }">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                    </router-link>
                </li>
                <li class="py-4 px-3 mx-2 hover:text-purple-600">
                    <router-link :to="{ name: 'Labs', params: {} }">Labs</router-link>
                </li>
                <li class="py-4 px-3 mx-2 hover:text-purple-600">
                    <router-link :to="{ name: 'Courses', params: {} }">Courses</router-link>
                </li>
            </ul>
            <!-- <div
                class="cm-categories px-3 py-8 my-auto leading-3 relative group after:absolute after:top-full after:w-full after:h-3 after:block">
                <p class="text-white font-semibold hover:text-purple-600">
                    Thể loại</p>

                <ul
                    class="absolute top-full left-0 hidden group-hover:block animate-show delay-1000 bg-white shadow-md w-80 p-3 mt-2">
                    <li class="px-3 py-3 hover:text-purple-600 text-sm font-semisemibold"><a href="#">Ngoại ngữ</a></li>
                    <li class="px-3 py-3 hover:text-purple-600 text-sm font-semisemibold"><a href="#">Marketing</a></li>
                    <li class="px-3 py-3 hover:text-purple-600 text-sm font-semisemibold"><a href="#">Tin học văn phòng</a></li>
                    <li class="px-3 py-3 hover:text-purple-600 text-sm font-semisemibold"><a href="#">Thiết kế</a></li>
                    <li class="px-3 py-3 hover:text-purple-600 text-sm font-semisemibold"><a href="#">Kinh doanh và khởi
                            nghiệp</a></li>
                    <li class="px-3 py-3 hover:text-purple-600 text-sm font-semisemibold"><a href="#">Kỹ năng mềm</a></li>
                    <li class="px-3 py-3 hover:text-purple-600 text-sm font-semisemibold"><a href="#">Sales Bán hàng</a></li>
                </ul>
            </div> -->
            <div
                class="cm-search my-3 flex flew-row flex-1 bg-gray-700 justify-center items-center border border-slate-300 focus-within:border-purple-600 hover:border-purple-600 rounded-full overflow-hidden">
                <span class="px-3 my-2 text-white bg-inherit">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 font-semibold">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </span>
                <input type="text"
                    class="h-full w-full focus:outline-none max-w-[90%] px-2 py-2 bg-inherit placeholder:text-white text-white  "
                    placeholder="Search" />
            </div>
        </div>


        <div class="flex justify-end basis-1/4 ">

            <!-- <a  href="#" class="text-sm px-3 my-auto text-center mr-3 leading-3">
                <svg class="text-sm h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
            </a> -->
            <button v-if="!authStore.user"
                class="px-3 h-[40px] my-auto leading-3 bg-white hover:text-white hover:bg-purple-600 text-black rounded-md mr-4  uppercase text-xl ">
                <router-link :to="{ name: 'Login', params: {} }">Login</router-link>
            </button>
            <button v-if="!authStore.user"
                class="px-3 h-[40px] my-auto leading-3 bg-white hover:text-white hover:bg-purple-600 text-black rounded-md uppercase text-xl">
                <router-link :to="{ name: 'Register', params: {} }">Sign up</router-link>
            </button>

            <router-link v-if="authStore.user" :to="{ name: 'Dashboard', params: {} }" class="relative flex">
                <img src="https://fireship.io/img/ui/avatar.svg" alt="avatar" class="h-12 w-12 my-auto">
                <span class="absolute bg-slate-800 px-2 rounded-lg text-sm bottom-0">Basic</span>
            </router-link>

        </div>

    </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useAuthStore } from '../stores/auth.store';
import { onMounted } from 'vue';

const authStore = useAuthStore()

onMounted(() => {
})
</script>