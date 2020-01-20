<template>
    <div>
        <v-card>
            <v-card-title>
                <span class="headline">{{ title }}</span>
            </v-card-title>
            <v-form>
            <v-card-text>
                    <v-text-field label="name" v-model="mutableContent.name"></v-text-field>
                    <v-textarea name="input-7-1" v-model="mutableContent.description"
                                label="Descriptions Of Service">
                    </v-textarea>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="success" @click="action">Save</v-btn>
                <v-btn color="warning" to="/admin/services">Cancel</v-btn>
            </v-card-actions>
            </v-form>
        </v-card>
    </div>
</template>

<script>
export default {
    data(){
        return{
            'mutableContent' : this.service,
        }
    },
    props:[
        'title',
        'service',
        'action'
    ],
    methods: {

    }
}
</script>

<style>

</style>
