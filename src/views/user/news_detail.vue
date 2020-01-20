<template>
<div>
  <div class="blog-page area-padding" style="background: white;">
    <div class="container">
      <div class="row">
        <!-- Start single blog -->
        <div class="col-md-9 col-sm-9 col-xs-12">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <!-- single-blog start -->
              <article class="blog-post-wrapper">
                <div class="post-thumbnail">
                  <img :src="'http://127.0.0.1:8000/imageservice/'+content.image" alt="">
                </div>
                <div class="post-information">
                  <h2>{{content.name}}</h2>
                  <div class="entry-meta">
                    <span class="author-meta"><i class="fa fa-user"></i> <a href="#">admin</a></span>
                    <span><i class="fa fa-clock-o"></i> {{content.created_at}}</span>
                  </div>
                  <div class="entry-content">
                    <p v-html="content.description"> </p>
                  </div>
                </div>
              </article>
              <div class="clear"></div>

              <!-- single-blog end -->
            </div>
          </div>
        </div>
        <!-- end -->
        <!-- start -->
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
          <div class="page-head-blog">
            <div class="single-blog-page">
              <!-- search option start -->
              <!-- <form action="#">
                  <div class="search-option">
                    <input type="text" placeholder="Search...">
                    <button class="button" type="submit">
                      <i class="fa fa-search"></i>
                    </button>
                  </div>
                </form> -->
              <!-- search option end -->
            </div>
            <div class="single-blog-page">
              <!-- recent start -->
              <div class="left-blog">
                <h4>recent post</h4>
                <div class="recent-post">
                  <!-- start single post -->
                  <div class="recent-single-post" v-for="datass in datas" v-bind:key="datass.id">
                    <div class="post-img">
                      <a :href="datass.id">
                        <img :src="'http://127.0.0.1:8000/imageservice/'+datass.image" alt="">
                      </a>
                    </div>
                    <div class="pst-content">
                      <p><a :href="datass.id"> {{datass.name}}</a></p>
                    </div>
                  </div>
                  <div class="recent-single-post">
                    <v-btn color="primary" href="/news" flat value="recent">
                      <span>more news..</span>
                    </v-btn>
                  </div>
                  <!-- End single post -->
                </div>
              </div>
              <!-- recent end -->
            </div>

          </div>
        </div>
        <!-- End left sidebar -->
      </div>
    </div>
  </div>
  <!-- End Blog Area -->
  <foter />

</div>
</template>

<script>
import api from '@/common/api.services'


export default {
  data() {
    return {
      succesfull:"",
      datas: [],
      listCom: [],
      alert: "true",
      content: {
        name: "",
        image: "",
        description: "",
        created_at: "",
      },
      comment: [{
        id_content: "",
        name: "",
        email: "",
        subject: "",
        desription: ""
      }]
    }
  },
  components: {
    foter: () => import("@/components/user/footer.vue"),
  },
  created() {
    api.getApi('/content')
      .then(r => {
        this.datas = r.data.data
        console.log(r)
      }).catch((e) => {
        console.log(e)
      }),
      api.getById('/content', this.$route.params.id)
      .then(r => {
        console.log(r.data)
        this.comment.id_content = r.data.data.id
        this.content.name = r.data.data.name
        this.content.description = r.data.data.description
        this.content.created_at = r.data.data.created_at
        this.content.image = r.data.data.image
      }).catch((e) => {
        console.log(e)
      }),
      api.getById('/komentar', this.$route.params.id)
      .then(respon => {
        this.listCom = respon.data
        console.log(respon)
      }).catch((e) => {
        console.log(e)
      }),
      this.$store.commit('setHeader', true)
  },
  methods: {
    action() {
      api.postApi('/kommentar', {
          id_content: this.comment.id_content,
          name: this.comment.name,
          email: this.comment.email,
          subject: this.comment.subject,
          description: this.comment.description
        })
        .then(res => {
          console.log(res.statusText)
          // this.$router.push('')
          this.succes()
        }).catch((e) => {
          console.log(e)
        })
    },
    succes() {
      this.succesfull = "true",
        this.comment.name = "",
        this.comment.email = "",
        this.comment.subject = "",
        this.comment.description = ""
    }
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
