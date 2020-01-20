<template lang="html">
  <footer>
    <div class="footer-area">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-sm-4 col-xs-12">
            <div class="footer-content">
              <div class="footer-head">
                <div class="footer-logo">
                  <h2><img src="/assets/img/logo.png"></h2>
                </div>

                <div class="footer-icons">
                  <ul>
                    <li>
                      <a href="#"><i class="fa fa-facebook"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-google"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fa fa-pinterest"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- end single footer -->
          <div class="col-md-4 col-sm-4 col-xs-12">
            <div class="footer-content">
              <div class="footer-head">
                <h4>information</h4>
                <div class="footer-contacts">
                  <p><span>{{datas[0].contact}}: </span>{{datas[0].description}}</p>
                  <p><span>{{datas[1].contact}}: </span>{{datas[1].description}}</p>
                  <p><span>{{datas[3].contact}}: </span>{{datas[3].description}}</p>
                </div>
              </div>
            </div>
          </div>
          <!-- end single footer -->

        </div>
      </div>
    </div>
    <div class="footer-area-bottom">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="copyright text-center">
              <p>
                &copy; Copyright <strong>Fastdeal</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>

</template>

<script>
import api from "@/common/api.services"
  export default {
    data(){
      return{
        datas:[],
      }
    },
    created() {
      api.getApi('/footer')
        .then(r => {
          this.datas = r.data.data
          console.log(this.datas)
        }).catch((e) => {
          console.log(e)
        })
    },

  }
</script>

<style lang="css">
</style>
