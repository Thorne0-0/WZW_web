import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura';
import './style/main.scss'
import App from './App.vue'


const app = createApp(App)
app.use(PrimeVue,{
    theme: {
        preset: Aura,
        options: {
            prefix: 'wzw',
            darkModeSelector: '.my-app-dark',
            // cssLayer: false,
            cssLayer: {
                name: 'primevue',
                order: 'tailwind-base, primevue, tailwind-utilities'
            }
        },

    }
})
app.mount('#app')
