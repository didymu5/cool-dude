<template>
  <div id="app">
		<div class="isloading" v-if="loading">
		...loading
		</div>
    <div id="nav" v-if="!loading">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
			<span v-if="!userIsAuth"> |
			<router-link to="/signup">Sign up</router-link> |
			<router-link to="/login">Login</router-link>
			</span>
			<span v-if="userIsAuth">
			<p>
				<router-link to="/cool-dude">You're a cool dude</router-link>
				<br>
				<a href="#" v-on:click.stop.prevent="logout" >Log out</a>
			</p>
			</span>
    </div>
    <router-view/>
  </div>
</template>

<script>
	import * as firebase from 'firebase'
	export default {
		created: function() {
			console.log('created: ', this.userIsAuth)
		},
		computed: {
			userIsAuth() {
				return this.$store.getters.user !== null && this.$store.getters.user !== undefined
			},
			loading() {
				return this.$store.getters.loading;
			}
		},
		methods: {
			logout: function() {
				this.$store.dispatch('logout')
				this.$router.push('/')
			}
		}
	}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.isloading{
	position: absolute;
	z-index: 100;
	top: 0;
	width: 100%;
	min-height: 300px;
	font-size: 30px;
}
</style>
