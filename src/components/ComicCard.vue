<template>
  <article>
    <header>
    <div id="flotante">
        <h2>{{ comic.title }}</h2>
    </div>
    </header>
    <img
      id="comicMain"
      :src="comic.thumbnail.path + '.jpg'"
      :alt="comic.title"
    />
    <div> Price: {{ comic.prices[0].price }}</div>
  </article>
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