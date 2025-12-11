<template>
  <footer class="bg-[#2C3540] shadow-xs">
    <div class="w-full text-white max-w-screen-xl mx-auto p-4 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        
        <RouterLink to="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse cursor-pointer">
          <span class="text-heading self-center text-2xl font-semibold whitespace-nowrap">LobbyFinder</span>
        </RouterLink>

        <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-body sm:mb-0 gap-4 md:gap-6">
          <li>
            <RouterLink to="/" class="hover:underline">
              Home
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/games" class="hover:underline">
              Games
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/about" class="hover:underline">
              About
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/contact" class="hover:underline">
              Contact
            </RouterLink>
          </li>
        </ul>
      </div>
      <hr class="my-6 border-neutral-200 sm:mx-auto lg:my-8" />
      <span class="block text-sm text-body sm:text-center">© 2025 LobbyFinder. Made for the gaming community.</span>
    </div>
  </footer>
</template>