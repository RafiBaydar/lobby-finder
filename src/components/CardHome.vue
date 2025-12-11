<script>
    export default {
        props: {
            icon: {
                type: Object,
                required: true,
            },
            title: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true
            }
        }
    }
</script>


<template>
    <div class="group bg-[#151F28] block w-full p-6 border border-[#404850] rounded-md shadow-lg transition-all duration-300 ease-in-out hover:border-[#FF4655] hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_#FF4655]">
        <a>
            <div class="bg-[#242E37] border border-[#404850] h-18 w-18 flex justify-center items-center object-contain mx-auto rounded transition-all duration-300 group-hover:border-[#FF4655]">
                <component :is="icon" strokeWidth="1.5" class="w-12 h-12 text-white transition-all duration-300 group-hover:text-[#FF4655]"/>
            </div>
        </a>
        <a>
            <h5 class="text-center mt-2 mb-2 text-2xl font-semibold tracking-tight text-heading text-white">
                {{ title }}
            </h5>
        </a>
        <p class="text-center text-body text-white opacity-75">
            {{ description }}
        </p>
    </div>
</template>