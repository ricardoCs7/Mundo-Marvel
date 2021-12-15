<template>
  <router-view>
    <router-link id="cardLink" :to="{ name: 'ComicInfo', params: { id: comic.id } }">
      <article>
        <header>
          <div id="flotante">
            <h3>{{ comic.title }}</h3>
          </div>
        </header>
        <img
          id="comicMain"
          :src="comic.thumbnail.path + '.jpg'"
          :alt="comic.title"
        />
        <div v-if="comic.prices[0].price!=0" id="precio"> Precio: $ {{ comic.prices[0].price }} USD</div>
        <div v-else id="precio"> No disponible</div>
      </article>
    </router-link>
  </router-view>
</template>
<script>
export default {
  props: {
    comic: { Object, required: true },
  },
};
</script>
<style >
</style>