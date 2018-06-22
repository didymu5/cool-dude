<template>
	<div class="login-form">
		<h1>Login</h1>
		<form action="">
		<input type="text" placeholder="Email">
		<input type="text" placeholder="Password">
		</form>
		<div class="federated-logins">
			<button v-on:click="signInWithGoogle">Signin with Google</button>
			<p>
			<button v-on:click="signInWithFB">Signin with facebook</button>
			</p>
		</div>

	</div>
</template>

<script>
import firebase, { auth } from "firebase";
export default {
  name: "login",
	created: function() {
		auth()
        .getRedirectResult()
        .then(result => {
          if (result.credential) {
            var token = result.credential.accessToken;
          }
					console.log('from redirect ', result)
        });
	},
  methods: {
    signInWithGoogle: function() {
      this.$store.dispatch('signUserInGoogle')
    },
		signInWithFB: function() {
			this.$store.dispatch('signUserInFacebook')
		},
		sendToHome: function() {
			this.$route.push('/home');
		}
  }
};
</script>

<style>
input {
  padding: 15px 15px;
  font-size: 1.2em;
  margin-right: 20px;
}
.federated-logins {
  padding: 40px;
  background-color: #eee;
  width: 50%;
  margin: 50px auto;
}
</style>
