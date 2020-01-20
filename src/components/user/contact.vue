<template>
<div class="contact-inner area-padding" style="background:white">
  <div class="contact-overly"></div>
  <div class="container ">
    <div class="row">
      <div class="col-md-12 col-sm-12 col-xs-12">
        <div class="section-headline text-center">
          <h2>{{title}}</h2>
        </div>
      </div>
    </div>
    <div class="row">
      <!-- Start contact icon column -->
      <div class="col-md-4 col-sm-4 col-xs-12">
        <div class="contact-icon text-center">
          <div class="single-icon">
            <i :class="icon"></i>
            <p>
              {{datas[0].contact}}: {{datas[0].description}}<br>
              <span>{{datas[3].contact}}: {{datas[3].description}}</span>
            </p>
          </div>
        </div>
      </div>
      <!-- Start contact icon column -->
      <div class="col-md-4 col-sm-4 col-xs-12">
        <div class="contact-icon text-center">
          <div class="single-icon">
            <i class="fa fa-envelope-o"></i>
            <p>
              {{datas[1].contact}}: {{datas[1].description}}<br>
              <span>{{datas[4].contact}}: {{datas[4].description}}</span>
            </p>
          </div>
        </div>
      </div>
      <!-- Start contact icon column -->
      <div class="col-md-4 col-sm-4 col-xs-12">
        <div class="contact-icon text-center">
          <div class="single-icon">
            <i class="fa fa-map-marker"></i>
            <p v-html="datas[2].description">
              <br>
              <span></span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">

      <!-- Start Google Map -->
      <div class="col-md-6 col-sm-6 col-xs-12">
        <!-- Start Map -->
        <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22864.11283411948!2d-73.96468908098944!3d40.630720240038435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbg!4v1540447494452" width="100%" height="380" frameborder="0" style="border:0" allowfullscreen></iframe> -->
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.295816269671!2d100.36038740535504!3d-0.927279481830255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc4551346b4feb57a!2sAllianz+Padang!5e0!3m2!1sid!2sid!4v1554091097472!5m2!1sid!2sid"
          width="100%" height="380" frameborder="0" style="border:0" allowfullscreen></iframe>
        <!-- End Map -->
      </div>
      <!-- End Google Map -->

      <!-- Start  contact -->
      <div class="col-md-6 col-sm-6 col-xs-12">
        <!-- <div class="form contact-form"> -->

        <!-- <v-form>

          <v-card-text>
            <v-text-field label="name" outline v-model="comment.name"></v-text-field>
            <v-text-field label="email" outline v-model="comment.email"></v-text-field>
            <v-text-field label="telephone" outline v-model="comment.telephone"></v-text-field>
            <v-textarea name="message" outline v-model="comment.message" label="message" hint="message">
            </v-textarea>

          </v-card-text>
          <div class="text-xs-center">
            <v-btn color="primary" dark style='width:120px' round @click="action()">send</v-btn>
            <div id="sendmessage" v-if="succesfull" style="padding: 0px 15px 0px 15px;">
              <div>
              <v-alert v-model="alert" dismissible color="success" outline>Your message has been sent. Thank you!
              </v-alert>
            </div>
            </div>
            <div id="errormessage"></div>
          </div>
        </v-form> -->
        <!-- </div> -->
      </div>
      <!-- End Left contact -->
    </div>
  </div>
</div>
</template>

<script>
import api from '@/common/api.services'
export default {
  data() {
    return {
      succesfull: "",
      datas:[],
      title:"",
      icon:"fa fa-mobile",
      alert:"true",
      comment: {
        name: "",
        email: "",
        telephone: "",
        message: ""
      },

    }
  },
  created() {
    api.getApi('/footer')
      .then(r => {
        this.datas = r.data.data,
        this.title=r.data.data[0].title
        // console.log(this.r)
      }).catch((e) => {
        console.log(e)
      })
  },

  methods: {
    action() {
      api.postApi('/comment', {
          name: this.comment.name,
          email: this.comment.email,
          telephone: this.comment.telephone,
          question: this.comment.message
        })
        .then(r => {
          console.log(r.statusText)
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
      this.comment.telephone = "",
      this.comment.message = ""
    }
  }

}
</script>

<style lang="css">
</style>
