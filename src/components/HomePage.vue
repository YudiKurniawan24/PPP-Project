<script setup>
// Menerima data 'foods' dari App.vue
defineProps(['foods'])
// Menyiapkan sinyal 'selectFood' agar App.vue tahu makanan mana yang diklik
defineEmits(['selectFood'])
</script>

<template>
  <div class="page-content">
    
    <h2 class="section-title">Katalog Makanan 38 Provinsi</h2>
    
    <div class="food-grid">
      
      <div v-for="food in foods" :key="food.id" class="card">
        
        <div class="card-image-wrapper">
          <img :src="food.image" :alt="food.name" class="card-img" />
        </div>
        
        <div class="card-body">
          <h3>{{ food.name }}</h3>
          <span class="origin">{{ food.origin }}</span>
          
          <p class="short-desc">{{ food.shortDesc }}</p>
          
          <button @click="$emit('selectFood', food)" class="btn-detail">
            Lihat Detail
          </button>
        </div>
        
      </div>

    </div>
  </div>
</template>

<style scoped>
/* --- JUDUL --- */
.section-title {
  text-align: center;
  margin-bottom: 40px;
  font-size: 1.8rem;
  font-weight: bold;
  color: #3E2713; /* Warna Cokelat Tua */
  font-family: 'Segoe UI', sans-serif;
}

/* --- GRID LAYOUT --- */
.food-grid {
  display: grid;
  /* Membuat kolom otomatis (minimal lebar 300px) */
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px; /* Jarak antar kartu */
  padding-bottom: 50px;
}

/* --- KARTU (CARD) --- */
.card {
  background: white;
  border-radius: 16px;       /* Sudut membulat */
  overflow: hidden;          /* Agar gambar tidak keluar dari sudut */
  box-shadow: 0 4px 12px rgba(0,0,0,0.08); /* Bayangan halus */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;    /* Agar isi kartu tersusun ke bawah */
  height: 100%;              /* Agar tinggi kartu seragam */
}

/* Efek saat mouse diarahkan ke kartu */
.card:hover {
  transform: translateY(-5px); /* Naik sedikit */
  box-shadow: 0 8px 20px rgba(0,0,0,0.15); /* Bayangan makin jelas */
}

/* --- GAMBAR --- */
.card-image-wrapper {
  width: 100%;
  height: 220px; /* Tinggi gambar tetap */
  background-color: #f0f0f0;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Agar gambar full mengisi kotak tanpa gepeng */
}

/* --- ISI KARTU --- */
.card-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* Mengisi sisa ruang kosong */
}

.card-body h3 {
  margin: 0;
  font-size: 1.4rem;
  color: #333;
}

.origin {
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 12px;
  display: block;
  font-weight: 500;
}

.short-desc {
  font-size: 0.95rem;
  color: #555;
  line-height: 1.5;
  margin-bottom: 20px;
  flex-grow: 1; /* Mendorong tombol ke bawah */
}

/* --- TOMBOL --- */
.btn-detail {
  background-color: #3E2713; /* Cokelat Tua sesuai Figma */
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 50px; /* Tombol lonjong */
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  width: fit-content; /* Lebar menyesuaikan teks */
}

.btn-detail:hover {
  background-color: #5a3e23; /* Sedikit lebih terang saat hover */
}
</style>