<template>
<div class="blog-inner">
  <div class="blog-overly"></div>
  <div class="container ">
    <div class="row">
      <div class="col-md-12 col-sm-12 col-xs-12">
        <div class="section-headline text-center">
          <h2>Latest News</h2>
        </div>
      </div>
    </div>
    <div class="row" >
      <!-- Start Left Blog -->
      <div class="col-md-4 col-sm-4 col-xs-12" v-for="datass in datas" v-bind:key="datass.id" style="padding-bottom:30px">
        <div class="single-blog">
          <div class="single-blog-img">
            <a :href="'news/'+datass.id">
              <!-- <img src="/assets/img/blog/1.jpg" alt=""> -->
              <img :src="'http://127.0.0.1:8000/imageservice/'+datass.image" alt="">
            </a>
          </div>
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
              {{datass.description.substr(0, 70)}}[..]
            </p>
          </div>
          <span>
            <a :href="'news/'+datass.id" class="ready-btn">Read more</a>
          </span>
        </div>
        <!-- Start single blog -->
      </div>

    </div>
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
    api.getApi('/content')
      .then(r => {
        this.datas = r.data.data
        console.log(r)
      }).catch((e) => {
        console.log(e)
      })
  },
}
</script>

<style lang="css">
</style>
