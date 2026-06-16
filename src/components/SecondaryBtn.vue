<script setup lang="ts">
interface Props {
    to?: string;
    label?: string;
    target?: '_blank' | '_self';
}

const props = withDefaults(defineProps<Props>(), {
    label: 'Click me',
    target: '_self'
});

const emit = defineEmits<{ click: [] }>();

const handleClick = () => {
    if (props.to) {
        if (props.to.startsWith('#')) {
            document.querySelector(props.to)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            window.open(props.to, props.target);
        }
    } else {
        emit('click');
    }
};
</script>

<template>
    <button @click="handleClick"
        class="px-8 py-4 bg-black hover:bg-white hover:text-black text-white font-black uppercase tracking-wider border-2 border-white">
        {{ label }}
    </button>
</template>
