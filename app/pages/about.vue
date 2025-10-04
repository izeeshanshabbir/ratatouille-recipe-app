<template>
    <main>
        <section class="container py-20">
            <h1 class="text-6xl font-extrabold mb-6 font-playfair text-rat-red">Our Story</h1>
            <p class="text-xl font-montserrat text-rat-navy max-w-3xl leading-relaxed">
                Inspired by the heartwarming spirit of *Ratatouille*, this recipe app is built to celebrate the
                joy of cooking. Just as Chef Gusteau said, <span class="italic">“Anyone can cook”</span> — we believe
                delicious food should be within reach for everyone. Here, you’ll discover recipes that bring
                together simplicity, flavor, and a touch of Parisian charm.
            </p>
        </section>
    </main>
</template>

<script setup lang="ts">
useSeoMeta({
    title: "Ratatouille",
    description: "Recipes for you to cook!",
    ogTitle: "Ratatouille",
    ogDescription: "Recipes for you to cook!",
    ogImage: "https://ratatouille-recipe-app.vercel.app/ratatouille.png",
    ogUrl: `https://ratatouille-recipe-app.vercel.app/`,
    twitterTitle: "Ratatouille",
    twitterDescription: "Recipes for you to cook!",
    twitterImage: "https://ratatouille-recipe-app.vercel.app/ratatouille.png",
    twitterCard: "summary",
});
</script>