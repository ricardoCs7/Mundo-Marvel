<template lang="">
<!-- {{character}}-->
{{character.thumbnail}}
    <div class="row">
      <h1>{{ character.name }}</h1>
      <div class="col-sm-4">
          {{ character.name }}
          insertar foto
      </div>
      <div v-if="character.description!=''" class="col-md-6">
        <span
          ><b><h3>Description:</h3></b></span>
          {{ character.description }}
      </div>
      <div v-else class="col-md-6">
        <span
          ><b><h3>Description:</h3></b></span>
          No tiene descripcion
      </div>
    </div>
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
      character: [],
      id: {},
    };
  },
  mounted() {
    this.getCharacter(this.$route.params.id);
  },
  methods: {
    async getCharacter(id) {
      fetch(marvelApi.getCharacter(id))
        .then((res) => res.json())
        .then((json) => {
            this.character=json.data.results[0];
        });
    },
  },
}
</script>
<style lang="">
    
</style>