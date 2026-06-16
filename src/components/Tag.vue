<script setup lang="ts">
defineProps({ label: { type: String, required: true } });
</script>

<template>
    <span class="text-xs font-mono font-bold uppercase border-2 border-gray-600 text-gray-300 px-2 py-0.5">
        {{ label }}
    </span>
</template>
