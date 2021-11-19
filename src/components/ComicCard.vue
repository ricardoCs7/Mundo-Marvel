<template>
  <section>
    <div>
      <article>
       <header>
            <h3>{{ comic.title }}</h3>
       </header>
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