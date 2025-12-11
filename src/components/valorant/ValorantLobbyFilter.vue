<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';
import { RotateCcw, ChevronDown, Check } from 'lucide-vue-next';

const emit = defineEmits(['update:filter']);

const serverData = {
  'NA': ['US West (Oregon)', 'US West (California Utara)', 'US East (Virginia Utara)', 'US Central (Texas)', 'US Central (Illinois)', 'US Central (Georgia)'],
  'LATAM': ['Santiago', 'Mexico City', 'Miami'],
  'BR': ['Sao Paulo'],
  'EU': ['Frankfurt', 'Paris', 'Stockholm', 'Istanbul', 'London', 'Warszawa', 'Madrid', 'Bahrain'],
  'KR': ['Seoul'],
  'AP': ['Hong Kong', 'Tokyo', 'Singapore', 'Sydney', 'Mumbai']
};

const modes = ['Unrated', 'Competitive', 'Swift Play', 'Spike Rush', 'Team Deathmatch', 'Custom'];
const ranks = ['Iron', 'Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Ascendant', 'Immortal', 'Radiant'];
const roles = ['Duelist', 'Controller', 'Initiator', 'Sentinel'];

const selectedModes = ref([]); 
const selectedRegion = ref('AP');
const selectedServer = ref('');
const selectedRanks = ref([]);
const selectedRoles = ref([]);

const openRegion = ref(false);
const openServer = ref(false);

const availableServers = computed(() => serverData[selectedRegion.value] || []);

watch(selectedRegion, () => {
  selectedServer.value = ''; 
});

const toggleSelection = (list, item) => {
  const index = list.indexOf(item);
  if (index === -1) list.push(item);
  else list.splice(index, 1);
};

watch(
  [selectedModes, selectedServer, selectedRanks, selectedRoles],
  () => {
    emit('update:filter', {
      modes: selectedModes.value,
      server: selectedServer.value,
      rankEnabled: selectedRanks.value.length > 0, 
      ranks: selectedRanks.value,
      roleEnabled: selectedRoles.value.length > 0,
      roles: selectedRoles.value
    });
  },
  { deep: true }
);

const resetFilter = () => {
    selectedModes.value = [];
    selectedServer.value = '';
    selectedRanks.value = [];
    selectedRoles.value = [];
}

const closeDropdowns = (e) => {
    if (!e.target.closest('.custom-dropdown')) {
        openRegion.value = false;
        openServer.value = false;
    }
}
onMounted(() => document.addEventListener('click', closeDropdowns));
onUnmounted(() => document.removeEventListener('click', closeDropdowns));
</script>

<template>
  <div class="w-full rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-200 shadow-xl">
    
    <div class="mb-6 flex items-center justify-between">
      <h2 class="text-2xl font-bold text-white">Filter Lobbies</h2>
      <button @click="resetFilter" class="group flex items-center gap-2 rounded-lg bg-slate-700 px-4 py-2 text-sm font-semibold transition hover:bg-[#E4414E] hover:text-white active:scale-95">
        <RotateCcw class="h-4 w-4" />
        Refresh
      </button>
    </div>

    <div class="grid gap-8 lg:grid-cols-2">
      
      <div class="space-y-6">
        <div>
          <h3 class="mb-3 text-sm font-semibold text-slate-400">Mode</h3>
          <div class="flex flex-wrap gap-2">
            <button 
              v-for="mode in modes" 
              :key="mode"
              @click="toggleSelection(selectedModes, mode)"
              :class="[
                'rounded-lg px-4 py-2 text-xs font-bold transition-all duration-200 border',
                selectedModes.includes(mode) 
                  ? 'bg-[#E4414E] border-[#E4414E] text-white shadow-[0_0_15px_rgba(228,65,78,0.5)]' 
                  : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-[#E4414E] hover:text-[#E4414E]'
              ]"
            >
              {{ mode }}
            </button>
          </div>
        </div>

        <div>
          <h3 class="mb-3 text-sm font-semibold text-slate-400">Server (Region: {{ selectedRegion }})</h3>
          
          <div class="relative custom-dropdown">
            <button 
                @click="openServer = !openServer; openRegion = false"
                class="flex w-full items-center justify-between rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-sm font-medium text-slate-200 transition-all hover:border-[#E4414E]"
            >
                <span>{{ selectedServer || 'All Servers' }}</span>
                
                <ChevronDown :class="['h-4 w-4 text-slate-400 transition-transform', openServer ? 'rotate-180' : '']"/>
            </button>

            <div v-if="openServer" class="absolute z-10 mt-2 max-h-60 w-full overflow-y-auto rounded-lg border border-slate-700 bg-slate-800 shadow-xl scrollbar-thin scrollbar-thumb-slate-600">
                <button 
                    @click="selectedServer = ''; openServer = false"
                    class="flex w-full items-center justify-between px-4 py-3 text-left text-sm text-slate-200 hover:bg-[#E4414E] hover:text-white transition-colors"
                >
                    <span>All Servers</span>
                    <Check v-if="selectedServer === ''" class="h-4 w-4"/>
                </button>
                <button 
                    v-for="server in availableServers" 
                    :key="server"
                    @click="selectedServer = server; openServer = false"
                    class="flex w-full items-center justify-between px-4 py-3 text-left text-sm text-slate-200 hover:bg-[#E4414E] hover:text-white transition-colors"
                >
                    <span>{{ server }}</span>
                    <Check v-if="selectedServer === server" class="h-4 w-4"/>
                </button>
            </div>
          </div>
        </div>
      </div>

      <div class="space-y-6">
        
        <div>
          <div class="mb-3 flex items-center justify-between">
            <h3 class="text-sm font-semibold text-slate-400">Rank Requirement</h3>
            
            <div class="relative custom-dropdown w-24">
                <button 
                    @click="openRegion = !openRegion; openServer = false"
                    class="flex w-full items-center justify-between rounded-lg bg-slate-700 px-3 py-1.5 text-xs font-bold text-slate-200 transition-colors hover:bg-slate-600"
                >
                    <span>{{ selectedRegion }}</span>
                    <ChevronDown :class="['h-3 w-3 transition-transform', openRegion ? 'rotate-180' : '']"/>
                </button>

                <div v-if="openRegion" class="absolute right-0 z-20 mt-2 w-32 rounded-lg border border-slate-700 bg-slate-800 shadow-xl overflow-hidden">
                    <button 
                        v-for="(servers, region) in serverData" 
                        :key="region" 
                        @click="selectedRegion = region; openRegion = false"
                        class="flex w-full items-center justify-between px-4 py-2 text-left text-xs font-bold text-slate-200 hover:bg-[#E4414E] hover:text-white transition-colors"
                    >
                        {{ region }}
                        <Check v-if="selectedRegion === region" class="h-3 w-3"/>
                    </button>
                </div>
            </div>
          </div>

          <div class="flex flex-wrap gap-2">
            <button 
              v-for="rank in ranks" 
              :key="rank"
              @click="toggleSelection(selectedRanks, rank)"
              :class="[
                'rounded-lg border px-3 py-1.5 text-xs font-bold transition-all duration-200',
                selectedRanks.includes(rank) 
                  ? 'bg-[#E4414E] border-[#E4414E] text-white shadow-[0_0_15px_rgba(228,65,78,0.4)]' 
                  : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-[#E4414E] hover:text-[#E4414E]'
              ]"
            >
              {{ rank }}
            </button>
          </div>
        </div>

        <div>
          <h3 class="mb-3 text-sm font-semibold text-slate-400">Role Requirement</h3>
          
          <div class="flex flex-wrap gap-2">
            <button 
              v-for="role in roles" 
              :key="role"
              @click="toggleSelection(selectedRoles, role)"
              :class="[
                'rounded-lg border px-3 py-1.5 text-xs font-bold transition-all duration-200',
                selectedRoles.includes(role) 
                  ? 'bg-[#E4414E] border-[#E4414E] text-white shadow-[0_0_15px_rgba(228,65,78,0.4)]' 
                  : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-[#E4414E] hover:text-[#E4414E]'
              ]"
            >
              {{ role }}
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>