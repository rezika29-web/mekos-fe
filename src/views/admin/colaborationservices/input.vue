<template>
  <div>
    <form-data :title="'Add New Item'" :colService="colService" :action="saveData"></form-data>
  </div>
</template>

<script>
import api from "@/common/api.services";

export default {
  data() {
    return {
      colService: {
        title: "",
        description: ""
      }
    };
  },
  components: {
    FormData: () => import("@/components/admin/FormColSer.vue")
  },
  methods: {
    saveData() {
      api.postApi("/colaborationservice", {
          title: this.colService.title,
          description: this.colService.description,
        })
        .then(r => {
          console.log(r.statusText);
          this.$router.push("/admin/colaborationservice");
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>

<style>
</style>
