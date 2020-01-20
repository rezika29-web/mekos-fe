<template>
    <div>
        <form-data
        :title="'Edit Footer'"
        :footer="footer"
        :action="saveData"></form-data>
    </div>
</template>

<script>
import api from "@/common/api.services"
export default {
    data(){
        return{
            'footer':{
                'title':'',
                'contact':'',
                'description':''
            }
        }
    },
    components:{
        FormData: () => import('@/components/admin/FormFooter.vue')
    },
    created(){
      api.getById('/footer',this.$route.params.id)
      .then(r=>{
        console.log(r.data)
        this.footer.title=r.data.data.title
        this.footer.contact=r.data.data.contact
        this.footer.description = r.data.data.description
      }).catch((e)=>{
        console.log(e)
      })
    },

    methods:{
        saveData(){
          console.log(this.$route.params.id)
          api.updateApi('/footer/'+this.$route.params.id,{
            title:this.footer.title,
            contact:this.footer.contact,
            description:this.footer.description
          })
          .then(r=>{
              console.log(r.statusText)
              this.$router.push('/admin/footer')
          }).catch((e)=>{
            console.log(e)
          })
        }
    }

}
</script>

<style>

</style>
