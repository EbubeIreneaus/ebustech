<template>
  <!-- ...::: Start 404 Section :::... -->
  <div class="error-404-section section-gap-tb-165">
            <div class="error-404-box">
                <div class="container">
                    <div class="row items-center flex-md-row flex-column-reverse">
                        <div class="col-xl-5 col-md-6">
                            <div class="error-404-content">
                                <h2 class="title">Sorry!</h2>
                                <h4 class="sub-title">This Page is Not Found.</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and
                                    dard dummy text ever since the 1500 when an uniknown
                                    specimen book has not only five.</p>

                                <router-link to="/" class="btn btn-md btn-outline-one icon-space-right"><i class="icofont-double-left"></i> Back To Home</router-link>
                            </div>
                        </div>
                        <div class="col-xl-6  col-md-6">
                            <div class="image">
                                <img class="img-fluid" src="assets/images/bg/404-error.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- ...::: End 404 Section :::... -->

</template>

<script setup lang="ts">
defineOptions({
  name: 'ErrorNotFound'
});
</script>
