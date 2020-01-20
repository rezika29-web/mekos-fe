<template>
    <div>
        <br/><br/>
        <div>
            <data-table :headers='headers' :items='datas' :search.sync='cari'>
                <template slot="field" slot-scope="props">
                    <td class="text-md-left">{{props.props.item.name}}</td>
                    <td class="text-md-left">{{props.props.item.email}}</td>
                    <td class="text-md-left">{{props.props.item.telephone}}</td>
                    <td class="text-md-left">{{ props.props.item.question}}</td>
                    <td class="text-md-left">{{ props.props.item.answer }}</td>
                    <td>
                        <v-tooltip left>
                            <v-btn fab dark small color ="cray" slot="activator" :to='"/admin/comment/"+props.props.item.id+"/edit"'>
                                <v-icon small dark>edit</v-icon>
                            </v-btn>
                            <span>Edit</span>
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
                  text: 'Comment',
                  align: 'left',
                  sortable: false,
                  value: 'Name'
                },
                {text: 'Email',value:'email'},
                {text: 'Telephone',value:'telepone'},
                {text: 'question',value:'question'},
                {text: 'Answer',value:'answer'},
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
                    text: 'Comment',
                    disable: false,
                    href: '/admin/comment'
                }
            ]
        }
    },

    created () {
      api.getApi('/comment')
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
            api.deleteApi('/comment',val.id)
                .then(
                    this.getAll()
                ).catch((ex)=>{
                    console.log(ex)
                })
        },
        getAll(){
            api.getApi('/comment')
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
