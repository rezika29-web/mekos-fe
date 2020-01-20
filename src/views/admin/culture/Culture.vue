<template>
    <div>
        <v-btn color="primary" to="/admin/culture/add">
            <v-icon>add</v-icon>
            Add New Culture
        </v-btn>
        <br/><br/>
        <div>
            <data-table :headers='headers' :items='datas' :search.sync='cari'>
                <template slot="field" slot-scope="props">
                    <td class="text-md-left">{{props.props.item.title}}</td>
                    <td class="text-md-left">{{props.props.item.subtitle}}</td>
                    <td class="text-md-left">{{ props.props.item.description }}</td>
                    <td>
                        <v-tooltip left>
                            <v-btn fab dark small color ="cray" slot="activator" :to='"/admin/culture/"+props.props.item.id+"/edit"'>
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
// import VTooltip from "vuetify/src/components/VTooltip/VTooltip";
import api from "@/common/api.services";

export default {
    data(){
        return{
            cari: '',
            headers : [
                {
                  text: 'Culture',
                  align: 'left',
                  sortable: false,
                  value: 'Title'
                },
                {text: 'Subtitle',value:'subtitle'},
                {text: 'Descriptions',value:'Descriptions'},
            ],
            items:[],
            datas: [],

            breadItems: [
                {
                    text: 'Dashboard',
                    disable: false,
                    href: '/admin/dashboard'
                },
                {
                    text: 'Culture',
                    disable: false,
                    href: '/admin/culture'
                }
            ]
        }
    },

    created () {
      api.getApi('/culture')
          .then(r=>{
              this.datas = r.data.data
              console.log(r)
          }).catch((e)=>{
              console.log(e)
      })
    },

    components:{
        DataTable: () =>import('@/components/admin/DataTable.vue'),
    },
    methods: {
        del(val){
            console.log("hapus")
            api.deleteApi('/culture',val.id)
                .then(
                    this.getAll()
                ).catch((ex)=>{
                    console.log(ex)
                })
        },
        getAll(){
            api.getApi('/culture')
                .then(r=>{
                    this.datas = r.data.data
                    console.log(r)
                }).catch((e)=>{
                    console.log(e)
            })
        }
    }
}
</script>

<style>

</style>
