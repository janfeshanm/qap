<template>
  <q-page>
    <nav-comp style="background-color: #ffdddb; height: 74px" textColor="#830002"/>
    <div style="  background-color: #ffdddb; display: flex; justify-content: center;">
<img src="assets/cover.webp" class="smart-img" /></div>

 <section class="foil">
  <search-product category="tablecover" button-color="#830002" bg-color="#830002" />
</section>


    <section class="catalog-section">
      <div class="catalog-image">
        <img src="assets/catalog.webp" alt="Catalog Preview" />
      </div>

      <div class="catalog-content">
        <h2>CATALOG</h2>
        <p>To get a comprehensive overview of our products, including detailed specifications, sizes,
          and various applications, you can download our digital catalog. It provides all the
          necessary information to help you choose the right product for your needs.</p>
        <a href="public\assets\catalog-en.pdf" class="catalog-btn">DOWNLOAD CATALOG</a>
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import NavComp from 'src/components/NavComp.vue';
import SearchProduct from 'src/components/SearchProduct.vue';
</script>

<style lang="scss">
$fontColor: #830002;
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
  color: #830002;
}

.catalog-content p {
  font-size: 15px;
  line-height: 1.8;
  margin-bottom: 30px;
  color: #830002;
}

.catalog-btn {
  display: inline-block;
  background: #830002;
  color: #fff;
  padding: 12px 24px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  transition: all 0.3s ease;
}

.catalog-btn:hover {
  background: #a86363;
}

section.foil {
  background-color: #ffdddb;
  padding: 100px 40px;
  margin-top: -4px;
}

</style>
