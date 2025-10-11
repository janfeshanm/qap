<template>
  <q-page>
  <nav-comp style="background-color: rgb(255, 240, 191); height: 74px" textColor="#11304c" />
    <div class="banner-wrapper">
    <div class="banner">
    <div>
      <h1><span>ALUM</span> PEYMAN</h1>
      <p> The First and Largest Aluminum Foil and Disposable <br /> Container Manufacturer in Northwest Iran </p>
    </div>
    <div><img src="assets/foill.png" style="width: 100%; margin-bottom: -3px" /></div>
</div>
</div>

    <section class="foil">
      <search-product category="foils" />
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
.banner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  background-color: rgb(255, 240, 191);
  gap: 2rem;
max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}
.banner-wrapper {
  background-color: rgb(255, 240, 191);
  width: 100%;
}

.banner h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #11304c
}

.banner p {
  font-size: 1.2rem;
  line-height: 1.6;
    color: #11304c

}

.banner img {
  width: 100%;
  height: auto;
  border-radius: 12px;
}

@media (max-width: 768px) {
  .banner {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .banner img {
    max-width: 80%;
    margin: 0 auto;
  }
}

section.foil {
  background-color: rgb(255, 240, 191);
  padding: 100px 40px;
  margin-top: -4px;
}

.foil-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  padding: 40px 20px;
  max-width: 1100px;
  margin: auto auto;
}

.foil-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  text-align: center;
  padding: 20px;
  transition: transform 0.2s ease;
}

.foil-card:hover {
  transform: translateY(-5px);
}

.foil-card img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 15px;
}

.foil-info {
  font-size: 14px;
  color: #333;
  margin-bottom: 12px;
  line-height: 1.6;
}

.foilbtn {
  display: inline-block;
  background: #1e3a5f;
  color: #fff;
  padding: 10px 18px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 14px;
  transition: 0.3s ease;
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

</style>
