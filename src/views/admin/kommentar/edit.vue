<template>
    <div>
        <form-data
        :title="'Edit Komentar'"
        :kommentar="kommentar"
        :action="saveData"></form-data>
    </div>
</template>

<script>
import api from "@/common/api.services"
export default {
    data(){
        return{
            kommentar:{
                id_content:'',
                name:'',
                email:'',
                subject:'',
                description:'',
                answer:'',
            }
        }
    },
    components:{
        FormData: () => import('@/components/admin/FormKommentar.vue')
    },
    created(){
        api.getById('/kommentar',this.$route.params.id)
            .then(r=>{
                console.log(r.data)
                this.kommentar.id_content=r.data.data.id_content
                this.kommentar.name=r.data.data.name
                this.kommentar.email=r.data.data.email
                this.kommentar.subject=r.data.data.subject
                this.kommentar.description=r.data.data.description
                this.kommentar.answer=r.data.data.answer
            }).catch((e)=>{
            console.log(e)
        })
    },
    methods:{
        saveData(){
            console.log(this.$route.params.id)
            api.updateApi('/kommentar/'+this.$route.params.id,{
                id_content : this.kommentar.id_content,
                name : this.kommentar.name,
                email : this.kommentar.email,
                subject : this.kommentar.subject,
                description : this.kommentar.description,
                answer : this.kommentar.answer
            })
                .then(r=>{
                    console.log(r.statusText)
                    this.$router.push('/admin/kommentar')
                }).catch((e)=>{
                    console.log(e)
            })
        }
    }

}
</script>

<style>

</style>
