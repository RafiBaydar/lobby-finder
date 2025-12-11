<script setup>
import { ref, computed } from 'vue'; 
import NavBar from './NavBar.vue';
import Hero from './valorant/HeroValo.vue';
import Footer from './Footer.vue';
import CardFilter from './valorant/ValorantLobbyFilter.vue';
import CardGames from './valorant/CardLobby.vue';
import CreateLobby from './valorant/CreateLobbyValo.vue'; 

const showCreateModal = ref(false);

const lobbies = ref([
  {
    id: 1,
    mode: 'Competitive',
    server: 'Sydney',
    lobbyCode: '911ATK',
    needed: '4/5',
    roles: ['Controller'],
    rank: 'Radiant',
    description: '-1 w/ paper rex',
    author: 'vain'
  },
  {
    id: 2,
    mode: 'Unrated',
    server: 'Singapore',
    lobbyCode: 'DESWEB',
    needed: '2/5',
    roles: ['Duelist', 'Sentinel'],
    rank: 'Gold',
    description: 'butuh cewe jadi pocket sageku',
    author: 'kyogreee'
  },
  {
    id: 3,
    mode: 'Swift Play',
    server: 'Mumbai',
    lobbyCode: 'H1T4MM',
    needed: '1/5',
    roles: ['Initiator'],
    rank: '', // Kosong = Any
    description: 'travis scott butuh player',
    author: 'danilkoten'
  },
  {
    id: 4,
    mode: 'Competitive',
    server: 'London',
    lobbyCode: 'NTP071',
    needed: '1/5',
    roles: ['Controller', 'Duelist'],
    rank: ['Bronze', 'Silver'], 
    description: 'menang nanti kubeliin obat',
    author: 'demol'
  },
  {
    id: 5,
    mode: 'Competitive',
    server: 'Singapore',
    lobbyCode: 'ITK001',
    needed: '3/5',
    roles: ['Duelist', 'Sentinel'],
    rank: 'Radiant',
    description: 'ayo mabar gw setara ama tenz kok',
    author: 'Zaxhitman'
  },
]);

const handleLobbyCreated = (formData) => {
    showCreateModal.value = false;
    alert("Lobby berhasil dipublish!");
};

const currentFilters = ref({
  modes: [],
  server: '',
  rankEnabled: false,
  ranks: [],
  roleEnabled: false,
  roles: []
});

const handleFilterUpdate = (newFilters) => {
  currentFilters.value = newFilters;
};

const filteredLobbies = computed(() => {
  return lobbies.value.filter(lobby => {
    const f = currentFilters.value;

    const modeMatch = f.modes.length === 0 || f.modes.includes(lobby.mode);
    
    const serverMatch = f.server === '' || f.server === lobby.server;
    
    const rankMatch = !f.rankEnabled || f.ranks.length === 0 || (
        Array.isArray(lobby.rank) 
            ? lobby.rank.some(r => f.ranks.includes(r))
            : f.ranks.includes(lobby.rank)
    );

    const roleMatch = !f.roleEnabled || f.roles.length === 0 || lobby.roles.some(r => f.roles.includes(r));

    return modeMatch && serverMatch && rankMatch && roleMatch;
  });
});
</script>

<template>
  <div class="min-h-screen bg-[#0F1923]">
    <NavBar/>
    
    <Hero @open-modal="showCreateModal = true"/>
    
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      
      <div class="mb-12">
        <CardFilter @update:filter="handleFilterUpdate"/>
      </div>

      <section class="mb-36">
        
        <div v-if="filteredLobbies.length === 0" class="text-center py-10">
            <p class="text-slate-500 text-lg font-medium">Lobby tidak ditemukan.</p>
            <p class="text-slate-600 text-sm">Coba reset filter atau ganti region lain.</p>
        </div>

        <div v-else class="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <CardGames 
            v-for="lobby in filteredLobbies" 
            :key="lobby.id"
            v-bind="lobby"
          />
        </div>
      </section>

    </div>

    <Footer/>

    <Transition name="fade">
        <CreateLobby 
            v-if="showCreateModal" 
            @close="showCreateModal = false"
            @submit="handleLobbyCreated"
        />
    </Transition>

  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>