<script setup>
import HeroComp from 'src/components/Main/HeroComp.vue';
import MyServiceComp from 'src/components/Main/MyServiceComp.vue';
import SpecialSkill from 'src/components/Main/SpecialSkill.vue';
import ProjectsComponent from 'src/components/Main/ProjectsComponent.vue';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import TestimonialComponent from 'src/components/Main/TestimonialComponent.vue';
import MiniBlogComp from 'src/components/Main/MiniBlogComp.vue';
import { useFeedbackStore } from 'src/stores/feedback';
import { useBlogStore } from 'src/stores/blogs';



defineOptions({
  async preFetch({ store }) {
 try {
  const api =  process.env.DEV
  ? 'http://127.0.0.1:8000/api'
  : 'https://server.ebustech.com.ng/api';
    const [getFeedback, getBlog] = await Promise.all([
      fetch(`${api}/feedbacks`).then((res) => res.json()),
      fetch(`${api}/blogs`).then((res) => res.json()),
    ]);
    useBlogStore(store).blogs = getBlog;
    useFeedbackStore(store).feedbacks = getFeedback;
 } catch (error) {
  console.error('Error fetching data:', error)
 }
}
})
</script>

<template>
  <main>
    <hero-comp />
    <my-service-comp />
    <special-skill />
    <projects-component />
    <testimonial-component />
    <mini-blog-comp />
  </main>
</template>
