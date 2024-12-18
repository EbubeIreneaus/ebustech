<script setup lang="ts">
import { ref } from 'vue';

const tab = ref('education');

</script>

<template>
   <!-- ...::: Start Resume Info Display Section :::... -->
   <div class="resume-info-display-section section-gap-tb-165 section-bg">
      <div class="resume-info-display-box">
        <div class="tw-container tw-mx-auto">
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
                        <div class="text-subtitle1">
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
                        <div class="text-subtitle1">
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
                        <div class="text-subtitle1">
                          Designed and developed a user-friendly website for Erthlord Real Estate, showcasing their properties and services. I created a seamless online experience, making it easy for clients to browse and inquire about properties.
                        </div>
                      </q-timeline-entry>

                      <q-timeline-entry
                        title="Golden Wealths Investment website"
                        subtitle="2020"
                      >
                        <div class="text-subtitle1">
                          Developed a professional online presence for Golden Wealths Investment, showcasing their investment opportunities and services. I
                        </div>
                      </q-timeline-entry>

                      <q-timeline-entry
                        title="SpringField Investment website"
                        subtitle="2023"
                        color="orange"
                        icon="done_all"
                      >
                        <div class="text-subtitle1">
                          Developed a professional online presence for SpringField Investment, showcasing their investment opportunities and services. I
                        </div>
                      </q-timeline-entry>

                      <q-timeline-entry
                        title="Digital Assets"
                        subtitle="2023"
                      >
                        <div class="text-subtitle1">
                          Sole Fullstack web developer
                        </div>
                      </q-timeline-entry>

                      <q-timeline-entry
                        title="Nepto Assets"
                        subtitle="2023"
                      >
                        <div class="text-subtitle1">
                          Sole Fullstack web developer
                        </div>
                      </q-timeline-entry>

                      <q-timeline-entry
                        title="ONEDEX Investment website"
                        subtitle="2024"
                      >
                        <div class="text-subtitle1">
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
</template>



<style scoped>

</style>