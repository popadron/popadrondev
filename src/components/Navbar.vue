<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, RouterLink } from 'vue-router';
import RabbitIcon from '@svg/rabbit.svg';
import GroupBtn from '@/components/GroupBtn.vue';
import { Icon } from '@iconify/vue';

const router = useRouter();

interface NavItem {
  name: string;
  href?: string;
}

const navItems = ref([
  { name: 'Inicio', href: '#top' },
  { name: 'Sobre mí', href: '#sobre-mi' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Experiencia', href: '#experiencia' },
  { name: 'Contacto', href: '#contacto' }
]);

const isMenuOpen = ref(false);

const handleNavClick = (item: NavItem) => {
  router.push({ name: 'Home', hash: item.href });
  isMenuOpen.value = false;
};
</script>

<template>
  <header class="fixed top-0 w-full z-50 bg-black border-b-4 border-white">
    <div class="max-w-6xl mx-auto px-6">
      <div class="flex items-center justify-between h-16">
        <RouterLink :to="{ name: 'Home' }" class="flex items-center gap-2">
          <RabbitIcon class="h-6 w-6 text-purple-500" />
          <span class="text-lg font-black uppercase tracking-tight text-white">
            popadron<span class="text-purple-500">.dev</span>
          </span>
        </RouterLink>

        <nav class="hidden md:flex items-center gap-8">
          <a
            v-for="item in navItems"
            :key="item.name"
            :href="item.href"
            @click.prevent="handleNavClick(item)"
            class="text-sm font-bold uppercase tracking-widest text-white hover:text-purple-400"
          >
            {{ item.name }}
          </a>
        </nav>

        <button type="button" @click="isMenuOpen = !isMenuOpen" class="md:hidden p-2">
          <Icon v-if="!isMenuOpen" icon="line-md:close-to-menu-transition" class="w-7 h-7 text-white" />
          <Icon v-else icon="line-md:menu-to-close-transition" class="w-7 h-7 text-white" />
        </button>
      </div>

      <div v-if="isMenuOpen" class="md:hidden bg-black border-t-2 border-white py-4">
        <GroupBtn :items="navItems" @itemClick="isMenuOpen = false" />
      </div>
    </div>
  </header>
</template>
