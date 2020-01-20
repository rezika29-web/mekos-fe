<template>
    <div>
        <form-data
        :title="'Edit Item'"
        :colService="colService"
        :action="saveData"></form-data>
    </div>
</template>

<script>
import api from "@/common/api.services"
export default {
    data(){
        return{
            'colService':{
                'title':'',
                'description':''
            }
        }
    },
    components:{
        FormData: () => import('@/components/admin/FormColSer.vue')
    },
    created(){
      api.getById('/colaborationservice',this.$route.params.id)
      .then(r=>{
        console.log(r.data)
        this.colService.title=r.data.data.title
        this.colService.description = r.data.data.description
      }).catch((e)=>{
        console.log(e)
      })
    },

    methods:{
        saveData(){
          console.log(this.$route.params.id)
          api.updateApi('/colaborationservice/'+this.$route.params.id,{
            title:this.colService.title,
            description:this.colService.description
          })
          .then(r=>{
              console.log(r.statusText)
              this.$router.push('/admin/colaborationservice')
          }).catch((e)=>{
            console.log(e)
          })
        }
    }

}
</script>

<style>

</style>
