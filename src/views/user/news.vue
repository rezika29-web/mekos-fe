<template>
<div>
  <div id="home" style="padding-bottom:55px"></div>
  <div style="background-color:white">
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-sm-12 col-xs-12">
        <div class="section-headline text-center">
          <h2>News</h2>
        </div>
      </div>
    </div>
    <div class="row">
      <!-- Start Left Blog -->
      <div class="col-md-3 col-sm-3 col-xs-6" v-for="datass in datas" v-bind:key="datass.id" style="padding-bottom:30px">
        <v-card>
          <div class="single-blog">
            <div class="single-blog-img">
              <a :href="'news/'+datass.id">
                <!-- <img src="/assets/img/blog/1.jpg" alt=""> -->
                <img :src="'http://127.0.0.1:8000/imageservice/'+datass.image" alt="">
              </a>
            </div>
            <div style="padding:10px">
              <div class="blog-meta">
                <span class="comments-type">
                  <i class="fa fa-comment-o"></i>
                  <a href="#">2 comments</a>
                </span>
                <span class="date-type">
                  <i class="fa fa-calendar"></i>{{datass.created_at}}
                </span>
              </div>
              <div class="blog-text">
                <h4>
                  <a :href="'news/'+datass.id">{{datass.name}}</a>
                </h4>
                <p>
                  <!-- {{datass.description}} -->
                  {{datass.description.substr(0, 70)}}[..]
                </p>
              </div>
              <span>
                <a :href="'news/'+datass.id" class="ready-btn">Read more</a>
              </span>
            </div>
          </div>
        </v-card>
      </div>
    </div>
  </div>
</div>
  <foter/>
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
      datas: []
    }
  },
  created() {
    api.getApi('/content')
      .then(r => {
        this.datas = r.data.data
        console.log(r)
      }).catch((e) => {
        console.log(e)
      }),
      this.$store.commit('setHeader',true)
      
  },
}
</script>

<style scoped>
@import '/assets/css/style.css';
@import '/assets/css/responsive.css';
@import '/assets/lib/bootstrap/css/bootstrap.min.css';
@import '/assets/lib/font-awesome/css/font-awesome.min.css';
</style>
