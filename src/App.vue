<script setup>
import { ref } from 'vue'

// --- IMPORT SEMUA KOMPONEN & DATA ---
import { foodsData } from './data/foods.js'
import SplashScreen from './components/SplashScreen.vue'
import HomePage from './components/HomePage.vue'
import FoodDetail from './components/FoodDetail.vue'
import FoodRecipe from './components/FoodRecipe.vue'

// Import Logo (Pastikan file Logo.png ada di src/assets/)
import logoImg from '@/assets/Logo.png'

// --- STATE MANAGEMENT (PENGATUR HALAMAN) ---
const currentPage = ref('splash') // Halaman pertama kali buka adalah 'splash'
const selectedFood = ref(null)
const foods = ref(foodsData)

// --- FUNGSI LOGIKA NAVIGASI ---

// 1. Fungsi PENTING: Pindah dari Splash ke Home
const enterApp = () => {
  console.log("Tombol Masuk Ditekan!") // Cek di Console browser jika ragu
  currentPage.value = 'home'
}

// 2. Fungsi pilih makanan (ke Detail)
const viewDetail = (food) => {
  selectedFood.value = food
  currentPage.value = 'detail'
  window.scrollTo(0, 0) // Scroll ke paling atas
}

// 3. Fungsi lihat resep (ke Resep)
const viewRecipe = () => {
  currentPage.value = 'resep'
  window.scrollTo(0, 0)
}

// 4. Fungsi tombol Kembali ke Home
const goBackToHome = () => {
  selectedFood.value = null
  currentPage.value = 'home'
}

// 5. Fungsi tombol Kembali ke Detail
const goBackToDetail = () => {
  currentPage.value = 'detail'
}
</script>

<template>
  <div class="app-container">
    
    <SplashScreen 
      v-if="currentPage === 'splash'" 
      @start="enterApp" 
    />

    <div v-else class="main-layout">
      
      <header class="main-header">
        <div class="header-content">
          
          <div class="header-logo">
            <img :src="logoImg" alt="Logo" class="header-logo-img" />
          </div>

          <div class="header-text">
            <h1>Temukan Cita Rasa Nusantara</h1>
            <p>Kenali beragam makanan khas dari 38 Provinsi</p>
          </div>

        </div>
      </header>

      <HomePage 
        v-if="currentPage === 'home'" 
        :foods="foods" 
        @selectFood="viewDetail" 
      />

      <FoodDetail 
        v-if="currentPage === 'detail'" 
        :food="selectedFood" 
        @viewRecipe="viewRecipe"
        @back="goBackToHome"
      />

      <FoodRecipe 
        v-if="currentPage === 'resep'" 
        :food="selectedFood" 
        @back="goBackToDetail"
      />

    </div>

  </div>
</template>

/* src/App.vue (Bagian Style) */
<style>
/* --- RESET CSS --- */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #FFF8E1;
  color: #333;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* --- STYLE HEADER --- */
.main-header {
  background-color: #3E2713;
  color: #FFF;
  border-bottom: 5px solid #C1A676;
  padding: 10px 0; /* Padding atas bawah */
  position: relative;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  
  /* Flexbox untuk menengahkan judul */
  display: flex;
  justify-content: center; 
  align-items: center;
  min-height: 100px; /* Tinggi minimal header diperbesar agar muat logo besar */
}

/* --- LOGO (KIRI) --- */
.header-logo {
  position: absolute; /* Mengunci posisi di kiri */
  left: 30px;         /* Jarak dari pinggir kiri */
  top: 50%;           /* Posisikan di tengah vertikal */
  transform: translateY(-50%); /* Trik agar pas di tengah-tengah garis */
}

.header-logo-img {
  width: 130px; /* PERBESAR LOGO DI SINI (Sebelumnya 40-50px) */
  height: auto;
  display: block;
}

/* --- TEKS JUDUL (TENGAH) --- */
.header-text {
  text-align: center;
  z-index: 1; /* Agar teks di atas layer lain */
}

.header-text h1 {
  font-family: 'Times New Roman', serif;
  font-size: 2.2rem;   /* Ukuran font diperbesar sedikit */
  margin-bottom: 5px;
  font-weight: bold;   /* DITEBALKAN (Bold) */
  color: #FFF;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5); /* Efek bayangan agar makin jelas */
}

.header-text p {
  font-size: 1.1rem;
  color: #E0E0E0;      /* Warna putih agak abu biar enak dibaca */
  margin: 0;
  font-weight: 500;    /* DITEBALKAN SEDIKIT (Medium Bold) */
  letter-spacing: 0.5px;
}

/* --- RESPONSIVE (Tampilan HP) --- */
@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    padding-top: 20px;
    padding-bottom: 20px;
    gap: 15px;
  }
  
  .header-logo {
    position: static; /* Di HP, logo tidak dikunci di kiri, tapi di atas */
    transform: none;
  }
  
  .header-logo-img {
    width: 100px; /* Di HP logo agak kecil biar muat */
  }
  
  .header-text h1 {
    font-size: 1.5rem;
  }
}

/* --- GLOBAL CONTAINER --- */
.page-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}
</style>