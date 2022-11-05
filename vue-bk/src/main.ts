import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/scss/index.scss';
import antd from './plugins/ant-design-vue';

let app = createApp(App);
app.use(store).use(router);

app = antd(app);

app.mount('#app');
