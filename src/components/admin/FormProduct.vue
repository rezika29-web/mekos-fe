<template>
    <div>
        <v-card>
            <v-card-title>
                <span class="headline">{{ title }}</span>
            </v-card-title>
            <v-form>
                <v-card-text>
                    <v-text-field label="Judul" v-model="mutableContent.name"></v-text-field>
                    <v-textarea name="input-7-1" v-model="mutableContent.description"
                                label="Product Descriptions">
                    </v-textarea>

                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="success" @click="action">Save</v-btn>
                    <v-btn color="warning" to="/admin/product">Cancel</v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </div>
</template>

<script>
export default {
    data(){
        return{
            'mutableContent' : this.product,
        }
    },
    props:[
        'title',
        'product',
        'action'
    ],
    methods: {
    }
}
</script>

<style>

</style>
