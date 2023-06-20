<template>
  <div>
    <!-- Add your HTML form fields for each of the user's properties -->
    <input type="text" v-model="name" placeholder="Name">
    <input type="text" v-model="surname" placeholder="Surname">
    <input type="date" v-model="dob" placeholder="Date of Birth">
    <input type="text" v-model="oib" placeholder="OIB">
    <input type="email" v-model="email" placeholder="Email">
    <input type="text" v-model="phone" placeholder="Phone">
    <input type="text" v-model="address" placeholder="Address">
    <input type="text" v-model="drivingLicenseNumber" placeholder="Driving License Number">
    <input type="password" v-model="password" placeholder="Password">
    <button v-on:click="register">Register</button>
  </div>
</template>

<style>
  /* Add your CSS styles */
</style>

<script>
export default {
  data() {
    return {
      name: "",
      surname: "",
      dob: "",
      oib: "",
      email: "",
      phone: "",
      address: "",
      drivingLicenseNumber: "",
      password: "",
    };
  },

  methods: {
    async register() {
      let json = {
        name: this.name,
        surname: this.surname,
        dob: this.dob,
        oib: this.oib,
        email: this.email,
        phone: this.phone,
        address: this.address,
        drivingLicenseNumber: this.drivingLicenseNumber,
        password: this.password,
      };

      await fetch('http://localhost:5000/api/register', {
        method: "POST",
        body: JSON.stringify(json),
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((data) => {
              throw new Error(data.message);
            });
          }
        })
        .then((data) => {
          console.log(data);
          alert("Registration successful");
        })
        .catch((error) => {
          console.error("Error:", error.message);
          alert(error.message);
        });
    },
  },
};
</script>
