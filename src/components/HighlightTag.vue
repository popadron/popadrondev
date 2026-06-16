<script setup lang="ts">
import { computed } from 'vue';

type ColorType = 'purple' | 'emerald' | 'blue' | 'slate' | 'green';
type SizeType = 'sm' | 'md';

const props = defineProps({
  color: { type: String as () => ColorType, default: 'purple' as ColorType },
  size: { type: String as () => SizeType, default: 'sm' as SizeType },
  uppercase: { type: Boolean, default: false }
});

const colorClasses: Record<ColorType, string> = {
  purple: 'text-purple-400 border-purple-500',
  emerald: 'text-emerald-400 border-emerald-400',
  blue: 'text-blue-400 border-blue-400',
  slate: 'text-gray-400 border-gray-500',
  green: 'text-green-400 border-green-400',
};

const sizeClasses: Record<SizeType, string> = {
  sm: 'px-2 py-0.5 text-xs font-black',
  md: 'px-3 py-1 text-sm font-black tracking-wider',
};

const classes = computed(() => [
  'inline-block border-2 font-mono',
  colorClasses[props.color],
  sizeClasses[props.size],
  props.uppercase ? 'uppercase' : '',
]);
</script>

<template>
  <span :class="classes"><slot></slot></span>
</template>
