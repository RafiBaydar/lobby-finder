<script>
    export default {
        props: {
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
    <div class="bg-[#151F28] block w-full p-6 border border-[#404850] rounded-md shadow-lg">
        <a>
            <h5 class="mt-2 mb-2 text-2xl font-semibold tracking-tight text-heading text-white">
                {{ title }}
            </h5>
        </a>
        <p class="text-body text-white opacity-75 whitespace-pre-line">
            {{ description }}
        </p>
    </div>
</template>