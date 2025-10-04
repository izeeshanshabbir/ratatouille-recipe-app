<template>
    <main>
        <section class="bg-[#f1f1f1]">
            <div class="container flex flex-col lg:flex-row items-center py-20 gap-10">
                <div class="flex-1 order-2 lg:order-1 text-center lg:text-left">
                    <h1 class="text-4xl lg:text-6xl font-extrabold mb-6 font-playfair text-rat-red">
                        Anyone Can Cook! <br /> Discover the Joy of French-Inspired Recipes
                    </h1>
                    <p class="text-xl lg:text-2xl mb-8 font-montserrat text-rat-navy">
                        From cozy kitchens to fine dining tables — unleash your inner chef today.
                    </p>
                    <button
                        @click="scrollToRecipes"
                        class="px-6 py-3 text-white bg-rat-gold hover:bg-rat-red transition-all rounded-xl text-lg font-semibold shadow-md">
                        Start Cooking
                    </button>
                </div>
                <div class="flex-1 order-1 lg:order-2">
                    <NuxtImg sizes="xs:100vw sm: 667px" densities="x1" format="webp" src="/ratatouille_dish.png"
                        alt="" />
                </div>
            </div>
        </section>
        <section class="py-20 container" id="recipes">
            <h2 class="text-3xl lg:text-5xl mb-2 font-playfair text-rat-red">
                Taste, Create, Savor
            </h2>
            <p class="text-lg lg:text-xl mb-8 text-rat-navy">
                Explore our most beloved recipes and find your next favorite dish.
            </p>
            <div v-if="!error" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
                <RecipeCard v-for="recipe in data?.recipes" :recipe="recipe" />
            </div>
            <p v-else class="text-center text-xl">Failed to load recipes. Please try again later.</p>
        </section>
    </main>
</template>

<script setup lang="ts">
import type { RecipeResponse } from '../../types/types';
const { data, error } = await useFetch<RecipeResponse>('https://dummyjson.com/recipes?limit=12');
useSeoMeta({
    title: "Ratatouille",
    description: "Recipes for you to cook!",
    ogTitle: "Ratatouille",
    ogDescription: "Recipes for you to cook!",
    ogImage: "/ratatouille.png",
    ogUrl: `http://localhost:3000`,
    twitterTitle: "Ratatouille",
    twitterDescription: "Recipes for you to cook!",
    twitterImage: "/ratatouille.png",
    twitterCard: "summary",
});
const scrollToRecipes = () => {
  const el = document.getElementById("recipes");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};
</script>