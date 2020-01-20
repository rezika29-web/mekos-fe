<template>
    <div>
        <form-data
        :title="'Edit Product'"
        :product="product"
        :action="saveData"></form-data>
    </div>
</template>

<script>
import api from "@/common/api.services"
export default {
    data(){
        return{
            product:{
                name:'',
                description:'',
            }
        }
    },
    components:{
        FormData: () => import('@/components/admin/FormProduct.vue')
    },
    created(){
        api.getById('/product',this.$route.params.id)
            .then(r=>{
                console.log(r.data)
                this.product.name=r.data.data.name
                this.product.description = r.data.data.description
            }).catch((e)=>{
            console.log(e)
        })
    },
    methods:{
        saveData(){
            console.log(this.$route.params.id)
            api.updateApi('/product/'+this.$route.params.id,{
                name : this.product.name,
                description : this.product.description
            })
                .then(r=>{
                    console.log(r.statusText)
                    this.$router.push('/admin/product')
                }).catch((e)=>{
                    console.log(e)
            })
        }
    }

}
</script>

<style>

</style>
