<template>
    <div class="flex flex-col max-w-screen-lg container py-20">
        <!-- Header -->
        <div class="flex flex-col mb-10 text-center">
            <h1 class="text-5xl font-playfair font-extrabold text-rat-red mb-4">
                {{ data?.name }}
            </h1>

            <!-- Meta Info -->
            <div class="flex flex-wrap justify-center gap-6 text-lg font-montserrat text-rat-navy mb-6">
                <div class="flex items-center gap-2">
                    <Icon name="mdi:clock-time-eight-outline" class="text-rat-gold text-2xl" />
                    <span>{{ data?.cookTimeMinutes }} mins</span>
                </div>
                <div class="flex items-center gap-2">
                    <Icon name="mdi:fire" class="text-rat-gold text-2xl" />
                    <span>{{ data?.caloriesPerServing }} cal</span>
                </div>
                <div class="flex items-center gap-2">
                    <Icon name="mdi:star" class="text-rat-gold text-2xl" />
                    <span>{{ data?.rating }} ({{ data?.reviewCount }} reviews)</span>
                </div>
            </div>

            <hr class="border-t-2 border-rat-gold w-24 mx-auto" />
        </div>

        <!-- Image -->
        <div class="mb-12 relative">
            <NuxtImg :src="data?.image" densities="x1" sizes="xs:100vw sm:100vw md:100vw lg:100vw"
                class="w-full max-h-[500px] object-cover rounded-2xl shadow-lg border-4 border-rat-gold/40"
                alt="Recipe Image" />
        </div>

        <!-- Ingredients -->
        <div class="mb-12">
            <h2 class="text-3xl font-playfair font-bold text-rat-red mb-6">
                🥕 Ingredients
            </h2>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 text-lg font-montserrat text-rat-navy">
                <li v-for="ingredient in data?.ingredients" :key="ingredient">
                    <label class="flex gap-3 items-center cursor-pointer">
                        <input class="hidden peer" type="checkbox" />
                        <div
                            class="relative w-6 h-6 rounded-full border-2 border-rat-gold flex items-center justify-center peer-checked:after:absolute peer-checked:after:w-3 peer-checked:after:h-3 peer-checked:after:bg-rat-red peer-checked:after:rounded-full">
                        </div>
                        <span class="transition-all peer-checked:line-through peer-checked:text-gray-400">
                            {{ ingredient }}
                        </span>
                    </label>
                </li>
            </ul>
        </div>

        <!-- Instructions -->
        <div class="mb-12">
            <h2 class="text-3xl font-playfair font-bold text-rat-red mb-6">
                🍳 Instructions
            </h2>
            <ul class="flex flex-col text-lg gap-6 font-montserrat text-rat-navy">
                <li v-for="(instruction, index) in data?.instructions" :key="index" class="flex gap-4 items-start">
                    <span
                        class="flex items-center justify-center bg-rat-gold w-8 h-8 rounded-full text-white text-sm font-bold shadow-md">
                        {{ index + 1 }}
                    </span>
                    <p class="flex-1 leading-relaxed">{{ instruction }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { type Recipe } from '../../../types/types'
const { id } = useRoute().params;
const { data, error } = await useFetch<Recipe>(`https://dummyjson.com/recipes/${id}`)
if (error.value) {
    throw createError({
        statusCode: error.value?.statusCode,
        statusMessage: error.value?.statusMessage
    })
}
useSeoMeta({
    title: data.value?.name,
    description: 'Recipes for you to cook!',
    ogTitle: data.value?.name,
    ogDescription: 'Recipes for you to cook!',
    ogImage: data.value?.image,
    ogUrl: `https://ratatouille-recipe-app.vercel.app/recipes/${data.value?.id}`,
    twitterTitle: data.value?.name,
    twitterDescription: 'Recipes for you to cook!',
    twitterImage: data.value?.image,
    twitterCard: 'summary'
})
</script>