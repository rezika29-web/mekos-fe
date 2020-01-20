<template lang="html">

  <div class="our-skill-area fix hidden-sm">
    <div class="test-overly"></div>
    <div class="skill-bg area-padding-2">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="section-headline-white text-center">
            <h2w>Infrastruktur</h2w>
          </div>
        </div>
      </div>
      <!-- <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="testimonial-content text-center">
              <div class="row">
                <div class="single-testi col-md-4 col-sm-12 col-xs-12" v-for="datass in datas" v-bind:key="datass.id">
                  <div class="testi-text">
                  <h6><b>{{datass.subtitle}}</b></h6>
                    <p style="text-align:justify">
                      {{datass.description}}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <v-carousel hide-controls :height="calheight">
        <v-carousel-item v-for="(item,i) in datas" :key="i"  >
        <v-container>
          <v-card-text class="text-md-center text-xs-center title " style="color:rgb(249, 249, 249)">
            ({{item.subtitle}})
          </v-card-text>
          <v-card-text class=" subheading " style="color:rgb(249, 249, 249)">
            {{item.description}}
          </v-card-text>
        </v-container>
      </v-carousel-item>
    </v-carousel>
    </div>
  </div>

</template>

<script>
import api from '@/common/api.services'

export default {
  data() {
    return {
      datas: []
    }
  },
  created() {
    api.getApi('/infrastructure')
      .then(r => {
        this.datas = r.data.data
        console.log(r)
      }).catch((e) => {
        console.log(e)
      })
  },
  computed: {
    calheight() {
      if (this.$vuetify.breakpoint.xs) {
        return 310;
      } else if (this.$vuetify.breakpoint.sm) {
        return 310;
      } else if (this.$vuetify.breakpoint.md ||
        this.$vuetify.breakpoint.width >= 1025) {
        return 300;
      }
      return 300;
    },
}
}
</script>

<style lang="css">
</style>
