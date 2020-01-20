<template>
  <div class="our-skill-area fix hidden-sm">
    <div class="test-overly"></div>
    <div class="skill-bg area-padding-2">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="section-headline-white text-center">
            <h2w >{{title}}</h2w>
          </div>
        </div>
      </div>
      <div class="container">

        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <!-- Start testimonials Start -->
            <div class="testimonial-content text-center">
              <!-- start testimonial carousel -->
                <div class="single-testi">
                  <div class="testi-text">
                  <h6><b v-html="subtitle"></b></h6>
                    <p v-html="description">
                      <!-- {{description}} -->
                    </p>
                  </div>
                </div>
            </div>
            <!-- End testimonials end -->
          </div>
          <!-- End Right Feature -->
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
      title:"",
      subtitle:"",
      description:""
    }
  },
  created() {
    api.getApi('/rangearea')
      .then(r => {
        this.title = r.data.data[0].title,
        this.subtitle = r.data.data[0].subtitle,
        this.description = r.data.data[0].description,
        console.log(r)
      }).catch((e) => {
        console.log(e)
      })
  },
}
</script>

<style lang="css">
</style>
