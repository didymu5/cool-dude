<template>
	<div class="login-form">
		<div v-if="notification">
			<h3 v-bind:class="{'error-message': notification.isError}">{{notification.message}}</h3>
		</div>
		<h1>Sign up</h1>
		<form v-on:submit.prevent>
			<input type="text" v-model="email" placeholder="Email"> <br>
			<input type="text" v-model="password" placeholder="Password"> <br>
			<input type="text" v-model="confirmPassword" placeholder="Password"> <br>
			<button v-on:click="signUp">Sign up</button>
		</form>
		<div class="federated-logins">
			<button v-on:click="onSigninGoogle">Sign up with Google</button>
		</div>
	</div>
</template>

<script>
import firebase, { auth } from "firebase";
import * as firebaseui from "firebaseui";

export default {
  name: "signup",
  data: () => {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      notification: null
    };
  },
  created: function() {
    const sendToCoolDude = user => {
      this.$router.push({ name: "coolDude", props: { user: user } });
    };
    auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        console.log("user sigend in", user);
        sendToCoolDude(user.email);
      }
    });
  },
  computed: {
    comparePassword() {
      return this.password !== this.confirmPassword
        ? "Passwords do not match"
        : "";
    }
  },
  methods: {
    signUp: function() {
      this.$store.dispatch("signUserUp", {
        email: this.email,
        password: this.password
      });
    },
    onSigninGoogle() {
      this.$store.dispatch("signUserInGoogle");
    },
    onSigninFacebook() {
      this.$store.dispatch("signUserInFacebook");
    },
    // onSigninGithub() {
    //   this.$store.dispatch("signUserInGithub");
    // },
    // onSigninTwitter() {
    //   this.$store.dispatch("signUserInTwitter");
    // },
    onDismissed() {
      this.$store.dispatch("clearError");
    }
  }
};
</script>

<style>
input {
  padding: 15px 15px;
  font-size: 1.2em;
	margin: 15px;
}
.error-message {
  background-color: #ffcccc;
}
.info-message {
  background-color: #eee;
}
.federated-logins {
  padding: 40px;
  background-color: #eee;
  width: 50%;
  margin: 50px auto;
}
</style>
