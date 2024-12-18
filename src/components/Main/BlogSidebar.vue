<template>
  <!-- Start Sidebar Widget Area-->
  <div class="sidebar-widget-area">
              <!-- Start Sidebar Widget Single Item - Search Widgets -->
              <div class="sidebar-widget-single-area search-widgets">
                <form class="search-widgets-box" action="#" method="post">
                  <input type="search" placeholder="Search here" />
                  <button><i class="icofont-search-1"></i></button>
                </form>
              </div>
              <!-- End Sidebar Widget Single Item - Search Widgets -->

              <!-- Start Sidebar Widget Single Item - Catagory Widgets -->
              <div class="sidebar-widget-single-area catagory-widgets">
                <h3 class="title">Category</h3>
                <ul class="widget-nav-list catagory-item-list">
                  <li>
                    <a href="#"
                      ><span class="text">Technology</span
                      ><span class="icon"
                        ><i class="icofont-double-right"></i></span
                    ></a>
                  </li>
                </ul>
              </div>
              <!-- End Sidebar Widget Single Item - Catagory Widgets -->

              <!-- Start Sidebar Widget Single Item - Recent Post Widgets -->
              <div class="sidebar-widget-single-area recentpost-widget">
                <h3 class="title">Recent Post</h3>
                <ul class="recent-blog-item-list">
                  <li v-for="(recent, index) in recents" :key="index">
                    <a href="blog-details-sidebar-left.html" class="image">
                      <q-img :src="recent.prev_img" :alt="recent.img_alt" />
                    </a>
                    <div class="content">
                      <h4 class="title">
                        <router-link :to="`/blog/${recent.id}`"
                          >{{ recent.title }}
                        </router-link>
                      </h4>
                      <div class="post-meta">
                        <a href="#" class="date icon-space-right"
                          ><i class="icofont-calendar"></i>
                          {{ new Date(recent.date).toDateString() }}</a
                        >
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <!-- End Sidebar Widget Single Item - Recent Post Widgets -->

              <!-- Start Sidebar Widget Single Item - Social Widgets -->
              <div class="sidebar-widget-single-area">
                <h3 class="title">Follow Me</h3>
                <ul class="social-link">
                  <li>
                    <a
                      href="https://www.facebook.com/ebubeireneaus"
                      target="_blank"
                      rel="nofollow"
                      ><i class="icofont-facebook"></i
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://www.twitter.com/ebubeireneaus"
                      target="_blank"
                      rel="nofollow"
                      ><i class="icofont-twitter"></i
                    ></a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/ebubeireneaus"
                      target="_blank"
                      rel="nofollow"
                      ><i class="icofont-instagram"></i
                    ></a>
                  </li>
                </ul>
              </div>
              <!-- End Sidebar Widget Single Item - Social Widgets -->
            </div>
            <!-- End Sidebar Widget Area-->
</template>
<script setup>
import { useBlogStore } from 'src/stores/blogs';
import { storeToRefs } from 'pinia';

const { recents} = storeToRefs(useBlogStore());
</script>
