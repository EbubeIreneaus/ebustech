<template>
  <!-- ...::: Start Blog Feed Display Section :::... -->
  <div class="blog-feed-display-section section-gap-tb-165" id="blog">
    <div class="blog-feed-display-box">
      <div class="tw-container tw-mx-auto">
        <div class="row">
          <div class="col">
            <!-- Start Section Content -->
            <div class="section-content pos-relative text-center">
              <span class="section-tag" data-aos="fade-up">Blog Post</span>
              <h2 class="section-title" data-aos="fade-right">Latest Tips & Tricks</h2>
            </div>
            <!-- End Section Content -->
          </div>
        </div>

        <div class="tw-px-5 lg:tw-px-1 tw-max-w-6xl tw-mx-auto">
          <div class="row mb-n5">
            <div
              class="col-12 mb-5"
              v-for="(blog, index) in blogs"
              :key="index"
              data-aos="fade-up"
            >
              <!-- Start Blog Feed Single Item -->
              <div class="tw-flex md:tw-flex-row tw-flex-col md:tw-items-center tw-px-4 tw-gap-5">
                <q-img
                  :src="blog.image"
                  :alt="blog.title"
                  class="md:tw-max-w-[200px] tw-w-full tw-object-cover tw-p-1"
                 
                />

                <div class="tw-flex-grow">
                  <div class="content">
                    <div class="post-meta">
                      <a href="#" class="catagory">{{
                        blog.category || 'Technology'
                      }}</a>
                      <a href="#" class="date">{{
                        new Date(blog.publishedAt).toDateString()
                      }}</a>
                    </div>
                    <a
                      :href="blog.url"
                      target="_blank"
                      rel="noopener noreferrer"
                      ><h4
                        class="title text-h5 tw-font-extrabold tw-text-white"
                      >
                        {{ blog.title }}
                      </h4>
                    </a>
                    <p class="text-subtitle1">{{ blog.description }}</p>
                  </div>
                </div>

                <q-btn
                  :href="blog.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  no-caps
                  class="btn btn-md btn-outline-one"
                  >Read More<i class="icofont-double-right"></i
                ></q-btn>
              </div>
              <!-- End Blog Feed Single Item -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ...::: End Blog Feed Display Section :::... -->
</template>

<script setup>
import { useBlogStore } from 'src/stores/blogs';
import { storeToRefs } from 'pinia';

const { blogs } = storeToRefs(useBlogStore());
// defineOptions({

// })
console.log(blogs.value);
</script>
