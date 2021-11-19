<template lang="">
    <div class="comic-grid" v-for ="comic in comics">
        <h2>{{comic.title}}</h2>
        <article v-if="comic.images.length >= 1">
            <img :src = "comic.thumbnail.path+'.jpg'" :alt="comic.title" height="600" width="600"> <br> <br>
        </article>
        <article v-else><img src = "../assets/not-found.jpg" :alt="comic.title" height="600" width="600" ><br> <br></article> 
        <span>Price: {{comic.prices[0].price}}</span>
    </div> 
    <button @click="getComics(limit+20)">Ver mas</button>
</template>
<script>
import marvelApi from '@/services/marvelApi.js'
export default {
   data() {
        return {
            currentPage:1,
            comics: [],
            limit: 20,
        };
    },
    mounted() {
        this.getComics(20);
    },
    methods: {
        async getComics(limit){
            this.limit = limit
            console.log(marvelApi.getComics(this.limit))
            fetch(marvelApi.getComics(this.limit)).then(res => res.json()).then((json)=>{
                for(const comic of json.data.results){
                this.getComic(comic.id)
            }
            }
            )
            
            //this.comics = await Promise.all(data.results);
        },
        async getComic(id){
            fetch(marvelApi.getComic(id)).then(res=>res.json()).then((json)=>{
                this.comics.push(json.data.results[0])
                //console.log(json.data.results[0])
            })
        }
    }, 
    
    
}
</script>
<style lang="">
    
</style>