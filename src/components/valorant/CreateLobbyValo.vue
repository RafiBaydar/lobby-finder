<script setup>
import { reactive, computed, ref, onMounted, onUnmounted } from 'vue';
import { X, Minus, Plus, ChevronDown, Check } from 'lucide-vue-next';

const emit = defineEmits(['close', 'submit']);

const regionList = ['AP', 'NA', 'EU', 'KR', 'LATAM', 'BR'];
const serverData = {
  'NA': ['US West', 'US East', 'US Central'],
  'LATAM': ['Santiago', 'Mexico City', 'Miami'],
  'BR': ['Sao Paulo'],
  'EU': ['Frankfurt', 'Paris', 'Stockholm', 'Istanbul', 'London'],
  'KR': ['Seoul'],
  'AP': ['Hong Kong', 'Tokyo', 'Singapura', 'Sydney', 'Mumbai']
};
const modeList = ['Unrated', 'Competitive', 'Swift Play', 'Spike Rush', 'Team Deathmatch', 'Custom'];
const rankList = ['Iron', 'Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Ascendant', 'Immortal', 'Radiant'];
const roleList = ['Duelist', 'Controller', 'Initiator', 'Sentinel'];

const form = reactive({
    lobbyCode: '',
    region: 'AP',
    server: '',
    playerNeeded: 1,
    modes: [],
    ranks: [],
    roles: [],
    note: ''
});

const openRegion = ref(false);
const openServer = ref(false);

const availableServers = computed(() => serverData[form.region] || []);

const selectRegion = (region) => {
    form.region = region;
    form.server = '';
    openRegion.value = false;
};

const selectServer = (server) => {
    form.server = server;
    openServer.value = false;
};

const adjustPlayer = (amount) => {
    const newValue = form.playerNeeded + amount;
    if (newValue >= 1 && newValue <= 4) form.playerNeeded = newValue;
};

const toggleSelection = (list, item) => {
    const index = list.indexOf(item);
    if (index === -1) list.push(item);
    else list.splice(index, 1);
};

const handleSubmit = () => {
    if (!form.lobbyCode || form.modes.length === 0 || !form.server) {
        alert("Tolong isi Lobby Code, Server, dan minimal 1 Mode!");
        return;
    }
    emit('submit', { ...form });
};

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
  <div class="fixed inset-0 z-50 flex items-start justify-center bg-black/70 backdrop-blur-sm overflow-y-auto py-10 px-4">
    
    <div class="relative w-full max-w-2xl rounded-2xl bg-slate-900 p-6 shadow-2xl border border-slate-800 animate-[scaleIn_0.2s_ease-out]">
        
        <div class="mb-6 flex items-center justify-between relative">
            <h2 class="text-2xl font-bold text-white text-center w-full">Create Lobby</h2>
            <button @click="$emit('close')" class="absolute right-0 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white bg-slate-800 rounded-full p-1 border border-slate-700 transition-colors">
                <X class="h-5 w-5"/>
            </button>
        </div>

        <div class="space-y-5">
            
            <div>
                <label class="mb-2 block text-sm font-bold text-slate-300">Lobby Code</label>
                <input v-model="form.lobbyCode" type="text" placeholder="e.g. 911ATK" class="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-slate-200 placeholder-slate-500 outline-none focus:border-[#E4414E] focus:ring-1 focus:ring-[#E4414E] transition-all">
            </div>

            <div class="grid gap-5 md:grid-cols-2">
                <div class="space-y-4">
                    <div>
                        <label class="mb-2 block text-sm font-bold text-slate-300">Region</label>
                        <div class="relative custom-dropdown">
                            <button 
                                @click="openRegion = !openRegion; openServer = false"
                                class="flex w-full items-center justify-between rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-slate-200 outline-none focus:border-[#E4414E] transition-all hover:border-[#E4414E]"
                            >
                                <span>{{ form.region }}</span>
                                <ChevronDown :class="['h-5 w-5 text-slate-400 transition-transform', openRegion ? 'rotate-180' : '']"/>
                            </button>

                            <div v-if="openRegion" class="absolute left-0 z-50 mt-2 w-full max-h-60 overflow-y-auto rounded-lg border border-slate-700 bg-slate-800 shadow-xl">
                                <button 
                                    v-for="r in regionList" :key="r"
                                    @click="selectRegion(r)"
                                    class="flex w-full items-center justify-between px-4 py-2.5 text-left text-sm text-slate-200 hover:bg-[#E4414E] hover:text-white transition-colors"
                                >
                                    <span>{{ r }}</span>
                                    <Check v-if="form.region === r" class="h-4 w-4"/>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label class="mb-2 block text-sm font-bold text-slate-300">Lobby Server</label>
                        <div class="relative custom-dropdown">
                            <button 
                                @click="openServer = !openServer; openRegion = false"
                                class="flex w-full items-center justify-between rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-slate-200 outline-none focus:border-[#E4414E] transition-all hover:border-[#E4414E]"
                            >
                                <span :class="form.server ? 'text-white' : 'text-slate-500'">
                                    {{ form.server || 'Select Server' }}
                                </span>
                                <ChevronDown :class="['h-5 w-5 text-slate-400 transition-transform', openServer ? 'rotate-180' : '']"/>
                            </button>

                            <div v-if="openServer" class="absolute left-0 z-50 mt-2 w-full max-h-60 overflow-y-auto rounded-lg border border-slate-700 bg-slate-800 shadow-xl">
                                <button 
                                    v-for="s in availableServers" :key="s"
                                    @click="selectServer(s)"
                                    class="flex w-full items-center justify-between px-4 py-2.5 text-left text-sm text-slate-200 hover:bg-[#E4414E] hover:text-white transition-colors"
                                >
                                    <span>{{ s }}</span>
                                    <Check v-if="form.server === s" class="h-4 w-4"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <label class="mb-2 block text-sm font-bold text-slate-300">Player Needed</label>
                    <div class="flex items-center rounded-lg border border-slate-700 bg-slate-800 p-1 w-fit">
                        <button @click="adjustPlayer(-1)" class="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-md transition"><Minus class="h-5 w-5"/></button>
                        <span class="w-12 text-center font-bold text-xl text-white">{{ form.playerNeeded }}</span>
                        <button @click="adjustPlayer(1)" class="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-md transition"><Plus class="h-5 w-5"/></button>
                    </div>
                </div>
            </div>

            <div>
                <label class="mb-2 block text-sm font-bold text-slate-300">Mode</label>
                <div class="flex flex-wrap gap-2">
                    <button 
                        v-for="mode in modeList" :key="mode"
                        @click="toggleSelection(form.modes, mode)"
                        :class="['rounded-lg px-4 py-2 text-xs font-bold transition-all border duration-200', 
                        form.modes.includes(mode) ? 'bg-[#E4414E] border-[#E4414E] text-white shadow-[0_0_10px_rgba(228,65,78,0.3)]' : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-[#E4414E] hover:text-[#E4414E]']"
                    >{{ mode }}</button>
                </div>
            </div>

            <div>
                <label class="mb-2 block text-sm font-bold text-slate-300">Rank Requirement</label>
                <div class="flex flex-wrap gap-2">
                    <button 
                        v-for="rank in rankList" :key="rank"
                        @click="toggleSelection(form.ranks, rank)"
                        :class="['rounded-lg px-3 py-1.5 text-xs font-bold transition-all border duration-200', 
                        form.ranks.includes(rank) ? 'bg-[#E4414E] border-[#E4414E] text-white shadow-[0_0_10px_rgba(228,65,78,0.3)]' : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-[#E4414E] hover:text-[#E4414E]']"
                    >{{ rank }}</button>
                </div>
            </div>

             <div>
                <label class="mb-2 block text-sm font-bold text-slate-300">Role Requirement</label>
                <div class="flex flex-wrap gap-2">
                     <button 
                        v-for="role in roleList" :key="role"
                        @click="toggleSelection(form.roles, role)"
                        :class="['rounded-lg px-3 py-1.5 text-xs font-bold transition-all border duration-200', 
                        form.roles.includes(role) ? 'bg-[#E4414E] border-[#E4414E] text-white shadow-[0_0_10px_rgba(228,65,78,0.3)]' : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-[#E4414E] hover:text-[#E4414E]']"
                    >{{ role }}</button>
                </div>
            </div>

            <div>
                <label class="mb-2 block text-sm font-bold text-slate-300">Note</label>
                <textarea v-model="form.note" rows="2" placeholder="e.g. Need smoke main, no toxic" class="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2.5 text-slate-200 placeholder-slate-500 outline-none focus:border-[#E4414E] focus:ring-1 focus:ring-[#E4414E] resize-none transition-all"></textarea>
            </div>

            <div class="flex gap-4 pt-2">
                <button @click="handleSubmit" class="flex-1 rounded-lg bg-[#E4414E] py-3 text-sm font-bold text-white shadow-lg shadow-[#E4414E]/20 transition-all hover:bg-[#d43542] hover:shadow-[#E4414E]/40 active:scale-95">Publish Lobby</button>
                <button @click="$emit('close')" class="rounded-lg border border-slate-700 bg-slate-800 px-8 py-3 text-sm font-bold text-slate-300 transition-all hover:bg-slate-700 hover:text-white active:scale-95">Cancel</button>
            </div>

        </div>
    </div>
  </div>
</template>