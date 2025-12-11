<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const isDropdownOpen = ref(false); 

const isMobileMenuOpen = ref(false); 

const handleLogout = () => {
  alert("Anda berhasil Sign Out!");
  isDropdownOpen.value = false;
  router.push('/login');
};
</script>

<template>
<nav class="relative bg-[#2C3540] border-b border-[#404850]">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button 
            @click="isMobileMenuOpen = !isMobileMenuOpen" 
            type="button" 
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        >
          <span class="sr-only">Open main menu</span>
          
          <svg v-if="!isMobileMenuOpen" class="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          
          <svg v-else class="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex items-center">
          <a class="text-lg font-medium text-gray-300 w-auto">LobbyFinder</a>
        </div>
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            <RouterLink to="/" class="nav-link text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</RouterLink>
            <RouterLink to="/games" class="nav-link text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Games</RouterLink>
            <RouterLink to="/about" class="nav-link text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</RouterLink>
            <RouterLink to="/contact" class="nav-link text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</RouterLink>
          </div>
        </div>
      </div>

      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <div class="relative ml-3">
          <div>
            <button 
                @click="isDropdownOpen = !isDropdownOpen" 
                type="button" 
                class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span class="sr-only">Open user menu</span>
              <img class="size-8 rounded-full object-cover" src="../assets/greatest.jpg" alt="" />
            </button>
          </div>

          <div 
            v-if="isDropdownOpen" 
            class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none"
          >
            <button 
                @click="handleLogout" 
                class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
                Sign out
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-show="isMobileMenuOpen" class="sm:hidden" id="mobile-menu">
    <div class="space-y-1 px-2 pt-2 pb-3 bg-[#242e38] border-t border-[#404850]">
      <RouterLink to="/" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Home</RouterLink>
      <RouterLink to="/games" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Games</RouterLink>
      <RouterLink to="/about" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About</RouterLink>
      <RouterLink to="/contact" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contact</RouterLink>
    </div>
  </div>
</nav>
</template>