<template>
  <div>
    <Card />
    <main>
      <h1>Hello from the edge!</h1>
      <div class="info">
        <div class="block">
          <div class="contents">
            <span>Your city</span>
            <strong :title="city() === null || '-'
              ? 'GeoIP information could not be derived from your IP'
              : null
              ">
              {{ city() }}
            </strong>
          </div>
        </div>
        <div class="block">
          <div class="contents">
            <span>Your IP address</span>
            <strong>{{ ip() }}</strong>
          </div>
        </div>
      </div>
    </main>
       <div class="debug">Generated at {{ pageContext.dateString
        }}</div>
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
        <a
          target="_blank"
          href="https://github.com/dennismwas/vue-on-the-edge"
          class="source"
        >
          <LogoGithub />
          Source
      </a>
      </footer>
  </div>
</template>

<script setup>
import Card from './components/Card.vue';
import LogoVercel from './components/LogoVercel.vue';
import LogoGithub from './components/LogoGithub.vue';
import { usePageContext } from '../../renderer/usePageContext';
const pageContext = usePageContext();

const parsedCity = ()=>decodeURIComponent(pageContext.headers['x-vercel-ip-city']);
const city = () =>  parsedCity()=='undefined' ? "Cannot get city":parsedCity();
const ip = ()=> (pageContext.headers['x-forwarded-for'] ?? '127.0.0.1').split(',')[0];

</script>
