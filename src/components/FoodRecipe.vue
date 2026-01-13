<script setup>
defineProps(['food'])
defineEmits(['back'])
</script>

<template>
  <div class="page-content">
    <h2 class="section-title">Resep Makanan</h2>
    <div class="recipe-card">
      <div class="recipe-header">
        <img :src="food.image" :alt="food.name" class="recipe-thumb"/>
        <h3>Resep {{ food.name }} Lengkap</h3>
      </div>
      <div class="recipe-body">
        <div class="ingredients-section">
          <h4>Bahan Utama</h4>
          <ul><li v-for="(item, i) in food.ingredients" :key="i">{{ item }}</li></ul>
          <h4>Bumbu Halus</h4>
          <ul><li v-for="(item, i) in food.spices" :key="i">{{ item }}</li></ul>
        </div>
        <div class="steps-section">
          <h4>Cara Memasak</h4>
          <ol><li v-for="(step, i) in food.steps" :key="i">{{ step }}</li></ol>
        </div>
      </div>
      <div class="recipe-footer">
         <button @click="$emit('back')" class="btn-gold">Kembali</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* CSS Resep */
.recipe-card { background: white; padding: 40px; border-radius: 20px; max-width: 900px; margin: 0 auto; }
.recipe-header { display: flex; align-items: center; gap: 20px; margin-bottom: 30px; border-bottom: 1px solid #eee; padding-bottom: 20px; }
.recipe-thumb { width: 100px; height: 100px; object-fit: cover; border-radius: 50%; }
.recipe-body { display: flex; gap: 40px; flex-wrap: wrap; }
.ingredients-section { flex: 1; min-width: 250px; }
.steps-section { flex: 1.5; min-width: 300px; }
.recipe-footer { text-align: right; margin-top: 30px; }
.btn-gold { background-color: #C1A676; color: white; padding: 10px 20px; border-radius: 20px; border: none; cursor: pointer; }
</style>