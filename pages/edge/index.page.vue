<template>
     <Page greeting="Hello from the edge!" :pageContext="pageContext" />
</template>

<script setup>
import Page from '../../components/Page.vue'
import { usePageContext } from '../../renderer/usePageContext';

const pageContext = usePageContext();
</script>
