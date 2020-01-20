<template>
    <div>
        <form-data
        :title="'Edit Infrastructure'"
        :infrastructure="infrastructure"
        :action="saveData"></form-data>
    </div>
</template>

<script>
import api from "@/common/api.services"
export default {
    data(){
        return{
            infrastructure:{
                title:'',
                subtitle:'',
                description:'',
            }
        }
    },
    components:{
        FormData: () => import('@/components/admin/FormInfrastucture.vue')
    },
    created(){
        api.getById('/infrastructure',this.$route.params.id)
            .then(r=>{
                console.log(r.data)
                this.infrastructure.title=r.data.data.title
                this.infrastructure.subtitle = r.data.data.subtitle
                this.infrastructure.description = r.data.data.description
            }).catch((e)=>{
            console.log(e)
        })
    },
    methods:{
        saveData(){
            console.log(this.$route.params.id)
            api.updateApi('/infrastructure/'+this.$route.params.id,{
                title : this.infrastructure.title,
                subtitle : this.infrastructure.subtitle,
                description : this.infrastructure.description
            })
                .then(r=>{
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
