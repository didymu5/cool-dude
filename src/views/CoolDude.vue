<template>
  <div class="cool-dude">
		<div v-if="currentUser">
			<img width="25" :src="currentUser.photoUrl" :alt="currentUser.name" style="margin-right: 15px;" />
			<b>{{currentUser.name}}</b> {{coolMessage}}
		</div>
		<h3 v-else>Not logged in <router-link to="/login">Login</router-link></h3>
  </div>
</template>

<script>
import {auth} from 'firebase';

export default {
  name: 'coolDude',
	props: ['user'],
  data: () => {
		return {
			funMessage: ['is the coolest', 'is a cool dude', 'is a dude that is cool', 'eats cool dudes', 'has the coolest hair'],
		}
	},
	created: function() {
		console.log(this.currentUser)
	},
	computed: {
		coolMessage: function() {
			let rand = Math.floor(Math.random() * this.funMessage.length)
			return this.funMessage[rand]
		},
		currentUser: function() {
			return this.$store.getters.user || null;
		}
	}
}
</script>

<style>
.cool-dude{
	margin: 10%;
	padding: 15% 0;
	font-size: 1.2em;
	background: #edede1;
}
</style>

