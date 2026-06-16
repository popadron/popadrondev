<script setup lang="ts">
defineProps<{ title?: string; quote: string }>();
</script>

<template>
    <div class="border-l-4 border-purple-500 pl-5 py-1">
        <p v-if="title" class="text-purple-400 text-xs font-black uppercase tracking-widest mb-2">{{ title }}</p>
        <p class="italic text-gray-300"><slot>{{ quote }}</slot></p>
    </div>
</template>
