import axios from 'axios';

//1f37f182e835b539fa14f4bd4d92138237cf29af63e39aee8077ad9d2bd967a7fa47f4f1b
//hash: 1449909229a1a077fc7e4286d43b2194
//ts=1&apikey=3e39aee8077ad9d2bd967a7fa47f4f1b&hash=1449909229A1A077FC7E4286D43B2194
//const baseUrl = 'https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=3e39aee8077ad9d2bd967a7fa47f4f1b&hash=1449909229a1a077fc7e4286d43b2194';
//apikey = ?ts=1&apikey=3e39aee8077ad9d2bd967a7fa47f4f1b&hash=1449909229a1a077fc7e4286d43b2194 
const baseUrl = 'https://gateway.marvel.com:443/v1/public/'
        //const apikeyPriv = `f37f182e835b539fa14f4bd4d92138237cf29af6`;
        //const apikeyPublic = `3e39aee8077ad9d2bd967a7fa47f4f1b`;
        
class marvelApi {
    constructor(){
        this.resource = axios.create({
            baseUrl,
        });
        
    }
    getComics(limit){
        //const apiKey = `ts=1&apikey=3e39aee8077ad9d2bd967a7fa47f4f1b&hash=1449909229a1a077fc7e4286d43b2194`;
        
        const urlbas = 'https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=3e39aee8077ad9d2bd967a7fa47f4f1b&hash=1449909229a1a077fc7e4286d43b2194'
        //return urlbas;
        return `https://gateway.marvel.com:443/v1/public/comics?limit=${limit}&ts=1&apikey=3e39aee8077ad9d2bd967a7fa47f4f1b&hash=1449909229a1a077fc7e4286d43b2194`
        //return this.resource.get(`${baseUrl}comics?${apiKey}`);
    }
    getComic(id){
        //const apiKey = `ts=1&apikey=3e39aee8077ad9d2bd967a7fa47f4f1b&hash=1449909229a1a077fc7e4286d43b2194`;
        //return this.resource.get(`${baseUrl}comics/${id}?${apiKey}`);
        //const urlbas = 'https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=3e39aee8077ad9d2bd967a7fa47f4f1b&hash=1449909229a1a077fc7e4286d43b2194'
        return `https://gateway.marvel.com:443/v1/public/comics/${id}?ts=1&apikey=3e39aee8077ad9d2bd967a7fa47f4f1b&hash=1449909229a1a077fc7e4286d43b2194`
    }
    getCharacters(limit){
        return `https://gateway.marvel.com:443/v1/public/characters?limit=${limit}&ts=1&apikey=3e39aee8077ad9d2bd967a7fa47f4f1b&hash=1449909229a1a077fc7e4286d43b2194`
    }

    getCharacter(id){
        return `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=3e39aee8077ad9d2bd967a7fa47f4f1b&hash=1449909229a1a077fc7e4286d43b2194`
    }
};
export default new marvelApi();
