<template>
    <div>
        <form-data
        :title="'Edit Product'"
        :about="about"
        :action="saveData"></form-data>
    </div>
</template>

<script>
import api from "@/common/api.services"
export default {
    data(){
        return{
            about:{
                title:'',
                subtitle:'',
                description:'',
            }
        }
    },
    components:{
        FormData: () => import('@/components/admin/FormAbout.vue')
    },
    created(){
        api.getById('/about',this.$route.params.id)
            .then(r=>{
                console.log(r.data)
                this.about.title=r.data.data.title
                this.about.subtitle = r.data.data.subtitle
                this.about.description = r.data.data.description
            }).catch((e)=>{
            console.log(e)
        })
    },
    methods:{
        saveData(){
            console.log(this.$route.params.id)
            api.updateApi('/about/'+this.$route.params.id,{
                title : this.about.title,
                subtitle:this.about.subtitle,
                description : this.about.description
            })
                .then(r=>{
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
