<template>
<!-- <nav class="v-toolbar theme--dark primary primary-toolbar main-menu" style="margin-top: 0px; padding-right: 0px; padding-left: 0px; z-index: 99; transform: translateY(0px);"> -->
<nav class="v-toolbar v-toolbar--fixed theme--dark primary primary-toolbar main-menu spfc-toolbar-bg fixed-nav" py-4>
  <v-toolbar color="#234596" dark>
  <!-- <v-toolbar-items> -->
  <router-link to="/">
    <!-- transnet -->
    <img max-height="50" max-width="240px" width="230px" src="/assets/img/logowhite.png" class="hidden-sm-and-down" alt="" />
    <img max-height="40" max-width="240px" width="40px" src="/assets/img/logosmallwhite.png" class="hidden-md-and-up" alt="transnet" />
  </router-link>
<!-- </v-toolbar-items> -->
  <v-spacer></v-spacer>
    <v-toolbar-items v-show="!statHeader" v-toolbar__items class="hidden-sm-and-down">
      <v-btn flat @click="$vuetify.goTo('#home', options)">Home</v-btn>
      <v-btn flat @click="$vuetify.goTo('#about', options)">About</v-btn>
      <v-btn flat @click="$vuetify.goTo('#services', options)">Service</v-btn>
      <v-btn flat @click="$vuetify.goTo('#news', options)">News</v-btn>

      <!-- ddl -->
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn flat v-on="on" large v-show="!statHeader">
            Menu
          </v-btn>
        </template>

        <v-list>
          <v-list-tile v-for="(menuss, i) in menus" :key="i" :href='"/menu/"+menuss.id+"/"+menuss.name'>
            <v-list-tile-title>{{ menuss.name }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

      <v-btn flat @click="$vuetify.goTo('#contact', options)">Contact</v-btn>
    </v-toolbar-items>

    <!-- menu -->
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn class="hidden-md-and-up" flat v-on="on" large round v-show="!statHeader">
          <v-icon dark>fa-bars</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-tile v-for="(item, i) in items" :key="i" @click="$vuetify.goTo(item.action, options)">
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>



    <!-- end menu -->
    <!-- <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon> -->
  </v-toolbar>


</nav>
</template>

<script>
import api from '@/common/api.services'

export default {

  data: () => ({
    header:null,
    items: [
       { title: 'Home', action: '#home' },
       { title: 'About', action: '#about' },
       { title: 'Service', action: '#services' },
       { title: 'News', action: '#news' },
       { title: 'Contact', action: '#contact' }
     ],
     menus:[]

  }),
  created(){
    // this.header=this.$store.getters.getHeader
    api.getApi('/header')
      .then(r => {
        this.menus = r.data.data
        console.log(r)
      }).catch((e) => {
        console.log(e)
      }),
    console.log(this.$store.getters.getHeader)
    },
  computed: {
    options() {
      return {
        duration: "900",
        offset: 0,
        easing: "easeInCubic"
      }
    },
    statHeader(){
      return this.$store.getters.getHeader
    }
  },
};
</script>

<style>


</style>
