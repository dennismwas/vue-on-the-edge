<template>
    <div>
        <Card />
        <main>
            <NavBar :url="pageContext.urlOriginal" />
            <h1>{{ greeting }}</h1>
            <div class="info">
                <div class="block">
                    <div class="contents">
                        <span>Your city</span>
                        <strong>
                            {{ pageContext.city }}
                        </strong>
                    </div>
                </div>
                <div class="block">
                    <div class="contents">
                        <span>Your IP address</span>
                        <strong>{{ pageContext.ip }}</strong>
                    </div>
                </div>
            </div>
        </main>
        <div class="debug">Generated at {{ pageContext.dateString }}</div>
        <Footer />
    </div>
</template>

<script setup>
import NavBar from './NavBar.vue';
import Card from './Card.vue';
import Footer from './Footer.vue'



const props = defineProps(['greeting', 'pageContext'])

</script>
