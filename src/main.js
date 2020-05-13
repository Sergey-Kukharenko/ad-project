import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import * as fb from 'firebase';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  created() {
    fb.initializeApp({
      apiKey: 'AIzaSyBGKoygi66zb16QC1IS0b9-QfRSGGBZFZc',
      authDomain: 'itc-ads-5eb57.firebaseapp.com',
      databaseURL: 'https://itc-ads-5eb57.firebaseio.com',
      projectId: 'itc-ads-5eb57',
      storageBucket: 'itc-ads-5eb57.appspot.com',
      messagingSenderId: '210481320852',
      appId: '1:210481320852:web:7c5a3d6051f9d63608f581'
    });

    fb.auth().onAuthStateChanged(user => {
      if(user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    });

    this.$store.dispatch('fetchAds');
  },
  render: h => h(App)
}).$mount('#app')