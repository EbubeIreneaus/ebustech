<template>
  <!-- ...::: Start Project Display Section :::... -->
  <div class="project-display-section section-gap-tb-165">
    <div class="project-display-box">
      <div class="container">
        <div class="row">
          <div class="col-12 col-xl-12 d-block d-md-flex justify-content-between">
            <!-- Start Section Content -->
            <div class="section-content pos-relative">
              <span class="section-tag">Awesome Portfolio</span>
              <h2 class="section-title">My Complete Projects</h2>
            </div>
            <!-- End Section Content -->

            <div class="default-nav-style mt-6 mb-6 mb-md-0">
              <!-- Custom navigation buttons -->
              <div class="slider-button prt-button-prev" @click="prevSlide">
                <i class="icofont-double-left"></i>
              </div>
              <div class="slider-button prt-button-next" @click="nextSlide">
                <i class="icofont-double-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="project-display-wrapper">
        <div class="project-display-slider">
          <!-- Swiper -->
          <div class="swiper prt-swipe">
            <div class="swiper-wrapper">
              <!-- Slides -->
              <div
                class="swiper-slide project-box-single-item"
                v-for="project, index in projects"
                :key="index"
              >
                <div class="img-box">
                  <div class="bg-overlay"></div>
                  <div class="bg-image">
                    <q-img
                      src="assets/images/project/project-slider-img-1.jpg"
                      alt="Project Image"
                    />
                  </div>
                  <div class="image">
                    <q-img
                      :src="project.img"
                      :alt="project.title"
                      style="scale: 1.2"
                    />
                  </div>
                </div>
                <div class="content">
                  <h4 class="title">
                    <a :href="project.link">{{ project.title }}</a>
                  </h4>
                  <ul class="catagory-nav-item">
                    <li>{{ project.comment }}</li>
                  </ul>
                </div>
              </div>
              <!-- End Project Box Single Item -->
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ...::: End Project Display Section :::... -->
</template>


<script setup>
import { ref, onMounted, inject } from 'vue';
import { useQuasar } from 'quasar';

const projects = ref([]);
const $q = useQuasar();
const api = inject('backend');

const getProjects = async () => {
  try {
    const response = await fetch(`${api}/projects`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    projects.value = data;
  } catch (error) {
    console.error('Error fetching projects:', error);
  }
};

onMounted(() => {
  getProjects();

  const swiper = new Swiper('.prt-swipe', {
    slidesPerView: $q.screen.md ? 2 : 1,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
  });

  // Define these methods so that they can be used in the template
  const prevSlide = () => {
    swiper.slidePrev();
  };

  const nextSlide = () => {
    swiper.slideNext();
  };

  // Return these methods to make them available in the template
  return {
    prevSlide,
    nextSlide,
  };
});
</script>
