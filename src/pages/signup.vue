<template>
  <div class="signup-container">
    <h1 class="signup-title">Daftar</h1>
    <form @submit.prevent="signup" class="signup-form">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="post.username" required>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="post.password" required>
      </div>
      <button type="submit">Daftar</button>
      <p class="signup-link">Sudah memiliki akun? <router-link to="/home">Masuk</router-link></p>
    </form>
  </div>
</template>
  
<script>
import axios from 'axios';

export default {
  data() {
    return {
      post: {
        username: '',
        password: ''
      },
      response: null,
      error: null
    };
  },
  methods: {
    signup() {
      if (this.post.username === '' || this.post.password === '') {
        alert('Isi Username dan Password');
      } else if (this.post.password.length < 8) {
        alert('Password harus lebih dari 8 karakter');
      } else {
        axios.post('https://distinct-gold-caridea.cyclic.app/api/registrasi', this.post)
          .then(response => {
            alert('Registrasi berhasil');
            this.response = response;
          })
          .catch(error => {
            alert('Registrasi Gagal');
            this.error = error;
          });
      }
    }
  }
};
</script>
  
<style scoped>
.signup-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url('../assets/hospital.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.signup-title {
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
  margin-bottom: 20px;
}

.signup-form {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 40px;
  border: 1px solid #ffffff;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 4px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #000000;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #000000;
  border-radius: 4px;
  background-color: #f5f5f5;
}

button[type="submit"] {
  padding: 12px 24px;
  font-size: 16px;
  background-color: #3072a1;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
