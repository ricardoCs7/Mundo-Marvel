<template >
  <section class="comic-grid">
    <ComicCard v-for="comic in comics" :comic="comic" />
  </section>
    <button  @click="getComics(limit+20)" type="button" class="btn btn-primary">Ver más</button>
</template>
<script>
import marvelApi from "@/services/marvelApi.js";
import ComicCard from "./ComicCard.vue";
export default {
  data() {
    return {
      currentPage: 1,
      comics: [],
      limit: 20,
    };
  },
  mounted() {
    this.getComics(20);
  },
  methods: {
    async getComics(limit) {
      this.limit = limit;
      console.log(marvelApi.getComics(this.limit));
      fetch(marvelApi.getComics(this.limit))
        .then((res) => res.json())
        .then((json) => {
          for (const comic of json.data.results) {
            this.getComic(comic.id);
          }
        });
      //this.comics = await Promise.all(data.results);
    },
    async getComic(id) {
      fetch(marvelApi.getComic(id))
        .then((res) => res.json())
        .then((json) => {
          this.comics.push(json.data.results[0]);
          //console.log(json.data.results[0])
        });
    },
  },
  components: { ComicCard },
};
</script>
<style lang="">
</style>