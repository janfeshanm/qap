<template>
  <q-page>
  <nav-comp style="background-color: rgb(255, 240, 191); height: 74px" textColor="#11304c" />
    <div class="banner-wrapper">
    <div class="banner">
   <div>
  <h1>
    <span>{{ $t('alum') }}</span> {{ $t('peyman') }}
  </h1>
  <p v-html="$t('herooDescription')"></p>
</div>
    <div><img src="assets/foill.webp" style="width: 100%; margin-bottom: -3px" /></div>
</div>
</div>

    <section class="foil">
      <search-product category="foils" button-color="#11304c" />
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
$fontColor: #1e3950;
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

</style>
