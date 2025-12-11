<script setup>
import { Plus } from 'lucide-vue-next';

const emit = defineEmits(['open-modal']);
</script>

<template>
  <div class="mx-auto max-w-7xl px-6 py-10 lg:px-8">
    <div class="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
      <h1 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Valorant Lobbies
      </h1>

      <button 
        @click="$emit('open-modal')"
        class="group flex items-center gap-2 rounded-lg bg-[#E4414E] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#E4414E]/20 transition-all hover:bg-[#d43542] hover:shadow-[#E4414E]/50 active:scale-95"
      >
        <Plus class="h-5 w-5 stroke-[3]" />
        Add Code
      </button>

    </div>
  </div>
</template>