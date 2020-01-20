<template>
    <div>
        <form-data
        :title="'Edit Product'"
        :service="service"
        :action="saveData"></form-data>
    </div>
</template>

<script>
    import api from "@/common/api.services"
export default {
    data(){
        return{
            service:{
                name:'',
                description:'',
            }
        }
    },
    components:{
        FormData: () => import('@/components/admin/FormService.vue')
    },
    created(){
      api.getById('/service',this.$route.params.id)
          .then(r=>{
              console.log(r.data)
              this.service.name = r.data.data.name
              this.service.description = r.data.data.description
              this.service.image = r.data.data.image
          })
          .catch((e)=>{
              console.log(e)
        })
    },
    methods:{
        saveData(){
            console.log(this.$route.params.id)
            api.updateApi('/service/'+this.$route.params.id,{
                name:this.service.name,
                description:this.service.description,
                image : this.service.image,
            })
                .then(r=>{
                    console.log(r.statusText)
                    this.$router.push('/admin/services')
                }).catch((e)=>{
                console.log(e)
            })
        }
    }

}
</script>

<style>

</style>
