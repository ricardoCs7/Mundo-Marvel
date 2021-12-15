<template>
  <section v-for="comic in comics" :comic="comic">
    <div id="comicInfo" class="row">
      <h1>{{ comic.title }}</h1>
      <div>
        <hr>
      </div>
      <div class="col-sm-4">
        <img :src="comic.thumbnail.path + '.jpg'" alt="" width="250" />
      </div>
      <div v-if="comic.description != ''" class="col-md-6">
        <span
          ><b><h3>Description:</h3></b></span
        >
        {{ comic.description }}
      </div>
      <div v-else class="col-md-6">
        <b><h3 style="text-align: left">Description:</h3></b>
        No se ha encontrado descripción :(
        <span>
          <img
            src="https://www.clipartmax.com/png/full/50-508951_cartoon-art-pictures-sad-deadpool.png"
            width="250"
            alt=""
        /></span>
      </div>
      <div v-for="date in dates" :date="date">
        <span>Dates: </span> {{ comic.date }}
      </div>
    </div>

    <!-- <div v-for="image in images" :image="image">
      <img :src="comic.images" alt="" />
    </div> -->
  </section>

  <section>
    <button @click="$router.go(-1)" type="button" class="btn btn-danger">
      <i class="bi bi-arrow-left-circle"></i> Regresar
    </button>
  </section>
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