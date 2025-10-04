<template>
    <NuxtLink :to="to"
        class="px-4 py-2 text-white bg-rat-gold hover:bg-rat-red transition-all duration-300 rounded-lg text-base lg:text-lg font-semibold shadow text-center">
        <slot>{{ label }}</slot>
    </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{ label: string, to: string }>();
</script>