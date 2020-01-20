<template>
<div>
  <div id="home" style="padding-bottom:55px"></div>
  <!-- <v-container> -->
  <!-- <v-layout row wrap mt-5 pt-2> -->
  <v-layout row wrap>
    <v-flex lg12 md12 sm12 xs12>
      <carousel />
    </v-flex>
  </v-layout>
  <!-- </v-container> -->
  <v-container>
    <v-layout row wrap>
      <v-flex md12>
        <div id="about" class="about-area area-padding">
          <about />
        </div>
      </v-flex>
    </v-layout>
  </v-container>
  <v-flex md12>
    <culture/>
  </v-flex>
  <v-flex md12>
    <budaya/>
  </v-flex>
  <v-flex md12 xs12 sm12>
    <infrastruktur />
  </v-flex>
  <v-container>
    <v-layout row wrap>
      <v-flex md12>
        <div id="services" class="services-area area-padding">
          <layanan />
        </div>
      </v-flex>
    </v-layout>
  </v-container>
  <v-flex md12>
    <area-jangkauan />
  </v-flex>
  <v-container>
    <v-layout row wrap>
      <v-flex md12>
        <div id="news" class="about-area area-padding">
        <news />
      </div>
      </v-flex>
    </v-layout>
  </v-container>
  <v-flex md12>
    <sucribe />
  </v-flex>
  <v-flex md12>
    <div id="contact">
      <contact />
    </div>
  </v-flex>
  <v-flex md12>
    <footers />
  </v-flex>

</div>
</template>

<script>
export default {
  data() {


  },
  created(){
    this.$store.commit('setHeader',false)
  },
  components: {
    Carousel: () => import("@/components/user/Carousel.vue"),
    About: () => import("@/components/user/about.vue"),
    Budaya: () => import("@/components/user/budaya.vue"),
    Culture: () => import("@/components/user/culture.vue"),
    Infrastruktur: () => import("@/components/user/infrastruktur.vue"),
    Layanan: () => import("@/components/user/layanan.vue"),
    areaJangkauan: () => import("@/components/user/area.vue"),
    news: () => import("@/components/user/lastNews.vue"),
    sucribe: () => import("@/components/user/sucribe.vue"),
    contact: () => import("@/components/user/contact.vue"),
    footers: () => import("@/components/user/footer.vue"),
  },

};
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
