<template>
  <q-page>
  <nav-comp style="background-color: #fff7ee; height: 74px" textColor="#11304c" />
    <div style="background-color: #fff7ee; width: 100%; justify-content: center; display: flex">
      <img src="assets/lid.png" class="smart-img" />
    </div>

    <section class="containerr">
      <search-product category="lids" />
    </section>

    <section class="catalog-section">
  <div class="catalog-image">
    <img src="assets/catalog.png" alt="Catalog Preview" />
  </div>

  <div class="catalog-content">
    <h2>{{ $t('catalogTitle') }}</h2>
    <p>{{ $t('catalogText') }}</p>
<a href="/assets/catalog-en.pdf" class="catalog-btn" target="_blank" rel="noopener noreferrer" > {{ $t('catalogButton') }} </a>
</div>
</section>
  </q-page>
</template>

<script setup lang="ts">
import NavComp from 'src/components/NavComp.vue';
import SearchProduct from 'src/components/SearchProduct.vue';
</script>

<style lang="scss">

$fontColor: #1e3950;
.navbar ul li a {
  color: $fontColor;
  text-decoration: none;
  padding: 4px 10px;
}

.menu-toggle {
     color: $fontColor;
}

.lang-btn {
    color: $fontColor;
}

.smart-img {
  width: 1000px;        
  max-width: 100%;       
  margin-left: auto;
  margin-right: auto;
  padding-left: clamp(10px, 5%, 100px);   
  padding-right: clamp(10px, 5%, 100px); 
  display: block;
  box-sizing: border-box;
}

@media (max-width: 660px) { 
  .smart-img {
    width: 100%;     
    padding: 0 10px;    
  }
}

.catalog-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 140px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
}

@media (max-width: 768px) {
  .catalog-section {
    flex-direction: column;
    padding: 80px 20px;
    gap: 40px;
  }

  .catalog-content h2 {
    font-size: 45px;

    text-align: center;
  }

  .catalog-content p {
    font-size: 14px;
    text-align: center;
  }
}

.catalog-image {
  flex: 1;
}

.catalog-image img {
  width: 100%;
  border-radius: 8px;
}

.catalog-content {
  flex: 1;
}

.catalog-content h2 {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #11304c;
}

.catalog-content p {
  font-size: 15px;
  line-height: 1.8;
  margin-bottom: 30px;
  color: #11304c;
}

.catalog-btn {
  display: inline-block;
  background: #11304c;
  color: #fff;
  padding: 12px 24px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  transition: all 0.3s ease;
}

.catalog-btn:hover {
  background: #11304c;
}

section.containerr {
  background-color: #fff7ee;
  padding: 100px 40px;
}

.container-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  padding: 40px 20px;
  max-width: 1100px;
  margin: auto auto;
}

.container-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  text-align: center;
  padding: 20px;
  transition: transform 0.2s ease;
}

.container-card:hover {
  transform: translateY(-5px);
}

.container-card img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 15px;
}

.container-info {
  font-size: 14px;
  color: #333;
  margin-bottom: 12px;
  line-height: 1.6;
}

.containerbtn {
  display: inline-block;
  background: #1e3a5f;
  color: #fff;
  padding: 10px 18px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 14px;
  transition: 0.3s ease;
}

</style>
