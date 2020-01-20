<template>
    <div>
        <form-data
        :title="'Add New About'"
        :about="about"
        :action="saveData"></form-data>
    </div>
</template>

<script>
    import api from '@/common/api.services';

export default {
    data(){
        return{
            'about':{
                'title':'',
                'subtitle':'',
                'description':'',
            }
            }
    },
    components:{
        FormData: () => import('@/components/admin/FormAbout.vue')
    },
    methods:{
        saveData(){
            api.postApi('/about',{
                title:this.about.title,
                subtitle:this.about.subtitle,
                description:this.about.description,
            })
                .then (r=>{
                    console.log(r.statusText)
                    this.$router.push('/admin/about')
                }).catch((e)=>{
                    console.log(e)
            })
        }
    }

}
</script>

<style>

</style>
