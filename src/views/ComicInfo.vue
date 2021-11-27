<template>
  <div>
    <span style="color: red">
      <b>{{ $route.params.id }}</b>
    </span>
    <span
      >ESTE ES LA ID DE LA RUTA, PERO NO SE COMO PONERLA EN EL GET BY ID</span
    >
    <p>{{ this.id }}</p>
    <p>{{ comic.id }}</p>
    <p>{{ comic.title }}</p>
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
      comic: {},
      id: {},
    };
  },
  mounted() {
    this.id = this.$route.params.id;
  },
  methods: {
    async getComic(id) {
      fetch(marvelApi.getComic(id))
        .then((res) => res.json())
        .then((json) => {
          this.comics.push(json.data.results);
          //console.log(json.data.results[0])
        });
    },
  },
};
</script>
<style >
</style>