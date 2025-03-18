// Toggle Dark Mode
// Menambahkan event listener untuk tombol Dark Mode
// Mengaktifkan atau menonaktifkan mode gelap pada body
document
  .getElementById("toggleDarkMode")
  .addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });

// Inisialisasi grafik menggunakan Chart.js
const ctxHistorical = document
  .getElementById("historicalChart")
  .getContext("2d");
const ctxRealtime = document.getElementById("realtimeChart").getContext("2d");

// Data Dummy untuk Historical Trends
const historicalChart = new Chart(ctxHistorical, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Temperature (°C)",
        data: [22, 24, 23, 25, 26, 24],
        borderColor: "red",
        backgroundColor: "rgba(255, 0, 0, 0.1)",
        fill: true,
      },
      {
        label: "Humidity (%)",
        data: [60, 62, 64, 63, 61, 65],
        borderColor: "blue",
        backgroundColor: "rgba(0, 0, 255, 0.1)",
        fill: true,
      },
      {
        label: "pH Level",
        data: [6.5, 7.0, 6.8, 7.2, 7.1, 7.3],
        borderColor: "green",
        backgroundColor: "rgba(0, 128, 0, 0.1)",
        fill: true,
      },
      {
        label: "PPM",
        data: [400, 420, 450, 480, 460, 490],
        borderColor: "purple",
        backgroundColor: "rgba(128, 0, 128, 0.1)",
        fill: true,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
});

// Data Dummy untuk Real-time Monitoring (Diupdate Setiap 2 Detik)
const realtimeChart = new Chart(ctxRealtime, {
  type: "line",
  data: {
    labels: Array.from({ length: 10 }, (_, i) => `${i * 2}s`),
    datasets: [
      {
        label: "Temperature (°C)",
        data: Array.from({ length: 10 }, () =>
          (Math.random() * (30 - 20) + 20).toFixed(1)
        ),
        borderColor: "red",
        backgroundColor: "rgba(255, 0, 0, 0.1)",
        fill: true,
      },
      {
        label: "Humidity (%)",
        data: Array.from({ length: 10 }, () =>
          (Math.random() * (80 - 50) + 50).toFixed(1)
        ),
        borderColor: "blue",
        backgroundColor: "rgba(0, 0, 255, 0.1)",
        fill: true,
      },
      {
        label: "pH Level",
        data: Array.from({ length: 10 }, () =>
          (Math.random() * (8 - 6) + 6).toFixed(2)
        ),
        borderColor: "green",
        backgroundColor: "rgba(0, 128, 0, 0.1)",
        fill: true,
      },
      {
        label: "PPM",
        data: Array.from({ length: 10 }, () =>
          Math.floor(Math.random() * (600 - 300) + 300)
        ),
        borderColor: "purple",
        backgroundColor: "rgba(128, 0, 128, 0.1)",
        fill: true,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
});

// Simulasi Data Real-time (Update Setiap 2 Detik)
setInterval(() => {
  const newTime = `${
    parseInt(realtimeChart.data.labels[realtimeChart.data.labels.length - 1]) +
    2
  }s`;

  // Geser data ke kiri jika lebih dari 10 data
  if (realtimeChart.data.labels.length >= 10) {
    realtimeChart.data.labels.shift();
    realtimeChart.data.datasets.forEach((dataset) => dataset.data.shift());
  }

  realtimeChart.data.labels.push(newTime);
  realtimeChart.data.datasets[0].data.push(
    (Math.random() * (30 - 20) + 20).toFixed(1)
  ); // Temperature
  realtimeChart.data.datasets[1].data.push(
    (Math.random() * (80 - 50) + 50).toFixed(1)
  ); // Humidity
  realtimeChart.data.datasets[2].data.push(
    (Math.random() * (8 - 6) + 6).toFixed(2)
  ); // pH Level
  realtimeChart.data.datasets[3].data.push(
    Math.floor(Math.random() * (600 - 300) + 300)
  ); // PPM

  realtimeChart.update();
}, 2000);

// Fungsi untuk menampilkan alert berdasarkan kondisi terbaru
function updateAlerts() {
  const alertsContainer = document.getElementById("alertsContainer");
  alertsContainer.innerHTML = ""; // Hapus alert lama

  const temp = parseFloat(realtimeChart.data.datasets[0].data.slice(-1)[0]); // Temperature
  const humidity = parseFloat(realtimeChart.data.datasets[1].data.slice(-1)[0]); // Humidity
  const phLevel = parseFloat(realtimeChart.data.datasets[2].data.slice(-1)[0]); // pH Level
  const ppm = parseInt(realtimeChart.data.datasets[3].data.slice(-1)[0]); // PPM

  // Cek batas kondisi untuk alert
  if (temp > 26) {
    alertsContainer.innerHTML += `<div class="alert alert-danger">🔥 Temperature exceeded threshold (${temp}°C)</div>`;
  }
  if (ppm > 500) {
    alertsContainer.innerHTML += `<div class="alert alert-warning">⚠️ PPM level approaching critical value (${ppm})</div>`;
  }
  if (phLevel < 6.5 || phLevel > 7.5) {
    alertsContainer.innerHTML += `<div class="alert alert-warning">⚠️ pH Level out of safe range (${phLevel})</div>`;
  }
  if (humidity < 55) {
    alertsContainer.innerHTML += `<div class="alert alert-info">💧 Humidity is getting low (${humidity}%)</div>`;
  }

  // Jika tidak ada alert, tampilkan pesan default
  if (alertsContainer.innerHTML === "") {
    alertsContainer.innerHTML = `<div class="alert alert-success">✅ All parameters are normal</div>`;
  }
}

// Panggil updateAlerts setiap 2 detik bersamaan dengan pembaruan data real-time
setInterval(updateAlerts, 2000);

// Simpan nilai sebelumnya untuk menghitung perubahan
let prevTemp = 24.5;
let prevPPM = 450;
let prevPH = 7.2;
let prevHumidity = 65;

function updateMetricCards() {
  // Ambil nilai terbaru dari data real-time chart
  const newTemp = parseFloat(realtimeChart.data.datasets[0].data.slice(-1)[0]);
  const newPPM = parseInt(realtimeChart.data.datasets[3].data.slice(-1)[0]);
  const newPH = parseFloat(realtimeChart.data.datasets[2].data.slice(-1)[0]);
  const newHumidity = parseFloat(
    realtimeChart.data.datasets[1].data.slice(-1)[0]
  );

  // Hitung perubahan
  const tempDiff = (newTemp - prevTemp).toFixed(1);
  const ppmDiff = newPPM - prevPPM;
  const phDiff = (newPH - prevPH).toFixed(2);
  const humidityDiff = (newHumidity - prevHumidity).toFixed(1);

  // Update nilai pada card
  document.getElementById("tempValue").innerText = `${newTemp}°C`;
  document.getElementById("ppmValue").innerText = newPPM;
  document.getElementById("phValue").innerText = newPH;
  document.getElementById("humidityValue").innerText = `${newHumidity}%`;

  // Update indikator perubahan
  updateChangeIndicator("tempChange", tempDiff, "°C");
  updateChangeIndicator("ppmChange", ppmDiff, "");
  updateChangeIndicator("phChange", phDiff, "");
  updateChangeIndicator("humidityChange", humidityDiff, "%");

  // Simpan nilai terbaru sebagai nilai sebelumnya untuk iterasi berikutnya
  prevTemp = newTemp;
  prevPPM = newPPM;
  prevPH = newPH;
  prevHumidity = newHumidity;
}

function updateChangeIndicator(elementId, diff, unit) {
  const element = document.getElementById(elementId);

  if (diff > 0) {
    element.innerText = `↑ ${diff}${unit}`;
    element.className = "text-success"; // Warna hijau untuk naik
  } else if (diff < 0) {
    element.innerText = `↓ ${Math.abs(diff)}${unit}`;
    element.className = "text-danger"; // Warna merah untuk turun
  } else {
    element.innerText = `- 0${unit}`;
    element.className = "text-muted"; // Warna abu-abu jika tidak berubah
  }
}

// Jalankan update setiap 2 detik bersamaan dengan pembaruan data real-time
setInterval(updateMetricCards, 2000);

// Ambil elemen dropdown
const timeRangeSelect = document.getElementById("timeRange");

// Fungsi untuk mendapatkan jumlah hari dalam bulan tertentu
function getDaysInMonth() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // Bulan dalam JavaScript dimulai dari 0 (Januari = 0)
  return new Date(year, month, 0).getDate(); // Mengambil jumlah hari dalam bulan tersebut
}

// Fungsi untuk memperbarui data grafik Historical Trends berdasarkan rentang waktu
function updateHistoricalChart(range) {
  let labels = [];
  let tempData = [];
  let humidityData = [];
  let phData = [];
  let ppmData = [];

  if (range === "month") {
    // Data untuk bulan ini (jumlah hari disesuaikan dengan bulan saat ini)
    const daysInMonth = getDaysInMonth();
    labels = Array.from({ length: daysInMonth }, (_, i) => `Day ${i + 1}`);
    tempData = Array.from(
      { length: daysInMonth },
      () => Math.floor(Math.random() * 5) + 22
    );
    humidityData = Array.from(
      { length: daysInMonth },
      () => Math.floor(Math.random() * 10) + 55
    );
    phData = Array.from({ length: daysInMonth }, () =>
      (Math.random() * 1 + 6.5).toFixed(1)
    );
    ppmData = Array.from(
      { length: daysInMonth },
      () => Math.floor(Math.random() * 100) + 400
    );
  } else if (range === "7d") {
    // Data untuk 7 hari terakhir
    labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    tempData = [24, 25, 26, 27, 26, 25, 24];
    humidityData = [61, 62, 63, 64, 65, 63, 61];
    phData = [6.8, 7.0, 7.1, 7.2, 7.3, 7.0, 6.9];
    ppmData = [420, 440, 460, 480, 470, 460, 450];
  } else if (range === "24h") {
    // Data untuk 24 jam terakhir
    labels = ["00:00", "06:00", "12:00", "18:00", "00:00"];
    tempData = [24, 25, 26, 27, 25];
    humidityData = [62, 63, 64, 65, 63];
    phData = [7.0, 7.2, 7.1, 6.9, 7.0];
    ppmData = [430, 450, 470, 460, 440];
  } else if (range === "1h") {
    // Data untuk 1 jam terakhir (setiap 10 menit)
    labels = ["00:00", "00:10", "00:20", "00:30", "00:40", "00:50", "01:00"];
    tempData = [25, 25.5, 26, 26.5, 27, 26.5, 26];
    humidityData = [63, 63.5, 64, 64.5, 65, 64.5, 64];
    phData = [7.1, 7.0, 6.9, 7.0, 7.1, 7.0, 6.9];
    ppmData = [440, 445, 450, 455, 460, 455, 450];
  }

  // Perbarui data chart dengan data yang telah dikumpulkan
  historicalChart.data.labels = labels;
  historicalChart.data.datasets[0].data = tempData;
  historicalChart.data.datasets[1].data = humidityData;
  historicalChart.data.datasets[2].data = phData;
  historicalChart.data.datasets[3].data = ppmData;
  historicalChart.update();
}

// Setel dropdown ke "Last 7 Days" saat pertama kali halaman dimuat
timeRangeSelect.value = "7d";

// Tambahkan event listener ke dropdown agar data diperbarui saat pengguna memilih opsi baru
timeRangeSelect.addEventListener("change", function () {
  updateHistoricalChart(this.value);
});

// Panggil pertama kali untuk menampilkan data awal (default: last 7 days)
updateHistoricalChart("7d");

// document.addEventListener("DOMContentLoaded", function () {
//   const tempModal = document.getElementById("tempModal");

//   tempModal.addEventListener("hidden.bs.modal", function () {
//     document.body.style.overflow = "auto"; // Pastikan scroll tetap berfungsi
//     document.body.style.paddingRight = "0px"; // Reset padding agar layout tidak geser
//   });
// });

// //Modal Temperature
// document.getElementById("tempBtn").addEventListener("click", function () {
//   fetch("temperature.html") // Mengambil konten temperature.html
//     .then((response) => response.text())
//     .then((data) => {
//       document.getElementById("modalContent").innerHTML = data; // Masukkan konten ke dalam modal
//       var tempModal = new bootstrap.Modal(document.getElementById("tempModal")); // Buat instance modal
//       tempModal.show(); // Tampilkan modal
//     })
//     .catch((error) => console.error("Error loading temperature.html:", error));
// });

//overlay iframe temperature
// Event listener untuk tombol Temperature
document.getElementById("tempBtn").addEventListener("click", function () {
  document.getElementById("tempIframe").src = "temperature.html";
  document.getElementById("lightboxTemp").style.display = "flex";
  document.body.style.overflow = "hidden"; // Mencegah scroll saat lightbox terbuka
});

// Event listener untuk tombol PPM
document.getElementById("ppmBtn").addEventListener("click", function () {
  document.getElementById("ppmIframe").src = "ppm.html";
  document.getElementById("lightboxPPM").style.display = "flex";
  document.body.style.overflow = "hidden"; // Mencegah scroll saat lightbox terbuka
});

// Event listener untuk tombol PH
document.getElementById("phBtn").addEventListener("click", function () {
  document.getElementById("phIframe").src = "ph.html";
  document.getElementById("lightboxPH").style.display = "flex";
  document.body.style.overflow = "hidden"; // Mencegah scroll saat lightbox terbuka
});

// Event listener untuk tombol HUMIDITY
document.getElementById("humidityBtn").addEventListener("click", function () {
  document.getElementById("humidityIframe").src = "humidity.html";
  document.getElementById("lightboxHumidity").style.display = "flex";
  document.body.style.overflow = "hidden"; // Mencegah scroll saat lightbox terbuka
});

// Fungsi untuk menutup lightbox berdasarkan ID
function closeLightbox(lightboxId) {
  document.getElementById(lightboxId).style.display = "none";
  document.body.style.overflow = ""; // Mengembalikan scroll setelah lightbox ditutup
}

// Menutup lightbox jika klik di luar area iframe
document
  .getElementById("lightboxTemp")
  .addEventListener("click", function (event) {
    if (event.target === this) {
      // Hanya jika klik di area lightbox, bukan iframe
      closeLightbox("lightboxTemp");
    }
  });

document
  .getElementById("lightboxPPM")
  .addEventListener("click", function (event) {
    if (event.target === this) {
      closeLightbox("lightboxPPM");
    }
  });

document
  .getElementById("lightboxPH")
  .addEventListener("click", function (event) {
    if (event.target === this) {
      closeLightbox("lightboxPH");
    }
  });

document
  .getElementById("lightboxHumidity")
  .addEventListener("click", function (event) {
    if (event.target === this) {
      closeLightbox("lightboxHumidity");
    }
  });

// document.getElementById("tempBtn").addEventListener("click", function () {
//   alert("Checking Temperature level...");
//   // window.location.href = "https://your-ppm-page.com";
// });

// document.getElementById("ppmBtn").addEventListener("click", function () {
//   alert("Checking PPM level...");
//   // window.location.href = "https://your-ppm-page.com";
// });

// document.getElementById("phBtn").addEventListener("click", function () {
//   alert("Checking pH level...");
//   // window.location.href = "https://your-ph-page.com";
// });

// document.getElementById("humidityBtn").addEventListener("click", function () {
//   alert("Checking humidity level...");
//   // window.location.href = "https://your-humidity-page.com";
// });
