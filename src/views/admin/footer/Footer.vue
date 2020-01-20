<template>
    <div>
        <div>
        <data-table :headers='headers' :items='datas' :search.sync='cari'>
            <template slot="field" slot-scope="props">
                <td class="text-md-left">{{ props.props.item.title }}</td>
                <td class="text-md-left">{{ props.props.item.contact }}</td>
                <td class="text-md-left">{{ props.props.item.description }}</td>
                <td>
                     <v-tooltip left>
                        <v-btn fab dark small color="cyan" slot="activator"
                        :to='"/admin/footer/"+props.props.item.id+"/edit"'>
                            <v-icon small dark>edit</v-icon>
                        </v-btn>
                        <span>Edit</span>
                    </v-tooltip>
                    <v-tooltip right>
                        <v-btn fab dark small color="red" slot="activator" @click="del(props.props.item)">
                            <v-icon small dark>delete</v-icon>
                        </v-btn>
                        <span>Delete</span>
                    </v-tooltip>
                </td>
            </template>
        </data-table>
        </div>
    </div>
</template>

<script>
import api from '@/common/api.services'

export default {
    data(){
        return{
            cari: '',
            headers: [
                {
                    text: 'Title',
                    align: 'left',
                    sortable: false,
                    value: 'title'
                },
                { text: 'contact', value: 'contact' },
                { text: 'description', value: 'description' },
            ],
            datas: [],
        }
    },
    created(){
      api.getApi('/footer')
      .then(r=>{
        this.datas = r.data.data
        console.log(r)
      }).catch((e)=>{
        console.log(e)
      })
    },
    components:{
        DataTable : () => import('@/components/admin/DataTable.vue'),
    },
    methods:{
      del(val){
        console.log("hapus")
        api.deleteApi('/footer',val.id)
        .then(
          this.getAll()
        )
        .catch((ex)=>
          console.log(ex)
        )
      },
    }
}
</script>

<style>

</style>
