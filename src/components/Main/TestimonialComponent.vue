<template>
  <!-- ...::: Start Testimonial Display Section :::... -->
  <div class="testimonial-display-section section-gap-tb-165 section-bg">
    <div
      class="testimonial-display-box d-flex flex-column align-items-center d-xl-block pos-relative"
    >
      <div class="container overflow-hidden">
        <div class="row">
          <div class="col d-xl-flex justify-content-xl-end">
            <!-- Start Section Content -->
            <div class="section-content pos-relative">
              <span class="section-tag">Testimonial</span>
              <h2 class="section-title">Satisfied Clients Say</h2>
            </div>
            <!-- End Section Content -->
          </div>
        </div>

        <div class="testimonial-display-wrapper">
          <div class="row">
            <div class="col-12">
              <div class="testimonial-display-slider">
                <!-- Swiper -->
                <div class="swiper tst-swipe">
                  <div class="swiper-wrapper">
                    <!-- Start testimonial Slider Single Item -->
                    <div
                      class="swiper-slide testimonial-slider-single-item"
                      v-for="feedback, index in feedbacks"
                      :key="index"
                    >
                      <div class="inner-shape inner-shape-top-right"></div>
                      <div class="content">
                        <span class="icon">“</span>
                        <p class="text">
                          {{ feedback.comment }}
                        </p>
                        <div class="info">
                          <div class="author">
                            <h4 class="name">{{feedback.name}}</h4>
                            <span class="designation">{{ feedback.position }}</span>
                          </div>
                          <q-rating v-model="feedback.rating" readonly max="5" />
                        </div>
                      </div>
                    </div>
                    <!-- End testimonial Slider Single Item -->
                  </div>
                  <!-- Add Pagination -->
                  <div class="swiper-pagination"></div>
                  <!-- Add Navigation -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="default-nav-style mt-5 mt-xl-0">
        <!-- Custom navigation buttons -->
        <div class="slider-button tst-button-prev" @click="prevSlide">
          <i class="icofont-double-left"></i>
        </div>
        <div class="slider-button tst-button-next" @click="nextSlide">
          <i class="icofont-double-right"></i>
        </div>
      </div>
    </div>
  </div>
  <!-- ...::: End Testimonial Display Section :::... -->
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useFeedbackStore } from 'src/stores/feedback';
import { storeToRefs } from 'pinia';

const { feedbacks } = storeToRefs(useFeedbackStore());
const swiperRef = ref(null);

const prevSlide = () => {
  if (swiperRef.value) {
    swiperRef.value.slidePrev(); // Access the slidePrev method directly
  }
};

const nextSlide = () => {
  if (swiperRef.value) {
    swiperRef.value.slideNext(); // Access the slideNext method directly
  }
};

onMounted(() => {
  const swiper = new Swiper('.tst-swipe', {
    slidesPerView: window.innerWidth >= 768 ? 2 : 1,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // navigation: {
    //   nextEl: '.tst-button-next',
    //   prevEl: '.tst-button-prev',
    // },
    spaceBetween: 30,
  });

  swiperRef.value = swiper;
});
</script>
