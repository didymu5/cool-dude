import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app';
import config from './fb-config';
import store from './store/index'

Vue.config.productionTip = false

new Vue({
  router,
	store,
	created() {
		this.$store.commit('setLoading', true);
		firebase.initializeApp(config);
		firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
			}
    })
	},
  render: h => h(App)
}).$mount('#app')
