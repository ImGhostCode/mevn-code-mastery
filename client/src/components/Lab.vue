<template>
    <div class="card rounded-xl overflow-hidden mb-12 min-h-[400px] hover:scale-105 transition-all">
        <router-link :to="{ name: 'LabDetail', params: { slug: props.info.slug } }" class="h-full block">
            <div class="card-header">
                <img :src="props.info.imgUrl" :alt="props.info.slug">
            </div>
            <div class="card-body bg-gray-800 p-5 text-slate-400 rounded-b-xl">
                <h2 class="text-xl text-white uppercase font-Cubano">{{ props.info.title }}</h2>
                <p class="my-3 leading-8 font-Roboto min-h-[100px] ">{{ props.info.description.split('.')[0] }}
                </p>

                <div class="">
                    <span class="tag text-blue-400 p-2 bg-black" v-for="(tag, index) in props.info.tags" :id="index">#{{ tag
                    }}</span>
                </div>
            </div>
        </router-link>
    </div>
</template>


<script setup>
import { RouterLink } from 'vue-router';
const props = defineProps(['info'])
// console.log(props.info.slug);


</script>