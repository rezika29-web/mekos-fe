<template>
    <div>
        <form-data
        :title="'Add New Item'"
        :item="item"
        :action="saveData"></form-data>
    </div>
</template>

<script>
import api from '@/common/api.services'

export default {
    data(){
        return{
            'item':{
                'name':'',
                'id_header':'',
                'desc':'',
                'image':''
            }
        }
    },
    components:{
        FormData: () => import('@/components/admin/FormItem.vue')
    },
    created(){
        api.getById('/header',this.$route.params.id_menu)
            .then(r=>{
                this.item.id_header=r.data.data.id
                console.log(r.data)
            }).catch((e)=>{
            console.log(e)
        })
    },
    methods:{
        saveData(){
          api.postApi('/item',{
            name:this.item.name,
            id_header:this.item.id_header,
            desc:this.item.desc,
            image : this.item.image
          })
          .then(r=>{
              console.log(r.statusText)
              this.$router.push('/admin/item/'+this.$route.params.id_menu)
          }).catch((e)=>{
            console.log(e)
          })
        }
    }

}
</script>

<style>

</style>
