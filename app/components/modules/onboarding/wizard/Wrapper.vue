<script setup lang="ts">
import Form from './Form.vue';

const props = defineProps<{
    personType: 'persona-natural' | 'persona-juridica'
}>();
</script>

<template>
    <div class="w-full bg-white">
        <Form :type="personType" />
    </div>
</template>