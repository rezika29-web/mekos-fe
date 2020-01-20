<template>
    <div>
        <form-data
        :title="'Edit Item'"
        :item="item"
        :action="saveData"></form-data>
    </div>
</template>

<script>
import api from "@/common/api.services"
export default {
    data(){
        return{
            item:{
                name:'',
                id_header:'',
                desc:'',
                image:''
            }
        }
    },
    components:{
        FormData: () => import('@/components/admin/FormItem.vue')
    },
    created(){
      api.getById('/item',this.$route.params.id)
      .then(r=>{
        console.log(r.data)
        this.item.name=r.data.data.name
        this.item.id_header = r.data.data.id_header
        this.item.desc = r.data.data.desc
        this.item.image = r.data.data.image
      }).catch((e)=>{
        console.log(e)
      })
    },

    methods:{
        saveData(){
          console.log(this.$route.params.id)
          api.updateApi('/item/'+this.$route.params.id,{
            name:this.item.name,
            id_header:this.item.id_header,
            desc:this.item.desc,
            image : this.item.image
          })
          .then(r=>{
              console.log(r.statusText)
              this.$router.push('/admin/item/'+this.item.id_header)
          }).catch((e)=>{
            console.log(e)
          })
        }
    }

}
</script>

<style>

</style>
