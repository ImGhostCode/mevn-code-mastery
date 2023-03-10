<template>
    <div class="container w-[75%] mx-auto flex justify-between gap-4 my-20">
        <div class="basis-3/4">
            <div class="mb-4">
                <iframe class="w-full h-[600px]" src="https://www.youtube.com/embed/gUYBFDPZ5qk"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </div>
            <div class="px-4 py-5 bg-gray-600 rounded-lg mb-5">
                <a href="#" class="inline-flex items-center">
                    <img src="https://fireship.io/contributors/img/jeff-delaney.webp" alt="author"
                        class="h-10 w-10 mr-3 rounded-full">
                    <div class="text-sm">
                        <h4 class="mb-1">By Jeff Delaney</h4>
                        <p class="text-gray-400 text-xs">Posted Dec 17, 2022</p>
                    </div>
                </a>
            </div>

            <h1 class="text-5xl text-yellow-400 font-extrabold uppercase mb-10">
                Pocketbase Chat App
            </h1>
            <p class="mb-8 font-Roboto">In the following tutorial we will build a chat app with Pocketbase and Svelte.
                Pocketbase is a
                backend
                (inspired by Firebase) structured as a single executable file. It provides a realtime DB based on SQLite and
                user authentication system that allows us to quickly prototype and deploy a chat app.</p>

            <ul>
                <li class="text-4xl text-white font-extrabold uppercase mb-10">Pocketbase Setup</li>
                <li class="text-4xl text-white font-extrabold uppercase mb-10">Frontend App</li>
                <li class="text-4xl text-white font-extrabold uppercase mb-10">Deploying Pocketbase to Linode</li>
            </ul>
            <div class="mx-auto w-24 h-1 my-12 bg-gradient-to-r from-gray-500 to-gray-400 rounded-full"></div>
        </div>

        <div class="basis-1/4 ">
            <ul class="p-5 text-gray-300">
                <li class="mb-2"><a href="#">Pocketbase Setup</a></li>
                <li class="mb-2"><a href="#">Frontend App</a></li>
                <li class="mb-2"><a href="#">Deploying Pocketbase to Linode</a></li>
            </ul>
        </div>
    </div>
</template>