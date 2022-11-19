import { createApp } from 'vue';
import { createPinia } from 'pinia';

/* don't move this scss import below the App.vue import
  it will cause a change in CSS conflict (specificity) between tailwind
  and ant design
*/
import './assets/base.scss';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
