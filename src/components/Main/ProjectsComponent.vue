<template>
  <!-- ...::: Start Project Display Section :::... -->
  <div class="project-display-section section-gap-tb-165" id="projects">
    <div class="project-display-box">
      <div class="tw-container tw-mx-auto tw-px-3">
        <div class="row">
          <div
            class="col-12 col-xl-12 d-block d-md-flex justify-content-between"
          >
            <!-- Start Section Content -->
            <div class="section-content pos-relative">
              <span class="section-tag" data-aos="fade-up"
                >Awesome Portfolio</span
              >
              <h2 class="section-title" data-aos="fade-right">
                My Complete Projects
              </h2>
            </div>
            <!-- End Section Content -->
          </div>
        </div>
      </div>
      <div>
        <div class="lg:tw-w-[80%] tw-mx-auto tw-px-5 lg:tw-px-1">
          <div class="tw-grid xl:tw-grid-cols-3 sm:tw-grid-cols-2 tw-gap-5">
            <!-- single projects -->
            <div
              v-for="pr in projects"
              :key="pr.name"
              data-aos="fade-up"
              class="lg:tw-h-[400px] sm:tw-h-[600px] tw-h-[400px] tw-overflow-hidden item tw-sticky tw-top-0 tw-rounded-lg each-project"
            >
              <div class="tw-h-full tw-w-full">
                <q-img
                  :src="'/assets/images/project/' + pr.Image"
                  :alt="pr.alt || pr.desc"
                  class="tw-w-full tw-h-full tw-object-cover tw-object-center tw-rounded-lg"
                />
                <div class="pr-content">
                  <div class="tw-w-full tw-h-full tw-flex tw-items-center">
                    <div class="tw-px-2 tw-text-white">
                      <h2
                        class="text-h5 tw-leading-none tw-font-extrabold tw-line-clamp-4"
                      >
                        {{ pr.title }}
                      </h2>
                      <p
                        class="tw-my-2 text-subtitle1 tw-leading-normal tw-line-clamp-4 hover:tw-line-clamp-none tw-transition-all tw-ease-linear tw-duration-300"
                      >
                        {{ pr.desc }}
                      </p>
                      <p class="tw-capitalize tw-mb-2">
                        <span class="text-orange-13"><b>Frontend:</b> </span>
                        {{ pr.frontend }}
                      </p>
                      <p class="tw-capitalize">
                        <span class="text-orange-13"><b>Backend:</b> </span>
                        {{ pr.backend }}
                      </p>
                      <div class="tw-flex tw-gap-3 tw-mt-4">
                        <q-btn
                          icon="fab fa-github"
                          dense
                          size="sm"
                          :href="pr.link.github || '#'"
                          rel="noreferrer"
                          target="_blank"
                        />
                        <q-btn
                          icon="fa-solid fa-arrow-up-right-from-square"
                          dense
                          size="sm"
                          :href="pr.link.web || '#'"
                          rel="noreferrer"
                          target="_blank"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- single projects -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ...::: End Project Display Section :::... -->
</template>

<script setup>
const projects = [
{
    title: 'Okis Real Estate',
    frontend: 'Talwindcss, JavaScript, React.js, Next.js',
    backend: '',
    desc: 'showcasing my ability in developing a UI frendly real estate and property management website',
    Image: 'okisestate.webp',
    imgAlt: 'okis real estate website, full page screenshot',
    link: {
      github: '',
      web: 'https://okis-real-estate.vercel.app',
    },
  },

  {
    title: 'Ireneaus Fashion Store',
    frontend: 'Talwindcss, JavaScript, Vuejs, Quasar Framework',
    backend: 'Node.js, Express.js, mysql, sequelize',
    desc: 'Stunning e-commerce website, with authentication, PWA, SEO-optimized and Flutterwave payment gatway integrated. ',
    Image: 'ifs.webp',
    imgAlt: null,
    link: {
      github: '',
      web: 'https://f-store-demo.netlify.app',
    },
  },

  {
    title: 'Bitzoic Market',
    frontend: 'HTML, CSS, JavaScript',
    backend: 'python, django, mysql',
    desc: 'Buy and Invest in cryptocurrencies and other digital assets. cloned from oneIdx.com',
    Image: 'bitzoicmarket.webp',
    imgAlt: null,
    link: {
      github: '',
      web: 'https://bitzoicmarket.com',
    },
  },

  {
    title: 'Financial Growths',
    frontend: 'HTML, CSS, JavaScript',
    backend: 'python, django, mysql',
    desc: 'Buy and Invest in cryptocurrencies and other digital assets. duplicate of Bitzoic Market',
    Image: 'financialgrowths.webp',
    imgAlt: null,
    link: {
      github: '',
      web: 'https://financial-growths.com',
    },
  },

  {
    title: 'Golden Wealths',
    frontend: 'Bootstrap, JavaScript, Angularjs, Jquery',
    backend: 'PHP, Mysql',
    desc: 'Golden wealths investment website ',
    Image: 'gwealths.webp',
    imgAlt: null,
    link: {
      github: '',
      web: 'https://goldenwealths.com',
    },
  },


  {
    title: 'Ireneaus Jewelry Store',
    frontend: 'JavaScript, vue.js, nuxt.js, vuetify',
    backend: '',
    desc: 'Simple yet fancy e-commerce website(side project), for Jewelry products and fashion',
    Image: 'irjewelrystore.webp',
    imgAlt: null,
    link: {
      github: '',
      web: 'https://irjewelrystore.netlify.app',
    },
  },
  {
    title: 'Digital Assets Growths',
    frontend: 'JavaScript, vue.js, nuxt.js, vuetify',
    backend: 'python, django, mysql',
    desc: 'Buy and Invest in cryptocurrencies and other digital assets',
    Image: 'digitalassetshome.webp',
    imgAlt: null,
    link: {
      github: '',
      web: 'https://digitalassetsgrowth.com',
    },
  },
  {
    title: 'Ebustech',
    frontend: 'Tailwindcss, JavaScript, vue.js, quasar framework',
    backend: '',
    desc: 'Eye catching portfolio website for myself. feel free browsing through my projects catalog.',
    Image: 'ebustech.webp',
    imgAlt: null,
    link: {
      github: '',
      web: 'https://ebustech.netlify.app',
    },
  },
  {
    title: 'CodXtreme',
    frontend: 'tailwindcss, JavaScript, react.js, next.js',
    backend: '',
    desc: 'Fancy digital marketing agency website(side project)',
    Image: 'codextreme.webp',
    imgAlt: null,
    link: {
      github: '',
      web: 'https://codxtreme.netlify.app',
    },
  },
  {
    title: 'Sales Analysis Software',
    frontend: 'HTML, tailwindcss, JavaScript, vue.js, quasar framework',
    backend: 'node.js, express.js, mysql, sequelize',
    desc: 'features include analysing income... uploading and editing product.. contact me for logins. ',
    Image: 'salesanalysis.webp',
    imgAlt: 'sales Analysis Software, analyse income, expense and sales, upload and manage products, staffs and users, sales and expenses.. ',
    link: {
      github: '',
      web: 'https://demo-sales-dashboard.netlify.app',
    },
  },

  {
    title: 'School Result Portal',
    frontend: 'HTML, tailwindcss, JavaScript, vue.js, quasar framework',
    backend: '',
    desc: 'Result system for schools. username: student or teacher password: 123456',
    Image: 'school-result-portal.webp',
    imgAlt: '',
    link: {
      github: '',
      web: 'https://cshs-r-p.netlify.app',
    },
  },
];
</script>

<style scoped lang="scss">
.item {
  &::before {
    position: absolute;
    left: 0;
    top: 0;
    // transform: skewX(-45deg) translateX(-100%);
    width: 100%;
    height: 100%;
    content: '';
    z-index: 1;
    background-color: transparentize($color: #000000, $amount: 0.6);
    border-radius: 8px;
  }
}
.pr-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 60%;
  height: 100%;
  z-index: 2;
  background-color: transparentize($color: #252734, $amount: 0.2);
  border-radius: 8px 0 0 8px;
}
</style>
