<script>
    export default {
        props: {
            title: {
                type: String,
                required: true,
            },
            image: {
                type: String,
                required: true,
            },
            to: {
                type: String,
                default: '#',
            },
            disabled: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<template>
    <component 
        :is="disabled ? 'div' : 'RouterLink'"
        :to="!disabled ? to : null"
        :class="[
            'group relative block w-full max-w-sm border border-[#404850] rounded-md bg-[#151F28] shadow-lg transition-all duration-300 ease-in-out overflow-hidden',
            disabled 
                ? ''
                : 'hover:-translate-y-2 hover:border-[#FF4655] hover:shadow-[0_10px_40px_-10px_#FF4655] cursor-pointer'
        ]"
    >
        <div class="relative h-48 w-full overflow-hidden">
            <img 
                :class="[
                    'h-full w-full object-cover transition-all duration-500',
                    disabled ? 'blur-[3px] brightness-[0.4]' : 'group-hover:scale-105'
                ]" 
                :src="image" 
                :alt="title" 
            />

            <div v-if="disabled" class="absolute inset-0 flex items-center justify-center p-4">
                <span class="border-2 border-[#FF4655]/50 bg-[#FF4655]/10 px-4 py-2 text-center text-sm font-bold tracking-widest text-[#FF4655] backdrop-blur-md rounded">
                    COMING SOON
                </span>
            </div>
        </div>

        <div class="p-6 relative z-10">
            <div>
                <h5 :class="['mt-2 mb-2 text-2xl font-semibold tracking-tight', disabled ? 'text-slate-400' : 'text-white']">
                    {{ title }}
                </h5>
            </div>
        </div>
    </component>
</template>