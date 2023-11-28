<template>
    <nav>
        <a :aria-current="url == '/edge' ? 'true' : undefined" href="/edge">edge</a>
        /
        <a :aria-current="url == '/node' ? 'true' : undefined" href="/node">node</a>
    </nav>
</template>


<script setup>
const props = defineProps(['url']);
</script>