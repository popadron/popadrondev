<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import BdyContainer from '@/components/BdyContainer.vue';
import BdySection from '@/components/BdySection.vue';
import BdyInput from '@/components/BdyInput.vue';

const form = ref({
    name: '',
    email: '',
    subject: '',
    message: ''
});

const isSending = ref(false);
const isSent = ref(false);

const SECTION_CONTACT = { id: 'contacto', title: 'Contacto', numbered: false, last: true };

const handleSubmit = async () => {
    isSending.value = true;

    await new Promise(resolve => setTimeout(resolve, 2000));

    isSending.value = false;
    isSent.value = true;

    form.value = { name: '', email: '', subject: '', message: '' };

    setTimeout(() => isSent.value = false, 5000);
};
</script>

<template>
    <BdyContainer>
        <BdySection v-bind="SECTION_CONTACT">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
                    ¿Te gusta lo que <span
                        class="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">ves</span>?
                </h2>
                <p class="text-slate-400 text-lg max-w-2xl mx-auto">
                    No necesitas rellenar formularios. Conecta conmigo directamente a través de mis plataformas
                    oficiales o envíame un correo.
                </p>
            </div>

            <div class="grid lg:grid-cols-2 gap-8 items-stretch">

                <div class="flex flex-col gap-6">
                    <div
                        class="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl backdrop-blur-xl flex-1 flex flex-col justify-center">
                        <div
                            class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6 w-fit">
                            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            Disponible para trabajar
                        </div>
                        <h3 class="text-3xl font-bold text-white mb-4">Hablemos de tu próximo gran proyecto.</h3>
                        <p class="text-slate-400 leading-relaxed">
                            Actualmente estoy buscando nuevas oportunidades para colaborar en proyectos innovadores y
                            desafiantes. Mi zona horaria es <span class="text-slate-200">España (CET)</span>, pero estoy
                            acostumbrada a trabajar de forma asíncrona con equipos globales.
                        </p>
                    </div>
                </div>

                <div class="grid sm:grid-cols-2 gap-4">

                    <a href="mailto:popadron.dev@gmail.com"
                        class="sm:col-span-2 group relative p-8 bg-gradient-to-br from-purple-600/20 to-slate-900 border border-purple-500/20 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-300">
                        <div class="relative z-10 flex flex-col h-full">
                            <Icon icon="lucide:mail"
                                class="text-4xl text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                            <h4 class="text-xl font-bold text-white">Enviar Email</h4>
                            <p class="text-slate-400 text-sm">popadron.dev@gmail.com</p>
                            <Icon icon="lucide:arrow-up-right"
                                class="absolute top-8 right-8 text-slate-500 group-hover:text-white transition-colors" />
                        </div>
                    </a>

                    <a href="https://linkedin.com/in/tu-usuario" target="_blank"
                        class="group p-8 bg-slate-900/40 border border-slate-800 rounded-3xl hover:bg-slate-800/60 transition-all">
                        <Icon icon="logos:linkedin-icon" class="text-4xl mb-4" />
                        <h4 class="text-lg font-bold text-white">LinkedIn</h4>
                        <p class="text-slate-500 text-xs">Conecta profesionalmente</p>
                    </a>

                    <a href="https://github.com/popadron" target="_blank"
                        class="group p-8 bg-slate-900/40 border border-slate-800 rounded-3xl hover:bg-slate-800/60 transition-all">
                        <Icon icon="logos:github-icon"
                            class="text-4xl mb-4 filter invert group-hover:invert-0 transition-all" />
                        <h4 class="text-lg font-bold text-white">GitHub</h4>
                        <p class="text-slate-500 text-xs">Mira mi código</p>
                    </a>

                    <a href="/tu-cv.pdf" download
                        class="sm:col-span-2 group flex items-center justify-between p-6 bg-pink-500/5 border border-pink-500/10 rounded-2xl hover:bg-pink-500/10 transition-all">
                        <div class="flex items-center gap-4">
                            <Icon icon="lucide:file-text" class="text-2xl text-pink-400" />
                            <span class="text-slate-200 font-medium">Descargar mi CV (PDF)</span>
                        </div>
                        <Icon icon="lucide:download" class="text-slate-500 group-hover:text-pink-400 animate-bounce" />
                    </a>

                </div>
            </div>
        </BdySection>
    </BdyContainer>
</template>