<script>
    import { Clock, Users, Copy } from 'lucide-vue-next';

    export default {
        name: 'LobbyCard',
        components: { Clock, Users, Copy },
        props: {
            mode: { type: String, required: true },
            server: { type: String, required: true },
            lobbyCode: { type: String, required: true },
            needed: { type: String, default: '1/5' },
            timeAgo: { type: String, default: 'Baru saja' },
            roles: { type: Array, default: () => [] },
            
            rank: { 
                type: [String, Array], 
                default: '' 
            }, 
            
            description: { type: String, default: '' },
            author: { type: String, required: true },
        },
        computed: {
            formattedRank() {
                if (Array.isArray(this.rank)) {
                    return this.rank.length > 0 ? this.rank.join(', ') : 'Any';
                }
                return this.rank || 'Any';
            }
        },
        methods: {
            copyCode() {
                navigator.clipboard.writeText(this.lobbyCode)
                    .then(() => { alert('Code copied: ' + this.lobbyCode); })
                    .catch((err) => { console.error('Gagal copy:', err); alert('Gagal copy code, manual aja ya bang!'); });
            }
        }
    }
</script>

<template>
  <div class="relative flex h-full w-full max-w-[400px] flex-col rounded-2xl border border-slate-800 bg-slate-900 p-5 text-slate-100 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#E4414E] hover:shadow-[0_0_20px_-5px_#E4414E]">

    <div class="flex items-start justify-between gap-4">
        <div class="flex flex-wrap gap-2">
            <span class="rounded-lg bg-slate-700/50 px-3 py-1.5 text-xs font-bold text-slate-200 uppercase tracking-wider">
                {{ mode }}
            </span>
            <span class="rounded-lg bg-slate-700/50 px-3 py-1.5 text-xs font-bold text-slate-200">
                {{ server }}
            </span>
        </div>

        <button @click="copyCode" class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 transition hover:bg-[#E4414E] hover:border-[#E4414E] hover:text-white active:scale-95">
            <Copy class="h-5 w-5"/>
        </button>
    </div>

    <h2 class="mt-4 text-4xl font-extrabold tracking-wide text-white">
        {{ lobbyCode }}
    </h2>

    <div class="mt-3 flex items-center gap-5 text-sm font-medium text-slate-300">
        <div class="flex items-center gap-1.5">
            <Users class="h-4 w-4"/>
            <span>Butuh {{ needed }}</span>
        </div>

        <div class="flex items-center gap-1.5">
            <Clock class="h-4 w-4"/>
            <span>{{ timeAgo }}</span>
        </div>
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
        <span 
            v-for="(role, index) in roles" 
            :key="index"
            class="rounded-lg bg-indigo-500/10 border border-indigo-500/50 px-3 py-1 text-xs font-bold text-indigo-300"
        >
            {{ role }}
        </span>

        <span class="rounded-lg bg-emerald-500/10 border border-emerald-500/50 px-3 py-1 text-xs font-bold text-emerald-300">
            Rank: {{ formattedRank }}
        </span>
    </div>

    <p class="mt-5 text-[15px] leading-relaxed text-slate-300/80 line-clamp-2">
        {{ description }}
    </p>

    <div class="mt-auto border-t border-slate-700/60 pt-4 mt-5">
        <p class="text-sm font-medium text-slate-400">
            Dibuat Oleh <span class="text-slate-200 font-bold hover:text-[#E4414E] hover:underline cursor-pointer transition-colors">{{ author }}</span>
        </p>
    </div>

  </div>
</template>