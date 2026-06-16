<script setup lang="ts">
defineProps({
    imageRoute: { type: String, required: true },
    alt: { type: String, required: true }
});
</script>

<template>
    <div class="relative w-64 h-64 lg:w-80 lg:h-80">
        <div class="frame-shadow absolute inset-0 border-4 border-purple-500" />
        <div class="absolute inset-0 border-4 border-white bg-black overflow-hidden">
            <img :src="imageRoute" :alt="alt" class="w-full h-full object-cover" />
        </div>
    </div>
</template>

<style scoped>
.frame-shadow {
    transform: translate(10px, 10px);
}
</style>
