<template>
    <div>
        <v-card>
            <v-card-title>
                <span class="headline">{{ title }}</span>
            </v-card-title>
            <v-form>
                <v-card-text>
                    <v-text-field label="Title" v-model="mutableContent.title"></v-text-field>
                    <v-text-field label="Subtitle" v-model="mutableContent.subtitle"></v-text-field>
                    <v-textarea name="input-7-1" v-model="mutableContent.description"
                                label="Infrastructure Descriptions">
                    </v-textarea>

                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="success" @click="action">Save</v-btn>
                    <v-btn color="warning" to="/admin/infrastructure">Cancel</v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                'mutableContent' : this.infrastructure,
            }
        },
        props:[
            'title',
            'infrastructure',
            'action'
        ],
        methods: {
        }
    }
</script>

<style>

</style>
