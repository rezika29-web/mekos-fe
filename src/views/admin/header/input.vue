<template>
    <div>
        <form-data
        :title="'Add New Header'"
        :header="header"
        :action="saveData"></form-data>
    </div>
</template>

<script>
    import api from '@/common/api.services';

export default {
    data(){
        return{
            'header':{
                'name':'',

            }
            }
    },
    components:{
        FormData: () => import('@/components/admin/FormHeader.vue')
    },
    methods:{
        saveData(){
            api.postApi('/header',{
                name:this.header.name,

            })
                .then (r=>{
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
