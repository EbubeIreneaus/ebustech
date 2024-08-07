<script setup>
import { onBeforeUnmount, onMounted } from 'vue';

defineOptions({
  name: 'MainLayout',
});

function navControl(){
  const body = document.body;
      const offCanvasToggle = document.querySelectorAll('.offcanvas-toggle');
      const offCanvas = document.querySelector('.offcanvas');
      const offCanvasOverlay = document.querySelector('.offcanvas-overlay');
      const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
      const offCanvasClose = document.querySelectorAll('.offcanvas-close, .offcanvas-overlay');
      const offCanvasLinks = document.querySelectorAll('.offcanvas-menu a');

      offCanvasToggle.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
          e.preventDefault();
          const target = document.querySelector(toggle.getAttribute('href'));
          body.classList.add('offcanvas-open');
          target.classList.add('offcanvas-open');
          offCanvasOverlay.style.display = 'block';
          if (toggle.parentElement.classList.contains('mobile-menu-toggle')) {
            toggle.classList.add('close');
          }
        });
      });


      const closeOffCanvas = (e) => {
        e.preventDefault();
        body.classList.remove('offcanvas-open');
        offCanvas.classList.remove('offcanvas-open');
        offCanvasOverlay.style.display = 'none';
        const closeBtn = mobileMenuToggle.querySelector('a');
        if (closeBtn) {
          closeBtn.classList.remove('close');
        }
      };

      offCanvasClose.forEach(close => {
        close.addEventListener('click', (e) => {
          e.preventDefault();
          body.classList.remove('offcanvas-open');
          offCanvas.classList.remove('offcanvas-open');
          offCanvasOverlay.style.display = 'none';
          const closeBtn = mobileMenuToggle.querySelector('a');
          if (closeBtn) {
            closeBtn.classList.remove('close');
          }
        });
      });

      offCanvasClose.forEach(close => {
        close.addEventListener('click', closeOffCanvas);
      });

      offCanvasLinks.forEach(link => {
        link.addEventListener('click', closeOffCanvas);
      });

}
const handleScroll = () => {
      const scrollTop = window.scrollY;
      const stickyHeader = document.querySelector('.sticky-header');
      if (scrollTop < 100) {
        stickyHeader.classList.remove('sticky');
      } else {
        stickyHeader.classList.add('sticky');
      }
    };

onMounted(()=>{
  navControl()
  window.addEventListener('scroll', handleScroll);
})

onBeforeUnmount(()=>{
  window.removeEventListener('scroll', handleScroll);
})
</script>

<template>
  <div>
    <!-- .....:::::: Start Header Section :::::.... -->
    <header class="header-section sticky-header d-none d-lg-block">
      <div class="header-wrapper">
        <div class="container">
          <div class="row justify-content-between align-items-center">
            <div class="col">
              <!-- Start Header Logo -->
              <router-link to="/" href="index.html" class="header-logo">
                <!-- <q-img src="assets/images/logo/logo.png" alt="img not found" /> -->
                <h1 class="text-weight-bolder">EBUSTECH</h1>
              </router-link>
              <!-- End Header Logo -->
            </div>
            <div class="col-auto">
              <!-- Start Header Menu -->
              <ul class="header-nav">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li class="has-dropdown">
                  <router-link to="/service">Service</router-link>
                  <!-- <ul class="submenu">
                    <li><a href="service-list.html">Services</a></li>
                    <li><a href="service-details.html">Service Details</a></li>
                  </ul> -->
                </li>
                <li class="has-dropdown">
                  <router-link to="/blog">Blog</router-link>
                  <!-- <ul class="submenu">
                    <li><a href="blog-list.html">Blog List Full Width</a></li>
                    <li>
                      <a href="blog-list-sidebar-left.html"
                        >Blog List Left Sidebar</a
                      >
                    </li>
                    <li>
                      <a href="blog-list-sidebar-right.html"
                        >Blog List Right Sidebar</a
                      >
                    </li>
                    <li>
                      <a href="blog-details.html">Blog Details Full Width</a>
                    </li>
                    <li>
                      <a href="blog-details-sidebar-left.html"
                        >Blog Details Left Sidebar</a
                      >
                    </li>
                    <li>
                      <a href="blog-details-sidebar-right.html"
                        >Blog Details Right Sidebar</a
                      >
                    </li>
                  </ul> -->
                </li>
                <!-- <li class="has-dropdown">
                  <a href="#">Pages</a>
                  <ul class="submenu">
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="project-list.html">Project</a></li>
                    <li><a href="project-details.html">Project Details</a></li>
                    <li><a href="faq.html">FAQ</a></li>
                    <li><a href="404-page.html">404 Page</a></li>
                  </ul>
                </li> -->
                <li><router-link to="/contact">Contact</router-link></li>
              </ul>
              <!-- End Header Menu -->
            </div>
            <div class="col">
              <div class="header-btn-link text-end">
                <router-link
                  to="/contact"
                  class="btn btn-sm btn-outline-one icon-space-left"
                  >Hire Me <i class="icofont-double-right"></i
                ></router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- .....:::::: End Header Section :::::.... -->

    <!-- .....:::::: Start Mobile Header Section :::::.... -->
    <div class="mobile-header d-block d-lg-none">
      <div class="container">
        <div class="row align-items-center justify-content-between">
          <div class="col">
            <div class="mobile-logo">
              <router-link to="/"
                >  <h1 class="text-weight-bolder">EBUSTECH</h1>
              </router-link>
            </div>
          </div>
          <div class="col">
            <div class="mobile-action-link text-end">
              <a
                href="#mobile-menu-offcanvas"
                class="offcanvas-toggle offside-menu"
                ><i class="icofont-navigation-menu"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- .....:::::: Start MobileHeader Section :::::.... -->

    <!--  Start Offcanvas Mobile Menu Section -->
    <div
      id="mobile-menu-offcanvas"
      class="offcanvas offcanvas-rightside offcanvas-mobile-menu-section"
    >
      <!-- Start Offcanvas Header -->
      <div class="offcanvas-header text-end">
        <button class="offcanvas-close">
          <i class="icofont-close-line"></i>
        </button>
      </div>
      <!-- End Offcanvas Header -->
      <!-- Start Offcanvas Mobile Menu Wrapper -->
      <div class="offcanvas-mobile-menu-wrapper">
        <!-- Start Mobile Menu  -->
        <div class="mobile-menu-bottom">
          <!-- Start Mobile Menu Nav -->
          <div class="offcanvas-menu">
            <ul>
              <li>
                <router-link to="/"><span>Home</span></router-link>
              </li>
              <li>
                <router-link to="/about"><span>About</span></router-link>
              </li>
              <li>
                <router-link to="/service"><span>Services</span></router-link>
                <!-- <ul class="mobile-sub-menu">
                  <li><a href="service-list.html">Service List</a></li>
                  <li><a href="service-details.html">Service Details</a></li>
                </ul> -->
              </li>
              <li>
                <router-link to="/blogs"><span>Blog</span></router-link>
              </li>

              <li>
                <router-link to="/contact"><span>Contact</span></router-link>
              </li>
            </ul>
          </div>
          <!-- End Mobile Menu Nav -->
        </div>
        <!-- End Mobile Menu -->

        <!-- Start Mobile contact Info -->
        <div class="mobile-contact-info text-center">
          <ul class="social-link">
            <li>
              <a target="_blank" href="https://facebook.com/ebubeireneaus"
                ><i class="icofont-facebook"></i
              ></a>
            </li>
            <li>
              <a target="_blank" href="https://twitter.com/ebubeireneaus"
                ><i class="icofont-twitter"></i
              ></a>
            </li>
            <li>
              <a target="_blank" href="https://linkedin.com/in/ireneaus"
                ><i class="icofont-linkedin"></i
              ></a>
            </li>
          </ul>
        </div>
        <!-- End Mobile contact Info -->
      </div>
      <!-- End Offcanvas Mobile Menu Wrapper -->
    </div>
    <!-- ...:::: End Offcanvas Mobile Menu Section:::... -->

    <!-- Offcanvas Overlay -->
    <div class="offcanvas-overlay"></div>

    <router-view />

      <!-- ...::: Start Footer Section :::... -->
      <footer class="footer-section section-bg overflow-hidden pos-relative">
            <div class="footer-inner-shape-top-left"></div>
            <div class="footer-inner-shape-top-right"></div>
            <div class="footer-section-top section-gap-t-165">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <!-- Start Section Content -->
                            <div class="section-content pos-relative text-center">
                                <span class="section-tag">Get Latest Updates</span>
                                <h2 class="section-title">Subscribe For Newsletter</h2>
                            </div>
                            <!-- End Section Content -->
                        </div>
                    </div>
                    <div class="footer-top-wrapper text-center">
                        <div class="row">
                            <div class="col-12">
                                <form action="#" class="footer-newsletter">
                                    <input type="email" placeholder="demo@example.com">
                                    <button class="submit-btn" type="submit">Subscribe Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-center section-gap-tb-165">
                <div class="container">
                    <div class="row justify-content-between align-items-center mb-n5">
                        <div class="col-auto mb-5">
                            <!-- Start Single Footer Info -->
                            <div class="footer-single-info">
                                <a href="tel:+2348061982520" class="info-box">
                                    <span class="icon"><i class="icofont-phone"></i></span>
                                    <span class="text">+2348061982520</span>
                                </a>
                            </div>
                            <!-- Start Single Footer Info -->
                        </div>
                        <div class="col-auto mb-5">
                            <!-- Start Single Footer Info -->
                            <div class="footer-single-info">
                                <a href="mailto:demo@example.com" class="info-box">
                                    <span class="icon"><i class="icofont-envelope-open"></i></span>
                                    <span class="text">devs@ebustech.com.ng</span>
                                </a>
                            </div>
                            <!-- Start Single Footer Info -->
                        </div>
                        <div class="col-auto mb-5">
                            <!-- Start Single Footer Info -->
                            <div class="footer-single-info">
                                <ul class="social-link">
                                    <li><a href="https://www.facebook.com/ebubeireneaus" target="_blank"><i class="icofont-facebook"></i></a></li>
                                    <li><a href="https://www.tiktok.com/ebubeireneaus" target="_blank"><i class="icofont-instagram"></i></a></li>
                                    <li><a href="https://www.twitter.com/ebubeireneaus" target="_blank"><i class="icofont-twitter"></i></a></li>
                                </ul>
                            </div>
                            <!-- Start Single Footer Info -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="container">
                    <div class="row justify-content-center justify-content-md-between align-items-center flex-column-reverse flex-md-row">
                        <div class="col-auto">
                            <div class="footer-copyright">
                                <p class="copyright-text">&copy; {{ new Date().getFullYear() }} <router-link to="/">EBUBE IRENEAUS</router-link></p>
                            </div>
                        </div>
                        <div class="col-auto">
                            <router-link to="/" class="footer-logo">
                                <div class="logo">
                                    <!-- <img src="assets/images/logo/logo.png" alt=""> -->
                                     EBUSTECH
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <!-- ...::: End Footer Section :::... -->
  </div>
</template>
