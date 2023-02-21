<template>
    <header class="flex flew-row justify-center w-full bg-white shadow-md px-5 lead text-md">
        <div class="flex basis-3/4">
            <a href="/" class="w-[80px] h-[60px] my-2 mr-3 rounded-md overflow-hidden">
                <img src="../assets/image/code-mastery.png" alt="code mastery" class="h-full w-full object-cover">
            </a>
            <div class="cm-categories px-3 py-3 my-auto leading-3 ">The loai</div>
            <div
                class="cm-search my-3 flex flew-row flex-1 justify-center items-center border border-black rounded-full overflow-hidden">
                <span class="px-3 my-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </span>
                <input type="text" class="h-full w-full focus:outline-none max-w-[90%] px-2 py-2"
                    placeholder="Tim khoa hoc, gian vien" />
            </div>
        </div>


        <div class="flex justify-end basis-1/4">

            <a href="#" class="text-sm px-3 my-auto text-center mr-3 leading-3">
                <svg class="text-sm h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
            </a>
            <button class="px-3 h-[40px] my-auto leading-3 bg-white text-black rounded-md mr-4 border border-black"><a
                    href="#">Login</a></button>
            <button class="px-3 h-[40px] my-auto leading-3 bg-black text-white rounded-md"><a href="#">Sign up</a></button>

        </div>

    </header>
</template>