<template>
    <div>
      <!-- <h1>Halaman Pengaturan</h1> -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button class="accordion-button d-flex" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-git-pull-request me-3"> -->
              <!-- <circle cx="18" cy="18" r="3"></circle> -->
              <!-- <circle cx="6" cy="6" r="3"></circle> -->
              <!-- <path d="M13 6h3a2 2 0 0 1 2 2v7"></path> -->
              <!-- <line x1="6" y1="9" x2="6" y2="21"></line> -->
            <!-- </svg> -->
            <span>Peraturan pada Rumah Sakit Cemara</span>
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#produkLayanan">
          <div class="accordion-body px-md-5">
            <ol class="mb-0 text-start" style="font-size: 14px;"> <!-- Mengubah ukuran teks menjadi 14px -->
              <li>Kerahasiaan Informasi: Sebagai karyawan rekam medis, Anda harus menjaga kerahasiaan informasi medis pasien dengan ketat. Jangan mengungkapkan atau membagikan informasi medis kepada pihak yang tidak berwenang atau tanpa persetujuan pasien. Ini termasuk menghindari pembicaraan yang tidak perlu tentang pasien di tempat umum atau di luar lingkungan kerja.</li>
              <li>Kepatuhan Terhadap Undang-Undang: Pastikan Anda mematuhi semua undang-undang dan peraturan yang berlaku terkait dengan privasi dan keamanan informasi medis, termasuk Undang-Undang Kesehatan dan Keselamatan Pasien. Pelajari dan pahami persyaratan yang berlaku dan jangan melanggar atau mengabaikan aturan-aturan tersebut.</li>
              <li>Akses Terbatas: Hanya gunakan akses yang sesuai dan diperlukan untuk informasi medis pasien. Jangan mencari atau mengakses informasi medis tanpa alasan yang sah atau di luar tugas Anda. Pastikan Anda memiliki izin yang tepat sebelum mengakses informasi pasien dan jangan mengungkapkan kata sandi atau identitas akses Anda kepada orang lain.</li>
              <li>Kebersihan dan Keamanan Data: Pastikan semua dokumen rekam medis disimpan dengan aman dan terlindungi dari akses yang tidak sah. Gunakan sistem keamanan yang ada untuk melindungi informasi elektronik dan fisik dengan mengunci komputer Anda ketika tidak digunakan dan mengamankan dokumen yang dicetak.</li>
              <li>Pelaporan Pelanggaran: Jika Anda mengetahui pelanggaran terhadap kerahasiaan informasi medis atau kebijakan lainnya, segera laporkan kepada atasan Anda atau departemen yang bertanggung jawab. Melaporkan pelanggaran akan membantu memastikan keamanan informasi pasien dan kepatuhan terhadap peraturan yang berlaku.</li>
              <li>Pelatihan dan Sertifikasi: Ikuti pelatihan yang diperlukan dan tingkatkan pengetahuan dan keterampilan Anda dalam mengelola dan melindungi informasi medis. Jika ada sertifikasi yang relevan dengan pekerjaan Anda, usahakan untuk memperolehnya agar Anda dapat menjalankan tugas Anda dengan baik.</li>
              <li>Etika Profesional: Selalu berperilaku dengan etika profesional dalam pekerjaan Anda sebagai karyawan rekam medis. Berlaku sopan dan hormat terhadap pasien, sesama karyawan, dan anggota tim medis lainnya. Jangan menggunakan informasi medis untuk kepentingan pribadi atau merugikan pasien.</li>
              <li>Update Kebijakan dan Prosedur: Tetaplah terinformasi tentang perubahan terbaru dalam kebijakan dan prosedur terkait dengan pengelolaan informasi medis. Pastikan Anda memahami dan mengikuti kebijakan yang diperbarui dan melaksanakan tugas Anda sesuai dengan standar yang ditetapkan.</li>
              <li>Pelaporan Kehilangan atau Pencurian: Jika ada kehilangan atau pencurian informasi medis, segera laporkan kepada atasan Anda. Langkah-langkah yang diperlukan akan diambil untuk melacak, melaporkan, dan meminimalkan dampak kehilangan atau pencurian tersebut.</li>
              <li>Keamanan Fisik dan Cyber: Jagalah keamanan fisik dan cyber di area kerja Anda. Pastikan pintu terkunci, komputer dikunci ketika tidak digunakan, dan hindari membuka tautan atau lampiran yang mencurigakan dalam email atau sumber yang tidak dikenal.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
  name: 'Settings',
  data() {
    return {
      isExpanded: false
    };
  },
  methods: {
    toggleAccordion() {
      this.isExpanded = !this.isExpanded;
    }
  }
};
  </script>
  
  <style scoped>
  .accordion-item {
    margin-bottom: 20px;
  }
  
  .accordion-button {
    background-color: #7ea9e1;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    padding: 10px 15px;
    text-align: left;
    transition: background-color 0.3s ease;
  }
  
  .accordion-button:hover {
    background-color: #598dcc;
  }
  
  .accordion-button[aria-expanded="true"] {
    background-color: #598dcc;
  }
  
  .accordion-button:focus {
    outline: none;
  }
  
  .accordion-header {
    margin-bottom: 0;
  }
  
  .accordion-body {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    transition: height 0.3s ease;
  }
  
  .collapse.show .accordion-body {
    height: auto;
  }
  
  .text-start {
    text-align: left;
  }
  
  li {
    margin-bottom: 10px;
    counter-increment: my-counter; /* Menambahkan nomor pada setiap peraturan */
  }
  
  li::before {
    content: counter(my-counter) ".";
    font-weight: bold;
    margin-right: 5px;
  }
  </style>
  