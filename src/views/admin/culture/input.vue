<template>
    <div>
        <form-data
        :title="'Add New Culture'"
        :culture="culture"
        :action="saveData"></form-data>
    </div>
</template>

<script>
    import api from '@/common/api.services';

export default {
    data(){
        return{
            'culture':{
                'title':'',
                'subtitle':'',
                'description':'',
            }
            }
    },
    components:{
        FormData: () => import('@/components/admin/FormCulture.vue')
    },
    methods:{
        saveData(){
            api.postApi('/culture',{
                title:this.culture.title,
                subtitle:this.culture.subtitle,
                description:this.culture.description,
            })
                .then (r=>{
                    console.log(r.statusText)
                    this.$router.push('/admin/culture')
                }).catch((e)=>{
                    console.log(e)
            })
        }
    }

}
</script>

<style>

</style>
