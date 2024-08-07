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
                <h2 class="title">About Me</h2>
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
                    Software Developer specializing in Website & Mobile
                    Application
                  </h3>

                  <p>
                    Hi there! My name is Ebube Ireneaus, and I'm a dedicated online and mobile app developer from Abuja, Nigeria. Specializing in web development, I create innovative digital solutions tailored to support the growth of companies and businesses. I am dedicated to creating applications that are not just user-friendly but also of the highest quality, surpassing expectations. Explore my portfolio to see my projects, and together, let's bring your ideas to life!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ...::: End Vider Info Display Section :::... -->

    <!-- ...::: Start Resume Info Display Section :::... -->
    <div class="resume-info-display-section section-gap-tb-165 section-bg">
      <div class="resume-info-display-box">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <q-tabs v-model="tab" class="resume-tab nav">
                <q-tab name="education" class="nav-item">
                  <div class="text-h4 q-py-md">Education</div>
                </q-tab>
                <q-tab name="experience" class="nav-item">
                  <div class="text-h4 q-py-md">Experience</div>
                </q-tab>
              </q-tabs>
            </div>
          </div>
          <div class="resume-info-display-wrapper">
            <div class="row">
              <div class="col-12">
                <q-tab-panels
                  v-model="tab"
                  class="bg-transparent"
                  id="myTabContent"
                >
                  <q-tab-panel
                    name="education"
                    class="transparent"
                    id="education-tab"
                    role="tabpanel"
                  >
                    <q-timeline class="resume-list">
                      <q-timeline-entry heading>
                        B.SC Nautical Science
                      </q-timeline-entry>

                      <q-timeline-entry
                        title="Nigeria Maritime University"
                        subtitle="2020 - 2024"
                      >
                        <div>
                          - Bachelor's Degree in Nautical Science, Nigeria Maritime University, 2024<br />
                            - Studied navigation, ship operations, and maritime regulations<br />
                            - Gained knowledge of marine safety, cargo handling, and vessel management<br />
                            - Developed skills in communication, teamwork, and problem-solving
                        </div>
                      </q-timeline-entry>

                      <q-timeline-entry heading> SSCE CERT </q-timeline-entry>

                      <q-timeline-entry
                        title="Goverment Day Secondary School Bwari, Abuja"
                        subtitle="2018 - 2019"
                      >
                        <div>
                          - Senior Secondary Certificate of Education (SSCE), GDSS Bwari, 2019 <br />
                          - Completed secondary education with a focus on mathematics, physics, chemistry....
                        </div>
                      </q-timeline-entry>
                    </q-timeline>
                  </q-tab-panel>

                  <q-tab-panel
                    name="experience"
                    class="bg-transparent"
                    id="experience-tab"
                    role="tabpanel"
                  >
                    <q-timeline color="secondary">

                      <q-timeline-entry heading>
                        Work Experience
                      </q-timeline-entry>

                      <q-timeline-entry
                        title="Erthlord Real Estate Website"
                        subtitle="2019"
                      >
                        <div>
                          Designed and developed a user-friendly website for Erthlord Real Estate, showcasing their properties and services. I created a seamless online experience, making it easy for clients to browse and inquire about properties.
                        </div>
                      </q-timeline-entry>

                      <q-timeline-entry
                        title="Golden Wealths Investment website"
                        subtitle="2020"
                      >
                        <div>
                          Developed a professional online presence for Golden Wealths Investment, showcasing their investment opportunities and services. I
                        </div>
                      </q-timeline-entry>

                      <q-timeline-entry
                        title="SpringField Investment website"
                        subtitle="2023"
                        color="orange"
                        icon="done_all"
                      >
                        <div>
                          Developed a professional online presence for SpringField Investment, showcasing their investment opportunities and services. I
                        </div>
                      </q-timeline-entry>

                      <q-timeline-entry
                        title="Digital Assets"
                        subtitle="2023"
                      >
                        <div>
                          Sole Fullstack web developer
                        </div>
                      </q-timeline-entry>

                      <q-timeline-entry
                        title="Nepto Assets"
                        subtitle="2023"
                      >
                        <div>
                          Sole Fullstack web developer
                        </div>
                      </q-timeline-entry>

                      <q-timeline-entry
                        title="ONEDEX Investment website"
                        subtitle="2024"
                      >
                        <div>
                          Sole Fullstack web developer
                        </div>
                      </q-timeline-entry>
                    </q-timeline>
                  </q-tab-panel>
                </q-tab-panels>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ...::: End Resume Info Display Section :::... -->

    <special-skill />
  </div>
</template>

<script setup lang="ts">
import { useMeta } from 'quasar';
import { MetaOptions } from 'quasar/dist/types/meta';
import SpecialSkill from 'src/components/Main/SpecialSkill.vue';
import { ref } from 'vue';

const tab = ref('education');

const metaData: MetaOptions = {
  title: 'Meet the Developer - Ebustech\'s Founder & Lead Developer',
  meta: {
    description: {
      name: 'description',
      content:
        "Specializing in web development, I create innovative digital solutions tailored to support the growth of companies and businesses. I am dedicated to creating applications that are not just user-friendly but also of the highest quality, surpassing expectations. Explore my portfolio to see my projects, and together, let's bring your ideas to life!",
    },
    keywords: {
      name: 'keywords',
      content:
        'web, website, developer, Nigeria, Abuja, FCT, Lagos, benin, enugu, anambra, nsukka, niger, state, designer, mobile app, android app, android, app, application, web development, mobile development, portfolio, programmer, coding, software development, app design, web design, digital solutions, Ebustech',
    },
    ogTitle: {
      property: 'Meet the Developer - Ebustech\'s Founder & Lead Developer',
    },
  },
};

useMeta(metaData);
</script>
