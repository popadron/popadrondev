<script setup lang="ts">
import Tag from '@/components/Tag.vue';
import AccentBtn from '@/components/AccentBtn.vue';
import SecondaryBtn from '@/components/SecondaryBtn.vue';
import { Icon } from '@iconify/vue';

interface ProjectCardProps {
  title: string;
  desc: string;
  tech: string[];
  status: string;
  type: string;
  demoUrl?: string;
  codeUrl?: string;
  game?: boolean;
}

defineProps<ProjectCardProps>();
</script>

<template>
  <div v-if="game" class="game-card relative overflow-hidden p-6">
    <div class="game-card__bg absolute inset-0 pointer-events-none" />
    <div class="game-card__scanlines absolute inset-0 pointer-events-none" />
    <div class="corner corner-tl" /><div class="corner corner-tr" />
    <div class="corner corner-bl" /><div class="corner corner-br" />

    <div class="relative z-10">
      <div class="flex justify-between items-center mb-5">
        <span class="px px-label game-text">// PERSONAL PROJECT</span>
        <span class="px px-label game-text blink">● IN PROGRESS</span>
      </div>

      <h3 class="px px-title text-white mb-1 leading-relaxed">{{ title }}</h3>
      <div class="game-card__dither mb-5" />

      <p class="px px-desc game-text mb-6 leading-loose">{{ desc }}</p>

      <div class="flex flex-wrap gap-2 mb-2">
        <span v-for="tag in tech" :key="tag" class="px px-label game-text game-tag px-2 py-1">
          {{ tag }}
        </span>
      </div>

      <div class="border-t border-lime-400/20 mt-5 pt-3">
        <span class="px px-label game-text-dim">ENGINE: GODOT &nbsp;|&nbsp; STATUS: WIP &nbsp;|&nbsp; PLAYER: 1</span>
      </div>

      <div v-if="demoUrl || codeUrl" class="flex gap-4 mt-5">
        <AccentBtn v-if="demoUrl" :to="demoUrl" label="Demo" class="flex-1" />
        <SecondaryBtn v-if="codeUrl" :to="codeUrl" label="GitHub" class="flex-1" />
      </div>
    </div>
  </div>

  <div v-else class="p-6 border-2 border-gray-700 hover:border-white bg-black">
    <div class="flex justify-between items-start mb-5">
      <div class="flex items-center gap-2">
        <Icon v-if="type === 'Privado'" icon="lucide:lock" class="w-4 h-4 text-yellow-400" />
        <Icon v-else icon="lucide:user" class="w-4 h-4 text-purple-400" />
        <span class="text-xs font-black uppercase tracking-widest text-gray-500">{{ type }}</span>
      </div>
      <span :class="[
        'font-mono text-xs font-black uppercase border-2 px-2 py-0.5',
        status === 'Completado' ? 'border-emerald-400 text-emerald-400' :
        status === 'En curso'   ? 'border-purple-500 text-purple-400'  :
                                  'border-gray-600 text-gray-400'
      ]">{{ status }}</span>
    </div>

    <h3 class="text-2xl font-black uppercase text-white mb-3">{{ title }}</h3>
    <p class="text-gray-400 text-sm mb-6 leading-relaxed">{{ desc }}</p>

    <div class="flex flex-wrap gap-2 mb-6">
      <Tag v-for="tag in tech" :key="tag" :label="tag" />
    </div>

    <div v-if="demoUrl || codeUrl" class="flex gap-4">
      <AccentBtn v-if="demoUrl" :to="demoUrl" label="Demo" class="flex-1" />
      <SecondaryBtn v-if="codeUrl" :to="codeUrl" label="GitHub" class="flex-1" />
    </div>
  </div>
</template>

<style scoped>
.px { font-family: 'Press Start 2P', monospace; }
.px-label { font-size: 7px; }
.px-title { font-size: 13px; }
.px-body  { font-size: 7px; }
.px-desc  { font-size: 10px; }

.game-text      { color: var(--color-green); }
.game-text-dim  { color: color-mix(in srgb, var(--color-green) 50%, #000); }
.game-text-muted{ color: color-mix(in srgb, var(--color-green) 30%, #000); }
.game-tag {
  border: 1px solid color-mix(in srgb, var(--color-green) 40%, transparent);
  background-color: color-mix(in srgb, var(--color-green) 5%, transparent);
}

.game-card {
  background-color: var(--color-game-bg);
  border: 3px solid var(--color-green);
  box-shadow: 0 0 0 1px #000, 6px 6px 0 var(--color-game-dark);
  image-rendering: pixelated;
}

.game-card__bg {
  background-image:
    linear-gradient(45deg, var(--color-game-deep) 25%, transparent 25%),
    linear-gradient(-45deg, var(--color-game-deep) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, var(--color-game-deep) 75%),
    linear-gradient(-45deg, transparent 75%, var(--color-game-deep) 75%);
  background-size: 4px 4px;
  background-position: 0 0, 0 2px, 2px -2px, -2px 0;
}

.game-card__scanlines {
  background: repeating-linear-gradient(
    to bottom,
    transparent 0px,
    transparent 3px,
    rgba(0, 0, 0, 0.35) 3px,
    rgba(0, 0, 0, 0.35) 4px
  );
}

.game-card__dither {
  height: 8px;
  background-image:
    linear-gradient(45deg, var(--color-green) 25%, transparent 25%),
    linear-gradient(-45deg, var(--color-green) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, var(--color-green) 75%),
    linear-gradient(-45deg, transparent 75%, var(--color-green) 75%);
  background-size: 4px 4px;
  background-position: 0 0, 0 2px, 2px -2px, -2px 0;
  opacity: 0.4;
}

.corner {
  position: absolute;
  width: 14px;
  height: 14px;
  border-color: var(--color-green);
  border-style: solid;
  z-index: 20;
}
.corner-tl { top: 6px;    left: 6px;   border-width: 2px 0 0 2px; }
.corner-tr { top: 6px;    right: 6px;  border-width: 2px 2px 0 0; }
.corner-bl { bottom: 6px; left: 6px;   border-width: 0 0 2px 2px; }
.corner-br { bottom: 6px; right: 6px;  border-width: 0 2px 2px 0; }

@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}
.blink { animation: blink 1s step-start infinite; }
</style>
