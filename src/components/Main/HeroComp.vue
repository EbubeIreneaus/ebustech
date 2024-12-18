<template>
  <!-- ...::: Start Hero Section :::... -->
  <div
    class="lg:tw-h-[calc(100vh+100px)] tw-h-screen bg-dark-blue tw-relative tw-z-[1] main tw-border tw-border-transparent"
    id="home"
  >
    <div
      class="tw-absolute tw-z-[2] tw-w-full tw-h-full tw-flex tw-items-center xl:tw-mt-10"
    >
      <div class="tw-w-[90%] lg:tw-w-[85%] 2xl:tw-w-[60%] tw-mx-auto">
        <div class="">
          <div class="tw-flex lg:tw-flex-row tw-flex-col lg:tw-items-center">
            <div class="lg:tw-order-2">
              <q-img
                src="~/assets/ceo.jpg"
                class="lg:tw-w-[400px] tw-hidden lg:tw-inline-block lg:tw-h-[400px] tw-object-cover tw-object-center lg:tw-order-2 lg:tw-rounded-full lg:tw-ring-4"
                alt="Ebube Ireneaus, dedicated and experienced full-stack website designer"
              />
            </div>
            <div class="hero-content tw-flex-grow lg:tw-order-1">
              <h1
                class="title-big tw-text-4xl sm:tw-text-6xl lg:tw-text-7xl !tw-font-semibold"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Hello! I’m
              </h1>
              <h1
                class="title-large tw-text-5xl sm:tw-text-6xl lg:tw-text-7xl tw-font-extrabold"
                data-aos="fade-up"
                data-aos-delay="120"
              >
                Ebube <span class="shape-mark">Ireneaus</span>
              </h1>
              <h2 class="text-h6 tw-mb-3" data-aos="fade-right" data-aos-delay="140">
                Software Developer specializing in Web Design & Mobile App Dev.
                
              </h2>

              <q-btn href="#" class="btn btn-xl btn-outline-one icon-space-left" data-aos="fade-up" data-aos-delay="160"
                >Get Resume <i class="fa da-download"></i
              ></q-btn>

              <!-- <div class="video-link">
                <a
                  class="wave-btn"
                  href="https://youtu.be/jgYaTxx3Bys"
                  target="_blank"
                  data-autoplay="true"
                  data-vbtype="video"
                  rel="nofollow"
                >
                  <div class="ripple"><i class="icofont-ui-play"></i></div>
                </a>

                <span class="video-text"> Watch Video</span>
              </div> -->
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  <!-- ...::: End Hero Section :::... -->
</template>

<style scoped lang="scss">
.main {
  background-image: url('/assets/images/bg/hero-bg.webp');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  &::after {
    content: '';

    background-image: linear-gradient(
      to right,
      rgb(0, 0, 0),
      rgb(0, 0, 0, 0.5)
    );
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
}

.hero-content .tile-large,
.hero-content .title-big {
  letter-spacing: 0;
  font-weight: 700;
  line-height: 1;
  color: #fff;
}

.video-link {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-top: 40px;
}
.video-link .video-text {
  padding-left: 30px;
}
@media (min-width: 992px) {
  .video-link {
    margin-top: 40px;
  }
}
@media (min-width: 1200px) {
  .video-link {
    margin-top: 50px;
  }
}
@media (min-width: 1400px) {
  .video-link {
    margin-top: 125px;
  }
}
@media (min-width: 1800px) {
  .video-link {
    margin-top: 125px;
  }
}
</style>
