<template>
  <q-page>
    <nav-comp style="background-color: #f1ceb5; height: 74px" textColor="#552b15"/>
    <div style="background: #f1ceb5; display: flex; justify-content: center;">
      <img src="assets/pizza.webp" class="smart-img" />
    </div>

 <section class="pizza">
  <search-product category="pizza" button-color="#552b15"  bg-color="#552b15"/>
</section>

    <section class="catalog-section">
  <div class="catalog-image">
    <img src="assets/catalog.webp" alt="Catalog Preview" />
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
$fontColor: #552b15;
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
  color: #552b15;
}

.catalog-content p {
  font-size: 15px;
  line-height: 1.8;
  margin-bottom: 30px;
  color: #552b15;
}

.catalog-btn {
  display: inline-block;
  background: #552b15;
  color: #fff;
  padding: 12px 24px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  transition: all 0.3s ease;
}

.catalog-btn:hover {
  background: #552b15;
}

section.pizza {
  background-color: #f1ceb5;
  padding: 100px 40px;
  margin-top: -6.5px;
}
</style>
