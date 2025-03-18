/* 
====================================
🌍 1. Global Styles (Gaya Umum)  
====================================
*/
body {
  background-color: #f8f9fa; /* Warna latar belakang utama */
}
body.modal-open {
  /* overflow: auto !important; Pastikan scrolling tetap aktif */
  padding-right: 0 !important; /* Hindari geser layout akibat scrollbar */
}
.modal-open {
  overflow: hidden !important;
  height: 100%;
}

/* 
  ====================================
  🟦 2. Navbar Styles  
  ====================================
  */
.navbar {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  transition: top 0.3s ease-in-out; /* Efek transisi navbar saat scroll */
  background: white; /* Warna dasar navbar */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Efek bayangan navbar */
}

/* Gaya ikon dalam navbar */
.navbar-icons a {
  color: #333; /* Warna ikon navbar */
}

/* 
  ====================================
  📦 3. Card Styles  
  ====================================
  */
.card {
  border-radius: 15px; /* Membuat sudut kartu lebih membulat */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Efek bayangan lembut */
  /* transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out; Efek hover */
}

.card:hover {
  /* transform: translateY(-3px); Efek mengangkat kartu sedikit saat hover */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

/* 
  ====================================
  📊 4. Metric Card Styles  
  ====================================
  */
.metric-card {
  text-align: center; /* Pusatkan teks dalam kartu */
  padding: 20px;
  /* transition: transform 0.2s ease-in-out; */
}

.metric-card:hover {
  /* transform: translateY(-5px); */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

/* Gaya ikon dalam kartu metrik */
.metric-icon {
  font-size: 30px; /* Ukuran ikon lebih besar */
  margin-bottom: 10px;
}

/* Warna latar belakang berdasarkan metrik */
.bg-temperature {
  background: #ffe5e5; /* Warna merah muda untuk suhu */
}

.bg-ppm {
  background: #e5f6ff; /* Warna biru muda untuk PPM */
}

.bg-ph {
  background: #e5ffe5; /* Warna hijau muda untuk pH */
}

.bg-humidity {
  background: #f2e5ff; /* Warna ungu muda untuk kelembaban */
}

/* 
  ====================================
  📈 5. Chart Styles  
  ====================================
  */
#historicalChart,
#realtimeChart {
  max-height: 300px !important; /* Batasi tinggi maksimal grafik */
}

/* Tombol Profesional dengan Highlight Halus */
.btn-primary {
  background-color: #3c5976; /* Warna abu-abu tua yang profesional */
  color: white;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid #343a40; /* Border senada dengan tombol */
  border-radius: 50px; /* Sudut yang lebih halus */
  transition: all 0.3s ease; /* Transisi yang halus */
  cursor: pointer;
  text-transform: uppercase; /* Membuat huruf lebih tegas */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Bayangan halus */
}

/* Efek Hover - Highlight Halus */
.btn-primary:hover {
  background-color: #4a555f; /* Warna abu-abu lebih gelap saat hover */
  border-color: #4a555f; /* Border berubah saat hover */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* Bayangan lebih tajam */
}

/* Efek Aktif (klik) - Menambah Depth */
.btn-primary:active {
  transform: translateY(2px); /* Tombol turun sedikit saat diklik */
  box-shadow: 0 2px 5px rgba(207, 203, 203, 0.15); /* Bayangan lebih halus */
}

/* Fokus dengan Highlight Halus */
.btn-primary:focus {
  outline: none; /* Menghilangkan outline default */
  box-shadow: 0 0 0 0.25rem rgba(132, 148, 164, 0.25); /* Fokus dengan bayangan biru halus */
}

/* Responsif untuk perangkat lebih kecil */
@media (max-width: 768px) {
  .btn-primary {
    padding: 10px 20px; /* Menyesuaikan padding untuk perangkat kecil */
    font-size: 14px; /* Ukuran font sedikit lebih kecil */
  }
}

/* 
====================================
🌙 Dark Mode Styles  
====================================
*/
.dark-mode {
  background-color: #343a40 !important; /* Latar belakang gelap */
  color: #fff !important; /* Warna teks putih */
}

/* Navbar dalam mode gelap */
.dark-mode .navbar {
  background-color: #212529 !important;
  box-shadow: 0 2px 5px rgba(255, 255, 255, 0.1);
}

/* Mengubah warna teks "IoT Dashboard" menjadi putih dalam dark mode */
.dark-mode .navbar .navbar-brand {
  color: #ffffff !important;
}

/* Mengubah warna ikon navbar menjadi putih dalam dark mode */
.dark-mode .navbar-icons a {
  color: #ffffff !important;
}

/* Kartu dalam mode gelap */
.dark-mode .card {
  background-color: #1e1e1e !important;
  color: #ffffff !important;
}

/* Metric card dalam mode gelap */
.dark-mode .metric-card {
  background-color: #333 !important;
  color: #fff !important;
}
/* Mengubah warna teks pada chart dalam Dark Mode */
.dark-mode h6 {
  color: #ffffff !important; /* Mengubah teks judul chart menjadi putih */
}

/* Mengubah warna background canvas saat Dark Mode */
.dark-mode canvas {
  background-color: rgba(
    255,
    255,
    255,
    0.708
  ) !important; /* Warna lebih cerah saat Dark Mode */
}
.dark-mode .lightbox-close {
  color: rgb(253, 4, 4); /* Mengubah warna "X" menjadi putih */
}

.dark-mode .lightbox-close:hover {
  color: #ff4d4d; /* Saat di-hover, jadi merah muda */
}

.lightbox {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 1050; /* Pastikan overlay di atas elemen lain */
}

.lightbox-content {
  background: white;
  padding: 20px;
  width: 70%;
  max-width: 800px; /* Batasan lebar maksimal */
  height: 90%;
  max-height: 1000px; /* Batasan tinggi maksimal */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  border-radius: 10px;
}

.lightbox-close {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 24px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .lightbox-content {
    width: 90%;
    height: 70%;
  }
}

/* Styling tombol toggle */
.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 26px;
}

/* Sembunyikan input checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* Gaya dasar slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc; /* Warna slider default */
  transition: 0.4s;
  border-radius: 34px;
  display: flex;
  align-items: center; /* Tengah vertikal */
  padding: 4px; /* Biar ada ruang */
}

/* Bulatan dalam slider dengan ikon */
.slider:before {
  content: "🌞"; /* Default: Matahari */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px; /* Ukuran ikon */
  height: 26px;
  width: 26px;
  background-color: white;
  color: black;
  border-radius: 50%;
  transition: 0.4s ease;
  position: absolute;
  left: 4px;
}

/* Saat toggle ON (dark mode aktif) */
input:checked + .slider {
  background-color: #444; /* Warna slider gelap */
}

input:checked + .slider:before {
  transform: translateX(26px); /* Gerakkan ke kanan */
  content: "🌙"; /* Ganti ke bulan */
  background-color: #f1c40f; /* Warna kuning */
  color: black;
}
