<script setup lang="ts">
import { Icon } from '@iconify/vue';
import Tag from '@/components/Tag.vue';

interface Experience {
    role: string;
    company: string;
    period: string;
    description: string;
    location: string;
    type: string;
    current?: boolean;
}

defineProps<{ items: Experience[] }>();
</script>

<template>
    <div class="flex flex-col gap-0 border-l-4 border-white ml-4">
        <div v-for="(exp, index) in items" :key="index" class="relative pl-8 pb-12 last:pb-0">
            <div :class="['absolute -left-[9px] top-1 w-4 h-4 border-2 border-white', exp.current ? 'bg-green-400' : 'bg-purple-500']" />

            <div class="flex flex-wrap items-center gap-3 mb-2">
                <span class="font-mono text-xs font-black uppercase text-purple-400">{{ exp.period }}</span>
                <Tag :label="exp.type" />
            </div>

            <h3 class="text-2xl font-black uppercase text-white leading-tight">{{ exp.company }}</h3>
            <p class="text-sm font-bold text-gray-300 mb-1">{{ exp.role }}</p>

            <div class="flex items-center gap-1 text-gray-600 text-xs mb-4">
                <Icon icon="lucide:map-pin" class="text-xs" />
                <span>{{ exp.location }}</span>
            </div>

            <p class="text-gray-400 text-sm leading-relaxed">{{ exp.description }}</p>
        </div>
    </div>
</template>
