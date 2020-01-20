<template>
    <div>
        <form-data
        :title="'Edit Range Area'"
        :rangeArea="rangeArea"
        :action="saveData"></form-data>
    </div>
</template>

<script>
import api from "@/common/api.services"
export default {
    data(){
        return{
            'rangeArea':{
                'title':'',
                'subtitle':'',
                'description':''
            }
        }
    },
    components:{
        FormData: () => import('@/components/admin/FormRangearea.vue')
    },
    created(){
      api.getById('/rangearea',this.$route.params.id)
      .then(r=>{
        console.log(r.data)
        this.rangeArea.title=r.data.data.title
        this.rangeArea.subtitle=r.data.data.subtitle
        this.rangeArea.description = r.data.data.description
      }).catch((e)=>{
        console.log(e)
      })
    },

    methods:{
        saveData(){
          console.log(this.$route.params.id)
          api.updateApi('/rangearea/'+this.$route.params.id,{
            title:this.rangeArea.title,
            subtitle:this.rangeArea.subtitle,
            description:this.rangeArea.description
          })
          .then(r=>{
              console.log(r.statusText)
              this.$router.push('/admin/rangearea')
          }).catch((e)=>{
            console.log(e)
          })
        }
    }

}
</script>

<style>

</style>
