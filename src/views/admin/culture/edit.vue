<template>
    <div>
        <form-data
        :title="'Edit Culture'"
        :culture="culture"
        :action="saveData"></form-data>
    </div>
</template>

<script>
import api from "@/common/api.services"
export default {
    data(){
        return{
            culture:{
                title:'',
                subtitle:'',
                description:'',
            }
        }
    },
    components:{
        FormData: () => import('@/components/admin/FormCulture.vue')
    },
    created(){
        api.getById('/culture',this.$route.params.id)
            .then(r=>{
                console.log(r.data)
                this.culture.title=r.data.data.title
                this.culture.subtitle = r.data.data.subtitle
                this.culture.description = r.data.data.description
            }).catch((e)=>{
            console.log(e)
        })
    },
    methods:{
        saveData(){
            console.log(this.$route.params.id)
            api.updateApi('/culture/'+this.$route.params.id,{
                title : this.culture.title,
                subtitle : this.culture.subtitle,
                description : this.culture.description
            })
                .then(r=>{
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
