<script setup lang="ts">
import { useRouter } from 'vue-router';

interface NavItem {
  name: string;
  href?: string;
  action?: string;
  route?: string;
}

const router = useRouter();

const props = defineProps<{ items: NavItem[] }>();
const emit = defineEmits<{ itemClick: [item: NavItem] }>();

const handleClick = (item: NavItem, e: MouseEvent) => {
  if (item.action === 'navigate') {
    e.preventDefault();
    router.push({ name: item.route });
  }
  emit('itemClick', item);
};
</script>

<template>
  <div class="space-y-1">
    <a v-for="item in items" :key="item.name" :href="item.href || '#'"
      @click="handleClick(item, $event)"
      class="block px-4 py-3 text-sm font-black uppercase tracking-widest text-white hover:text-green-400">
      {{ item.name }}
    </a>
  </div>
</template>
