<template>
    <div>
        <form-data
        :title="'Edit Content'"
        :content="content"
        :action="saveData"></form-data>
    </div>
</template>

<script>
import api from "@/common/api.services"
export default {
    data(){
        return{
            content:{
                name:'',
                description:'',
                image:''
            }
        }
    },
    components:{
        FormData: () => import('@/components/admin/FormContent.vue')
    },
    created(){
      api.getById('/content',this.$route.params.id)
      .then(r=>{
        console.log(r.data)
        this.content.name=r.data.data.name
        this.content.description = r.data.data.description
          this.content.image = r.data.data.image
      }).catch((e)=>{
        console.log(e)
      })
    },

    methods:{
        saveData(){
          console.log(this.$route.params.id)
          api.updateApi('/content/'+this.$route.params.id,{
            name:this.content.name,
            description:this.content.description,
              image : this.content.image
          })
          .then(r=>{
              console.log(r.statusText)
              this.$router.push('/admin/content')
          }).catch((e)=>{
            console.log(e)
          })
        }
    }

}
</script>

<style>

</style>
