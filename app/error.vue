<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});
</script>

<template>
  <section
    class="flex min-h-screen flex-col items-center justify-center bg-[#fdfcf8] px-6 text-center"
  >
    <!-- Error code -->
    <h1
      class="text-8xl sm:text-9xl font-extrabold mb-4 font-playfair text-rat-red"
    >
      {{ error?.statusCode }}
    </h1>

    <!-- Error message -->
    <p class="mb-8 text-xl sm:text-2xl font-montserrat text-rat-navy">
      {{ error?.statusMessage || "Oops! Something went wrong in the kitchen." }}
    </p>

    <!-- Button -->
    <NuxtLink
      to="/"
      class="px-6 py-3 text-white bg-rat-gold hover:bg-rat-red transition-all duration-300 rounded-xl text-lg font-semibold font-montserrat shadow-md hover:shadow-lg"
    >
      Back to Home
    </NuxtLink>
    
  </section>
</template>
