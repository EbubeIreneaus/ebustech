<template>
  <router-view />
</template>

<script setup lang="ts">
// import { useQuasar, QSpinnerFacebook } from 'quasar';
import { useMeta } from 'quasar';
import { MetaOptions } from 'quasar/dist/types/meta';
import { provide, onMounted } from 'vue';


defineOptions({
  name: 'App',
});
const backend = !process.env.DEV
  ? 'http://127.0.0.1:8000/api'
  : 'https://server.ebustech.com.ng/api';

provide('backend', backend);

const description =
  `Looking for a website that elevates your brand? Ebustech Web Design creates high-performing websites that boost visibility
   and help you stand out globally.`;

const metaData: MetaOptions = {
  title: 'Website designer Nigeria',
  titleTemplate: title => `${title} - Ebustech Web Design Service.`,
  meta: {
    description: { name: 'description', content: description },
    keywords: {
      name: 'keywords',
      content: `website designer, website developer, web design, web developer, website designer near me, build website, best website builders
      web designers near me, website developers, web developers near me, ecommerce websites, web dev, website design websites,website landing page designer`,
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
onMounted(() => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.style.display = 'none';
  }
  
});
</script>
