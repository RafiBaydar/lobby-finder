<script setup>

import { Search } from 'lucide-vue-next';

</script>

<template>
    <!-- Include this script tag or install `@tailwindplus/elements` via npm: -->
<!-- <script src="https://cdn.jsdelivr.net/npm/@tailwindplus/elements@1" type="module"></script> -->
<div class="">
  <div class="relative isolate px-6 pt-12 lg:px-8">
    <div class="mx-auto max-w-2xl py-20 sm:py-24 lg:py-28">
      <div class="text-center">
        <h1 class="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">LobbyFinder</h1>
        <p class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">A platform for finding and sharing lobby codes for your favorite games. More games coming soon!</p>
        <div class="mt-8 flex items-center justify-center gap-x-8">
          <Router-link to="/games" tag="button" class="items-center flex rounded-md bg-[#FF4655] px-4 py-2.5 gap-3 text-2xl font-semibold text-white shadow-xs hover:bg-[#E4414E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <Search class="w-8 h-8" strokeWidth="3"/>
            Browse Games
          </Router-link>
        </div>
      </div>
    </div>
  </div>
</div>

</template>
