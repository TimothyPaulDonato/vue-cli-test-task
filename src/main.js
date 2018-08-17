import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import 'bootstrap/dist/css/bootstrap.css'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'vuetify/dist/vuetify.min.js'


Vue.config.productionTip = false

Vue.use(Vuetify)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
