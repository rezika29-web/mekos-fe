<template>
    <div>
        <form-data
        :title="'Edit Header'"
        :header="header"
        :action="saveData"></form-data>
    </div>
</template>

<script>
import api from "@/common/api.services"
export default {
    data(){
        return{
            header:{
                name:'',
            }
        }
    },
    components:{
        FormData: () => import('@/components/admin/FormHeader.vue')
    },
    created(){
        api.getById('/header',this.$route.params.id)
            .then(r=>{
                console.log(r.data)
                this.header.name=r.data.data.name
            }).catch((e)=>{
            console.log(e)
        })
    },
    methods:{
        saveData(){
            console.log(this.$route.params.id)
            api.updateApi('/header/'+this.$route.params.id,{
                name : this.header.name,
            })
                .then(r=>{
                    console.log(r.statusText)
                    this.$router.push('/admin/header')
                }).catch((e)=>{
                    console.log(e)
            })
        }
    }

}
</script>

<style>

</style>
