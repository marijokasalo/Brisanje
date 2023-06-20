<template>
  <div>
  <div class="zaglavlje">
    <div class="header">
        <div class="logo">
            <span class="logo-text">Cargoo</span>
        </div>
    </div>
  </div>
    <h1>Dodaj novi teret</h1>
    <form id="cargo_Form">
        <label>Ime: <input type="text" id="ime" required></label>
        <label>Prezime: <input type="text" id="Prezime" required></label>
        <label>Naziv firme: <input type="text" id="kompanija" required></label>
        <label>OIB firme: <input type="text" id="oib" required></label>
        <label>Težina tereta: <input type="text" id="tezina" required></label>
        <label>Količina tereta: <input type="text" id="kolicina" required></label>
        <label>Naziv tereta: <input type="text" id="naziv_tereta" required></label>
        <label>Relacija tereta: <input type="text" id="ruta" required></label>
        <label>Tip tereta: <input type="text" id="tip_tereta" required></label>
        <label>Sadržaj tereta: <input type="text" id="sadrzaj_tereta" required></label>
        <label>Način transporta: <input type="text" id="nacin_transporta" required></label>
        <label>Kontakt mail: <input type="text" id="mail" required></label>
        <label>Kontakt telefon: <input type="text" id="broj_telefona" required></label>
        <button>Dodaj teret</button>
    </form>
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
  name: 'AddCargo',
  methods: {
    onSubmit() {
      const broj_narudzbe = 'CARGOO-' + Date.now();
      alert('Teret dodan. Broj narudžbe je: ' + broj_narudzbe);
    }
  }
}
</script>