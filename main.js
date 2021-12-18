import { createApp } from 'vue';
import App from './src/App.vue';
import router from '@/router'
import "./assets/scss/index.scss";

const app = createApp(App);
app.use(router);
app.mount('#app');