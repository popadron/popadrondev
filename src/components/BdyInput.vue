<script setup lang="ts">
defineProps({
    label: {
        type: String,
        required: true
    },
    modelValue: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: 'text'
    },
    placeholder: {
        type: String,
        default: ''
    },
    required: {
        type: Boolean,
        default: true
    },
    rows: {
        type: Number,
        default: 4
    }
});

defineEmits<{
    'update:modelValue': [value: string]
}>();
</script>

<template>
    <div class="space-y-2">
        <label class="text-sm font-medium text-slate-300 ml-1">{{ label }}</label>
        <textarea v-if="type === 'textarea'" :value="modelValue"
            @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)" :rows="rows"
            :required="required" :placeholder="placeholder"
            class="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-5 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none">
    </textarea>
        <input v-else :type="type" :value="modelValue"
            @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" :required="required"
            :placeholder="placeholder"
            class="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-5 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all" />
    </div>
</template>