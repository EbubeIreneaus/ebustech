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
                <h1 class="title">Contact Me</h1>
                <ul class="breadcrumb-link">
                  <li><router-link to="/">Home</router-link></li>
                  <li class="active" aria-current="page">Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ...::: End Breadcrumb Section :::... -->

    <!-- ...::: Start Contact Section :::... -->
    <div class="contact-section section-gap-tb-165">
      <div class="contact-box pos-relative">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <!-- Start Map Area-->
              <div class="map">
                <div class="gmap-box">
                  <iframe
                    id="gmap_canvas"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31511.88811787338!2d7.299805976532752!3d9.1557336375887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104dd8f1cae4b611%3A0x6e69ae7a4719bb62!2sKubwa%2C%20Abuja%20901101%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1722549723616!5m2!1sen!2sng"
                  ></iframe>
                </div>
              </div>
              <!-- End Map Area -->
            </div>
          </div>
          <div class="row flex-lg-row flex-column-reverse">
            <div class="col-lg-4">
              <div class="contact-sidebar-wapper">
                <div class="contact-sidebar">
                  <!-- Start Project Sidebar Item -->
                  <ul class="contact-sidebar-list-item">
                    <!-- Start contact Single Box -->
                    <li class="contact-sidebar-single-box">
                      <h3 class="title-text">Whatsapp:</h3>
                      <a href="tel:+2348061982520" class="link"
                        >+2348061982520</a
                      >
                    </li>
                    <!-- End contact Single Box -->
                    <!-- Start contact Single Box -->
                    <li class="contact-sidebar-single-box">
                      <h3 class="title-text">Email:</h3>
                      <a href="mailto:devs@ebustech.com" class="link"
                        >dev.ebustech@gmail.com</a
                      >
                    </li>
                    <!-- End contact Single Box -->
                    <!-- Start contact Single Box -->
                    <li class="contact-sidebar-single-box">
                      <h3 class="title-text">Website:</h3>
                      <a href="https://www.ebustech.com/" class="link"
                        >www.ebustech.com</a
                      >
                    </li>
                    <!-- End contact Single Box -->
                    <!-- Start contact Single Box -->
                    <li class="contact-sidebar-single-box">
                      <h3 class="title-text">Address:</h3>
                      <span class="text"> kubwa, FCT Abuja</span>
                    </li>
                    <!-- End contact Single Box -->
                  </ul>
                  <!-- End Project Sidebar Item -->
                </div>
                <!-- Start Sidebar Widget Single Item - Social Widgets -->
                 
                <div class="sidebar-widget-single-area">
                  <h3 class="title">Follow Me</h3>
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
                        href="https://instagram.com/ebubeireneaus"
                        target="_blank"
                        ><i class="icofont-instagram"></i
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/ebubeireneaus"
                        target="_blank"
                        ><i class="icofont-twitter"></i
                      ></a>
                    </li>
                  </ul>
                </div>
                <!-- End Sidebar Widget Single Item - Social Widgets -->
              </div>
            </div>
            <div class="col-lg-7 offset-lg-1">
              <div class="contact-form-wrapper section-mt-165">
                <!-- Start Section Content -->
                <div class="content">
                  <span class="section-tag">Get In Touch</span>
                  <h2 class="title">
                    If you have any porject or need help. Contact me
                  </h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting emndustry lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    print only five centuries, but also the leap into
                    electronic.
                  </p>
                </div>
                <!-- End Section Content -->

                <!-- Start Contact Form Box -->
                <div class="contact-form-box">
                  <form
                    id="contact-form"
                    class="default-form contact-form"
                    action="https://formspree.io/f/xjkvkrnr"
                    method="post"
                  >
                    <div class="row mb-n6">
                      <div class="col-xl-6 mb-6">
                        <div class="default-form-group">
                          <input
                            name="name"
                            type="text"
                            placeholder="Name"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-xl-6 mb-6">
                        <div class="default-form-group">
                          <input
                            name="email"
                            type="email"
                            placeholder="Email"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-xl-6 mb-6">
                        <div class="default-form-group">
                          <input
                            name="phone"
                            type="tel"
                            placeholder="Phone"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-xl-6 mb-6">
                        <div class="default-form-group">
                          <input
                            name="subject"
                            type="text"
                            placeholder="Subject"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-xl-12 mb-6">
                        <div class="default-form-group">
                          <textarea
                            name="message"
                            placeholder="Comment"
                            required
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-12 mb-6">
                        <div class="default-form-group tex-center">
                          <button
                            type="submit"
                            class="btn btn-lg btn-outline-one"
                          >
                            Submit Message
                          </button>
                        </div>
                      </div>
                      <p class="form-messege"></p>
                    </div>
                  </form>
                </div>
                <!-- End Contact Form Box -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ...::: End Contact Section :::... -->
  </div>
</template>
<script setup>
import { useMeta } from 'quasar';

const metaData = {
  title:
    'Website designer Nigeria - Reach Out Ebustech Web & Mobile App Service',
  meta: {
    description: {
      name: 'description',
      content:
        "Have a project in mind or need expert advice? Contact Ebustech today! Reach out to me through a contact form, email, or phone number. Let's discuss your digital future!",
    },
  },
};

useMeta(metaData);
</script>
