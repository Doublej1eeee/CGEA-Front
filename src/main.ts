import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./routers";
import pinia from "./store";
import ElementPlus from "element-plus"


const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(ElementPlus);



app.mount('#app');
