<script setup lang="ts">
import { CountUp } from 'countup.js';

import { onMounted } from 'vue';

const countOption = {
  startVal: 0,
  duration: 2,
  enableScrollSpy: true,
  scrollSpyOnce: true,
};

function counter() {
  new CountUp('counter1', 10, countOption);
  new CountUp('counter2', 50, countOption);
  new CountUp('counter3', 4, countOption);
}

onMounted(() => {
  counter();
});

const mySkills = [
  { name: 'html', src: 'html.png', alt: 'HTML Logo' },
  { name: 'css', src: 'css.png', alt: 'CSS Logo' },
  { name: 'javaScript', src: 'js.png', alt: 'JavaScript Logo' },
  { name: 'tailwind', src: 'tailwind.png', alt: 'Tailwindcss Logo' },
  { name: 'vue', src: 'vue.png', alt: 'vue.js Logo' },
  { name: 'nuxt', src: 'nuxt.png', alt: 'nuxt.js Logo' },
  { name: 'react', src: 'react.png', alt: 'React.js Logo' },
  { name: 'next', src: 'next.png', alt: 'Next.js Logo' },
  { name: 'typescript', src: 'ts.png', alt: 'typescript Logo' },
  { name: 'express', src: 'express.png', alt: 'express.js Logo' },
  { name: 'node', src: 'node.png', alt: 'node.js Logo' },
  { name: 'python', src: 'python.png', alt: 'python Logo' },
  { name: 'django', src: 'django.png', alt: 'django Logo' },
  { name: 'git', src: 'git.png', alt: 'git Logo' },
  { name: 'github', src: 'github.png', alt: 'github Logo' },

];
</script>

<style lang="scss" scoped>
.w-100 {
  width: 100% !important;
}
</style>

<template>
  <!-- ...::: Start Skill Display Section :::... -->
  <div class="skill-display-section section-gap-tb-165 section-bg pos-relative">
    <div class="skill-display-section-box">
      <div class="tw-container tw-mx-auto tw-px-3">
        <div class="tw-grid xl:tw-grid-cols-2 align-items-center">
          <div class="col-xl-6 col-xxl-5">
            <!-- Start Section Content -->
            <div class="section-content">
              <span class="section-tag" data-aos="fade-up">Special Skills</span>
              <h2 class="section-title" data-aos="fade-right">My Special Skill Field Here.</h2>

              <q-btn href="#" class="btn btn-xl btn-outline-one icon-space-left" data-aos="fade-up"
                >Get Resume <i class="icofont-download"></i
              ></q-btn>
            </div>
            <!-- End Section Content -->
          </div>

          <div class="tw-flex tw-justify-center ">
            <div class="offset-xxl-1 tw-mt-5 tw-grid sm:tw-grid-cols-5 tw-grid-cols-3 tw-gap-2">
           <div  v-for="img in mySkills" :key="img.name" class="tw-rounded-lg tw-px-2 tw-m-1.5" data-aos="fade-up">
            <img
             :src="'/assets/images/tech-logos/' + img.src"
             :alt="img.alt.toUpperCase()"
             class=" tw-px-3 tw-py-3 tw-size-[100px] tw-object-cover tw-object-center"
           />
           <p class="tw-capitalize text-caption tw-text-center">{{ img.alt.split(' ')[0] }}</p>
           </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    <div class="skill-display-shape"></div>
  </div>
  <!-- ...::: End Skill Display Section :::... -->
  <!-- ...::: Start Counter Display Section :::... -->
  <div class="counter-display-section section-gap-tb-165 section-bg-2">
    <div class="counter-display-wrapper">
      <div class="tw-container tw-mx-auto ">
        <div class="row justify-content-center justify-content-sm-start">
          <div
            class="d-block d-md-flex justify-content-md-start col-12 col-sm-4 col-md-4"
          >
            <!-- Start Counterup Single Item -->
            <div class="counterup-single-item ">
              <div class="icon">
                <img
                  src="assets/images/icon/counterup-icon-1.png"
                  alt="Ebustech web design service number of happy clent"
                />
              </div>
              <div class="content">
                <h2 class="number">
                  <span class="counter" id="counter1">10</span>+
                </h2>
                <span class="text">Happy Clients</span>
              </div>
            </div>
            <!-- End Counterup Single Item -->
          </div>
          <div
            class="d-block d-md-flex justify-content-md-center col-12 col-sm-4 col-md-4"
          >
            <!-- Start Counterup Single Item -->
            <div class="counterup-single-item">
              <div class="icon">
                <img
                  src="assets/images/icon/counterup-icon-2.png"
                  alt="Ebustech web design service project completed"
                />
              </div>
              <div class="content">
                <div class="number">
                  <span class="counter" id="counter2">100</span>
                </div>
                <span class="text">Project Complete</span>
              </div>
            </div>
            <!-- End Counterup Single Item -->
          </div>
          <div
            class="d-block d-md-flex justify-content-md-end col-12 col-sm-4 col-md-4"
          >
            <!-- Start Counterup Single Item -->
            <div class="counterup-single-item">
              <div class="icon">
                <img
                  src="assets/images/icon/counterup-icon-3.png"
                  alt="Ebustech web design service years of experience"
                />
              </div>
              <div class="content">
                <div class="number">
                  <span class="counter" id="counter3">4</span>+
                </div>
                <span class="text">Years of Experience</span>
              </div>
            </div>
            <!-- End Counterup Single Item -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ...::: End Counter Display Section :::... -->
</template>
