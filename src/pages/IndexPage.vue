<script setup>
import HeroComp from 'src/components/Main/HeroComp.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SpecialSkill from 'src/components/Main/SpecialSkill.vue';
// import ProjectsComponent from 'src/components/Main/ProjectsComponent.vue';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import TestimonialComponent from 'src/components/Main/TestimonialComponent.vue';
// import MiniBlogComp from 'src/components/Main/MiniBlogComp.vue';
import { useBlogStore } from 'src/stores/blogs';
import { defineAsyncComponent, onMounted } from 'vue';
import AboutMyself from 'src/components/Main/AboutMyself.vue';
import ResumeComp from 'src/components/Main/ResumeComp.vue';
import ContactUs from 'src/components/Main/ContactUs.vue';
const MyServiceComp = defineAsyncComponent(() =>
  import('src/components/Main/MyServiceComp.vue')
);
const ProjectsComponent = defineAsyncComponent(() =>
  import('src/components/Main/ProjectsComponent.vue')
);
// const TestimonialComponent = defineAsyncComponent(()=> import('src/components/Main/TestimonialComponent.vue'))
const MiniBlogComp = defineAsyncComponent(() =>
  import('src/components/Main/MiniBlogComp.vue')
);

defineOptions({
  async preFetch({ store }) {
    try {
      const [getBlog] = await Promise.all([
        fetch(
          'https://gnews.io/api/v4/top-headlines?category=technology&lang=en&max=20&apikey='+process.env.NEWS_API_KEY
        ).then((res) => res.json()),
      ]);
      useBlogStore(store).blogs = getBlog.articles || [];
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
});

onMounted(() => {
  AOS.init({
    duration: 500,
    easing: 'ease',
  });
});
</script>

<template>
  <main>
    <hero-comp />
    <about-myself />
    <my-service-comp />
    <special-skill id="skill" />
    <resume-comp />
    <projects-component />
    <!-- <testimonial-component /> -->
    <mini-blog-comp />
    <ContactUs />
  </main>
</template>
