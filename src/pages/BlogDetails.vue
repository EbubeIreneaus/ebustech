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
              <h2 class="title">Blog Details</h2>
              <ul class="breadcrumb-link">
                <li><router-link to="/blogs/">Blog</router-link></li>
                <li class="active" aria-current="page">Blog Details</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ...::: End Breadcrumb Section :::... -->

  <!-- ...::: Start Blog List Section :::... -->
  <div class="blog-details-section section-gap-tb-165">
    <div class="blog-details-box">
      <div class="container">
        <div class="row flex-lg-row-reverse flex-column-reverse">
          <div class="col-xl-4 col-lg-5">
            <!-- Start Sidebar Widget Area-->
            <blog-sidebar />
            <!-- End Sidebar Widget Area-->
          </div>
          <div class="col-xl-7 col-lg-7 offset-xl-1">
            <!-- Start Blog Content Area -->
            <div class="blog-content-area">
              <!-- Start Section Content -->
              <div class="default-content-style pos-relative">
                <div class="content-meta">
                  <span class="section-tag">{{ content.category }}</span>
                  <div class="post-meta-2">
                    <span class="icon-space-right"
                      ><i class="icofont-ui-user"></i>{{ content.author }}</span
                    >
                    <span class="icon-space-right"
                      ><i class="icofont-calendar"></i
                      >{{ new Date(content.date).toDateString() }}</span
                    >
                  </div>
                </div>
                <h2 class="title">
                  {{ content.title }}
                </h2>

                <div v-html="content.content"></div>
              </div>
              <!-- End Section Content -->
            </div>
            <!-- End Blog Content Area -->

            <!-- Start Tag Area  -->
            <div class="tag-area section-mt-75">
              <!-- Start Tag Box -->
              <div class="tag-box">
                <div class="left">
                  <div class="tag-list">
                    <h5 class="title">Tags:</h5>
                    <ul class="list-item">
                      <li><a href="#">Website</a></li>
                      <li><a href="#">Technology</a></li>
                      <li><a href="#">Softwares</a></li>
                    </ul>
                  </div>
                </div>
                <div class="right">
                  <ul class="social-link">
                    <li>
                      <a
                        href="https://facebook.com/ebubeireneaus"
                        target="_blank"
                        ><i class="icofont-facebook"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://www.twitter.com/ebubeireneaus"
                        target="_blank"
                        ><i class="icofont-twitter"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/ireneaus"
                        target="_blank"
                        ><i class="icofont-linkedin"></i
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- End Tag Box -->
            </div>
            <!--  End Tag Area  -->

            <!--  Start Comment Area  -->
            <div class="comment-area section-mt-75">
              <!-- Start Comment Box-->
              <div class="comment-box">
                <h3 class="title">Comment:</h3>
                <ul class="comment-list-item">
                  <!-- Start Comment Single Item -->
                  <!-- <li>
                    <div class="comment-single-item">
                      <div class="image">
                        <img src="assets/images/users/user-1.jpg" alt="" />
                      </div>
                      <div class="content">
                        <div class="top">
                          <div class="author-meta">
                            <h4 class="name">Felix Myers</h4>
                            <span class="designation">Web Developer</span>
                          </div>
                          <button class="replay-btn icon-space-right">
                            <i class="icofont-reply"></i> Reply
                          </button>
                        </div>
                        <div class="bottom">
                          <div class="text">
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting and has been the industry's
                              standard dummy text ever since the 1500s, whe took
                              a galley of type and scrambled.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li> -->
                  <!-- End Comment Single Item -->
                </ul>
              </div>
              <!-- End Comment Box-->
            </div>
            <!-- ...::: End Comment Area :::... -->

            <!-- Start Comment Form Area -->
            <div class="comment-form-area section-mt-75">
              <!-- Start Comment Form Box -->
              <!-- <div class="comment-form-box">
                <h3 class="title">Leave a comment:</h3>
                <form class="default-form"  method="post">
                  <div class="row mb-n6">
                    <div class="col-xl-6 mb-6">
                      <div class="default-form-group">
                        <input type="text" placeholder="Name" required v-model="newComment.fullname" />
                      </div>
                    </div>
                    <div class="col-xl-6 mb-6">
                      <div class="default-form-group">
                        <input type="email" placeholder="Email" required v-model="newComment.email" />
                      </div>
                    </div>
                    <div class="col-xl-12 mb-6">
                      <div class="default-form-group">
                        <textarea placeholder="Comment" required v-model="newComment.comment"></textarea>
                      </div>
                    </div>
                    <div class="col-12 mb-6">
                      <div class="default-form-group">
                        <q-btn
                          type="submit"
                          class="btn btn-lg btn-outline-one"
                        >
                          Submit Comment
                        </q-btn>
                      </div>
                    </div>
                  </div>
                </form>
              </div> -->
              <!-- End Comment Form Box -->
            </div>
            <!--  End Comment Form Area  -->
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
import { onMounted, inject } from 'vue';

// type ContentTypes = {
//   id: number,
//     meta_desc: string,
//     meta_kw: string,
//     title: string,
//     author: string,
//     date: Date,
//     views: number,
//     prev_img: string,
//     category: string,
//     content: string
// }
// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
const { content } = storeToRefs(useBlogStore());
import { useMeta } from 'quasar';
const api = inject('backend');
// import { reactive } from 'vue';

// const newComment = reactive({
//   blogId: content.id,
//   fullname: '',
//   email: '',
//   comment: ''
// })
defineOptions({
  async preFetch({ store, currentRoute }) {
    try {
      const api = process.env.DEV
        ? 'http://127.0.0.1:8000/api'
        : 'https://server.ebustech.com.ng/api';
      const blogId = currentRoute.params.id;
      const [getContent, getRecents] = await Promise.all([
        fetch(`${api}/blog/?id=${blogId}`).then((res) => res.json()),
        fetch(`${api}/blogs/latest`).then((res) => res.json()),
      ]);
      useBlogStore(store).content = getContent;
      useBlogStore(store).recents = getRecents;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
});

const metaData = {
  title: content.value.title,
  meta: {
    description: { name: 'description', content: content.value.meta_desc },
    keywords: { name: 'keywords', content: content.value.meta_kw ?? '' },
    ogTitle: {
      property: content.value.title,
    },
  },
};
useMeta(metaData);

function recordView() {
  try {
    fetch(`${api}/blog/view`, {
      method: 'post',
      body: JSON.stringify({ blogId: content.value.id }),
    });
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
  recordView();
});
</script>
