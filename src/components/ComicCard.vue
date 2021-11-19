<template>
  <section>
    <div>
      <article>
       <header>
            <h3>{{ comic.title }}</h3>
       </header>
        <img id="comicMain"
          :src="comic.thumbnail.path + '.jpg'"
          :alt="comic.title"
         
        />
        <div>Price: {{ comic.prices[0].price }}</div>
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