<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <nav>
      <router-link to="/add-cargoo">Add Cargoo</router-link> |
      <router-link to="/add-user">Add User</router-link> |
      <router-link to="/dashboard">Dashboard Page</router-link> |
      <router-link to="/login">Login Page</router-link>
      <router-link to="/register">Register Page</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav a {
  margin-right: 10px;
  color: #333;  /* black color */
  text-decoration: none;  /* removes underline */
}
nav a:hover {
  color: #007bff;  /* changes color on hover to blue */
}
</style>
