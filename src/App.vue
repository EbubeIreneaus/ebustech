<template>
  <router-view />
</template>

<script setup lang="ts">
// import { useQuasar, QSpinnerFacebook } from 'quasar';
import { useMeta } from 'quasar';
import { MetaOptions } from 'quasar/dist/types/meta';
import {  provide, onMounted } from 'vue';

defineOptions({
  name: 'App',
});
const backend = process.env.DEV
  ? 'http://127.0.0.1:8000/api'
  : 'https://server.ebustech.com.ng/api';

provide('backend', backend);

const description =
  'Discover Ebustech, a proficient web and mobile application developer situated in Abuja, Nigeria. With a focus on web development,  I provide innovative solutions to clients worldwide.';

const metaData: MetaOptions = {
  title: 'Ebustech - Web & Mobile App Developer',
  meta: {
    description: { name: 'description', content: description },
    keywords: {
      name: 'keywords',
      content:
        'web, website, developer, Nigeria, Abuja, FCT, Lagos, benin, enugu, anambra, nsukka, niger, state, designer, mobile app, android app, android, app, application, web development, mobile development, portfolio, programmer, coding, software development, app design, web design, digital solutions, Ebustech',
    },
    ogTitle: {
      property: 'Ebustech - Web & Mobile App Developer',
    },
  },
};

useMeta(metaData);


// onBeforeMount(()=>{
//   $q.loading.show({
//   spinner: QSpinnerFacebook,
//   spinnerColor: 'accent',
//   spinnerSize: 140,
//   backgroundColor: '#2a2c39',
//   message: 'Ebustech - Web & Mobile App Developer',
//   messageColor: 'black',
// })

// })
onMounted(()=>{
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.style.display = 'none';
  }
})
</script>
