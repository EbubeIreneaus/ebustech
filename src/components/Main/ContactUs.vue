<template>
  <div class="tw-container tw-mx-auto" id="contact">
    <div class="section-content tw-px-5">
      <span class="section-tag" data-aos="fade-up">Get In Touch</span>
      <h2 class="section-title" data-aos="fade-right">If you have any project. Contact me</h2>
    </div>

    <div
      class="tw-flex lg:tw-flex-row tw-flex-col-reverse tw-gap-y-4 lg:tw-items-center tw-px-5 lg:tw-px-1"
    >
      <div class="lg:tw-max-w-xs tw-w-full tw-bg-[#252734] tw-py-5" >
        <!-- Start Project Sidebar Item -->
        <ul class="" data-aos="fade-right">
          <!-- Start contact Single Box -->
          <li class="contact-sidebar-single-box">
            <h3 class="title-text">Whatsapp:</h3>
            <a href="tel:+2348061982520" class="link">+2348061982520</a>
          </li>
          <!-- End contact Single Box -->
          <!-- Start contact Single Box -->
          <li class="contact-sidebar-single-box">
            <h3 class="title-text">Email:</h3>
            <a href="mailto:ebubeireneaus@gmail.com" class="link"
              >ebubeireneaus@gmail.com</a
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
      <!-- Start Map Area-->
      <div class="tw-flex-grow" >
        <div class="gmap-box">
          <iframe
          data-aos="fade-left"
            id="gmap_canvas"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31511.88811787338!2d7.299805976532752!3d9.1557336375887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104dd8f1cae4b611%3A0x6e69ae7a4719bb62!2sKubwa%2C%20Abuja%20901101%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1722549723616!5m2!1sen!2sng"
          ></iframe>
        </div>
      </div>
      <!-- End Map Area -->
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
ul {
  li {
    height: 200px;
    border: ipx solid #2a2c39;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 20px;
    width: 250px;
    margin: 10px auto;
    background-color: #2a2c39;
  }
}

@media (width > 642px) {
  ul {
   
    li {
      height: 200px;
      border: ipx solid #2a2c39;
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 0 20px;
      width: 80%;
      margin: 10px auto;
      background-color: #2a2c39;
    }
  }
}
</style>
