<template>
  <!-- ...::: Start Blog Feed Display Section :::... -->
  <div class="blog-feed-display-section section-gap-tb-165">
    <div class="blog-feed-display-box">
      <div class="container">
        <div class="row">
          <div class="col">
            <!-- Start Section Content -->
            <div class="section-content pos-relative text-center">
              <span class="section-tag">Blog Post</span>
              <h2 class="section-title">Latest Tips & Tricks</h2>
            </div>
            <!-- End Section Content -->
          </div>
        </div>

        <div class="blog-feed-display-wrapper">
          <div class="row mb-n5">

            <div class="col-12 mb-5" v-for="blog, index in blogs" :key="index">
              <!-- Start Blog Feed Single Item -->
              <div class="blog-feed-single-item">
                <div class="inner-shape inner-shape-top-right"></div>
                <a href="#" class="image">
                  <q-img :src="blog.prev_img" :alt="blog.img_alt" />
                </a>
                <div class="content-box">
                  <div class="content">
                    <div class="post-meta">
                      <a href="#" class="catagory">{{ blog.category }}</a>
                      <a href="#" class="date">{{new Date(blog.date).toDateString()}}</a>
                    </div>
                    <h4 class="title">
                      <router-link :to="`blog/${blog.id}`"
                        >{{ blog.title }}</router-link
                      >
                    </h4>
                  </div>
                  <router-link :to="`/blog/${blog.id}`"
                    class="btn btn-md btn-outline-one icon-space-left"
                    >Read More<i class="icofont-double-right"></i
                  ></router-link>
                </div>
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

let {blogs} = storeToRefs(useBlogStore())
</script>
