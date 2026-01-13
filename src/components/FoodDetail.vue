<script setup>
defineProps(['food'])
defineEmits(['viewRecipe', 'back'])
</script>

<template>
  <div class="page-content">
    <h2 class="section-title">Detail Makanan</h2>
    <div class="detail-card">
      <div class="detail-img-container">
        <img :src="food.image" :alt="food.name" />
        <p class="img-caption">{{ food.name }}</p>
      </div>
      <div class="detail-info">
        <p><strong>Asal Provinsi:</strong> {{ food.origin }}</p>
        <div class="info-block">
          <strong>Deskripsi:</strong>
          <p>{{ food.description }}</p>
        </div>
        <div class="info-block fun-fact">
          <strong>Fun Fact:</strong>
          <p>{{ food.funFact }}</p>
        </div>
        <div class="action-buttons">
          <button @click="$emit('viewRecipe')" class="btn-brown">Lihat Resep</button>
          <button @click="$emit('back')" class="btn-gold">Kembali</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* CSS Detail */
.detail-card { background: white; padding: 30px; border-radius: 20px; display: flex; gap: 40px; flex-wrap: wrap; }
.detail-img-container { flex: 1; min-width: 300px; }
.detail-img-container img { width: 100%; border-radius: 10px; }
.img-caption { text-align: center; font-weight: bold; margin-top: 10px; }
.detail-info { flex: 1.5; min-width: 300px; }
.info-block { margin-bottom: 20px; }
.fun-fact { background: #FFF8E1; padding: 15px; border-radius: 10px; border-left: 4px solid #3E2713; }
.action-buttons { display: flex; gap: 15px; margin-top: 30px; }
.btn-brown { background-color: #3E2713; color: white; padding: 10px 20px; border-radius: 20px; border: none; cursor: pointer; }
.btn-gold { background-color: #C1A676; color: white; padding: 10px 20px; border-radius: 20px; border: none; cursor: pointer; }
</style>