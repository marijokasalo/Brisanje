<template>
  <div>
    <div class="zaglavlje">
    <div class="header">
        <div class="logo">
            <span class="logo-text">Cargoo</span>
        </div>
    </div>
</div>

<div class="registracija_box">
  <h1>Registracija novog korisnika</h1>

  <form id="registracija">
      <label for="ime">Ime:</label><br>
      <input type="text" id="ime" name="ime"><br>

      <label for="prezime">Prezime:</label><br>
      <input type="text" id="prezime" name="prezime"><br>

      <label for="datum_rodenja">Datum rođenja:</label><br>
      <input type="date" id="datum_rodenja" name="datum_rodenja"><br>

      <label for="oib">OIB:</label><br>
      <input type="text" id="oib" name="oib"><br>

      <label for="email">Email:</label><br>
      <input type="text" id="email" name="email"><br>

      <label for="broj_telefona">Broj telefona:</label><br>
      <input type="text" id="broj_telefona" name="broj_telefona"><br>

      <label for="adresa">Adresa:</label><br>
      <input type="text" id="adresa" name="adresa"><br>

      <label for="vozacka">Kategorije vozacke dozvole:</label><br>
      <input type="text" id="vozacka" name="vozacka"><br>

      <label for="password">Odaberite lozinku:</label><br>
      <input type="text" id="password" name="password"><br>

      <button type="registriraj">Registracija</button>
  </form>
</div>
  </div>
</template>


<style>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
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
  background-color: #f8f9fa;
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

form {
  background-color: #f8f9fa;
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 600px;
  margin: auto;
}

form input[type="text"], form select {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

form button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

form button:hover {
  background-color: #0056b3;
}
</style>

<script>
export default {
  name: 'AddUser',
  methods: {
    onSubmit() {
      console.log("Registracija zaprimljena");
    }
  }
}
</script>