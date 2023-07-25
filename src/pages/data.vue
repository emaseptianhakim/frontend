<template>
  <div>
    <div class="table-container">
      <table class="user-table">
        <!-- Table header -->
        <thead>
          <tr>
            <th>NO Rekam Medis</th>
            <th>Nama</th>
            <th>Tempat Lahir</th>
            <th>Tanggal Lahir</th>
            <th>Alamat</th>
            <th>Golongan Darah</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user._id">
            <td>{{ user._id }}</td>
            <td>{{ user.nama }}</td>
            <td>{{ user.tempat_lahir }}</td>
            <td>{{ formatDate(user.tgl_lahir) }}</td>
            <td>{{ user.alamat }}</td>
            <td>{{ user.gol_darah }}</td>
            <td>
              <button @click="editUser(user)" class="edit-button">Edit</button>
              <button @click="deleteUser(user)" class="delete-button">Hapus</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Form Pop-up -->
    <div v-if="selectedUser" class="form-popup">
      <div class="form-container">
        <h2>Edit Data Pasien</h2>
        <form @submit.prevent="saveUser">
          <div>
            <label for="NO_RM">NO Rekam Medis</label>
            <input type="text" v-model="selectedUser._id" disabled>
          </div>
          <div>
            <label for="nama">Nama</label>
            <input type="text" v-model="selectedUser.nama">
          </div>
          <div>
            <label for="tempat_lahir">Tempat Lahir</label>
            <input type="text" v-model="selectedUser.tempat_lahir">
          </div>
          <div>
            <label for="tgl_lahir">Tanggal Lahir</label>
            <input type="date" v-model="selectedUser.tgl_lahir">
          </div>
          <div>
            <label for="alamat">Alamat</label>
            <input type="text" v-model="selectedUser.alamat">
          </div>
          <div>
            <label for="gol_darah">Golongan Darah</label>
            <select v-model="selectedUser.gol_darah">
              <option value="">Pilih Golongan Darah</option>
              <option value="A">A</option>
              <option value="AB">AB</option>
              <option value="O">O</option>
            </select>
          </div>
          <div>
            <button type="submit" class="save-button">Simpan</button>
            <button @click="cancelEdit" class="cancel-button">Batal</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';

export default {
  data() {
    return {
      users: [],
      selectedUser: null,
    };
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      axios
        .get('https://distinct-gold-caridea.cyclic.app/api/pasien') //mengambil
        .then((response) => {
          this.users = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    formatDate(dateString) {
      return moment(dateString).format('YYYY-MM-DD');
    },
    editUser(user) {
      this.selectedUser = { ...user };
    },
    saveUser() {
      // Ubah format tanggal sebelum mengirimkan permintaan PUT
      const formattedDate = moment(this.selectedUser.tgl_lahir).format('YYYY-MM-DD');
      this.selectedUser.tgl_lahir = formattedDate;
      const token = localStorage.getItem("token");
      const config1 = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      axios 
        .put(`https://distinct-gold-caridea.cyclic.app/api/pasien/${this.selectedUser._id}`, this.selectedUser, config1) //mengedit
        .then(() => {
          this.selectedUser = null; // Menghapus data pengguna yang sedang diedit
          this.fetchUsers(); // Mengambil ulang data pengguna dari server
        })
        .catch((error) => {
          console.error(error);
        });
    },
    cancelEdit() {
      this.selectedUser = null;
    },
    deleteUser(user) {
      const token = localStorage.getItem("token");
      const config1 = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      if (confirm('Apakah anda yakin akan menghapus data ini?')) {
        axios
          .delete(`https://distinct-gold-caridea.cyclic.app/api/pasien/${user._id}`,config1)
          .then(() => {
            this.fetchUsers();
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
  },
};
</script>

<style>
.table-container {
  overflow-x: auto;
}

.user-table {
  width: 100%;
  border-collapse: collapse;
}

.user-table th,
.user-table td {
  padding: 8px;
  border: 1px solid #ddd;
}

.user-table th {
  background-color: #f2f2f2;
  font-weight: bold;
  text-align: left;
}

.user-table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

.user-table tbody tr:hover {
  background-color: #e9e9e9;
}

.edit-button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 4px;
}

.edit-button:hover {
  background-color: #45a049;
}

.delete-button {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 4px;
}

.delete-button:hover {
  background-color: #d32f2f;
}

.form-popup {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.form-container {
  background-color: white;
  padding: 20px;
  border-radius: 4px;
}

.form-container h2 {
  margin-bottom: 10px;
}

.form-container div {
  margin-bottom: 10px;
}

.form-container label {
  font-weight: bold;
}

.form-container input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.form-container .save-button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 4px;
}

.form-container .save-button:hover {
  background-color: #45a049;
}

.form-container .cancel-button {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 4px;
}

.form-container .cancel-button:hover {
  background-color: #d32f2f;
}
</style>