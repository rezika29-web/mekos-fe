<template>
<div>
  <div id="home" style="padding-bottom:55px"></div>
  <div style="background-color:white">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="section-headline text-center">
            <h2>{{this.header}}</h2>
          </div>
        </div>
      </div>
      <v-layout row wrap>
        <v-flex md4 xs6 v-for="n in datas" :key="n" px-2 py-3>
          <!-- Start Left Blog -->
          <v-hover>
            <v-card>
              <!-- <v-img :aspect-ratio="16/9" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img> -->
              <v-img :aspect-ratio="16/9" :src="'http://127.0.0.1:8000/imageservice/'+n.image"></v-img>
              <v-expansion-panel>
                <v-expansion-panel-content>
                  <template v-slot:header>
                    <div><span class="headline">{{n.name}}</span></div>
                  </template>
                  <v-card>
                    <v-card-text>
                      <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat. -->
                      {{n.desc}}
                    </v-card-text>
                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>

            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>
    </div>
  </div>
  <foter />
</div>
</template>

<script>
import api from '@/common/api.services'

export default {
  components: {
    foter: () => import("@/components/user/footer.vue"),
  },
  data() {
    return {
      datas: [],
      header:""
    }
  },
  created() {
    api.getById('/showheader', this.$route.params.id_menu)
    .then(r => {
      this.datas=r.data
      console.log(r.data)
    }).catch((e) => {
      console.log(e)
    }),
    this.header=this.$route.params.menu,
    this.$store.commit('setHeader', true)

  }
}
</script>

<style scoped>
@import '/assets/css/style.css';
@import '/assets/css/responsive.css';
@import '/assets/lib/bootstrap/css/bootstrap.min.css';
@import '/assets/lib/font-awesome/css/font-awesome.min.css';
</style>
