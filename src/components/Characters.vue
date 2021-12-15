<template >
  <section class="comic-grid">
    <CharacterCard v-for="character in characters" :character="character" />
  </section>
  <button @click="getCharacters(limit + 20)" type="button" class="btn btn-primary">
    Ver más
  </button>
</template>
<script>
import marvelApi from "@/services/marvelApi.js";
import CharacterCard from "./CharacterCard.vue";

export default {
  data() {
    return {
      currentPage: 1,
      characters: [],
      limit: 20,
    };
  },
  mounted() {
    this.getCharacters(20);
  },
  methods: {
    async getCharacters(limit) {
      this.limit = limit;
      console.log(marvelApi.getCharacters(this.limit));
      fetch(marvelApi.getCharacters(this.limit))
        .then((res) => res.json())
        .then((json) => {
          for (const character of json.data.results) {
            //console.log(character.id)
            this.getCharacter(character.id);
          }
        });
      //this.comics = await Promise.all(data.results);
    },
    async getCharacter(id) {
        //console.log(marvelApi.getCharacter(id))
      fetch(marvelApi.getCharacter(id))
        .then((res) => res.json())
        .then((json) => {
          this.characters.push(json.data.results[0]);
          //console.log(json.data.results[0])
        });
    },
  },
  components: { CharacterCard },
};
</script>
<style>
</style>