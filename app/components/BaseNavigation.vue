<template>
  <header class="py-4 shadow-md bg-white/90 backdrop-blur-sm sticky top-0 z-50">
    <nav class="flex container items-center">
      <!-- Logo -->
      <NuxtLink to="/" class="flex gap-2 items-center group">
        <NuxtImg
          width="60px"
          densities="x1"
          src="/ratatouille.png"
          format="webp"
          alt="logo"
          class="transition-transform duration-300 group-hover:rotate-6"
        />
        <span
          class="text-3xl font-playfair font-extrabold text-rat-red hidden sm:inline tracking-wide"
        >
          Ratatouille
        </span>
      </NuxtLink>

      <!-- Nav -->
      <ul
        class="flex gap-8 ml-auto text-lg font-montserrat font-semibold text-rat-navy"
      >
        <li>
          <NuxtLink
            to="/"
            class="relative after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-rat-gold after:transition-all hover:after:w-full hover:text-rat-red"
          >
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/about"
            class="relative after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-rat-gold after:transition-all hover:after:w-full hover:text-rat-red"
          >
            About
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
