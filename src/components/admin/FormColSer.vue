<template>
    <div>
        <v-card>
            <v-card-title>
                <span class="headline">{{ title }}</span>
            </v-card-title>
            <v-form>
            <v-card-text>
                    <v-text-field label="Title" v-model="mutableContent.title"></v-text-field>
                    <v-textarea name="input-7-1" v-model="mutableContent.description"
                      label="Description">
                    </v-textarea>
                    <!-- <v-text-field label="isi" v-model="mutableContent.isi"></v-text-field> -->
                    <!-- <v-text-field label="image" v-model="mutableContent.image"></v-text-field> -->

            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="success" @click="action">Save</v-btn>
                <v-btn color="warning" to="/admin/colaborationservice">Cancel</v-btn>
            </v-card-actions>
            </v-form>
        </v-card>
    </div>
</template>

<script>
export default {
    data(){
        return{
            'mutableContent' : this.colService,
        }
    },
    props:[
        'title',
        'colService',
        'action'
    ],
    methods:{
        //
    }
}
</script>

<style>

</style>
