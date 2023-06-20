<template>
  <div>
    <div class="zaglavlje">
      <div class="header">
        <div class="logo">
          <span class="logo-text">Cargoo</span>
        </div>
      </div>
    </div>

    <div class="login">
      <div class="login-container">
        <h2>Login</h2>
        <input type="text" v-model="name" placeholder="Username">
        <input type="password" v-model="password" placeholder="Password">
        <button v-on:click="login">Log In</button>
        <button v-on:click="register">Register</button>
      </div>
    </div>
  </div>
</template>


<style>
.zaglavlje {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}
.header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  padding: 20px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);
}
.logo {
  margin-right: 15px;
}
.logo-text {
  font-size: 24px;
  color: #333;
}

.login-container {
  width: 300px;
  padding: 16px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
input {
  display: block;
  width: 90%;
  padding: 10px;
  margin-top: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
}
button {
  margin-top: 20px;
  padding: 10px;
  width: 48%;
  border-radius: 4px;
  background-color: #007BFF;
  color: white;
  border: none;
}
button:hover {
  background-color: #0056b3;
}

</style>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'LoginPage',
  setup() {
    const router = useRouter();  

    return { router };
  },
  data() {
    return {
      name: '',
      password: ''
    }
  },
  methods: {
    async login() {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.name,
          password: this.password
        })
      });

      if (response.ok) {
        const data = await response.json();
        document.cookie = `loginToken=${data.cookies.loginToken}; path=/`;
        document.cookie = `name=${data.cookies.name}; path=/`;
        document.cookie = `surname=${data.cookies.surname}; path=/`;

        this.router.push('/dashboard');
      } else {
        alert("Neispravno ime ili lozinka");
      }
    },
    register() {
      this.router.push('/register');
    }
  }
}
</script>
import