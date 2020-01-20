<template>
    <div>
        <form-data
        :title="'Edit Comment'"
        :comment="comment"
        :action="saveData"></form-data>
    </div>
</template>

<script>
import api from "@/common/api.services"
export default {
    data(){
        return{
            comment:{
                name:'',
                email:'',
                telephone:'',
                question:'',
                answer:'',
            }
        }
    },
    components:{
        FormData: () => import('@/components/admin/FormComment.vue')
    },
    created(){
        api.getById('/comment',this.$route.params.id)
            .then(r=>{
                console.log(r.data)
                this.comment.name=r.data.data.name
                this.comment.email=r.data.data.email
                this.comment.telephone=r.data.data.telephone
                this.comment.question=r.data.data.question
                this.comment.answer=r.data.data.answer
            }).catch((e)=>{
            console.log(e)
        })
    },
    methods:{
        saveData(){
            console.log(this.$route.params.id)
            api.updateApi('/comment/'+this.$route.params.id,{
                name : this.comment.name,
                email : this.comment.email,
                telephone : this.comment.telephone,
                question : this.comment.question,
                answer : this.comment.answer
            })
                .then(r=>{
                    console.log(r.statusText)
                    this.$router.push('/admin/comment')
                }).catch((e)=>{
                    console.log(e)
            })
        }
    }

}
</script>

<style>

</style>
