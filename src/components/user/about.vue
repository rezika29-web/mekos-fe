<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-sm-12 col-xs-12">
        <div class="section-headline text-center">
          <h2>{{title}}</h2>
        </div>
      </div>
    </div>
    <div class="row">
      <!-- single-well start-->
      <div class="col-md-6 col-sm-6 col-xs-12">
        <div class="well-left">
          <div class="single-well">
            <a href="#">
                <img src="/assets/img/about/trans.png" alt="">
              </a>
          </div>
        </div>
      </div>
      <!-- single-well end-->
      <div class="col-md-6 col-sm-6 col-xs-12">
        <div class="well-middle">
          <div class="single-well">
            <a href="#">
              <h4 class="sec-head">{{subtitle}}</h4>
            </a>
            <p>
              {{description}}


            </p>
            <!-- <ul>
              <li>
                <i class="fa fa-check"></i> Interior design Package
              </li>
              <li>
                <i class="fa fa-check"></i> Building House
              </li>
              <li>
                <i class="fa fa-check"></i> Reparing of Residentail Roof
              </li>
              <li>
                <i class="fa fa-check"></i> Renovaion of Commercial Office
              </li>
              <li>
                <i class="fa fa-check"></i> Make Quality Products
              </li>
            </ul> -->

            <!-- <li v-for="datass in datas" v-bind:key="datass.id">
              {{datass.name}}
            </li> -->
          </div>
        </div>
      </div>
      <!-- End col-->
    </div>
  </div>

</template>

<script>
import api from '@/common/api.services'

export default{
  data() {
    return {
      title:"",
      subtitle:"",
      description:""
    }
  },
  created() {
    api.getApi('/about')
      .then(r => {
        this.title = r.data.data[0].title,
        this.subtitle = r.data.data[0].subtitle,
        this.description = r.data.data[0].description
        // console.log(this.r)
      }).catch((e) => {
        console.log(e)
      })
  },

}
</script>
