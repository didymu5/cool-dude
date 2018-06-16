<template>
	<div class="login-form">
		<h1>Login</h1>
		<form action="">
		<input type="text" placeholder="Email">
		<input type="text" placeholder="Password">
		</form>
	</div>
</template>

<script>
import auth from 'firebase/auth'
console.log(auth)

export default {
  name: 'login',
}
</script>

<style>
input {
	padding: 15px 15px;
	font-size: 1.2em;
	margin-right: 20px;
}
</style>
