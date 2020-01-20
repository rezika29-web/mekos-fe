<template>
  <div class="container">
  <div class="row">
    <div class="col-md-12 col-sm-12 col-xs-12">
      <div class="section-headline text-center">
        <h2>Layanan</h2>
      </div>
    </div>
  </div>
  <div class="row">
  <div class="col-md-12 col-sm-12 col-xs-12">
    <div class="about-move" v-for="datass in datas" v-bind:key="datass.id">
      <div class="services-details">
        <div class="single-services">
            <h4> <i class="fa fa-server"></i> {{datass.name}}</h4>
            <p v-html="datass.description">

            </p>
        </div>
      </div>
    </div>
    <div class="faq-details">
      <div class="panel-group" id="accordion">
        <!-- Panel Default -->
        <div class="panel panel-default" v-for="services in service" v-bind:key="services.id">
          <div class="panel-heading">
            <h4 class="check-title" >
                <a :href="'#hal'+services.id" class="active" data-toggle="collapse"  data-parent="#accordion" >
                  <span class="acc-icons"><i class="fa fa-cog"></i></span>  {{services.title}}
                </a>
              </h4>
          </div>
          <div :id="'hal'+services.id" class="panel-collapse collapse ">
            <div class="panel-body">
                <p v-html="services.description">

                  </p>
            </div>
          </div>
        </div>
        <!-- End Panel Default -->


      </div>
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
      datas: [],
      service:[],
      a:"1"
    }
  },
  created() {
    api.getApi('/service')
      .then(r => {
        this.datas = r.data.data
        console.log(r)
      }).catch((e) => {
        console.log(e)
      }),

      api.getApi('/colaborationservice')
        .then(r => {
          this.service = r.data.data
          console.log(r)
        }).catch((e) => {
          console.log(e)
        })
  },
}
</script>

<style lang="css">
</style>
