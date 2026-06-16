<script setup lang="ts">
import { Icon } from '@iconify/vue';

defineProps({ skill: { type: Object, required: true } });
</script>

<template>
  <div class="group relative flex items-center gap-2 px-3 py-2 border-2 border-gray-700 hover:border-white cursor-default overflow-hidden">
    <div
      class="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-200"
      :style="{ backgroundColor: skill.color }"
    />
    <Icon :icon="skill.icon" class="text-lg relative z-10" />
    <span class="text-sm font-bold text-gray-300 relative z-10">{{ skill.name }}</span>
  </div>
</template>
