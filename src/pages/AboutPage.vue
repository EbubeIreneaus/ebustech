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
                <h1 class="title">About Me</h1>
                <ul class="breadcrumb-link">
                  <li><router-link to="/">Home</router-link></li>
                  <li class="active" aria-current="page">About</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ...::: End Breadcrumb Section :::... -->

    <!-- ...::: Start Vider Info Display Section :::... -->
    <div class="video-info-display-section section-gap-tb-165">
      <div class="video-info-display-box">
        <div class="container">
          <div class="video-info-display-wrapper">
            <div class="row q-col-gutter-xl items-center justify-between">
              <div class="col-md-5 col-sm-6 col-10">
                <div class="video-card">
                  <a
                    class="wave-btn"
                    href="https://youtu.be/jgYaTxx3Bys"
                    data-autoplay="true"
                    data-vbtype="video"
                    target="_blank"
                    rel="nofollow"
                  >
                    <div class="ripple"><i class="icofont-ui-play"></i></div>
                  </a>

                  <a href="#" class="btn btn-xl btn-outline-one icon-space-left"
                    >Get Resume <i class="icofont-download"></i
                  ></a>
                </div>
              </div>

              <div class="col-md-6 col-12">
                <div class="video-info-content">
                  <h2 class="title">I’m Ebube Ireneaus</h2>

                  <h3 class="sub-title">
                    Software Developer specializing in Web Design  & Mobile App Dev
                  </h3>

                  <p>
                    Hi there! My name is Ebube Ireneaus, and I'm a dedicated web designer and mobile app developer from Abuja, Nigeria. Specializing in web development, I create innovative digital solutions tailored to support the growth of companies and businesses. I am dedicated to creating applications that are not just user-friendly but also of the highest quality, surpassing expectations. Explore my portfolio to see my projects, and together, let's bring your ideas to life!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ...::: End Vider Info Display Section :::... -->

 <resume-comp />

    <special-skill />
  </div>
</template>

<script setup lang="ts">
import { useMeta } from 'quasar';
import { MetaOptions } from 'quasar/dist/types/meta';
import ResumeComp from 'src/components/Main/ResumeComp.vue';
import SpecialSkill from 'src/components/Main/SpecialSkill.vue';

const metaData: MetaOptions = {
  title: 'Website designer Nigeria - Ebustech\'s Founder & Lead Developer',
  meta: {
    description: {
      name: 'description',
      content:
        "Specializing in web development, I create innovative digital solutions tailored to support the growth of companies and businesses. I am dedicated to creating applications that are not just user-friendly but also of the highest quality, surpassing expectations. Explore my portfolio to see my projects, and together, let's bring your ideas to life!",
    },
  },
};

useMeta(metaData);
</script>
