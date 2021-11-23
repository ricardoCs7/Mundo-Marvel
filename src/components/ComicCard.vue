<template>
  <!-- <router-view>
    <router-link :to="{ name: 'ComicInfo', params: { id: comic.id } }"> -->
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
        <div id="precio">Price: $  {{ comic.prices[0].price }}</div>
      </article>
    <!-- </router-link>
  </router-view> -->
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