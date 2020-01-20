<template>
    <div>
        <form-data
        :title="'Add New Content'"
        :content="content"
        :action="saveData"></form-data>
    </div>
</template>

<script>
import api from '@/common/api.services'

export default {
    data(){
        return{
            'content':{
                'name':'',
                'description':'',
                'image':''
            }
        }
    },
    components:{
        FormData: () => import('@/components/admin/FormContent.vue')
    },
    methods:{
        saveData(){
          api.postApi('/content',{
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
