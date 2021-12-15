<template>
  <router-view>
      <router-link id="cardLink" :to="{ name: 'CharacterInfo', params: { id: character.id } }">
      <article>
        <header>
          <div id="flotante">
            <h3>{{ character.name }}</h3>
          </div>
        </header>
        <img id="comicMain" :src="character.thumbnail.path + '.jpg'" alt="">
      </article>
      </router-link>
  </router-view>
</template>
<script>
export default {
  props: {
    character: { Object, required: true },
  },
};
</script>
<style >
</style>