<template>
  <div v-for="comic in comics" :comic="comic">
    <h1>{{ comic.title }}</h1>
    
  </div>

  <button @click="$router.go(-1)" type="button" class="btn btn-danger">
    <i class="bi bi-arrow-left-circle"></i> Regresar
  </button>
</template>
<script>
import marvelApi from "@/services/marvelApi.js";
export default {
  data() {
    return {
      comics: [],
      id: {},
    };
  },
  mounted() {
    this.getComic(this.$route.params.id);
  },
  methods: {
    async getComic(id) {
      fetch(marvelApi.getComic(id))
        .then((res) => res.json())
        .then((json) => {
          this.comics.push(json.data.results[0]);
          //console.log(json.data.results[0])
        });
    },
  },
};
</script>
<style >
</style>