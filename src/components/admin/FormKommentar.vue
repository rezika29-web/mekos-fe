<template>
    <div>
        <v-card>
            <v-card-title>
                <span class="headline">{{ title }}</span>
            </v-card-title>
            <v-form>
                <v-card-text>

                    <!--<v-text-field label="answer" v-model="mutableContent.id_content"></v-text-field>-->
                    <!--<v-text-field label="answer" v-model="mutableContent.name"></v-text-field>-->
                    <!--<v-text-field label="answer" v-model="mutableContent.email"></v-text-field>-->
                    <!--<v-text-field label="answer" v-model="mutableContent.subject"></v-text-field>-->
                    <!--<v-text-field label="answer" v-model="mutableContent.description"></v-text-field>-->
                    <v-text-field label="answer" v-model="mutableContent.answer"></v-text-field>

                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="success" @click="action">Save</v-btn>
                    <v-btn color="warning" to="/admin/kommentar">Cancel</v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                'mutableContent' : this.kommentar,
            }
        },
        props:[
            'answer',
            'kommentar',
            'action'
        ],
        methods: {
        }
    }
</script>

<style>

</style>
