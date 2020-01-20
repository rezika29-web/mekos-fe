<template>
<div>
  <v-card height="500px">
  </v-card>
  <v-parallax height="300" src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
    <h1>hallo</h1>
    <h2>{{this.n}}</h2>
    <h2>{{this.ambil}}</h2>
  </v-parallax>

  <v-card height="500px">
    <div>
      <!-- <select v-model="kategori">
        <option value="makanan">Makanan</option>
        <option value="minuman">Minuman</option>
      </select> -->
      <v-form>
        <v-text-field label="kategori" outline v-model="kategori"></v-text-field>
        <v-btn color="primary" dark style='width:120px' round @click="action()">send</v-btn>
      </v-form>
      <ul>
        <li v-for="(row, i) in filterKategori" :key="i">{{ row.title }} - Rp {{ row.price }}</li>
      </ul>
      {{datas}}
    </div>
  </v-card>
</div>
</template>

<script>
export default {
  data() {
    return {
      datas:[],
      data: [{
          title: 'Mie Goreng',
          price: 12000,
          kategori: 'makanan'
        },
        {
          title: 'Nasi Goreng',
          price: 10000,
          kategori: 'makanan'
        },
        {
          title: 'Kopi Susu',
          price: 11000,
          kategori: 'minuman'
        },
        {
          title: 'Bakso',
          price: 9000,
          kategori: 'makanan'
        },
        {
          title: 'Sate',
          price: 15000,
          kategori: 'makanan'
        },
        {
          title: 'Cappucino',
          price: 10000,
          kategori: 'minuman'
        },
        {
          title: 'Ayam Goreng',
          price: 15000,
          kategori: 'makanan'
        }
      ],
      kategori: 'makanan'
    }
  },
  method: {
    action() {
      this.datas=this.filterKategori()
    }
  },
  computed:{
    filterKategori() {
        return this.data.filter(row => row.kategori === this.kategori)
    }
  }

}
</script>

<style scoped>

</style>
