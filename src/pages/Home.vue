<script setup lang="ts">
import { Icon } from "@iconify/vue";
import ProjectCard from "@/components/ProjectCard.vue";
import HighlightTag from "@/components/HighlightTag.vue";
import BdySection from "@/components/BdySection.vue";
import BdyContainer from "@/components/BdyContainer.vue";
import AccentBtn from "@/components/AccentBtn.vue";
import SecondaryBtn from "@/components/SecondaryBtn.vue";
import ExperienceTimeline from "@/components/ExperienceTimeline.vue";
import HoverTag from "@/components/HoverTag.vue";
import Frame from "@/components/Frame.vue";
import profileImage from "@/assets/img/meTankTop.webp";

const projects = [
    {
        id: 1,
        type: "Personal",
        title: "NO OVERTIME",
        status: "En curso",
        game: true,
        desc: "Videojuego multijugador social basado en mecánicas de roles ocultos, centrado en la interacción entre jugadores y la toma de decisiones en tiempo real.",
        tech: ["Godot"],
    },
    {
        id: 2,
        type: "Personal",
        title: "FindYourBuddy",
        status: "En curso",
        desc: "Plataforma social orientada a la divulgación de información y conexión entre usuarios alrededor del ámbito animal, con herramientas centradas en accesibilidad y experiencia de usuario.",
        tech: ["Vue.js", "Django"],
    },
    {
        id: 3,
        type: "Personal",
        title: "FreeCV",
        status: "Próximamente",
        desc: "Sitio web para crear tu currículum de forma fácil, rápida y gratuita usando plantillas predefinidas. Este proyecto nació de mi propia necesidad de una herramienta simple para crear CVs sin complicaciones ni muros de pago.",
        tech: ["React.js", "JavaScript"],
    },
];

const skills = [
    { name: "Vue.js", icon: "logos:vue", color: "#42b883", cat: "Frontend" },
    { name: "React.js", icon: "logos:react", color: "#61dafb", cat: "Frontend" },
    { name: "JavaScript", icon: "logos:javascript", color: "#f7df1e", cat: "Frontend" },
    { name: "TypeScript", icon: "logos:typescript-icon", color: "#3178c6", cat: "Frontend" },
    { name: "HTML & CSS", icon: "logos:html-5", color: "#e34f26", cat: "Frontend" },
    { name: "Tailwind CSS", icon: "logos:tailwindcss-icon", color: "#38bdf8", cat: "Frontend" },
    { name: "Vuetify", icon: "logos:vuetifyjs", color: "#1867c0", cat: "Frontend" },
    { name: "Java", icon: "logos:java", color: "#007396", cat: "Backend" },
    { name: "Spring Boot", icon: "logos:spring-icon", color: "#6db33f", cat: "Backend" },
    { name: "Node.js", icon: "logos:nodejs-icon", color: "#339933", cat: "Backend" },
    { name: "PHP", icon: "logos:php", color: "#777bb4", cat: "Backend" },
    { name: "Laravel", icon: "logos:laravel", color: "#ff2d20", cat: "Backend" },
    { name: "Python", icon: "logos:python", color: "#3776ab", cat: "Backend" },
    { name: "C++", icon: "logos:c-plusplus", color: "#00599c", cat: "Backend" },
    { name: "Odoo", icon: "simple-icons:odoo", color: "#714B67", cat: "Backend" },
    { name: "React Native", icon: "logos:react", color: "#61dafb", cat: "Mobile" },
    { name: "Expo", icon: "logos:expo-icon", color: "#ffffff", cat: "Mobile" },
    { name: "MySQL", icon: "logos:mysql", color: "#4479a1", cat: "Database" },
    { name: "MongoDB", icon: "logos:mongodb-icon", color: "#47a248", cat: "Database" },
    { name: "Godot", icon: "logos:godot-icon", color: "#478CBF", cat: "Game" },
    { name: "Blender", icon: "logos:blender", color: "#E87D0D", cat: "Game" },
];

const experiences = [
    {
        role: "Desarrolladora de Software",
        company: "Binhex",
        period: "Jun 2026 — Presente",
        description: "Desarrollo de módulos personalizados en Odoo 18, interfaces dinámicas con OWL y QWeb, dashboards y snippets para el Website Builder. Participación en despliegues a producción y revisiones de código siguiendo estándares de la OCA.",
        location: "S/C de Tenerife, España",
        type: "Full-time",
        current: true,
    },
    {
        role: "Desarrolladora de Software",
        company: "Binhex",
        period: "Mar 2026 — May 2026",
        description: "Desarrollé módulos personalizados en Odoo 18 con lógica de negocio, validaciones y automatizaciones. Implementé interfaces dinámicas con OWL y QWeb, trabajando en integraciones y extensiones de módulos existentes.",
        location: "S/C de Tenerife, España",
        type: "Interna",
    },
    {
        role: "Desarrolladora de Software",
        company: "ULAN Software",
        period: "Sep 2024 — Mar 2025",
        description: "Contribuí al desarrollo frontend con Vue.js, backend con PHP/MySQL, y participé en un entorno Scrum multicultural. Especializada en crear componentes reutilizables y optimizar la experiencia de usuario.",
        location: "Wrocław, Polonia",
        type: "Interna",
    },
    {
        role: "Desarrolladora de Software",
        company: "ULAN Software",
        period: "Mar 2024 — May 2024",
        description: "Desarrollo de componentes web dinámicos e interfaces con Vue.js, implementando widgets funcionales y colaborando en equipos multiculturales con comunicación técnica en inglés.",
        location: "Wrocław, Polonia",
        type: "Interna",
    },
];

const downloadMyCV = () => {
    const link = document.createElement("a");
    link.href = `${import.meta.env.BASE_URL}CV_Patricia_Ojeda_Padron_ES.pdf`;
    link.download = "CV_Patricia_Ojeda_Padron_ES.pdf";
    link.click();
};

const SECTION_TOP = { id: "top", title: "Inicio", numbered: false };
const SECTION_ABOUT = { id: "sobre-mi", title: "Sobre Mí", num: 1 };
const SECTION_PROJECTS = { id: "proyectos", title: "Proyectos", num: 2 };
const SECTION_EXPERIENCE = { id: "experiencia", title: "Experiencia", num: 3 };
const SECTION_CONTACT = { id: "contacto", title: "Contacto", num: 4 };
</script>

<template>
    <BdyContainer>
        <BdySection v-bind="SECTION_TOP">
            <div class="flex flex-col lg:flex-row items-center gap-16">
                <div class="flex-1 text-center lg:text-left">
                    <HighlightTag color="green" size="md" uppercase class="mb-6">• TRABAJANDO EN BINHEX</HighlightTag>
                    <h1 class="text-5xl lg:text-7xl font-black uppercase tracking-tight leading-none mb-6">
                        Patricia Isabel<br />
                        <span class="text-purple-500">Ojeda Padrón</span>
                    </h1>
                    <div class="flex flex-wrap justify-center lg:justify-start gap-2 mb-10">
                        <span class="hero-tag">⌨ Web Dev</span>
                        <span class="hero-tag hero-tag--game">🎮 Game Dev</span>
                        <span class="hero-tag">✦ UX / UI</span>
                        <span class="hero-tag hero-tag--game">◈ 3D & Creative</span>
                    </div>
                    <div class="flex flex-wrap justify-center lg:justify-start gap-4">
                        <AccentBtn to="#proyectos" label="Ver Proyectos" />
                        <SecondaryBtn @click="downloadMyCV" label="Descarga mi CV" />
                    </div>
                </div>
                <div class="flex-1 flex justify-center relative">
                    <div class="dither-patch" style="width: 90px; height: 36px; top: -18px; right: 18px" />
                    <div class="dither-patch" style="width: 36px; height: 72px; bottom: 24px; left: 4px; opacity: 0.5" />
                    <div class="dither-patch" style="width: 56px; height: 28px; bottom: -12px; right: 36px; opacity: 0.7" />
                    <div class="dither-patch" style="width: 20px; height: 56px; top: 30px; right: -8px; opacity: 0.4" />
                    <Frame :imageRoute="profileImage" alt="Patricia Ojeda Padrón" />
                </div>
            </div>
        </BdySection>

        <BdySection v-bind="SECTION_ABOUT">
            <div class="grid lg:grid-cols-2 gap-16">
                <div class="flex flex-col justify-between gap-12 text-gray-400">
                    <div class="space-y-6">
                        <p class="leading-relaxed">Desarrolladora <span class="text-white font-bold">full-stack</span> con experiencia en frontend y backend. He trabajado en equipos reales, en entornos multiculturales, con código que va a producción.</p>
                        <p class="leading-relaxed">En paralelo, llevo un tiempo metida en el <span class="text-purple-400 font-bold">desarrollo de videojuegos</span>: tengo un proyecto multijugador en marcha en Godot y estoy aprendiendo Blender para el lado más artístico.</p>
                        <p class="leading-relaxed">Me gusta entender los problemas antes de escribir código, y siempre hay algo nuevo entre manos.</p>
                    </div>

                    <div>
                        <h3 class="text-xs font-black uppercase tracking-widest text-gray-400 mb-3 border-b border-gray-800 pb-2">Database</h3>
                        <div class="flex flex-wrap gap-2">
                            <HoverTag v-for="skill in skills.filter((s) => s.cat === 'Database')" :key="skill.name" :skill="skill" />
                        </div>
                    </div>
                </div>

                <div class="space-y-8">
                    <div v-for="category in ['Frontend', 'Backend', 'Mobile']" :key="category">
                        <h3 class="text-xs font-black uppercase tracking-widest text-gray-400 mb-3 border-b border-gray-800 pb-2">{{ category }}</h3>
                        <div class="flex flex-wrap gap-2">
                            <HoverTag v-for="skill in skills.filter((s) => s.cat === category)" :key="skill.name" :skill="skill" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="game-creative-block mt-12 p-6">
                <div class="flex items-center gap-3 mb-5">
                    <span class="pixel-label">GAME &amp; CREATIVE</span>
                    <div class="h-px flex-1 divider-game" />
                </div>
                <div class="flex flex-wrap gap-2">
                    <HoverTag v-for="skill in skills.filter((s) => s.cat === 'Game')" :key="skill.name" :skill="skill" />
                </div>
            </div>
        </BdySection>

        <BdySection v-bind="SECTION_PROJECTS">
            <div class="grid md:grid-cols-2 gap-6">
                <ProjectCard v-for="project in projects" :key="project.id" v-bind="project" />
            </div>
        </BdySection>

        <BdySection v-bind="SECTION_EXPERIENCE">
            <ExperienceTimeline :items="experiences" />
        </BdySection>

        <BdySection v-bind="SECTION_CONTACT">
            <div class="mb-12">
                <h2 class="text-4xl font-black uppercase text-white mb-3">¿Te gusta lo que <span class="text-purple-500">ves</span>?</h2>
                <p class="text-gray-400">Conecta conmigo directamente — sin formularios.</p>
            </div>

            <div class="grid lg:grid-cols-2 gap-6">
                <div class="contact-hero border-2 border-white p-8 flex flex-col justify-between">
                    <HighlightTag color="green" size="md" uppercase class="mb-6 w-fit">• TRABAJANDO EN BINHEX</HighlightTag>
                    <h3 class="text-2xl font-black uppercase text-white mb-4">¿Tienes algo interesante en mente?</h3>
                    <p class="text-gray-400 text-sm leading-relaxed">Actualmente trabajo en <span class="text-white font-bold">Binhex (Tenerife)</span>, pero siempre estoy abierta a colaboraciones y proyectos paralelos.</p>
                </div>

                <div class="grid sm:grid-cols-2 gap-4">
                    <a href="mailto:popadron.dev@gmail.com" class="sm:col-span-2 flex items-center justify-between p-6 border-2 border-purple-500 hover:bg-purple-500/10">
                        <div class="flex items-center gap-4">
                            <Icon icon="lucide:mail" class="text-2xl text-purple-400" />
                            <div>
                                <p class="font-black text-white uppercase text-sm">Email</p>
                                <p class="text-gray-400 text-xs">popadron.dev@gmail.com</p>
                            </div>
                        </div>
                        <Icon icon="lucide:arrow-up-right" class="text-gray-400" />
                    </a>

                    <a href="https://www.linkedin.com/in/popadron" target="_blank" class="flex items-center gap-4 p-6 border-2 border-gray-700 hover:border-white">
                        <Icon icon="logos:linkedin-icon" class="text-2xl" />
                        <div>
                            <p class="font-black text-white uppercase text-sm">LinkedIn</p>
                            <p class="text-gray-400 text-xs">Conecta</p>
                        </div>
                    </a>

                    <a href="https://github.com/popadron" target="_blank" class="flex items-center gap-4 p-6 border-2 border-gray-700 hover:border-white">
                        <Icon icon="logos:github-icon" class="text-2xl invert" />
                        <div>
                            <p class="font-black text-white uppercase text-sm">GitHub</p>
                            <p class="text-gray-400 text-xs">popadron</p>
                        </div>
                    </a>

                    <button @click="downloadMyCV" class="sm:col-span-2 flex items-center justify-between p-6 border-2 border-gray-700 hover:border-white cursor-pointer w-full text-left">
                        <div class="flex items-center gap-4">
                            <Icon icon="lucide:file-text" class="text-2xl text-white" />
                            <span class="font-black text-white uppercase text-sm">Descargar CV (PDF)</span>
                        </div>
                        <Icon icon="lucide:download" class="text-gray-400" />
                    </button>
                </div>
            </div>
        </BdySection>
    </BdyContainer>
</template>

<style scoped>
.dither-patch {
    position: absolute;
    pointer-events: none;
    z-index: 0;
    background-image: linear-gradient(45deg, var(--color-purple) 25%, transparent 25%), linear-gradient(-45deg, var(--color-purple) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, var(--color-purple) 75%), linear-gradient(-45deg, transparent 75%, var(--color-purple) 75%);
    background-size: 4px 4px;
    background-position:
        0 0,
        0 2px,
        2px -2px,
        -2px 0;
    opacity: 0.6;
}

.hero-tag {
    font-size: 0.75rem;
    font-weight: 700;
    border: 2px solid var(--color-border-muted);
    color: var(--color-text-muted);
    padding: 4px 10px;
    letter-spacing: 0.05em;
}

.hero-tag--game {
    border-color: var(--color-game-mid);
    color: var(--color-green);
}

.game-creative-block {
    border: 2px solid color-mix(in srgb, var(--color-green) 30%, transparent);
    box-shadow: 4px 4px 0 var(--color-game-mid);
}

.contact-hero {
    box-shadow: 6px 6px 0 var(--color-purple);
}

.divider-game {
    background-color: color-mix(in srgb, var(--color-green) 20%, transparent);
}

.pixel-label {
    font-family: "Press Start 2P", monospace;
    font-size: 8px;
    color: var(--color-green);
    letter-spacing: 0.1em;
}
</style>
