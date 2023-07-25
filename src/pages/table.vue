<template>
  <div>
    <h3 class="text-2xl font-bold text-left py-2">Tambah Data Pasien</h3>
    <div v-if="!showSuccess" class="max-w-xs mx-auto">
      <form>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="nama">Nama:</label>
          <input type="text" id="nama" v-model="form.nama"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required />
          <p v-if="form.nama === ''" class="text-red-500 text-xs italic">Nama harus diisi</p>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="tempat_lahir">Tempat Lahir:</label>
          <input type="text" id="tempat_lahir" v-model="form.tempat_lahir"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required />
          <p v-if="form.tempat_lahir === ''" class="text-red-500 text-xs italic">Tempat Lahir harus diisi</p>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="tanggal_lahir">Tanggal Lahir:</label>
          <input type="date" id="tanggal_lahir" v-model="form.tanggal_lahir"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required />
          <p v-if="form.tanggal_lahir === ''" class="text-red-500 text-xs italic">Tanggal Lahir harus diisi</p>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="alamat">Alamat:</label>
          <textarea id="alamat" v-model="form.alamat"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="3" required></textarea>
          <p v-if="form.alamat === ''" class="text-red-500 text-xs italic">Alamat harus diisi</p>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="golongan_darah">Golongan Darah:</label>
          <select id="golongan_darah" v-model="form.golongan_darah"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required>
            <option value="" disabled>Pilih Golongan Darah</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="AB">AB</option>
            <option value="O">O</option>
          </select>
          <p v-if="form.golongan_darah === ''" class="text-red-500 text-xs italic">Golongan Darah harus dipilih</p>
        </div>
        <div class="flex justify-end">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button" @click="submitForm">
            Simpan
          </button>
        </div>
      </form>
    </div>
    <div v-else>
      <div class="flex items-center justify-center mt-8">
        <div class="bg-green-100 border-l-4 border-green-500 text-green-700 p-4">
          Data berhasil disimpan!
        </div>
      </div>
      <table class="user-table">
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      form: {
        // no_rm: '',
        nama: '',
        tempat_lahir: '',
        tanggal_lahir: '',
        alamat: '',
        golongan_darah: ''
      },
      showSuccess: false,
      users: []
    };
  },
  methods: {
    submitForm() {
      if (
        // this.form.no_rm === '' ||
        this.form.nama === '' ||
        this.form.tempat_lahir === '' ||
        this.form.tanggal_lahir === '' ||
        this.form.alamat === '' ||
        this.form.golongan_darah === ''
      ) {
        alert('Mohon isi semua kolom yang ada.');
        return;
      }

      // Lakukan tindakan yang diperlukan saat form disubmit
      let datas = {
        // NO_RM: this.form.no_rm,
        nama: this.form.nama,
        tempat_lahir: this.form.tempat_lahir,
        tgl_lahir: this.form.tanggal_lahir,
        alamat: this.form.alamat,
        gol_darah: this.form.golongan_darah
      };
      const token = localStorage.getItem("token")
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      axios //dapat berkomunikasi dengan API
        .post('https://distinct-gold-caridea.cyclic.app/api/pasien', datas, config) //menyimpan
        .then(() => {
          this.showSuccess = true;
          this.fetchUsers();
          this.resetForm();
          setTimeout(() => {
            this.showSuccess = false;
          }, 2000);
        })
        .catch(error => {
          console.error(error);
        });
    },
    fetchUsers() {
      const token = localStorage.getItem("token")
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      axios
        .get('https://distinct-gold-caridea.cyclic.app/api/pasien',config)
        .then(response => {
          this.users = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    resetForm() {
      // this.form.no_rm = '';
      this.form.nama = '';
      this.form.tempat_lahir = '';
      this.form.tanggal_lahir = '';
      this.form.alamat = '';
      this.form.golongan_darah = '';
    }
  },
  mounted() {
    this.fetchUsers();
  }
};
</script>

<style>
/* ... (existing styles) ... */
</style>
