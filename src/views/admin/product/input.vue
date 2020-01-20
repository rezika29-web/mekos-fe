<template>
    <div>
        <form-data
        :title="'Add New Product'"
        :product="product"
        :action="saveData"></form-data>
    </div>
</template>

<script>
    import api from '@/common/api.services';

export default {
    data(){
        return{
            'product':{
                'name':'',
                'description':'',
                // 'image':''
            }
        }
    },
    components:{
        FormData: () => import('@/components/admin/FormProduct.vue')
    },
    methods:{
        saveData(){
            api.postApi('/product',{
                name:this.product.name,
                description:this.product.description,
                image : this.product.image
            })
                .then (r=>{
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
