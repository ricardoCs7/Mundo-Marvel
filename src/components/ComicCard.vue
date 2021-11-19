<template>
  <section>
    <div>
      <article>
        <h2>{{ comic.title }}</h2>
        <img
          :src="comic.thumbnail.path + '.jpg'"
          :alt="comic.title"
          height="250"
          width="250"
        />
        <span>Price: {{ comic.prices[0].price }}</span>
      </article>
    </div>
  </section>
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