<template>
    <div>
        <v-card>
            <v-card-title>
                <span class="headline">{{ title }}</span>
            </v-card-title>
            <v-form>
            <v-card-text>
                    <v-text-field label="judul" v-model="mutableContent.name"></v-text-field>
                    <v-textarea name="input-7-1" v-model="mutableContent.description"
                      label="Isi Content">
                    </v-textarea>
                    <!-- <v-text-field label="isi" v-model="mutableContent.isi"></v-text-field> -->
                    <!-- <v-text-field label="image" v-model="mutableContent.image"></v-text-field> -->
                <input type="file" @change="imageChanged" />

            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="success" @click="action">Save</v-btn>
                <v-btn color="warning" to="/admin/content">Cancel</v-btn>
            </v-card-actions>
            </v-form>
        </v-card>
    </div>
</template>

<script>
export default {
    data(){
        return{
            'mutableContent' : this.content,
            selectedFile : null,
        }
    },
    props:[
        'title',
        'content',
        'action'
    ],
    methods:{
        upload(e){
            let img = e.target.files[0]
            let fd = new FormData()

            fd.append('image',img)
        },
        onFilePicked(e){
            const files = e.target.files
            if(files[0] !==undefined){
                this.$root.imageName = files[0].name
                if(this.$root.imageName.lastIndexOf('.')<=0){
                    return
                }
                const fr = new FileReader()
                fr.readAsDataURL(files[0])
                fr.addEventListener('load',()=>{
                    this.$root.imageUrl = fr.result
                    this.$root.imageFile = files[0]
                })
            } else{
                this.$root.imageName='';
                this.$root.imageFile='';
                this.$root.imageUrl='';
            }
        },
        imageChanged(e){
            // console.log(e.target.files[0])
            var fileReader = new FileReader()
            fileReader.readAsDataURL(e.target.files[0])
            fileReader.onload = (e) => {
                this.mutableContent.image = e.target.result
            }
            // console.log(this.mutableContent
        },
    }
}
</script>

<style>

</style>
