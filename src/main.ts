import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import 'element-plus/dist/index.css';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
// import store from './store';

const app = createApp(App);
app.use(ElementPlus, { locale: zhCn });
app.use(createPinia()).use(router).mount('#app');
// createApp(App).use(store).use(router).mount('#app');
