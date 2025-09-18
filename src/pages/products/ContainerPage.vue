<template>
  <q-page>
    <header>
      <q-carousel v-model="slide" ref="carousel">
        <q-carousel-slide :name="1" img-src="assets/container.png" />
        <template v-slot:control>
          <q-carousel-control position="top" class="text-white rounded-borders">
            <nav-comp />
          </q-carousel-control>

          <q-carousel-control position="bottom" style="max-width: 60%"
            ><div class="containeroverlay">
              <h1><span>ALUM</span> PEYMAN</h1>
              <p>
                The First and Largest Aluminum Foil and Disposable <br />
                Container Manufacturer in Northwest Iran
              </p>
            </div>
          </q-carousel-control>
        </template>
      </q-carousel>
    </header>
    <section class="containerr">
      <search-product category="container" />
    </section>

    <section class="catalog-section">
      <div class="catalog-image">
        <img src="assets/catalog.png" alt="Catalog Preview" />
      </div>

      <div class="catalog-content">
        <h2>CATALOG</h2>
        <p>
          To get a comprehensive overview of our products, including detailed specifications, sizes,
          and various applications, you can download our digital catalog. It provides all the
          necessary information to help you choose the right product for your needs.
        </p>
        <a href="public\assets\catalog-en.pdf" class="catalog-btn">DOWNLOAD CATALOG</a>
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import NavComp from 'src/components/NavComp.vue';
import SearchProduct from 'src/components/SearchProduct.vue';
import { ref } from 'vue';
const slide = ref(1);
</script>

<style lang="scss">
$fontColor: #1e3950;
.navbar ul li a {
  color: $fontColor;
  text-decoration: none;
  padding: 4px 10px;
}
.containeroverlay {
  left: 21%;
  color: #11304c;
  z-index: 10;
}

.containeroverlay h1 {
  font-size: 34px;
  margin: 0;
  font-weight: bold;
  line-height: 1.2;
}

.containeroverlay h1 span {
  display: block;
}

.containeroverlay p {
  margin: 10px 0;
  color: #11304c;
}

@media (max-width: 768px) {
  .containeroverlay {
    top: 10%;
    left: 10%;
    color: #11304c;
    z-index: 10;
    width: 80%;
    position: absolute;
  }

  .containeroverlay h1 {
    font-size: 26px;
    line-height: 1.1;
  }

  .containeroverlay p {
    font-size: 12px;
    margin: 8px 0;
  }
}

@media (max-width: 480px) {
  .containeroverlay {
    top: 8%;
    left: 5%;
    width: 90%;
  }

  .containeroverlay h1 {
    font-size: 16px;
  }

  .containeroverlay p {
    font-size: 12px;
  }
}

.search-box {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #11304c;
  padding: 25px;
  border-radius: 10px;
  margin: 10px auto 100px auto;
  max-width: 1000px;
  min-width: 300px;
  justify-content: center;
}

.search-box input {
  width: 80%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
}

.search-box button {
  background: none;
  border: none;
  margin-left: 10px;
  cursor: pointer;
}

.search-box img {
  width: 16px;
  height: 16px;
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

.pagination {
  text-align: center;
  margin: 30px 0 10px;
}

.pagination a {
  margin: 0 8px;
  text-decoration: none;
  color: #1e3a5f;
  font-weight: bold;
}

.pagination a:hover {
  text-decoration: underline;
}
</style>
