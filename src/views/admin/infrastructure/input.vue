<template>
    <div>
        <form-data
        :title="'Add New Infrastructure'"
        :infrastructure="infrastructure"
        :action="saveData"></form-data>
    </div>
</template>

<script>
    import api from '@/common/api.services';

export default {
    data(){
        return{
            'infrastructure':{
                'title':'',
                'subtitle':'',
                'description':'',
            }
            }
    },
    components:{
        FormData: () => import('@/components/admin/FormInfrastucture.vue')
    },
    methods:{
        saveData(){
            api.postApi('/infrastructure',{
                title:this.infrastructure.title,
                subtitle:this.infrastructure.subtitle,
                description:this.infrastructure.description,
            })
                .then (r=>{
                    console.log(r.statusText)
                    this.$router.push('/admin/infrastructure')
                }).catch((e)=>{
                    console.log(e)
            })
        }
    }

}
</script>

<style>

</style>
