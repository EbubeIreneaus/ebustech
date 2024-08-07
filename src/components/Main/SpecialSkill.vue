<script setup lang="ts">
import { CountUp } from 'countup.js';

import {  onMounted, ref, watch } from 'vue';

const countOption = {
  startVal: 0,
  duration: 2,
  enableScrollSpy: true,
  scrollSpyOnce: true
}

function counter(){

new CountUp('counter1', 10, countOption)
new CountUp('counter2', 50, countOption)
new CountUp('counter3', 4, countOption)
}
const isSkillVisible = ref(false)

watch(isSkillVisible, (x)=>{
  if(x){
    let skillLine = document.querySelectorAll('.progress-line')
    for (let index = 0; index < skillLine.length; index++) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const element: any = skillLine[index];
      let width = element.getAttribute('data-width')
      element.style.width = `${width}%`
    }
  }
})



// eslint-disable-next-line @typescript-eslint/no-explicit-any
function skillIntersecting(entry: any): any{
  isSkillVisible.value = entry.isIntersecting
}





  onMounted(()=>{

    counter()
  })
</script>

<style lang="scss">
  .w-100{
    width: 100% !important;
  }
</style>

<template>
       <!-- ...::: Start Skill Display Section :::... -->
       <div class="skill-display-section section-gap-tb-165 section-bg pos-relative">
            <div class="skill-display-section-box">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-xl-6 col-xxl-5">
                            <!-- Start Section Content -->
                            <div class="section-content">
                                <span class="section-tag">Special Skills</span>
                                <h2 class="section-title">My Special Skill Field Here.</h2>

                                <a href="#" class="btn btn-xl btn-outline-one icon-space-left">Get Resume <i class="icofont-download"></i></a>
                            </div>
                            <!-- End Section Content -->
                        </div>

                        <div class="col-xl-6 col-xxl-6 offset-xxl-1">
                            <!-- Start Skill Display Wrapper -->
                            <div class="skill-display-wrapper" v-intersection.once="skillIntersecting">
                                <!-- Start Skill Progress Single Item -->
                                <div class="skill-progress-single-item">
                                    <span class="tag">Communication</span>
                                    <div class="skill-box">
                                        <div class="progress-line" data-width="90">
                                            <span class="skill-percentage">90%</span>
                                        </div>
                                    </div>
                                </div>
                                <!-- ENd Skill Progress Single Item -->
                                <!-- Start Skill Progress Single Item -->
                                <div class="skill-progress-single-item">
                                    <span class="tag">Leadership</span>
                                    <div class="skill-box">
                                        <div class="progress-line" data-width="80">
                                            <span class="skill-percentage">80%</span>
                                        </div>
                                    </div>
                                </div>
                                <!-- ENd Skill Progress Single Item -->
                                <!-- Start Skill Progress Single Item -->
                                <div class="skill-progress-single-item">
                                    <span class="tag">Teamwork</span>
                                    <div class="skill-box">
                                        <div class="progress-line" data-width="90">
                                            <span class="skill-percentage">90%</span>
                                        </div>
                                    </div>
                                </div>
                                <!-- ENd Skill Progress Single Item -->
                                <!-- Start Skill Progress Single Item -->
                                <div class="skill-progress-single-item">
                                    <span class="tag">Flexibility</span>
                                    <div class="skill-box">
                                        <div class="progress-line" data-width="90">
                                            <span class="skill-percentage">90%</span>
                                        </div>
                                    </div>
                                </div>
                                <!-- ENd Skill Progress Single Item -->
                            </div>
                            <!-- End Skill Display Wrapper -->
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
                <div class="container">
                    <div class="row justify-content-center justify-content-sm-start">
                        <div class="d-block d-md-flex justify-content-md-start col-12 col-sm-4 col-md-4">
                            <!-- Start Counterup Single Item -->
                            <div class="counterup-single-item">
                                <div class="icon">
                                    <img src="assets/images/icon/counterup-icon-1.png" alt="">
                                </div>
                                <div class="content">
                                    <h2 class="number"><span class="counter" id="counter1">10</span>+</h2>
                                    <span class="text">Happy Clients</span>
                                </div>
                            </div>
                            <!-- End Counterup Single Item -->
                        </div>
                        <div class="d-block d-md-flex justify-content-md-center col-12 col-sm-4 col-md-4">
                            <!-- Start Counterup Single Item -->
                            <div class="counterup-single-item">
                                <div class="icon">
                                    <img src="assets/images/icon/counterup-icon-2.png" alt="">
                                </div>
                                <div class="content">
                                    <h2 class="number"><span class="counter" id="counter2">100</span></h2>
                                    <span class="text">Project Complete</span>
                                </div>
                            </div>
                            <!-- End Counterup Single Item -->
                        </div>
                        <div class="d-block d-md-flex justify-content-md-end col-12 col-sm-4 col-md-4">
                            <!-- Start Counterup Single Item -->
                            <div class="counterup-single-item">
                                <div class="icon">
                                    <img src="assets/images/icon/counterup-icon-3.png" alt="">
                                </div>
                                <div class="content">
                                    <h2 class="number"><span class="counter" id="counter3">4</span>+</h2>
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
