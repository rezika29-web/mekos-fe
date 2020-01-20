<template>
    <div>
        <br/><br/>
        <div>
            <data-table :headers='headers' :items='datas' :search.sync='cari'>
                <template slot="field" slot-scope="props">
                    <td class="text-md-left">{{props.props.item.id_content}}</td>
                    <td class="text-md-left">{{props.props.item.name}}</td>
                    <td class="text-md-left">{{props.props.item.email}}</td>
                    <td class="text-md-left">{{props.props.item.subject}}</td>
                    <td class="text-md-left">{{ props.props.item.description }}</td>
                    <td class="text-md-left">{{ props.props.item.answer }}</td>
                    <td>
                        <v-tooltip left>
                            <v-btn fab dark small color ="cray" slot="activator" :to='"/admin/kommentar/"+props.props.item.id+"/edit"'>
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
                  text: 'Kommentar',
                  align: 'left',
                  sortable: false,
                  value: 'Id_Content'
                },
                {text: 'Name',value:'name'},
                {text: 'Email',value:'email'},
                {text: 'Subject',value:'subject'},
                {text: 'Descriptions',value:'Descriptions'},
                {text: 'Answer',value:'Answers'},
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
                    text: 'Kommentar',
                    disable: false,
                    href: '/admin/kommentar'
                }
            ]
        }
    },

    created () {
      api.getApi('/kommentar')
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
            api.deleteApi('/kommentar',val.id)
                .then(
                    this.getAll()
                ).catch((ex)=>{
                    console.log(ex)
                })
        },
        getAll(){
            api.getApi('/kommentar')
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
