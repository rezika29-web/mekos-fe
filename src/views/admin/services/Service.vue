<template>
    <div>
        <v-btn color="primary" to="/admin/service/add">
            <v-icon>add</v-icon>
            Add New Service
        </v-btn>
        <br/><br/>
        <div>
            <data-table :headers='headers' :items='datas' :search.sync='cari'>
                <template slot="field" slot-scope="props">
                    <td class="text-md-left">{{ props.props.item.name }}</td>
                    <td class="text-md-left">{{ props.props.item.description }}</td>
                    <td>
                        <v-tooltip left>
                            <v-btn fab dark small color="cyan" slot="activator"
                                   :to='"/admin/service/"+props.props.item.id+"/edit"'>
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
                        text: 'judul services',
                        align: 'left',
                        sortable: false,
                        value: 'judul'
                    },
                    { text: 'isi', value: 'isi' },
                    { text: 'image', value: 'image' },
                ],
                items:[],
                datas: [],

                breadItems:[
                    {
                        text: 'Dashboard',
                        disabled: false,
                        href: '/admin/dashboard'
                    },
                    {
                        text: 'Content',
                        disabled: true,
                        href: '/admin/services'
                    },
                ]
            }
        },
        created(){
            api.getApi('/service')
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
                api.deleteApi('/service',val.id)
                    .then(
                        this.getAll()
                    )
                    .catch((ex)=>
                        console.log(ex)
                    )
            },
            getAll(){
                api.getApi('/service')
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
