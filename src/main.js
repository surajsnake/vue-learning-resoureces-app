import { createApp } from 'vue'
import App from './App.vue'
import BaseCard from './components/UI/BaseCard.vue'
import BaseButton from './components/UI/BaseButton.vue'

const app = createApp(App);
//register the global componet which is accessible in all other component directly
app.component('base-card',BaseCard);
app.component('base-button',BaseButton);

//above mentioned component is the global component because we register as the global component
app.mount('#app')
