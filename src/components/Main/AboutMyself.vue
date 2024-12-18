<template>
  <div id="about">
    <div class="tw-my-10 tw-container tw-mx-auto tw-block">
      <div class="tw-container tw-px-3  ">
        <div class="row">
          <div class="col-12">
            <!-- Start Section Content -->
            <div class="section-content">
              <span class="section-tag" data-aos="fade-up">About Me</span>
              <h2 class="section-title" data-aos="fade-right">More About Myself</h2>
            </div>
            <!-- End Section Content -->
          </div>
        </div>
      </div>

      <div class="first-sec-about p-lg-1 p-2">
        <div class="about-me-txt lg:tw-p-5">
          <div class="text-light !tw-px-5 md:!tw-px-px tw-text-balance">
            <img
              src="~/assets/ebube1.jpg"
              alt=""
              class="tw-float-left tw-px-4 tw-size-80 tw-rounded tw-object-cover tw-hidden md:tw-inline-block tw-w-[300px]"
              data-aos="fade-right"
            />
            <p
              class="txt text-light text-subtitle1 tw-leading-loose"
              data-aos="fade-left"
            >
              Passionate Full-Stack Developer with a focus on creating seamless
              web applications. Proficient in
              <span class="skill-txt">HTML</span>,
              <span class="skill-txt">CSS</span>,
              <span class="skill-txt">Tailwindcss</span>
              and <span class="skill-txt">JavaScript</span>, I specialize in
              crafting visually appealing and responsive front-end interfaces
              that elevate user experiences. Leveraging
              <span class="skill-txt">(Vue.js, Nuxt.js, Quasar Framework)</span>
              and <span class="skill-txt">(React.js, Next.js)</span>, I excel in
              building dynamic and interactive user interfaces that seamlessly
              connect with back-end functionalities. <br />
              <br />
              Equipped with a foundation in
              <span class="skill-txt">Node.js</span>,
              <span class="skill-txt">Express.js</span>,
              <span class="skill-txt">PHP</span> and
              <span class="skill-txt">Django</span>, I develop robust and
              scalable server-side applications. My coding skills are enhanced
              by a design sensibility, ensuring both technical proficiency and
              aesthetic excellence. <br /><br />
              Driven by curiosity and a hunger to learn, I am committed to
              staying up-to-date with the latest technologies. I thrive in
              dynamic environments, consistently seeking opportunities to
              contribute my skills while expanding my toolkit.
              <br /><br />
              Let's collaborate to bring your ideas to life!"
            </p>
          </div>
        </div>
      </div>

      <div
        class="about-detail tw-flex md:tw-flex-row tw-flex-col tw-gap-5 px-lg-5 tw-p-3"
      >
        <div
          class="info-sec tw-grid md:tw-grid-cols-2 tw-mb-1 tw-w-full tw-gap-y-7"
        >
          <p class="tw-w-full text-subtitle1" data-aos="flip-up">
            <i class="fa-solid fa-angle-right"></i>
            <b> Full Name</b> <span> Okigwe Ebube Ireneaus</span>
          </p>
          <p class="tw-w-full text-subtitle1" data-aos="flip-up">
            <i class="fa-solid fa-angle-right"></i>
            <b> Gender</b> <span> Male</span>
          </p>
          <p class="tw-w-full text-subtitle1" data-aos="flip-up">
            <i class="fa-solid fa-angle-right"></i>
            <b> Website</b> <span>https://ebustech.com.ng</span>
          </p>
          <p class="tw-w-full text-subtitle1">
            <i class="fa-solid fa-angle-right"></i>
            <b> Degree</b> <span> B.Sc</span>
          </p>
          <p class="tw-w-full text-subtitle1" data-aos="flip-up">
            <i class="fa-solid fa-angle-right"></i>
            <b> whatsapp</b> <span> +234 80 619 825 20</span>
          </p>
          <p class="col-lg-6 col-12 text-subtitle1" data-aos="flip-up">
            <i class="fa-solid fa-angle-right"></i>
            <b> Email</b> <span> ebubeireneaus@gmail.com</span>
          </p>
          <p class="tw-w-full text-subtitle1" data-aos="flip-up">
            <i class="fa-solid fa-angle-right"></i>
            <b> City</b> <span>FCT, Abuja</span>
          </p>
          <p class="tw-w-full text-subtitle1" data-aos="flip-up">
            <i class="fa-solid fa-angle-right"></i>
            <b> Freelancing</b> <span> Available</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.skill-txt {
  text-transform: capitalize;
  font-weight: bolder;
  color: whitesmoke;
}
.about-detail {
  .info-sec {
    p {
      color: whitesmoke;
      i,
      b {
        color: rgb(101, 101, 134);
      }
    }
  }
}
</style>
