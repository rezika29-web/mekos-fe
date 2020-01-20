<template>
<div>
  <!-- <div id="preloader"></div> -->


  <!-- header -->
  <header-trans/>
    <!-- Start Slider Area -->
  <div id="home" class="slider-area">
    <slider-trans/>
  </div>
  <!-- End Slider Area -->


  <!-- Start About area -->
  <div id="about" class="about-area area-padding">
    <about-trans/>
  </div>
  <!-- End About area -->


  <!-- Start Service area -->
  <div id="services" class="services-area area-padding">
    <service-trans/>
  </div>
  <!-- End Service area -->


  <!-- our-skill-area start -->
  <ourskill-trans/>
  <!-- our-skill-area end -->


  <!-- Faq area start -->
    <faqarea-trans/>
  <!-- End Faq Area -->

  <!-- Start Wellcome Area -->
    <welcome-trans/>
  <!-- End Wellcome Area -->

  <!-- Start team Area -->
  <div id="team" class="our-team-area area-padding">
    <team-trans/>
  </div>
  <!-- End Team Area -->

  <!-- Start reviews Area -->
    <review-trans/>
  <!-- End reviews Area -->

  <!-- Start portfolio Area -->
  <div id="portfolio" class="portfolio-area area-padding fix">
    <portfolio-trans/>
  </div>
  <!-- awesome-portfolio end -->


  <!-- start pricing area -->
  <div id="pricing" class="pricing-area area-padding">
    <princing-trans/>
  </div>
  <!-- End pricing table area -->


  <!-- Start Testimonials -->
    <tes-trans/>
  <!-- End Testimonials -->


  <!-- Start Blog Area -->
  <div id="blog" class="blog-area">
    <blog-trans/>
  </div>
  <!-- End Blog -->


  <!-- Start Suscrive Area -->
    <sucribe-trans/>
  <!-- End Suscrive Area -->


  <!-- Start contact Area -->
  <div id="contact" class="contact-area">
    <contact-trans/>
  </div>
  <!-- End Contact Area -->



  <!-- Start Footer bottom Area -->
    <footer-trans/>
  <!--footer -->

  <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
</div>
</template>
<script>
export default{
  // link: [
  //     { rel: 'stylesheet', href: '../../assets/lib/bootstrap/css/bootstrap.min.css'},
  //     { rel: 'stylesheet', href: 'assets/lib/nivo-slider/css/nivo-slider.css'},
  //     { rel: 'stylesheet', href: 'assets/lib/owlcarousel/owl.carousel.css'},
  //     { rel: 'stylesheet', href: 'assets/lib/owlcarousel/owl.transitions.css'},
  //     { rel: 'stylesheet', href: 'assets/lib/font-awesome/css/font-awesome.min.css'},
  //     { rel: 'stylesheet', href: 'assets/lib/animate/animate.min.css'},
  //     { rel: 'stylesheet', href: 'assets/lib/venobox/venobox.css'},
  //     { rel: 'stylesheet', href: 'assets/css/nivo-slider-theme.css'},
  //     { rel: 'stylesheet', href: 'assets/css/style.css.css'},
  //     { rel: 'stylesheet', href: 'assets/css/responsive.css'},
  //   ],
    // script: [
    //   { type: 'text/javascript', src: 'assets/lib/jquery/jquery.min.js', async: true, body: true},
    //   { type: 'text/javascript', src: 'assets/lib/bootstrap/js/bootstrap.min.js', async: true, body: true},
    //   { type: 'text/javascript', src: 'assets/lib/owlcarousel/owl.carousel.min.js', async: true, body: true},
    //   { type: 'text/javascript', src: 'assets/lib/venobox/venobox.min.js', async: true, body: true},
    //   { type: 'text/javascript', src: 'assets/lib/knob/jquery.knob.js', async: true, body: true},
    //   { type: 'text/javascript', src: 'assets/lib/wow/wow.min.js', async: true, body: true},
    //   { type: 'text/javascript', src: 'assets/lib/parallax/parallax.js', async: true, body: true},
    //   { type: 'text/javascript', src: 'assets/lib/easing/easing.min.js', async: true, body: true},
    //   { type: 'text/javascript', src: 'assets/lib/nivo-slider/js/jquery.nivo.slider.js', async: true, body: true},
    //   { type: 'text/javascript', src: 'assets/lib/appear/jquery.appear.js', async: true, body: true},
    //   { type: 'text/javascript', src: 'assets/lib/isotope/isotope.pkgd.min.js', async: true, body: true},
    //   { type: 'text/javascript', src: 'assets/contactform/contactform.js', async: true, body: true},
    //   { type: 'text/javascript', src: 'assets/js/main.js', async: true, body: true},
    //
    // ],
components:{
  HeaderTrans : () => import('@/components/transnet/header.vue'),
  aboutTrans : () => import('@/components/transnet/about.vue'),
  blogTrans : () => import('@/components/transnet/blog.vue'),
  contactTrans : () => import('@/components/transnet/contact.vue'),
  faqareaTrans : () => import('@/components/transnet/faqArea.vue'),
  footerTrans : () => import('@/components/transnet/footer.vue'),
  ourskillTrans : () => import('@/components/transnet/ourSkill.vue'),
  portfolioTrans : () => import('@/components/transnet/portfolio.vue'),
  princingTrans : () => import('@/components/transnet/princing.vue'),
  reviewTrans : () => import('@/components/transnet/reviewArea.vue'),
  serviceTrans : () => import('@/components/transnet/service.vue'),
  sliderTrans : () => import('@/components/transnet/slider.vue'),
  sucribeTrans : () => import('@/components/transnet/sucribe.vue'),
  teamTrans : () => import('@/components/transnet/team.vue'),
  tesTrans : () => import('@/components/transnet/testimoni.vue'),
  welcomeTrans : () => import('@/components/transnet/welcomeArea.vue'),


}
}
</script>

<style scoped>
@import '/assets/lib/bootstrap/css/bootstrap.min.css';
@import '/assets/lib/nivo-slider/css/nivo-slider.css';
@import '/assets/lib/owlcarousel/owl.carousel.css';
@import '/assets/lib/owlcarousel/owl.transitions.css';
@import '/assets/lib/font-awesome/css/font-awesome.min.css';
@import '/assets/lib/animate/animate.min.css';
@import '/assets/lib/venobox/venobox.css';
@import '/assets/css/nivo-slider-theme.css';
@import '/assets/css/style.css';
@import '/assets/css/responsive.css';

</style>
