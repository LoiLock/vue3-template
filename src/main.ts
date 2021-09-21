import 'bootstrap';
import '@/assets/scss/app.scss';
import App from '@/App.vue';
import FontAwesome from '@/library/FontAwesome';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {createApp} from 'vue';
import i18n from '@/plugins/I18n';
import router from '@/router';

FontAwesome.init();

createApp(App)
    .component('fa', FontAwesomeIcon)
    .use(router)
    .use(i18n)
    .mount('#app');
