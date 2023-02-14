<template>
  <div class="content-wrapper font-Karla max-w-screen-2xl text-base mx-auto px-8">
    <header class="p-6 mx-auto relative">
      <nav class="flex justify-between items-center flex-grow">
        <div class="logo basis-2/6 text-center text-xl font-semibold cursor-pointer">
          CoffeeStyle.
        </div>
        <ul id="cf-top-menu"
          class="basis-3/6 lg:basis-1/6 hidden lg:flex lg:justify-end lg:items-center lg:gap-8 uppercase text-sm text-gray-600 font-medium">
          <li class="cf-top-menu-item">
            <a href="#">Home</a>
          </li>
          <li class="cf-top-menu-item">
            <a href="#">Products</a>
          </li>
          <li class="cf-top-menu-item">
            <a href="#">Blog</a>
          </li>
          <li class="cf-top-menu-item">
            <a href="#">About</a>
          </li>
          <li class="cf-top-menu-item">
            <a href="#">StyleGuide</a>
          </li>
          <li class="cf-top-menu-item">
            <a href="#">ghost</a>
          </li>
        </ul>

        <ul
          class="basis-3/6 flex lg:justify-start justify-end ml-16 items-center text-sm text-gray-600 font-medium uppercase">
          <li class="cf-top-menu-item">
            <a href="#" class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="cf-icon">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <span class="mx-2">Cart</span>
              <span class="mx-2 cf-badge-circle bg-orange-500 text-white">10</span>
            </a>
          </li>
        </ul>

        <div class="basis-1/6 lg:hidden flex items-center cursor-pointer px-2 sm:px-4">
          <svg id="cf-toggle-top-menu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
          </svg>
        </div>
      </nav>
    </header>

    <main>
      <!-- Slider -->
      <div
        class="slider h-[530px] bg-[url('https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7a58aaecdfba_Header-Pic.jpg')] bg-cover bg-no-repeat bg-bottom">
        <div class="w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-30">
          <div class="text-white mx-16 text-center">
            <div class="uppercase mb-6">BEST PLACE TO BUY DESIGN</div>
            <div class="font-medium mb-6 text-5xl">Coffee Mugs</div>
            <div class="font-medium mb-8 text-lg">
              The most versatile furniture system ever created. Designed to fit
              your life, made to move and grow.
            </div>

            <div class="flex justify-center">
              <div
                class="uppercase bg-white text-gray-800 w-max tracking-wider py-4 px-8 text-sm font-semibold cursor-pointer hover:bg-opacity-95">
                Explore our products
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Story -->
      <div class="story flex justify-center items-center">
        <div class="px-4 sm:px-16 md:px-32 lg:px-64 xl:px-96 py-32 text-center">
          <div class="text-3xl leading-10 mb-6">
            Even the all-powerful Pointing has no control about the blind texts.
          </div>
          <div class="text-gray-400 leading-8 mb-6">
            It is a paradisematic country, in which roasted parts of sentences
            fly into your mouth. Even the all-powerful Pointing has no control
            about the blind texts it is an almost unorthographic life One day
            however a small line of blind text by the name of Lorem Ipsum
            decided to leave for the far World of Grammar.
          </div>
          <div class="">
            <a href="#"
              class="text-coffee-400 hover:text-coffee-600 relative after:absolute after:left-0 after:-bottom-2 after:bg-coffee-50 hover:after:bg-coffee-400 after:w-full after:h-0.5 after:transition-all after:ease-in-out after:duration-300">
              Read the full Story</a>
          </div>
        </div>
      </div>

      <div class="cf-subheadline">
        <div class="cf-subheadline-deco-line"></div>
        <div class="cf-subheadline-label">Features Mugs</div>
        <div class="cf-subheadline-deco-line"></div>
      </div>

      <div class="featured-mugs w-[95%] lg:w-[65%] mx-auto mb-24">
        <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-4 gap-8">
          <div class="cf-product-card">
            <div
              class="h-[400px] sm:h-[540px] bg-[url('./src/assets/image/featured-mug-02.jpg')] bg-cover bg-no-repeat bg-center">
              <a href="#">
                <div
                  class="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group">
                  <div class="absolute w-[100px] px-4 py-2 bg-white top-3 right-3 font-semibold text-coffee-400">
                    On Sale.
                  </div>
                  <div
                    class="absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 cf-button hidden group-hover:block group-hover:animate-fadeIn">
                    Explore Mug
                  </div>
                </div>
              </a>
            </div>

            <div class="mt-8">
              <a href="#">
                <div class="text-xl mb-3 hover:text-coffee-400">Golden designers Mug</div>
              </a>
              <div class="">
                <span class="text-lg text-coffee-400">$50.00</span>
                <span class="ml-2 text-gray-400 line-through">$69.00 USD</span>
              </div>
            </div>
          </div>

          <div class="cf-product-card">
            <div
              class="h-[400px] sm:h-[540px] bg-[url('./src/assets/image/featured-mug-01.jpg')] bg-cover bg-no-repeat bg-center">
              <a href="#">
                <div
                  class="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group">
                  <div class="absolute w-[100px] px-4 py-2 bg-white top-3 right-3 font-semibold text-coffee-400">
                    On Sale.
                  </div>
                  <div
                    class="absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 cf-button hover:bg-opacity-90 hidden group-hover:block group-hover:animate-fadeIn">
                    Explore Mug
                  </div>
                </div>
              </a>
            </div>

            <div class="mt-8">
              <a href="#">
                <div class="text-xl mb-3 hover:text-coffee-400">Pink premium Ceramic</div>
              </a>
              <div class="">
                <span class="text-lg text-coffee-400">$50.00</span>
                <span class="ml-2 text-gray-400 line-through">$69.00 USD</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="cf-subheadline">
        <div class="cf-subheadline-deco-line"></div>
        <div class="cf-subheadline-label">More products</div>
        <div class="cf-subheadline-deco-line"></div>
      </div>

      <div class="more-products">more-products</div>

      <div class="cf-subheadline">
        <div class="cf-subheadline-deco-line"></div>
        <div class="cf-subheadline-label">
          BUY 2 MUGS AND GET A COFFEE MAGAZINE FREe
        </div>
        <div class="cf-subheadline-deco-line"></div>
      </div>

      <div class="coffee-magazine">coffee-magazine</div>

      <div class="cf-subheadline">
        <div class="cf-subheadline-deco-line"></div>
        <div class="cf-subheadline-label">
          BEHIND THE MUGS, LIFESTYLE STORIES
        </div>
        <div class="cf-subheadline-deco-line"></div>
      </div>

      <div class="lifestyle-stories">lifestyle-stories</div>

      <div class="subscribe-us">subscribe-us</div>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  // console.log(document.getElementById('cf-toggle-top-menu'));
  const topMenu = document.querySelector("#cf-top-menu");
  const toggleTopMenu = document.querySelector("#cf-toggle-top-menu");

  document.addEventListener("click", (e) => {
    if (toggleTopMenu.contains(e.target)) {
      topMenu.classList.toggle("cf-top-menu-expanded");
      topMenu.classList.toggle("hidden");
    } else {
      if (topMenu.classList.contains("cf-top-menu-expanded")) {
        topMenu.classList.remove("cf-top-menu-expanded");
        topMenu.classList.add("hidden");
      }
    }
  });
});
</script>

<style scoped>

</style>
