<!-- <template>
  <div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pasien in pasienList" :key="pasien._id">
          <td>{{ pasien._id }}</td>
          <td>{{ pasien.name }}</td>
          <td>{{ pasien.age }}</td>
          <td>{{ pasien.address }}</td>
          <td>
            <button @click="editPasien(pasien._id)">Edit</button>
            <button @click="deletePasien(pasien._id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Settings',
  data() {
    return {
      pasienList: [],
    };
  },
  mounted() {
    this.getAllPasien();
  },
  methods: {
    getAllPasien() {
      axios
        .get('https://distinct-gold-caridea.cyclic.app/api/pasien')
        .then(response => {
          this.pasienList = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    editPasien(id) {
      const pasien = this.pasienList.find(p => p._id === id);
      if (pasien) {
        // Implement edit logic here, for example, redirect to edit page
        console.log(`Edit Pasien with ID: ${id}`);
        console.log('Redirect to edit page with pasien:', pasien);
      }
    },
    deletePasien(id) {
      const confirmed = confirm('Are you sure you want to delete this pasien?');
      if (confirmed) {
        // Send delete request to the backend
        axios
          .delete(`https://distinct-gold-caridea.cyclic.app/api/pasien/${id}`)
          .then(() => {
            console.log(`Delete Pasien with ID: ${id}`);
            // Refresh the pasien list after successful deletion
            this.getAllPasien();
          })
          .catch(error => {
            console.error(error);
          });
      }
    },
  },
};
</script>

<style>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 8px;
  border-bottom: 1px solid #ddd;
}

button {
  margin-right: 5px;
}
</style> -->
