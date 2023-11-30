<template>
    <footer>
        <p class="company">
            <a target="_blank" href="https://vercel.com" aria-label="Vercel">
                <LogoVercel />
            </a>
        </p>
        <p class="details">
            Built with
            <a href="https://vuejs.org" target="_blank">Vue</a>
            using
            <a href="https://vite-plugin-ssr.com/" target="_blank">Vite SSR (Vike)</a>
        </p>
        <a target="_blank" href="https://github.com/dennismwas/vue-on-the-edge" class="source">
            <LogoGithub />
            Source
        </a>
    </footer>
</template>

<script setup>
import LogoVercel from './LogoVercel.vue';
import LogoGithub from './LogoGithub.vue';
</script>
