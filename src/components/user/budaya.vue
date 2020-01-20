<template>
<div class="faq-area area-padding" style="background:white">
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-sm-12 col-xs-12">
        <div class="section-headline text-center">
          <h2>Product</h2>
        </div>
      </div>
    </div>
    <v-layout row justify-center>
      <v-flex md10>
        <v-toolbar tabs flat color="white">

          <template v-slot:extension>
            <v-tabs v-model="tabs" fixed-tabs color="transparent">
              <v-tabs-slider></v-tabs-slider>
              <v-tab v-for="(datass, i) in datas" :key="i" :href="'#mobile-tabs-'+i" class="primary--text">
                {{datass.name}}
              </v-tab>
            </v-tabs>
          </template>
        </v-toolbar>

        <v-tabs-items v-model="tabs" class="white elevation-1">
          <v-tab-item v-for="(datass, i) in datas" :key="i" :value="'mobile-tabs-'+i">
            <v-card>
              <v-card-text>{{datass.description}}</v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-flex>
    </v-layout>
  </div>
  <!-- <div class="container">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="section-headline text-center">
            <h2>{{title}}{{active}}</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="tab-menu"> -->
  <!-- Nav tabs -->
  <!-- <ul class="nav nav-tabs active" role="tablist">
              <li v-for="(datass,i) in datas" :key="i">
                <a :href="'#p-view-'+i" role="tab" data-toggle="tab">{{datass.subtitle}}</a>
              </li> -->
  <!-- <li>
                <a href="#p-view-2" role="tab" data-toggle="tab">{{datas[1].subtitle}}</a>
              </li>-->
  <!-- </ul>
          </div>
          <div class="tab-content" v-for="(datass,i) in datas" :key="i">
            <div :class="'tab-pane '+active" :id="'p-view-'+i">
              <div class="tab-inner">
                <div class="event-content head-team">
                  <h4>{{datass.subtitle}}</h4>
                  <p>
                    {{datass.description}}
                     </p>
                </div>
              </div>
            </div> -->
  <!-- <div class="tab-pane" id="p-view-2">
              <div class="tab-inner">
                <div class="event-content head-team">
                  <h4>{{datas[1].subtitle}}</h4>
                  <p>
                  {{datas[1].description}}
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>-->
  <!-- end Row -->
  <!-- </div> -->
</div>
</template>

<script>
import api from '@/common/api.services'

export default {
  data() {
    return {
      datas: [],
      title: "",
      active: "",
      tabs: null
    }
  },
  created() {
    api.getApi('/product')
      .then(r => {
        this.datas = r.data.data,
          this.title = r.data.data[0].title
          // console.log(this.r)
      }).catch((e) => {
        console.log(e)
      })
  },
  methods: {

  }
}
</script>
