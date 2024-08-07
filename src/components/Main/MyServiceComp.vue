<template>
  <div>
    <div class="service-display-section section-gap-tb-165 pos-relative">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <!-- Start Section Content -->
            <div class="section-content">
              <span class="section-tag">My Services</span>
              <h2 class="section-title">Service Provide For My Clients.</h2>
            </div>
            <!-- End Section Content -->
          </div>
        </div>
      </div>

      <div class="service-display-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="service-display-slider">
                <!-- Swiper -->
                <div class="swiper service-swipe">
                  <div class="swiper-wrapper">
                    <!-- Slides -->
                    <!-- Start Service Box Single Item -->
                    <div class="swiper-slide service-box-single-item">
                      <div class="inner-shape inner-shape-top-right"></div>
                      <div class="icon">
                        <img src="assets/images/icon/service-icon-1.png" alt="" />
                      </div>
                      <h4 class="title">
                        <a href="service-details.html">Web Development</a>
                      </h4>
                      <ul class="list-item">
                        <li>HTML/CSS</li>
                        <li>JavaScript</li>
                        <li>Vue.js</li>
                        <li>Python</li>
                        <li>Django</li>
                      </ul>
                      <div class="inner-shape inner-shape-bottom-right"></div>
                    </div>
                    <!-- End Service Box Single Item -->

                    <!-- Start Service Box Single Item -->
                    <div class="swiper-slide service-box-single-item">
                      <div class="inner-shape inner-shape-top-right"></div>
                      <div class="icon">
                        <img src="assets/images/icon/service-icon-2.png" alt="" />
                      </div>
                      <h4 class="title">
                        <a href="service-details.html">Mobile Application</a>
                      </h4>
                      <ul class="list-item">
                        <li>HTML/CSS</li>
                        <li>JavaScript</li>
                        <li>Quasar Framework</li>
                        <li>Cordova</li>
                        <li>Electron</li>
                      </ul>
                      <div class="inner-shape inner-shape-bottom-right"></div>
                    </div>
                    <!-- End Service Box Single Item -->

                    <!-- Start Service Box Single Item -->
                    <div class="swiper-slide service-box-single-item">
                      <div class="inner-shape inner-shape-top-right"></div>
                      <div class="icon">
                        <img src="assets/images/icon/service-icon-3.png" alt="" />
                      </div>
                      <h4 class="title">
                        <a href="service-details.html">SEO Optimization</a>
                      </h4>
                      <ul class="list-item">
                        <li>Keyword Research</li>
                        <li>Image Optimization</li>
                        <li>Responsive Design</li>
                        <li>Meta Description</li>
                        <li>Lot More</li>
                      </ul>
                      <div class="inner-shape inner-shape-bottom-right"></div>
                    </div>
                    <!-- End Service Box Single Item -->
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
    </div>
  </div>
</template>


<script setup>
import { onMounted } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();

onMounted(() => {
  new Swiper('.service-swipe', {
    slidesPerView: $q.screen.md ? 3 : $q.screen.sm ? 2 : 1,
    loop: true,
    speed: 5000,
    spaceBetween: 50,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
</script>


