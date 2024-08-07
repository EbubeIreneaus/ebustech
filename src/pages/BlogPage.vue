<template>
  <!-- ...::: Start Breadcrumb Section :::... -->
  <div class="breadcrumb-section section-bg overflow-hidden pos-relative">
    <div class="breadcrumb-shape-top-left"></div>
    <div class="breadcrumb-shape-bottom-right"></div>
    <div class="breadcrumb-box">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="breadcrumb-content">
              <h2 class="title">Blog</h2>
              <ul class="breadcrumb-link">
                <li><router-link to="/">Home</router-link></li>
                <li class="active" aria-current="page">Blog</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ...::: End Breadcrumb Section :::... -->

  <!-- ...::: Start Blog List Section :::... -->
  <div class="blog-list-section section-mt-165">
    <div class="blog-list-box">
      <div class="container">
        <div class="row flex-lg-row-reverse flex-column-reverse">
          <div class="col-xl-4 col-lg-5">
            <!-- Start Sidebar Widget Area-->
            <blog-sidebar />
            <!-- End Sidebar Widget Area-->
          </div>
          <div class="col-xl-8 col-lg-7">
            <!--  Start Blog List  -->
            <div class="blog-list">
              <!-- Start Blog List  Single Item-->
              <div
                class="blog-list-single-item"
                v-for="(blog, index) in blogs"
                :key="index"
              >
                <div class="inner-shape inner-shape-top-right"></div>
                <a href="#" class="image">
                  <q-img :src="blog.prev_img" alt="" />
                </a>
                <div class="content">
                  <div class="post-meta-1">
                    <a href="#" class="catagory">{{ blog.category }}</a>
                    <a href="#" class="date">{{
                      new Date(blog.date).toDateString()
                    }}</a>
                  </div>
                  <h4 class="title">
                    <router-link :to="`/blog/${blog.id}`">{{
                      blog.title
                    }}</router-link>
                  </h4>

                  <div class="post-meta-2">
                    <a href="#" class="icon-space-right"
                      ><i class="icofont-ui-user"></i>{{ blog.author }}</a
                    >
                    <a href="#" class="icon-space-right"
                      ><i class="icofont-heart"></i>{{ blog.views }}</a
                    >
                    <!-- <a href="#" class="icon-space-right"
                      ><i class="icofont-speech-comments"></i></a
                    > -->
                  </div>
                </div>
              </div>
              <!-- End Blog List  Single Item-->
            </div>
            <!--  End Blog List   -->

            <div class="d-flex justify-content-center justify-content-lg-start">
              <!--  Start Pagination  -->
              <div class="pagination">
                <div class="row">
                  <div class="col-12">
                    <ul class="pagination-nav-list">
                      <li class="prev">
                        <a href="#"><i class="icofont-double-left"></i></a>
                      </li>
                      <li v-for="n in numberOfPage" :key="n">
                        <router-link
                          :to="{ name: 'blogs', params: { page: n } }"
                          >{{ n }}</router-link
                        >
                      </li>

                      <li class="next">
                        <a href="#"> <i class="icofont-double-right"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <!--  Start Pagination  -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ...::: End Blog List Section :::... -->
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useBlogStore } from 'src/stores/blogs';
import BlogSidebar from 'src/components/Main/BlogSidebar.vue';
import { useMeta } from 'quasar';

const metaData = {
  title: 'The Ebustech Blog - Digital Solutions & Trends',
  meta: {
    description: {
      name: 'description',
      content:
        'Stay up-to-date on professional opinions, market developments, and useful advice to improve your online visibility. Grow, read, and learn with us!',
    },
    keywords: {
      name: 'keywords',
      content:
        'web, website, developer, Nigeria, Abuja, FCT, Lagos, benin, enugu, anambra, nsukka, niger, state, designer, mobile app, android app, android, app, application, web development, mobile development, portfolio, programmer, coding, software development, app design, web design, digital solutions, Ebustech',
    },
    ogTitle: {
      property: 'The Ebustech Blog - Digital Solutions & Trends',
    },
  },
};

useMeta(metaData);
const { blogs, totalBlog } = storeToRefs(useBlogStore());

defineOptions({
  async preFetch({ store, currentRoute }) {
    try {
      const api = process.env.DEV
        ? 'http://127.0.0.1:8000/api'
        : 'https://server.ebustech.com.ng/api';
      let blogStart = 0;
      if (currentRoute.params.page) {
        const pageNo = currentRoute.params.page;
        blogStart = (pageNo - 1) * 10;
      }
      const [getBlogs, getRecents, getBlogCount] = await Promise.all([
        fetch(`${api}/blogs?start=${blogStart}`).then((res) => res.json()),
        fetch(`${api}/blogs/latest`).then((res) => res.json()),
        fetch(`${api}/blogs/pageCount`).then((res) => res.json()),
      ]);
      useBlogStore(store).blogs = getBlogs;
      useBlogStore(store).recents = getRecents;
      useBlogStore(store).totalBlog = getBlogCount;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
});

const numberOfPage = Math.ceil(totalBlog.value / 10);

// async function getMoreBlog(start) {
//   let res = await (
//     await fetch(`http://127.0.0.1:8000/api/blogs?start=${start}`)
//   ).json();
//   useBlogStore().blogs = res;
// }

// watch(route.params.page, (page) => {
//   if (!parseInt(page) || page > numberOfPage) {
//     return;
//   }
//   const blogStart = (page - 1) * 10;
//   return getMoreBlog(start=blogStart)
// });
</script>
