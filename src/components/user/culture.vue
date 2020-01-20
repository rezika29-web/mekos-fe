<template>
<v-container>
  <div class="row">
    <div class="col-md-12 col-sm-12 col-xs-12">
      <div class="section-headline text-center">
        <h2>{{title}}</h2>
      </div>
    </div>
  </div>
  <v-layout row justify-center>
    <v-flex md10 xs11 lg10>
      <v-timeline align-top>
        <v-timeline-item v-for="(item, i) in items" :key="i" :color="color" :icon="ikon" fill-dot large>
          <v-card :color="color" dark>
            <v-card-title class="title">{{item.subtitle}}</v-card-title>
            <v-card-text class="white text--primary">
              <p>{{item.description}}</p>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import api from '@/common/api.services'

export default {
  data: () => ({
    items: [],
    color:"#1d3096",
    title:"",
    ikon: 'fa fa-star'
  }),
  created() {
    api.getApi('/culture')
      .then(r => {
        this.items = r.data.data,
        this.title=r.data.data[0].title
        // console.log(this.r)
      }).catch((e) => {
        console.log(e)
      })
  },
}
</script>

<style>
</style>
