import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/styles.css'
import './assets/css/bootstrap.css'
import './assets/main.css'
import 'aos/dist/aos.css'; 


createApp(App)
 .use(AOS.init())
 .mount("#app");