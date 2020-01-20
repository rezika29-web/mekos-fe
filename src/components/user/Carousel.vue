<template>
<v-carousel hide-delimiters :height="calheight">
  <v-carousel-item v-for="(item,i) in slide" :key="i" :src="'http://127.0.0.1:8000/imageservice/'+item.image">
    <v-card color="rgba(0, 0, 0, 0.40)" height="100%">
      <v-card-text class="text-md-center font-weight-black display-2 hidden-sm-and-down " style="color:rgb(249, 249, 249); padding-top:200px">
        {{item.name}}
      </v-card-text>
      <v-card-text class="text-xs-center font-weight-black title hidden-md-and-up " style="color:rgb(249, 249, 249); padding-top:60px">
        {{item.name}}
      </v-card-text>
    </v-card>
  </v-carousel-item>
</v-carousel>
</template>
<script>
import api from '@/common/api.services'

export default {
  name: 'carousel',
  data() {
    return {
      slide:[],
      itemCarousel: [{
          src: "/assets/img/slider/slider1.jpg",
          text: "hallo"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
          text: "hai"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
          text: "juga"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
          text: "kamu"
        }
      ]
      // height: this.calheight
    };
  },
  props: ["items"],
  computed: {
    calheight() {
      if (this.$vuetify.breakpoint.xs) {
        return 200;
      } else if (this.$vuetify.breakpoint.sm) {
        return 250;
      } else if (this.$vuetify.breakpoint.md ||
        this.$vuetify.breakpoint.width >= 1025) {
        return 588;
      }
      else if (this.$vuetify.breakpoint.xl) {
        return 400;
      }
      return 400;
    },
    calbreak() {
      return this.$vuetify.breakpoint
    }
  },
  mounted() {
    console.log(this.calbreak);
  },
  created(){
    api.getApi('/image')
      .then(r => {
        this.slide = r.data
        console.log(r)
      }).catch((e) => {
        console.log(e)
      })
  }
};
</script>
<style scoped>

</style>
