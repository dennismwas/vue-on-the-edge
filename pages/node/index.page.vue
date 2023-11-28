<template>
    <Page greeting="Hello from Node!" :pageContext="pageContext" />
</template>

<script setup>
import Page from '../components/Page.vue'
import { usePageContext } from '../../renderer/usePageContext';

const pageContext = usePageContext();
</script>
