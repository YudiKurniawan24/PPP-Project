<script setup>
// Mengirim sinyal ke App.vue saat tombol ditekan
const emit = defineEmits(['start'])

// Import Logo (Pastikan nama file di folder assets adalah Logo.png dengan L besar)
import logoImg from '@/assets/Logo.png'
</script>

<template>
  <div class="splash-container">
    <div class="splash-content">
      
      <img :src="logoImg" alt="Logo Rasa Nusantara" class="main-logo" />
      
      <h1 class="brand-title">RasaNusantara</h1>
      
      <p class="brand-subtitle">Satu Nusantara Beragam Rasa</p>
      
      <p class="welcome-text">Siap menjelajahi kekayaan kuliner Indonesia?</p>
      
      <button @click="$emit('start')" class="btn-enter">
        masuk
      </button>

    </div>
  </div>
</template>

<style scoped>
/* --- KONTAINER UTAMA (Latar Belakang) --- */
.splash-container {
  position: fixed;       /* Mengunci layar agar tidak bisa di-scroll */
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;         /* Full layar */
  background-color: #3E2713; /* Cokelat Tua (Sesuai Desain) */
  
  /* Flexbox Ajaib (Bikin konten di tengah persis) */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;         /* Pastikan selalu di paling atas */
}

/* --- KONTEN TENGAH --- */
.splash-content {
  text-align: center;    /* Teks rata tengah */
  padding: 20px;
  color: #D4B483;        /* Warna Teks Emas Pudar */
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* --- LOGO --- */
.main-logo {
  width: 250px;          /* Ukuran logo */
  height: auto;
  margin-bottom: 15px;
}

/* --- TYPOGRAPHY --- */
.brand-title {
  font-family: 'Times New Roman', serif; /* Font Serif biar elegan */
  font-size: 3rem;       /* Ukuran besar */
  margin: 0;             /* Hapus jarak bawaan */
  color: #C1A676;        /* Warna Emas */
}

.brand-subtitle {
  font-size: 1.1rem;
  margin-top: 5px;
  margin-bottom: 40px;   /* Jarak jauh ke teks welcome */
  letter-spacing: 1px;   /* Spasi antar huruf biar rapi */
  opacity: 0.9;
}

.welcome-text {
  color: #FFF8E1;        /* Warna Putih Kekuningan (Krem) */
  margin-bottom: 25px;
  font-size: 1rem;
}

/* --- TOMBOL MASUK --- */
.btn-enter {
  background-color: #C1A676; /* Warna Tombol Emas */
  color: #3E2713;            /* Teks Tombol Cokelat */
  font-weight: bold;
  font-size: 1.1rem;
  padding: 12px 50px;        /* Padding: AtasBawah KiriKanan */
  border: none;              /* Hapus garis pinggir */
  border-radius: 8px;        /* Sudut membulat */
  cursor: pointer;           /* Ubah kursor jadi tangan */
  transition: transform 0.2s, background-color 0.2s; /* Animasi halus */
}

/* Efek saat tombol disorot mouse */
.btn-enter:hover {
  background-color: #d4c09a; /* Warna jadi agak terang */
  transform: scale(1.05);    /* Membesar sedikit */
}
</style>