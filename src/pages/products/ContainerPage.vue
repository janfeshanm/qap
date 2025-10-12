<template>
  <q-page>
    <nav-comp style="background-color: rgb(217, 234, 248); height: 74px" textColor="#11304c" />
    <div style="  background-color: rgb(217, 234, 248); display: flex; justify-content: center;">
<img src="assets/container.png" class="smart-img" /></div>

    <section class="containerr">
      <search-product category="container" button-color="#11304c" />
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
  background-color: rgb(217, 234, 248);
  padding: 100px 40px;
  margin-top: -4px;
}

</style>
