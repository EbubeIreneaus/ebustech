<template>
  <div>
    <!-- ...::: Start Breadcrumb Section :::... -->
    <div class="breadcrumb-section section-bg overflow-hidden pos-relative">
            <div class="breadcrumb-shape-top-left"></div>
            <div class="breadcrumb-shape-bottom-right"></div>
            <div class="breadcrumb-box">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="breadcrumb-content">
                                <h1 class="title">Services I Provide</h1>
                                <ul class="breadcrumb-link">
                                    <li><route-link to="/">Home</route-link></li>
                                    <li class="active" aria-current="page">Service Details</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- ...::: End Breadcrumb Section :::... -->
         <my-service-comp />
         <SpecialSkill />
         <testimonial-component />
  </div>
</template>

<script setup>
import MyServiceComp from 'src/components/Main/MyServiceComp.vue';
import SpecialSkill from 'src/components/Main/SpecialSkill.vue';
import TestimonialComponent from 'src/components/Main/TestimonialComponent.vue';
import { useMeta } from 'quasar';

const metaData = {
  title: 'Ebustech - Web & Mobile App Developer Service',
  meta: {
    description: { name: 'description', content: 'Get professional assistance for developing mobile and web apps at Ebustech. I bring concepts to life digitally, creating everything from unique online solutions to mobile app development. Get to know our offerings better, and let\'s collaborate on innovation!' },
    keywords: {
      name: 'keywords',
      content:
        'web, website, developer, Nigeria, Abuja, FCT, Lagos, benin, enugu, anambra, nsukka, niger, state, designer, mobile app, android app, android, app, application, web development, mobile development, portfolio, programmer, coding, software development, app design, web design, digital solutions, Ebustech',
    },
    ogTitle: {
      property: 'Ebustech - Web & Mobile App Developer Service',
    },
  },
};

useMeta(metaData)
</script>
