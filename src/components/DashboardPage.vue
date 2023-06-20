<template>
  <div>
    <div class="zaglavlje">
        <div class="header">
            <div class="logo">
                <span class="logo-text">Cargoo</span>
            </div>
        </div>
    </div>
    <main>
        <div class="lijevi">
        </div>
        <div class="desni">
            <h1>Glavna stranica</h1>
            <ul>
                <li><a href="AddUser.vue">Registracija novog vozača</a></li>
                <li><a href="AddCargo.vue">Dodavanje novog tereta</a></li>
                <li><a href="#">Prati dostave/prijevoze</a></li>
                <li><a href="#">Vozači</a></li>
                <li><a href="#">Podrska</a></li>
            </ul>
        </div>
    </main>
  </div>
</template>


<style>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}
body {
  font-family: Arial, sans-serif;
}

.zaglavlje {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
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

nav ul {
  list-style-type: none;
  padding: 0;
}

nav li {
  display: inline;
  margin-right: 20px;
}

nav a {
  color: white;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}

main {
  display: flex;
  padding: 20px;
}

.lijevi {
  width: 20%;
  margin-right: 20px;
  padding: 20px;
  background-color: #1e61a4;
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.desni {
  width: 80%;
  padding: 20px;
  background-color: #10375f;
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
</style>

<script>
export default {
  name: 'DashboardPage'
}
</script>