<script setup lang="ts">
defineProps({ href: { type: String, required: true } });
</script>

<template>
    <a :href="href" class="text-sm font-black uppercase tracking-widest text-white hover:text-purple-400">
        <slot></slot>
    </a>
</template>
