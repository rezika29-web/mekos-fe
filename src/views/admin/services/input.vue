<template>
    <div>
        <form-data
        :title="'Add New Service'"
        :service="service"
        :action="saveData"></form-data>
    </div>
</template>

<script>
    import api from '@/common/api.services'
export default {
    data(){
        return{
            'service':{
                'name':'',
                'description':'',
            }
        }
    },
    components:{
        FormData: () => import('@/components/admin/FormService.vue')
    },
    methods:{
        saveData(){
            api.postApi('/service',{
                name:this.service.name,
                description : this.service.description,
                image : this.service.image
            })
                .then(r=>{
                    console.log(r.statusText)
                    this.$router.push('/admin/services')
                })
                .catch((e)=>{
                    console.log(e)
                })
        }
    }

}
</script>

<style>

</style>
