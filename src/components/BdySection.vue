<script setup lang="ts">
const props = defineProps({
    id: { type: String, required: true },
    title: { type: String, required: true },
    numbered: { type: Boolean, default: true, required: false },
    num: { type: Number, default: 0, required: false },
});
</script>

<template>
    <section :id="id" class="mb-32 scroll-mt-24">
        <div v-if="numbered" class="mb-12">
            <div class="flex items-end gap-4 pb-3">
                <span class="text-6xl font-black text-purple-500 leading-none">{{ num < 10 ? `0${num}` : num }}</span>
                <h2 class="text-3xl font-black uppercase tracking-tight text-white leading-none pb-1">{{ title }}</h2>
            </div>
            <div class="section-dither" />
        </div>
        <slot></slot>
    </section>
</template>

<style scoped>
.section-dither {
  height: 4px;
  background-image:
    linear-gradient(90deg, #fff 25%, transparent 25%),
    linear-gradient(90deg, transparent 50%, #fff 50%);
  background-size: 8px 4px;
  background-position: 0 0, 4px 0;
  opacity: 0.6;
}
</style>
